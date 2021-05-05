<!DOCTYPE html>
<html>
<head>
    <title>Administración</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha/css/bootstrap.css" rel="stylesheet">
</head>
<body>
  
<div class="container">
    <h2><a href="{{ route('admin.index') }}">Index</a></h2>
    @yield('content')
</div>

</body>
</html>