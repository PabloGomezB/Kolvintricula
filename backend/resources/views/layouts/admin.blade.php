<!DOCTYPE html>
<html>
<head>
    <title>Administración</title>
    <link href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/materia/bootstrap.min.css" rel="stylesheet">

    {{-- <!-- Styles -->
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script> --}}
</head>
<body>
<h1>
    <a href="{{ route('admin') }}">Index</a>
</h1>

<div class="container">
    @yield('content')
</div>

</body>
</html>