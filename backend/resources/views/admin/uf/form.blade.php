<?php 
    use App\Models\Module; 
    use App\Models\Course;
?>
<div class="grid grid-cols-2 gap-6">
    <div class="grid grid-rows-2 gap-6">
        <div>
            <x-label class="required" for="name" :value="__('Número de la UF')" />
            <x-input id="text" type="text" name="name" placeholder="UF1" value="{{ $uf->name }}" class="block mt-1 w-full" autofocus/>
            <br>
            <x-label class="required" for="year" :value="__('Curso de la UF')" />
            <select id="type" name="year" class=" border-gray-400 block mt-1 w-full hover:border-gray-500 rounded shadow focus:shadow-outline">
                <option value='1'>1r curso</option>
                <option value='2'>2o curso</option>
            </select>
        </div>
        <div>
            <x-label for="id_module" :value="__('Modulo al que pertenece')" />
            <div class="inline-block relative w-full">
                <select id="type" name="id_module" class="disabled block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow focus:outline-none focus:shadow-outline">
                    <?php             
                        $module = Module::find($id);
                        $course = Course::find($module->id_course);                       ;
                        echo "<option value='$module->id'>$course->name: $module->name $module->description</option>";   
                    ?>
                </select>
            </div>
        </div>
    </div>
    <div class="grid grid-rows-2 gap-6">
        <div>
            <x-label class="required" for="description" :value="__('Nombre completo de la UF')" />
            <x-input id="description" type="text" name="description" value="{{ $uf->description }}" placeholder="" class="block mt-1 w-full" autofocus/>
            <br>
            <x-label class="required" for="hours" :value="__('Horas de la UF')" />
            <x-input id="text" type="text" name="hours" placeholder="" value="{{ $uf->hours }}" class="block mt-1 w-full" autofocus/>
        </div>  
    </div>
</div>