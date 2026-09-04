# Jiongfan Yang Homepage

Static personal homepage for GitHub Pages.

## Local preview

From this directory, run:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

The page is dependency-free. The typefaces and optional Lucide icons are loaded from CDNs when a network connection is available; the core content, portrait, and paper figures are local.

## GitHub Pages

In the repository settings, open **Pages**, choose **Deploy from a branch**, and select `main` with the `/(root)` folder. Do not add a `CNAME` file: the existing `w434.cn` blog remains attached to the separate user-site repository.
