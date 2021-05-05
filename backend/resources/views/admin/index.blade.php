<h1>Soy la template de KolvintriculaController (admin/index.blade.php)</h1>
<h2>Esta será la vista de ADMINISTRADOR</h2>

{{-- <h2>{{ $databaseInfo[0]->col1 }}</h2>

 @foreach($databaseInfo as $info) 
<h2>{{ $info->col1 }}</h2>
@endforeach --}}
<h3>De momento solo te puedo ofrecer esta vista tan cutre y:</h3>

<h3><a href="{{ route('courses.index') }}">Un CRUD de Cursos mamadísimo</a></h3>

<h3><a href="{{ route('users.index') }}">Una lista de usuarios no tan mamadísima</a></h3>

<h1 style="margin-top:200px"><a href="{{ route('dashboard') }}">Dashboard</a><a style="margin-left:50px" href="/">Homepage</a></h1>

<h2><a href="{{ route('logout') }}">Logout</a></h2>
