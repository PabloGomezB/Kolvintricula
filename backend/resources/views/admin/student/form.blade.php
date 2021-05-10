<div class="grid grid-cols-2 gap-6">
    <div class="grid grid-rows-2 gap-6">
        <div>
            <x-label for="name" :value="__('Nombre del alumno')" />
            <x-input id="text" type="text" name="name" placeholder="" value="{{ $student->name }}" class="block mt-1 w-full" autofocus />
        </div>
        <div>
            <x-label for="name" :value="__('Primer apellido del alumno')" />
            <x-input id="text" type="text" name="name" placeholder="" value="{{ $student->last_name1 }}" class="block mt-1 w-full" autofocus />
        </div>
        <div>
            <x-label for="name" :value="__('Segundo apellido del alumno')" />
            <x-input id="text" type="text" name="name" placeholder="" value="{{ $student->last_name2 }}" class="block mt-1 w-full" autofocus />
        </div>
        <div>
            <x-label for="name" :value="__('DNI del alumno')" />
            <x-input id="text" type="text" name="name" placeholder="" value="{{ $student->nif }}" class="block mt-1 w-full" autofocus />
        </div>
        <div>
            <x-label for="name" :value="__('Fecha de nacimiento del alumno')" />
            <x-input id="text" type="date" name="name" placeholder="" value="{{ $student->'date_birth }}" class="block mt-1 w-full" autofocus />
        </div>
        <div>
            <x-label for="name" :value="__('Número de teléfono del alumno')" />
            <x-input id="text" type="integer" name="name" placeholder="" value="{{ $student->'mobile_number }}" class="block mt-1 w-full" autofocus />
        </div>
        <div>
            <x-label for="name" :value="__('Fotografía del alumno')" />
            <x-input id="text" type="text" name="name" placeholder="" value="{{ $student->'photo_path }}" class="block mt-1 w-full" autofocus />
        </div>
        <div>
            <x-label for="type" :value="__('Estado de la matrícula')" />
            <div class="inline-block relative w-64">
                <select id="type" name="type" class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                    <option value="MATRICULADO" <?php if ($student->enrolment_status == "MATRICULADO") { ?> selected <?php } ?>>MATRICULADO</option>
                    <option value="BORRADOR" <?php if ($student->enrolment_status == "BORRADOR") { ?> selected <?php } ?>>BORRADOR</option>
                    <option value="PREMATRICULADO" <?php if ($student->enrolment_status == "PREMATRICULADO") { ?> selected <?php } ?>>PREMATRICULADO</option>
                    <option value="RECHAZADO" <?php if ($student->enrolment_status == "RECHAZADO") { ?> selected <?php } ?>>RECHAZADO</option>
                </select>
            </div>
        </div>
        <div>
            <x-label for="name" :value="__('Correo electrónico del alumno')" />
            <x-input id="text" type="text" name="name" placeholder="" value="{{ $student->'email_personal }}" class="block mt-1 w-full" autofocus />
        </div>
        <div>
            <x-label for="name" :value="__('Correo electrónico del centro para del alumno')" />
            <x-input id="text" type="text" name="name" placeholder="a21XXX@inspedralbes.cat" value="{{ $student->'email_pedralbes }}" class="block mt-1 w-full" autofocus />
        </div>


    </div>
    <div class="grid grid-rows-2 gap-6">
        <div>
            <x-label for="description" :value="__('Nombre del curso')" />
            <x-input id="description" type="text" name="description" value="{{ $course->description }}" placeholder="Desarrollo de Aplicaciones Web" class="block mt-1 w-full" autofocus />
        </div>
        <div>
            <x-label for="state" :value="__('Estado del curso')" />
            <div class="inline-block relative w-64">
                <select id="state" name="state" class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                    <option value="DESHABILITADO" <?php if ($course->state == "DESHABILITADO") { ?> selected <?php } ?>>Deshabilitado</option>
                    <option value="BORRADOR" <?php if ($course->state == "BORRADOR") { ?> selected <?php } ?>>Borrador</option>
                    <option value="PREMATRICULA" <?php if ($course->state == "PREMATRICULA") { ?> selected <?php } ?>>Prematrícula</option>
                    <option value="MATRICULA" <?php if ($course->state == "MATRICULA") { ?> selected <?php } ?>>Matrícula</option>
                </select>
            </div>
        </div>
    </div>
</div>