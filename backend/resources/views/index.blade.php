<h1>custom index by pablo gomez using controller and routes</h1>
<!-- <h2>{{ $databaseInfo[0]->col1 }}</h2> -->

@foreach($databaseInfo as $info) 
<h2>{{ $info->col1 }}</h2>
@endforeach