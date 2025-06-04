<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('homes', function (Blueprint $table) {
            $table->id();
            $table->string('slug')->nullable();
            $table->string('page_title');
            $table->string('page_description', 160);

            // Banner
            $table->string('banner_title');
            $table->text('banner_description');
            $table->string('banner_image');
            $table->string('banner_image_button_text');
            $table->string('banner_image_button_link');
            $table->string('banner_button_text');
            $table->string('banner_button_link');
            $table->string('banner_image_title');
            $table->text('banner_image_description');
            $table->integer('banner_section_details_1_title');
            $table->text('banner_section_details_1_description');
            $table->integer('banner_section_details_2_title');
            $table->text('banner_section_details_2_description');
            $table->integer('banner_section_details_3_title');
            $table->text('banner_section_details_3_description');
            $table->string('banner_video_title');
            $table->string('banner_video_image');
            $table->string('banner_video_url');

            // CTA
            $table->string('cta_text_1');
            $table->string('cta_text_2');

            // WhoWorks
            $table->string('who_works_section_intro_highlight');
            $table->string('who_works_intro_title');
            $table->text('who_works_intro_description');
            $table->string('who_works_title');
            $table->text('who_works_description');
            $table->string('who_works_image');
            $table->json('who_works_details');

            // Destinations
            $table->string('destinations_section_intro_highlight');
            $table->string('destinations_title');
            $table->text('destinations_description');
            $table->string('destinations_button_text');
            $table->string('destinations_button_link');
            $table->json('destinations_details');

            // Packages
            $table->string('packages_section_intro_highlight');
            $table->string('packages_title');
            $table->json('packages_details');

            // Footer
            $table->string('footer_title');
            $table->text('footer_description');
            $table->string('footer_button_text');
            $table->string('footer_button_link');
            $table->json('footer_details');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('homes');
    }
};
