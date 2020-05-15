<?php

namespace App\Models;

use  as Model;


class  extends Model
{
$SOFT_DELETE$
    public $table = '$TABLE_NAME$';
    $TIMESTAMPS$
$SOFT_DELETE_DATES$
$PRIMARY$
    public $fillable = [
        $FIELDS$
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        $CAST$
    ];

    /**
     * Validation rules
     *
     * @var array
     */
    public static $rules = [
        $RULES$
    ];

    $RELATIONS$
}
