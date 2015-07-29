# WebGL workshop in Milan, June 2015
Hi,
this is the official repository for the [3DWeb Workshop](http://www.3dweb.cc/)

# What you need to follow these tutorials
Some prerequisites required to understand the tutorials:
+   only a basic understanding of coding / JavaScript
+   zero 3D graphic’s background required
+   basic knowledge of HTML and web stack
+   some examples require a simple HTTP server running, due to [CORS policy](https://en.wikipedia.org/wiki/Same-origin_policy): 
if you don't already have one, we suggest you to use [Python's SimpleHTTPServer](https://docs.python.org/2/library/simplehttpserver.html)
which comes in bundle with [Python](https://www.python.org/) and is already installed on various Linux distributions and OS/X and has an installer for Windows.

# Workhop schedule

##Saturday, June 6th - getting started!
+   [Theory #1: what is 3D computer graphic](https://docs.google.com/presentation/d/1jHReQE5lchAcquooXlse_dfuz4_mcumx4HfNhDx6Pqg/edit)
+   [Theory #2: working with real world complexity](https://docs.google.com/presentation/d/1jHReQE5lchAcquooXlse_dfuz4_mcumx4HfNhDx6Pqg/edit)
+   [Create a bare scene](course_material/01_create_scene.md)
+   [Let the renderer run](course_material/02_run_scene.md)
+   [Creating geometry with primitives](course_material/03_create_geometry.md)
+   [Adding lights](course_material/04_adding_lights.md)
+   [Use transformations (translate, rotate, scale) with 3D objects](course_material/05_use_transformations.md)
+   [Make an interactive scene with OrbitControls](course_material/06_user_interaction.md)
+   [Grouping objects: the scene graph](course_material/07_grouping_objects.md)

## Saturday, June 13th - working with materials!

### morning: theory and tutorials
+   Brief recap about Workshop #1
+   [Theory: materials and textures](https://docs.google.com/presentation/d/1kVe2cK1NEQK6FznNgbK-XYGfJikU4wsSxnMXuAAUYnQ/edit#slide=id.g5913d61c0_0_6)
+   [Load custom geometry using COLLADA file format](course_material/08_custom_geometry.md)
+   [Modifying custom geometries iterating the scene graph](course_material/09_traversing_scene_graph.md)
+   [Change material's color using _diffuse_ property](course_material/10_materials_diffuse.md)
+   [Make transparent materials with _opacity_](course_material/11_materials_opacity.md)
+   [Load custom textures and apply them to the materials](course_material/12_texture_loading.md)
+   [Texture mapping: how should I apply the "wallpaper"?](course_material/13_texture_mapping.md)
+   [Give a real environment to your scene with environment maps](course_material/14_environment_texture.md)
+   [Just a "wallpaper"? How to control different properties through textures](course_material/15_texture_channels.md)
+   [Add real reflections to materials with the CubeCamera](course_material/16_materials_reflections.md)
+   [Create a realistic glass material with refraction](course_material/17_materials_refractions.md)

### afternoon: wrap up!
+   build your own demo scene using the techniques shown in the morning: see the [Workhop #2 final work](course_material/WorkshopEnd_2.html)

## Saturday, June 20th - user interaction

### morning: theory and tutorials
+   [Again on user interaction: how to translate mouse coordinates from the page to the 3D world](course_material/18_translating_mouse_coordinates.md)
+   [Find objects which are being traversed from the pointer](course_material/19_find_intersections.md)
+   [Modify intersected objects' material](course_material/20_modify_intersected_objects.md)
+   [Loading keyframe animations using Collada](course_material/21_loading_keyframe_animation.md)

### afternoon: wrap up!
+   [Live interaction with wood man](examples/WorkshopEnd_3_A.html)
+   [Load animated clock](examples/WorkshopEnd_3_B.html)

## Saturday, June 27th - interact with animations

### morning: theory and tutorials
+   [A different format fo externat models: JSON](course_material/22_loading_skeleton_animations.md)
+   [Animating bones via code](course_material/23_manual_bones_animations.md)

### afternoon: wrap up!
+   [Skeleton animation](examples/12_json_skeleton_animation.html)
+   [Iterating skeleton animation](examples/13_json_skeleton_animation_tracked.html)
+   [Manual animation](examples/13_json_manual_animation.html)
+   [Using Tween](examples/14_json_manual_animation_tween.html)