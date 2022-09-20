# 小技巧

## 本地上传预览pdf

第一次知道还有这个方法，记录一下。[原文地址](https://www.jianshu.com/p/5181d74c20c6)。代码如下：
```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title></title>
</head>
<body>
	<input type="file" id="fileUploader">
	<embed src="" type=""  class="contain" id="embed">
</body>
<script type="text/javascript">
	
	const el = document.getElementById('fileUploader')

	el.onchange = function (event) {
      // 转换文件Blob流
	    const src = URL.createObjectURL(event.target.files[0])
	    const preview = document.getElementById('embed')
	    preview.width = 800
	    preview.style.height = '100vh';
	    preview.src = src
	}

</script>
</html>
```