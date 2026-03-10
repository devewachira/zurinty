import os
import re

portfolio_images = [
    "/assets/img/portfolio/1.png",
    "/assets/img/portfolio/2.png",
    "/assets/img/portfolio/3.png",
    "/assets/img/portfolio/4.png",
    "/assets/img/portfolio/co1.png",
    "/assets/img/portfolio/co2.png",
    "/assets/img/portfolio/dr1.png",
    "/assets/img/portfolio/dr2.png",
    "/assets/img/portfolio/01.png",
    "/assets/img/portfolio/10.png",
]

pages_dir = "frontend/src/pages"
files_to_check = [f for f in os.listdir(pages_dir) if f.endswith(".tsx")]

img_idx = 0

for file_name in files_to_check:
    file_path = os.path.join(pages_dir, file_name)
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    if "/proje/" in content:
        # We will use re.sub with a function to replace each occurrence
        def repl(match):
            global img_idx
            new_img = portfolio_images[img_idx % len(portfolio_images)]
            img_idx += 1
            return 'src="' + new_img + '"'
            
        new_content = re.sub(r'src="/proje/[^"]+"', repl, content)
        
        # also check if there are raw '/proje/' without src="
        # like icon: '/proje/...
        def repl_icon(match):
            global img_idx
            new_img = portfolio_images[img_idx % len(portfolio_images)]
            img_idx += 1
            return "icon: '" + new_img + "'"
            
        new_content = re.sub(r"icon:\s*'/proje/[^']+'", repl_icon, new_content)
        
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(new_content)
        print(f"Updated {file_name}")

