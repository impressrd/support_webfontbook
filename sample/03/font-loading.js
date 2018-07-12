const font = new FontFace('Inu Sans CJK JP', 'url(InuSansCJKjp-Regular.woff2)');

font.load().then(font => {
  document.fonts.add(font);
  document.body.style.fontFamily = `'Noto Sans', 'Noto Sans CJK JP', 'Inu Sans CJK JP', sans-serif`;
});

font.ready().then(fontFaceSet => {
  console.log(fontFaceSet.check('Inu Sans CJK JP'));
});
