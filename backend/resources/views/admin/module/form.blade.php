<?php use App\Models\Course; ?>
<div class="grid grid-cols-2 gap-6">
    <div class="grid grid-rows-2 gap-6">
        <div>
            <x-label class="required" for="name" :value="__('Nombre del modulo')" />
            <x-input id="text" type="text" name="name" placeholder="MP1" value="{{ $module->name }}" class="block mt-1 w-full" autofocus/>
        </div>
        <div>
            <x-label for="name" :value="__('Curso al que pertenece')" />
            <div class="inline-block relative w-64">
                <select id="type" name="id_course" class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                    <?php                         
                        $courses = Course::all();
                        foreach ($courses as $course) {
                            if($course->id == $module->id_course){
                                echo "<option selected value='$course->id'>$course->name</option>";
                            }
                            else{
                                echo "<option value='$course->id'>$course->name</option>";
                            }
                        }
                    ?>
                </select>
            </div>
        </div>
    </div>
    <div class="grid grid-rows-2 gap-6">
        <div>
            <x-label class="required" for="description" :value="__('Nombre completo del modulo')" />
            <x-input id="description" type="text" name="description" value="{{ $module->description }}" placeholder="Sistemes informatics" class="block mt-1 w-full" autofocus/>
        </div>        
    </div>
</div>