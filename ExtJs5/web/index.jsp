<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%

String path =request.getContextPath();

String basePath =request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";

%>    
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
 <base href="<%=basePath%>">

   <title><%=path%>ext5 <%=basePath%></title>

       <link rel="stylesheet"type="text/css" href="<%=basePath%>ext/theme-neptune/build/resources/ext-theme-neptune-all.css">

       <script type="text/javascript"src="<%=basePath%>ext/ext-all.js"></script>

       <script type="text/javascript"src="<%=basePath%>ext/ext-bootstrap.js"></script>

       <script type="text/javascript"src="<%=basePath%>ext/theme-neptune/build/ext-theme-neptune.js"></script>

       <script type="text/javascript"src="<%=basePath%>js/main.js"></script>

 </head>
<body>
</body>
</html>