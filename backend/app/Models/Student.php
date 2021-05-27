<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model {
    use HasFactory;
    protected $fillable = [
        'nif',
        'name',
        'last_name1',
        'last_name2',
        'date_birth',
        'mobile_number',
        'photo_path',
        'enrolment_status',
        'email_personal',
        'email_pedralbes',
    ];
}
