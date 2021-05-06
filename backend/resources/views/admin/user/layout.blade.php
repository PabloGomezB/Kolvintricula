<!DOCTYPE html>
<html>
<head>
    <title>Administración</title>
    <link href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/materia/bootstrap.min.css" rel="stylesheet">
</head>
<body>
  
<div class="container">
    <h2><a href="{{ route('admin.index') }}">Index</a></h2>
    @yield('content')
</div>

</body>
</html>