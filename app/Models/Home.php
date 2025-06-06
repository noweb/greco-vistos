<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Home extends Model
{
    /** @use HasFactory<\Database\Factories\HomeFactory> */
    use HasFactory;
    protected $fillable = [
        'slug',
        'page_title',
        'page_description',
        'banner_title',
        'banner_description',
        'banner_image',
        'banner_image_button_text',
        'banner_image_button_link',
        'banner_button_text',
        'banner_button_link',
        'banner_image_title',
        'banner_image_description',
        'banner_section_details_1_title',
        'banner_section_details_1_description',
        'banner_section_details_2_title',
        'banner_section_details_2_description',
        'banner_section_details_3_title',
        'banner_section_details_3_description',
        'banner_video_title',
        'banner_video_image',
        'banner_video_url',
        'cta_text_1',
        'cta_text_2',
        'who_works_section_intro_highlight',
        'who_works_intro_title',
        'who_works_intro_description',
        'who_works_title',
        'who_works_description',
        'who_works_image',
        'who_works_details',
        'destinations_section_intro_highlight',
        'destinations_title',
        'destinations_description',
        'destinations_button_text',
        'destinations_button_link',
        'destinations_details',
        'packages_section_intro_highlight',
        'packages_title',
        'footer_title',
        'footer_description',
        'footer_button_text',
        'footer_button_link',
        'footer_details',
    ];

    protected $casts = [
        'who_works_details' => 'array',
        'destinations_details' => 'array',
        'footer_details' => 'array',
    ];
}
