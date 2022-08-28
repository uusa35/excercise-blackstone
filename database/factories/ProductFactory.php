<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'name' => $this->faker->randomElement(['perfume', 'mobile']) . ' ' . $this->faker->name,
            'qty' => $this->faker->numberBetween(1, 10),
            'price' => $this->faker->randomFloat(3, 10, 200),
            'brand' => function ($array) {
                if (str_contains($array['name'], 'perfume')) {
                    return $this->faker->randomElement(['Calvin Klein', 'BOSS', 'Gucci']);
                }
                return $this->faker->randomElement(['Samsung', 'Apple']);
            },
        ];
    }
}
