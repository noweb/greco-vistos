<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateProductRequest extends FormRequest
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
            'title' => ['required', 'string', 'max:255'],
            'image' => ['required', 'string', 'max:255'],
            'tags' => ['required', 'array'],
            'service' => ['required', 'string', 'max:255'],
            'time' => ['required', 'string', 'max:255'],
            'price' => ['required', 'string', 'max:255'],
            'link' => ['required', 'string', 'max:255'],
            'is_active' => ['boolean'],
        ];
    }
}
