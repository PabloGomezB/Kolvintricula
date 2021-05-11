<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Enrolment extends Model
{
    use HasFactory;
    
    // protected $casts = [
    //     'json_course_module_uf' => 'array'
    // ];

    protected $fillable = [
        'id_student',
        'json_course_module_uf'
    ];
}
