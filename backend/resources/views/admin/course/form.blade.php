{{-- <form class="mt-5" action="{{ route('courses.store') }}" method="POST">
    @csrf --}}
    <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                {{-- <strong>Tipo de estudios:</strong> --}}
                <label for="type">Tipo de estudios:</label>
                <select id="type" name="type">
                    <option value="ESO" <?php if ($course->type == "ESO") { ?> selected <?php } ?>>ESO</option>
                    <option value="BACHILLERATO" <?php if ($course->type == "BACHILLERATO") { ?> selected <?php } ?>>Bachillerato</option>
                    <option value="CFGM" <?php if ($course->type == "CFGM") { ?> selected <?php } ?>>CFGM</option>
                    <option value="CFGS" <?php if ($course->type == "CFGS") { ?> selected <?php } ?>>CFGS</option>
                </select>
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>Nombre del curso:</strong>
                <input type="text" class="form-control" name="name" id="name" placeholder="DAW" value="{{ $course->name }}">
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                {{-- <strong>Descripción del curso:</strong> --}}
                <label for="description">Descripción del curso:</label>
                <input type="text" class="form-control" name="description" id="description" placeholder="Ciclo Formativo de Grado Superior: Desarrollo de Aplicaciones Web" value="{{ $course->description }}">
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>Estado del curso:</strong>
                <select id="state" name="state">
                    <option value="DESHABILITADO" <?php if ($course->state == "DESHABILITADO") { ?> selected <?php } ?>>Deshabilitado</option>
                    <option value="BORRADOR" <?php if ($course->state == "BORRADOR") { ?> selected <?php } ?>>Borrador</option>
                    <option value="PREMATRICULA" <?php if ($course->state == "PREMATRICULA") { ?> selected <?php } ?>>Prematrícula</option>
                    <option value="MATRICULA" <?php if ($course->state == "MATRICULA") { ?> selected <?php } ?>>Matrícula</option>
                </select>
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12 text-center">
            <button type="submit" class="btn btn-primary">Submit</button>
        </div>
    </div>
{{-- </form> --}}