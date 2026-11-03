"""TSAI logo 处理：裁切、去白底、生成深/浅两套透明版本 + favicon + OG 图。"""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFilter

d = Path(__file__).parent
src = Image.open(d / "tsai-logo.png").convert("RGB")

# 1) 以亮度判断字迹，裁到内容边界（留一点内边距）
gray = src.convert("L")
mask = gray.point(lambda v: 255 if v < 128 else 0)
bbox = mask.getbbox()
print("bbox:", bbox, "size:", src.size)

pad = 8
x0, y0, x1, y1 = bbox
x0, y0 = max(0, x0 - pad), max(0, y0 - pad)
x1, y1 = min(src.width, x1 + pad), min(src.height, y1 + pad)
crop = src.crop((x0, y0, x1, y1))

# 2) alpha = 反亮度（白底透明，字迹不透明）；抗锯齿边缘自然过渡
l = crop.convert("L")
alpha = l.point(lambda v: 255 - v)

# 统一缩放到 3 倍屏幕也够用的宽度（宽 1200）
target_w = 1200
ratio = target_w / crop.width
size = (target_w, round(crop.height * ratio))
alpha = alpha.resize(size, Image.LANCZOS)

def build(color):
    img = Image.new("RGBA", size, color + (0,))
    img.putalpha(alpha)
    return img

build((12, 20, 36)).save(d / "tsai-logo-ink.png", optimize=True)     # 浅色主题用：近黑
build((255, 255, 255)).save(d / "tsai-logo-paper.png", optimize=True)  # 深色主题用：白

# 3) favicon：渐变圆角方块 + 白色字标（只取 "T" 附近，方形构图更清晰）
fav = Image.new("RGBA", (512, 512), (0, 0, 0, 0))
grad = Image.new("RGBA", (512, 512))
gd = ImageDraw.Draw(grad)
c1, c2, c3 = (47, 111, 237), (30, 150, 210), (0, 166, 166)
for y in range(512):
    t = y / 511
    for_x = (
        round(c1[0] + (c3[0] - c1[0]) * t),
        round(c1[1] + (c3[1] - c1[1]) * t),
        round(c1[2] + (c3[2] - c1[2]) * t),
    )
    gd.line([(0, y), (512, y)], fill=for_x + (255,))

rounded = Image.new("L", (512, 512), 0)
ImageDraw.Draw(rounded).rounded_rectangle([0, 0, 511, 511], radius=116, fill=255)
fav.paste(grad, (0, 0), rounded)

glyph = build((255, 255, 255))
gw = 300
gh = round(glyph.height * gw / glyph.width)
glyph = glyph.resize((gw, gh), Image.LANCZOS)
fav.alpha_composite(glyph, ((512 - gw) // 2, (512 - gh) // 2))
fav.save(d / "favicon.png", optimize=True)
fav.resize((180, 180), Image.LANCZOS).save(d / "apple-touch-icon.png", optimize=True)

# 4) OG 分享图 1200x630
og = Image.new("RGB", (1200, 630), (8, 12, 22))
od = ImageDraw.Draw(og)
for i in range(630):
    t = i / 629
    od.line([(0, i), (1200, i)], fill=(round(9 + 10 * t), round(14 + 16 * t), round(26 + 26 * t)))
glow = Image.new("RGBA", (1200, 630), (0, 0, 0, 0))
ImageDraw.Draw(glow).ellipse([700, -260, 1400, 380], fill=(47, 111, 237, 90))
glow = glow.filter(ImageFilter.GaussianBlur(110))
og = Image.alpha_composite(og.convert("RGBA"), glow)
mark = build((255, 255, 255)).resize((620, round(gh * 620 / gw)), Image.LANCZOS)
og.alpha_composite(mark, ((1200 - 620) // 2, (630 - mark.height) // 2 - 30))
og.convert("RGB").save(d / "og-cover.png", optimize=True)

for f in sorted(d.glob("*.png")):
    im = Image.open(f)
    print(f"{f.name:26} {im.size} {f.stat().st_size // 1024} KB")
