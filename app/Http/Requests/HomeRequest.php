<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class HomeRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'slug' => ['nullable', 'string'],
            'page_title' => ['required', 'string', 'min:2'],
            'page_description' => ['required', 'string', 'min:2', 'max:160'],

            // Banner
            'banner_title' => ['required', 'string', 'min:2'],
            'banner_description' => ['required', 'string', 'min:2'],
            'banner_image' => ['required', 'image', 'mimes:jpeg,png,jpg,gif,svg', 'max:2048'],
            'banner_image_button_text' => ['required', 'string', 'min:2'],
            'banner_image_button_link' => ['required', 'string', 'min:2'],
            'banner_button_text' => ['required', 'string', 'min:2'],
            'banner_button_link' => ['required', 'string', 'min:2'],
            'banner_image_title' => ['required', 'string', 'min:2'],
            'banner_image_description' => ['required', 'string', 'min:2'],
            'banner_section_details_1_title' => ['required', 'integer', 'min:1'],
            'banner_section_details_1_description' => ['required', 'string', 'min:2'],
            'banner_section_details_2_title' => ['required', 'integer', 'min:1'],
            'banner_section_details_2_description' => ['required', 'string', 'min:2'],
            'banner_section_details_3_title' => ['required', 'integer', 'min:1'],
            'banner_section_details_3_description' => ['required', 'string', 'min:2'],
            'banner_video_title' => ['required', 'string', 'min:2'],
            'banner_video_image' => ['required', 'image', 'mimes:jpeg,png,jpg,gif,svg', 'max:2048'],
            'banner_video_url' => ['required', 'string', 'min:2'],

            // CTA
            'cta_text_1' => ['required', 'string', 'min:2'],
            'cta_text_2' => ['required', 'string', 'min:2'],

            // WhoWorks
            'who_works_section_intro_highlight' => ['required', 'string', 'min:2'],
            'who_works_intro_title' => ['required', 'string', 'min:2'],
            'who_works_intro_description' => ['required', 'string', 'min:2'],
            'who_works_title' => ['required', 'string', 'min:2'],
            'who_works_description' => ['required', 'string', 'min:2'],
            'who_works_image' => ['required', 'image', 'mimes:jpeg,png,jpg,gif,svg', 'max:2048'],
            'who_works_details' => ['required', 'array', 'min:1'],
            'who_works_details.*.title' => ['required', 'string', 'min:2'],
            'who_works_details.*.description' => ['required', 'string', 'min:2'],

            // Destinations
            'destinations_section_intro_highlight' => ['required', 'string', 'min:2'],
            'destinations_title' => ['required', 'string', 'min:2'],
            'destinations_description' => ['required', 'string', 'min:2'],
            'destinations_button_text' => ['required', 'string', 'min:2'],
            'destinations_button_link' => ['required', 'string', 'min:2'],
            'destinations_details' => ['required', 'array', 'min:1'],
            'destinations_details.*.title' => ['required', 'string', 'min:2'],
            'destinations_details.*.image' => ['required', 'image', 'mimes:jpeg,png,jpg,gif,svg', 'max:2048'],

            // Footer
            'footer_title' => ['required', 'string', 'min:2'],
            'footer_description' => ['required', 'string', 'min:2'],
            'footer_button_text' => ['required', 'string', 'min:2'],
            'footer_button_link' => ['required', 'string', 'min:2'],
            'footer_details' => ['required', 'array'],
            'footer_details.*.title' => ['required', 'string', 'min:2'],
            'footer_details.*.link' => ['required', 'string', 'min:2'],
        ];
    }
}
