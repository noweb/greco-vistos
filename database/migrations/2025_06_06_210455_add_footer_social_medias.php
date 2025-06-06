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
        Schema::table('homes', function (Blueprint $table) {
            $table->string('footer_instagram_link')->nullable();
            $table->string('footer_x_link')->nullable();
            $table->string('footer_facebook_link')->nullable();
            $table->string('footer_youtube_link')->nullable();
            $table->string('footer_whatsapp_link')->nullable();

            $table->string('footer_link')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('homes', function (Blueprint $table) {
            $table->dropColumn('footer_instagram_link');
            $table->dropColumn('footer_x_link');
            $table->dropColumn('footer_facebook_link');
            $table->dropColumn('footer_youtube_link');
            $table->dropColumn('footer_whatsapp_link');
        });
    }
};
