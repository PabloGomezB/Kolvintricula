<div class="grid grid-cols-2 gap-6">
    <div class="grid grid-rows-2 gap-6">
        <div>
            <x-label for="name" :value="__('Nombre del curso')" />
            <x-input id="text" type="text" name="name" placeholder="DAW" value="{{ $course->name }}" class="block mt-1 w-full" autofocus/>
        </div>
        <div>
            <x-label for="type" :value="__('Tipo de estudios')" />
            <div class="inline-block relative w-64">
                <select id="type" name="type" class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                    <option value="CFGS" <?php if ($course->type == "CFGS") { ?> selected <?php } ?>>CFGS</option>
                    <option value="CFGM" <?php if ($course->type == "CFGM") { ?> selected <?php } ?>>CFGM</option>
                    <option value="BACHILLERATO" <?php if ($course->type == "BACHILLERATO") { ?> selected <?php } ?>>Bachillerato</option>
                    <option value="ESO" <?php if ($course->type == "ESO") { ?> selected <?php } ?>>ESO</option>
                </select>
            </div>
        </div>
    </div>
    <div class="grid grid-rows-2 gap-6">
        <div>
            <x-label for="description" :value="__('Nombre del curso')" />
            <x-input id="description" type="text" name="description" value="{{ $course->description }}" placeholder="Desarrollo de Aplicaciones Web" class="block mt-1 w-full" autofocus/>
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