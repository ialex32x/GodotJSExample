// AUTO-GENERATED
/// <reference no-default-lib="true"/>
declare module "godot" {
    /** A single texture resource which consists of multiple, separate images. Each image has the same dimensions and number of mipmap levels.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_texture2darray.html  
     */
    class Texture2DArray extends ImageTextureLayered {
        constructor(identifier?: any)
        /** Creates a placeholder version of this resource ([PlaceholderTexture2DArray]). */
        create_placeholder(): Resource
    }
    /** Texture Array for 2D that is bound to a texture created on the [RenderingDevice].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_texture2darrayrd.html  
     */
    class Texture2DArrayRD extends TextureLayeredRD {
        constructor(identifier?: any)
    }
    /** Texture for 2D that is bound to a texture created on the [RenderingDevice].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_texture2drd.html  
     */
    class Texture2DRD extends Texture2D {
        constructor(identifier?: any)
        set_texture_rd_rid(texture_rd_rid: RID): void
        get_texture_rd_rid(): RID
        
        /** The RID of the texture object created on the [RenderingDevice]. */
        get texture_rd_rid(): RID
        set texture_rd_rid(value: RID)
    }
    /** Base class for 3-dimensional textures.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_texture3d.html  
     */
    class Texture3D extends Texture {
        constructor(identifier?: any)
        /** Called when the [Texture3D]'s format is queried. */
        /* gdvirtual */ _get_format(): Image.Format
        
        /** Called when the [Texture3D]'s width is queried. */
        /* gdvirtual */ _get_width(): number /*i64*/
        
        /** Called when the [Texture3D]'s height is queried. */
        /* gdvirtual */ _get_height(): number /*i64*/
        
        /** Called when the [Texture3D]'s depth is queried. */
        /* gdvirtual */ _get_depth(): number /*i64*/
        
        /** Called when the presence of mipmaps in the [Texture3D] is queried. */
        /* gdvirtual */ _has_mipmaps(): boolean
        
        /** Called when the [Texture3D]'s data is queried. */
        /* gdvirtual */ _get_data(): Array
        
        /** Returns the current format being used by this texture. See [enum Image.Format] for details. */
        get_format(): Image.Format
        
        /** Returns the [Texture3D]'s width in pixels. Width is typically represented by the X axis. */
        get_width(): number /*i64*/
        
        /** Returns the [Texture3D]'s height in pixels. Width is typically represented by the Y axis. */
        get_height(): number /*i64*/
        
        /** Returns the [Texture3D]'s depth in pixels. Depth is typically represented by the Z axis (a dimension not present in [Texture2D]). */
        get_depth(): number /*i64*/
        
        /** Returns `true` if the [Texture3D] has generated mipmaps. */
        has_mipmaps(): boolean
        
        /** Returns the [Texture3D]'s data as an array of [Image]s. Each [Image] represents a  *slice*  of the [Texture3D], with different slices mapping to different depth (Z axis) levels. */
        get_data(): Array
        
        /** Creates a placeholder version of this resource ([PlaceholderTexture3D]). */
        create_placeholder(): Resource
    }
    class Texture3DEditorPlugin extends EditorPlugin {
        constructor(identifier?: any)
    }
    /** Texture for 3D that is bound to a texture created on the [RenderingDevice].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_texture3drd.html  
     */
    class Texture3DRD extends Texture3D {
        constructor(identifier?: any)
        set_texture_rd_rid(texture_rd_rid: RID): void
        get_texture_rd_rid(): RID
        
        /** The RID of the texture object created on the [RenderingDevice]. */
        get texture_rd_rid(): RID
        set texture_rd_rid(value: RID)
    }
    namespace TextureButton {
        enum StretchMode {
            /** Scale to fit the node's bounding rectangle. */
            STRETCH_SCALE = 0,
            
            /** Tile inside the node's bounding rectangle. */
            STRETCH_TILE = 1,
            
            /** The texture keeps its original size and stays in the bounding rectangle's top-left corner. */
            STRETCH_KEEP = 2,
            
            /** The texture keeps its original size and stays centered in the node's bounding rectangle. */
            STRETCH_KEEP_CENTERED = 3,
            
            /** Scale the texture to fit the node's bounding rectangle, but maintain the texture's aspect ratio. */
            STRETCH_KEEP_ASPECT = 4,
            
            /** Scale the texture to fit the node's bounding rectangle, center it, and maintain its aspect ratio. */
            STRETCH_KEEP_ASPECT_CENTERED = 5,
            
            /** Scale the texture so that the shorter side fits the bounding rectangle. The other side clips to the node's limits. */
            STRETCH_KEEP_ASPECT_COVERED = 6,
        }
    }
    /** Texture-based button. Supports Pressed, Hover, Disabled and Focused states.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_texturebutton.html  
     */
    class TextureButton extends BaseButton {
        constructor(identifier?: any)
        set_texture_normal(texture: Texture2D): void
        set_texture_pressed(texture: Texture2D): void
        set_texture_hover(texture: Texture2D): void
        set_texture_disabled(texture: Texture2D): void
        set_texture_focused(texture: Texture2D): void
        set_click_mask(mask: BitMap): void
        set_ignore_texture_size(ignore: boolean): void
        set_stretch_mode(mode: TextureButton.StretchMode): void
        set_flip_h(enable: boolean): void
        is_flipped_h(): boolean
        set_flip_v(enable: boolean): void
        is_flipped_v(): boolean
        get_texture_normal(): Texture2D
        get_texture_pressed(): Texture2D
        get_texture_hover(): Texture2D
        get_texture_disabled(): Texture2D
        get_texture_focused(): Texture2D
        get_click_mask(): BitMap
        get_ignore_texture_size(): boolean
        get_stretch_mode(): TextureButton.StretchMode
        
        /** Texture to display by default, when the node is **not** in the disabled, hover or pressed state. This texture is still displayed in the focused state, with [member texture_focused] drawn on top. */
        get texture_normal(): Texture2D
        set texture_normal(value: Texture2D)
        
        /** Texture to display on mouse down over the node, if the node has keyboard focus and the player presses the Enter key or if the player presses the [member BaseButton.shortcut] key. */
        get texture_pressed(): Texture2D
        set texture_pressed(value: Texture2D)
        
        /** Texture to display when the mouse hovers the node. */
        get texture_hover(): Texture2D
        set texture_hover(value: Texture2D)
        
        /** Texture to display when the node is disabled. See [member BaseButton.disabled]. */
        get texture_disabled(): Texture2D
        set texture_disabled(value: Texture2D)
        
        /** Texture to display when the node has mouse or keyboard focus. [member texture_focused] is displayed  *over*  the base texture, so a partially transparent texture should be used to ensure the base texture remains visible. A texture that represents an outline or an underline works well for this purpose. To disable the focus visual effect, assign a fully transparent texture of any size. Note that disabling the focus visual effect will harm keyboard/controller navigation usability, so this is not recommended for accessibility reasons. */
        get texture_focused(): Texture2D
        set texture_focused(value: Texture2D)
        
        /** Pure black and white [BitMap] image to use for click detection. On the mask, white pixels represent the button's clickable area. Use it to create buttons with curved shapes. */
        get texture_click_mask(): BitMap
        set texture_click_mask(value: BitMap)
        
        /** If `true`, the size of the texture won't be considered for minimum size calculation, so the [TextureButton] can be shrunk down past the texture size. */
        get ignore_texture_size(): bool
        set ignore_texture_size(value: bool)
        
        /** Controls the texture's behavior when you resize the node's bounding rectangle. See the [enum StretchMode] constants for available options. */
        get stretch_mode(): number /*i64*/
        set stretch_mode(value: number /*i64*/)
        
        /** If `true`, texture is flipped horizontally. */
        get flip_h(): bool
        set flip_h(value: bool)
        
        /** If `true`, texture is flipped vertically. */
        get flip_v(): bool
        set flip_v(value: bool)
    }
    /** Texture Array for Cubemaps that is bound to a texture created on the [RenderingDevice].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_texturecubemaparrayrd.html  
     */
    class TextureCubemapArrayRD extends TextureLayeredRD {
        constructor(identifier?: any)
    }
    /** Texture for Cubemap that is bound to a texture created on the [RenderingDevice].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_texturecubemaprd.html  
     */
    class TextureCubemapRD extends TextureLayeredRD {
        constructor(identifier?: any)
    }
    class TextureEditorPlugin extends EditorPlugin {
        constructor(identifier?: any)
    }
    namespace TextureLayered {
        enum LayeredType {
            /** Texture is a generic [Texture2DArray]. */
            LAYERED_TYPE_2D_ARRAY = 0,
            
            /** Texture is a [Cubemap], with each side in its own layer (6 in total). */
            LAYERED_TYPE_CUBEMAP = 1,
            
            /** Texture is a [CubemapArray], with each cubemap being made of 6 layers. */
            LAYERED_TYPE_CUBEMAP_ARRAY = 2,
        }
    }
    /** Base class for texture types which contain the data of multiple [Image]s. Each image is of the same size and format.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_texturelayered.html  
     */
    class TextureLayered extends Texture {
        constructor(identifier?: any)
        /** Called when the [TextureLayered]'s format is queried. */
        /* gdvirtual */ _get_format(): Image.Format
        
        /** Called when the layers' type in the [TextureLayered] is queried. */
        /* gdvirtual */ _get_layered_type(): number /*i64*/
        
        /** Called when the [TextureLayered]'s width queried. */
        /* gdvirtual */ _get_width(): number /*i64*/
        
        /** Called when the [TextureLayered]'s height is queried. */
        /* gdvirtual */ _get_height(): number /*i64*/
        
        /** Called when the number of layers in the [TextureLayered] is queried. */
        /* gdvirtual */ _get_layers(): number /*i64*/
        
        /** Called when the presence of mipmaps in the [TextureLayered] is queried. */
        /* gdvirtual */ _has_mipmaps(): boolean
        
        /** Called when the data for a layer in the [TextureLayered] is queried. */
        /* gdvirtual */ _get_layer_data(layer_index: number /*i64*/): Image
        
        /** Returns the current format being used by this texture. See [enum Image.Format] for details. */
        get_format(): Image.Format
        
        /** Returns the [TextureLayered]'s type. The type determines how the data is accessed, with cubemaps having special types. */
        get_layered_type(): TextureLayered.LayeredType
        
        /** Returns the width of the texture in pixels. Width is typically represented by the X axis. */
        get_width(): number /*i64*/
        
        /** Returns the height of the texture in pixels. Height is typically represented by the Y axis. */
        get_height(): number /*i64*/
        
        /** Returns the number of referenced [Image]s. */
        get_layers(): number /*i64*/
        
        /** Returns `true` if the layers have generated mipmaps. */
        has_mipmaps(): boolean
        
        /** Returns an [Image] resource with the data from specified [param layer]. */
        get_layer_data(layer: number /*i64*/): Image
    }
    class TextureLayeredEditorPlugin extends EditorPlugin {
        constructor(identifier?: any)
    }
    /** Abstract base class for layered texture RD types.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_texturelayeredrd.html  
     */
    class TextureLayeredRD extends TextureLayered {
        constructor(identifier?: any)
        set_texture_rd_rid(texture_rd_rid: RID): void
        get_texture_rd_rid(): RID
        
        /** The RID of the texture object created on the [RenderingDevice]. */
        get texture_rd_rid(): RID
        set texture_rd_rid(value: RID)
    }
    namespace TextureProgressBar {
        enum FillMode {
            /** The [member texture_progress] fills from left to right. */
            FILL_LEFT_TO_RIGHT = 0,
            
            /** The [member texture_progress] fills from right to left. */
            FILL_RIGHT_TO_LEFT = 1,
            
            /** The [member texture_progress] fills from top to bottom. */
            FILL_TOP_TO_BOTTOM = 2,
            
            /** The [member texture_progress] fills from bottom to top. */
            FILL_BOTTOM_TO_TOP = 3,
            
            /** Turns the node into a radial bar. The [member texture_progress] fills clockwise. See [member radial_center_offset], [member radial_initial_angle] and [member radial_fill_degrees] to control the way the bar fills up. */
            FILL_CLOCKWISE = 4,
            
            /** Turns the node into a radial bar. The [member texture_progress] fills counterclockwise. See [member radial_center_offset], [member radial_initial_angle] and [member radial_fill_degrees] to control the way the bar fills up. */
            FILL_COUNTER_CLOCKWISE = 5,
            
            /** The [member texture_progress] fills from the center, expanding both towards the left and the right. */
            FILL_BILINEAR_LEFT_AND_RIGHT = 6,
            
            /** The [member texture_progress] fills from the center, expanding both towards the top and the bottom. */
            FILL_BILINEAR_TOP_AND_BOTTOM = 7,
            
            /** Turns the node into a radial bar. The [member texture_progress] fills radially from the center, expanding both clockwise and counterclockwise. See [member radial_center_offset], [member radial_initial_angle] and [member radial_fill_degrees] to control the way the bar fills up. */
            FILL_CLOCKWISE_AND_COUNTER_CLOCKWISE = 8,
        }
    }
    /** Texture-based progress bar. Useful for loading screens and life or stamina bars.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_textureprogressbar.html  
     */
    class TextureProgressBar extends Range {
        constructor(identifier?: any)
        set_under_texture(tex: Texture2D): void
        get_under_texture(): Texture2D
        set_progress_texture(tex: Texture2D): void
        get_progress_texture(): Texture2D
        set_over_texture(tex: Texture2D): void
        get_over_texture(): Texture2D
        set_fill_mode(mode: number /*i64*/): void
        get_fill_mode(): number /*i64*/
        set_tint_under(tint: Color): void
        get_tint_under(): Color
        set_tint_progress(tint: Color): void
        get_tint_progress(): Color
        set_tint_over(tint: Color): void
        get_tint_over(): Color
        set_texture_progress_offset(offset: Vector2): void
        get_texture_progress_offset(): Vector2
        set_radial_initial_angle(mode: number /*f64*/): void
        get_radial_initial_angle(): number /*f64*/
        set_radial_center_offset(mode: Vector2): void
        get_radial_center_offset(): Vector2
        set_fill_degrees(mode: number /*f64*/): void
        get_fill_degrees(): number /*f64*/
        
        /** Sets the stretch margin with the specified index. See [member stretch_margin_bottom] and related properties. */
        set_stretch_margin(margin: Side, value: number /*i64*/): void
        
        /** Returns the stretch margin with the specified index. See [member stretch_margin_bottom] and related properties. */
        get_stretch_margin(margin: Side): number /*i64*/
        set_nine_patch_stretch(stretch: boolean): void
        get_nine_patch_stretch(): boolean
        
        /** The fill direction. See [enum FillMode] for possible values. */
        get fill_mode(): number /*i64*/
        set fill_mode(value: number /*i64*/)
        
        /** If `true`, Godot treats the bar's textures like in [NinePatchRect]. Use the `stretch_margin_*` properties like [member stretch_margin_bottom] to set up the nine patch's 3×3 grid. When using a radial [member fill_mode], this setting will enable stretching. */
        get nine_patch_stretch(): boolean
        set nine_patch_stretch(value: boolean)
        
        /** [Texture2D] that draws under the progress bar. The bar's background. */
        get texture_under(): Texture2D
        set texture_under(value: Texture2D)
        
        /** [Texture2D] that draws over the progress bar. Use it to add highlights or an upper-frame that hides part of [member texture_progress]. */
        get texture_over(): Texture2D
        set texture_over(value: Texture2D)
        
        /** [Texture2D] that clips based on the node's `value` and [member fill_mode]. As `value` increased, the texture fills up. It shows entirely when `value` reaches `max_value`. It doesn't show at all if `value` is equal to `min_value`.  
         *  The `value` property comes from [Range]. See [member Range.value], [member Range.min_value], [member Range.max_value].  
         */
        get texture_progress(): Texture2D
        set texture_progress(value: Texture2D)
        
        /** The offset of [member texture_progress]. Useful for [member texture_over] and [member texture_under] with fancy borders, to avoid transparent margins in your progress texture. */
        get texture_progress_offset(): Vector2
        set texture_progress_offset(value: Vector2)
        
        /** Multiplies the color of the bar's [member texture_under] texture. */
        get tint_under(): Color
        set tint_under(value: Color)
        
        /** Multiplies the color of the bar's [member texture_over] texture. The effect is similar to [member CanvasItem.modulate], except it only affects this specific texture instead of the entire node. */
        get tint_over(): Color
        set tint_over(value: Color)
        
        /** Multiplies the color of the bar's [member texture_progress] texture. */
        get tint_progress(): Color
        set tint_progress(value: Color)
        
        /** Starting angle for the fill of [member texture_progress] if [member fill_mode] is [constant FILL_CLOCKWISE] or [constant FILL_COUNTER_CLOCKWISE]. When the node's `value` is equal to its `min_value`, the texture doesn't show up at all. When the `value` increases, the texture fills and tends towards [member radial_fill_degrees]. */
        get radial_initial_angle(): number /*f64*/
        set radial_initial_angle(value: number /*f64*/)
        
        /** Upper limit for the fill of [member texture_progress] if [member fill_mode] is [constant FILL_CLOCKWISE] or [constant FILL_COUNTER_CLOCKWISE]. When the node's `value` is equal to its `max_value`, the texture fills up to this angle.  
         *  See [member Range.value], [member Range.max_value].  
         */
        get radial_fill_degrees(): number /*f64*/
        set radial_fill_degrees(value: number /*f64*/)
        
        /** Offsets [member texture_progress] if [member fill_mode] is [constant FILL_CLOCKWISE] or [constant FILL_COUNTER_CLOCKWISE]. */
        get radial_center_offset(): Vector2
        set radial_center_offset(value: Vector2)
    }
    namespace TextureRect {
        enum ExpandMode {
            /** The minimum size will be equal to texture size, i.e. [TextureRect] can't be smaller than the texture. */
            EXPAND_KEEP_SIZE = 0,
            
            /** The size of the texture won't be considered for minimum size calculation, so the [TextureRect] can be shrunk down past the texture size. */
            EXPAND_IGNORE_SIZE = 1,
            
            /** The height of the texture will be ignored. Minimum width will be equal to the current height. Useful for horizontal layouts, e.g. inside [HBoxContainer]. */
            EXPAND_FIT_WIDTH = 2,
            
            /** Same as [constant EXPAND_FIT_WIDTH], but keeps texture's aspect ratio. */
            EXPAND_FIT_WIDTH_PROPORTIONAL = 3,
            
            /** The width of the texture will be ignored. Minimum height will be equal to the current width. Useful for vertical layouts, e.g. inside [VBoxContainer]. */
            EXPAND_FIT_HEIGHT = 4,
            
            /** Same as [constant EXPAND_FIT_HEIGHT], but keeps texture's aspect ratio. */
            EXPAND_FIT_HEIGHT_PROPORTIONAL = 5,
        }
        enum StretchMode {
            /** Scale to fit the node's bounding rectangle. */
            STRETCH_SCALE = 0,
            
            /** Tile inside the node's bounding rectangle. */
            STRETCH_TILE = 1,
            
            /** The texture keeps its original size and stays in the bounding rectangle's top-left corner. */
            STRETCH_KEEP = 2,
            
            /** The texture keeps its original size and stays centered in the node's bounding rectangle. */
            STRETCH_KEEP_CENTERED = 3,
            
            /** Scale the texture to fit the node's bounding rectangle, but maintain the texture's aspect ratio. */
            STRETCH_KEEP_ASPECT = 4,
            
            /** Scale the texture to fit the node's bounding rectangle, center it and maintain its aspect ratio. */
            STRETCH_KEEP_ASPECT_CENTERED = 5,
            
            /** Scale the texture so that the shorter side fits the bounding rectangle. The other side clips to the node's limits. */
            STRETCH_KEEP_ASPECT_COVERED = 6,
        }
    }
    /** A control that displays a texture.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_texturerect.html  
     */
    class TextureRect extends Control {
        constructor(identifier?: any)
        set_texture(texture: Texture2D): void
        get_texture(): Texture2D
        set_expand_mode(expand_mode: TextureRect.ExpandMode): void
        get_expand_mode(): TextureRect.ExpandMode
        set_flip_h(enable: boolean): void
        is_flipped_h(): boolean
        set_flip_v(enable: boolean): void
        is_flipped_v(): boolean
        set_stretch_mode(stretch_mode: TextureRect.StretchMode): void
        get_stretch_mode(): TextureRect.StretchMode
        
        /** The node's [Texture2D] resource. */
        get texture(): Texture2D
        set texture(value: Texture2D)
        
        /** Defines how minimum size is determined based on the texture's size. See [enum ExpandMode] for options.  
         *      
         *  **Note:** Using [constant EXPAND_FIT_WIDTH], [constant EXPAND_FIT_WIDTH_PROPORTIONAL], [constant EXPAND_FIT_HEIGHT] or [constant EXPAND_FIT_HEIGHT_PROPORTIONAL] may result in unstable behavior in some containers. This functionality is being re-evaluated and will change in the future.  
         */
        get expand_mode(): number /*i64*/
        set expand_mode(value: number /*i64*/)
        
        /** Controls the texture's behavior when resizing the node's bounding rectangle. See [enum StretchMode]. */
        get stretch_mode(): number /*i64*/
        set stretch_mode(value: number /*i64*/)
        
        /** If `true`, texture is flipped horizontally. */
        get flip_h(): boolean
        set flip_h(value: boolean)
        
        /** If `true`, texture is flipped vertically. */
        get flip_v(): boolean
        set flip_v(value: boolean)
    }
    class TextureRegionEditor extends AcceptDialog {
        constructor(identifier?: any)
        _update_rect(): void
    }
    class TextureRegionEditorPlugin extends EditorPlugin {
        constructor(identifier?: any)
    }
    namespace Theme {
        enum DataType {
            /** Theme's [Color] item type. */
            DATA_TYPE_COLOR = 0,
            
            /** Theme's constant item type. */
            DATA_TYPE_CONSTANT = 1,
            
            /** Theme's [Font] item type. */
            DATA_TYPE_FONT = 2,
            
            /** Theme's font size item type. */
            DATA_TYPE_FONT_SIZE = 3,
            
            /** Theme's icon [Texture2D] item type. */
            DATA_TYPE_ICON = 4,
            
            /** Theme's [StyleBox] item type. */
            DATA_TYPE_STYLEBOX = 5,
            
            /** Maximum value for the DataType enum. */
            DATA_TYPE_MAX = 6,
        }
    }
    /** A resource used for styling/skinning [Control]s and [Window]s.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_theme.html  
     */
    class Theme extends Resource {
        constructor(identifier?: any)
        /** Creates or changes the value of the icon property defined by [param name] and [param theme_type]. Use [method clear_icon] to remove the property. */
        set_icon(name: StringName, theme_type: StringName, texture: Texture2D): void
        
        /** Returns the icon property defined by [param name] and [param theme_type], if it exists.  
         *  Returns the engine fallback icon value if the property doesn't exist (see [member ThemeDB.fallback_icon]). Use [method has_icon] to check for existence.  
         */
        get_icon(name: StringName, theme_type: StringName): Texture2D
        
        /** Returns `true` if the icon property defined by [param name] and [param theme_type] exists.  
         *  Returns `false` if it doesn't exist. Use [method set_icon] to define it.  
         */
        has_icon(name: StringName, theme_type: StringName): boolean
        
        /** Renames the icon property defined by [param old_name] and [param theme_type] to [param name], if it exists.  
         *  Fails if it doesn't exist, or if a similar property with the new name already exists. Use [method has_icon] to check for existence, and [method clear_icon] to remove the existing property.  
         */
        rename_icon(old_name: StringName, name: StringName, theme_type: StringName): void
        
        /** Removes the icon property defined by [param name] and [param theme_type], if it exists.  
         *  Fails if it doesn't exist. Use [method has_icon] to check for existence.  
         */
        clear_icon(name: StringName, theme_type: StringName): void
        
        /** Returns a list of names for icon properties defined with [param theme_type]. Use [method get_icon_type_list] to get a list of possible theme type names. */
        get_icon_list(theme_type: string): PackedStringArray
        
        /** Returns a list of all unique theme type names for icon properties. Use [method get_type_list] to get a list of all unique theme types. */
        get_icon_type_list(): PackedStringArray
        
        /** Creates or changes the value of the [StyleBox] property defined by [param name] and [param theme_type]. Use [method clear_stylebox] to remove the property. */
        set_stylebox(name: StringName, theme_type: StringName, texture: StyleBox): void
        
        /** Returns the [StyleBox] property defined by [param name] and [param theme_type], if it exists.  
         *  Returns the engine fallback stylebox value if the property doesn't exist (see [member ThemeDB.fallback_stylebox]). Use [method has_stylebox] to check for existence.  
         */
        get_stylebox(name: StringName, theme_type: StringName): StyleBox
        
        /** Returns `true` if the [StyleBox] property defined by [param name] and [param theme_type] exists.  
         *  Returns `false` if it doesn't exist. Use [method set_stylebox] to define it.  
         */
        has_stylebox(name: StringName, theme_type: StringName): boolean
        
        /** Renames the [StyleBox] property defined by [param old_name] and [param theme_type] to [param name], if it exists.  
         *  Fails if it doesn't exist, or if a similar property with the new name already exists. Use [method has_stylebox] to check for existence, and [method clear_stylebox] to remove the existing property.  
         */
        rename_stylebox(old_name: StringName, name: StringName, theme_type: StringName): void
        
        /** Removes the [StyleBox] property defined by [param name] and [param theme_type], if it exists.  
         *  Fails if it doesn't exist. Use [method has_stylebox] to check for existence.  
         */
        clear_stylebox(name: StringName, theme_type: StringName): void
        
        /** Returns a list of names for [StyleBox] properties defined with [param theme_type]. Use [method get_stylebox_type_list] to get a list of possible theme type names. */
        get_stylebox_list(theme_type: string): PackedStringArray
        
        /** Returns a list of all unique theme type names for [StyleBox] properties. Use [method get_type_list] to get a list of all unique theme types. */
        get_stylebox_type_list(): PackedStringArray
        
        /** Creates or changes the value of the [Font] property defined by [param name] and [param theme_type]. Use [method clear_font] to remove the property. */
        set_font(name: StringName, theme_type: StringName, font: Font): void
        
        /** Returns the [Font] property defined by [param name] and [param theme_type], if it exists.  
         *  Returns the default theme font if the property doesn't exist and the default theme font is set up (see [member default_font]). Use [method has_font] to check for existence of the property and [method has_default_font] to check for existence of the default theme font.  
         *  Returns the engine fallback font value, if neither exist (see [member ThemeDB.fallback_font]).  
         */
        get_font(name: StringName, theme_type: StringName): Font
        
        /** Returns `true` if the [Font] property defined by [param name] and [param theme_type] exists, or if the default theme font is set up (see [method has_default_font]).  
         *  Returns `false` if neither exist. Use [method set_font] to define the property.  
         */
        has_font(name: StringName, theme_type: StringName): boolean
        
        /** Renames the [Font] property defined by [param old_name] and [param theme_type] to [param name], if it exists.  
         *  Fails if it doesn't exist, or if a similar property with the new name already exists. Use [method has_font] to check for existence, and [method clear_font] to remove the existing property.  
         */
        rename_font(old_name: StringName, name: StringName, theme_type: StringName): void
        
        /** Removes the [Font] property defined by [param name] and [param theme_type], if it exists.  
         *  Fails if it doesn't exist. Use [method has_font] to check for existence.  
         */
        clear_font(name: StringName, theme_type: StringName): void
        
        /** Returns a list of names for [Font] properties defined with [param theme_type]. Use [method get_font_type_list] to get a list of possible theme type names. */
        get_font_list(theme_type: string): PackedStringArray
        
        /** Returns a list of all unique theme type names for [Font] properties. Use [method get_type_list] to get a list of all unique theme types. */
        get_font_type_list(): PackedStringArray
        
        /** Creates or changes the value of the font size property defined by [param name] and [param theme_type]. Use [method clear_font_size] to remove the property. */
        set_font_size(name: StringName, theme_type: StringName, font_size: number /*i64*/): void
        
        /** Returns the font size property defined by [param name] and [param theme_type], if it exists.  
         *  Returns the default theme font size if the property doesn't exist and the default theme font size is set up (see [member default_font_size]). Use [method has_font_size] to check for existence of the property and [method has_default_font_size] to check for existence of the default theme font.  
         *  Returns the engine fallback font size value, if neither exist (see [member ThemeDB.fallback_font_size]).  
         */
        get_font_size(name: StringName, theme_type: StringName): number /*i64*/
        
        /** Returns `true` if the font size property defined by [param name] and [param theme_type] exists, or if the default theme font size is set up (see [method has_default_font_size]).  
         *  Returns `false` if neither exist. Use [method set_font_size] to define the property.  
         */
        has_font_size(name: StringName, theme_type: StringName): boolean
        
        /** Renames the font size property defined by [param old_name] and [param theme_type] to [param name], if it exists.  
         *  Fails if it doesn't exist, or if a similar property with the new name already exists. Use [method has_font_size] to check for existence, and [method clear_font_size] to remove the existing property.  
         */
        rename_font_size(old_name: StringName, name: StringName, theme_type: StringName): void
        
        /** Removes the font size property defined by [param name] and [param theme_type], if it exists.  
         *  Fails if it doesn't exist. Use [method has_font_size] to check for existence.  
         */
        clear_font_size(name: StringName, theme_type: StringName): void
        
        /** Returns a list of names for font size properties defined with [param theme_type]. Use [method get_font_size_type_list] to get a list of possible theme type names. */
        get_font_size_list(theme_type: string): PackedStringArray
        
        /** Returns a list of all unique theme type names for font size properties. Use [method get_type_list] to get a list of all unique theme types. */
        get_font_size_type_list(): PackedStringArray
        
        /** Creates or changes the value of the [Color] property defined by [param name] and [param theme_type]. Use [method clear_color] to remove the property. */
        set_color(name: StringName, theme_type: StringName, color: Color): void
        
        /** Returns the [Color] property defined by [param name] and [param theme_type], if it exists.  
         *  Returns the default color value if the property doesn't exist. Use [method has_color] to check for existence.  
         */
        get_color(name: StringName, theme_type: StringName): Color
        
        /** Returns `true` if the [Color] property defined by [param name] and [param theme_type] exists.  
         *  Returns `false` if it doesn't exist. Use [method set_color] to define it.  
         */
        has_color(name: StringName, theme_type: StringName): boolean
        
        /** Renames the [Color] property defined by [param old_name] and [param theme_type] to [param name], if it exists.  
         *  Fails if it doesn't exist, or if a similar property with the new name already exists. Use [method has_color] to check for existence, and [method clear_color] to remove the existing property.  
         */
        rename_color(old_name: StringName, name: StringName, theme_type: StringName): void
        
        /** Removes the [Color] property defined by [param name] and [param theme_type], if it exists.  
         *  Fails if it doesn't exist. Use [method has_color] to check for existence.  
         */
        clear_color(name: StringName, theme_type: StringName): void
        
        /** Returns a list of names for [Color] properties defined with [param theme_type]. Use [method get_color_type_list] to get a list of possible theme type names. */
        get_color_list(theme_type: string): PackedStringArray
        
        /** Returns a list of all unique theme type names for [Color] properties. Use [method get_type_list] to get a list of all unique theme types. */
        get_color_type_list(): PackedStringArray
        
        /** Creates or changes the value of the constant property defined by [param name] and [param theme_type]. Use [method clear_constant] to remove the property. */
        set_constant(name: StringName, theme_type: StringName, constant: number /*i64*/): void
        
        /** Returns the constant property defined by [param name] and [param theme_type], if it exists.  
         *  Returns `0` if the property doesn't exist. Use [method has_constant] to check for existence.  
         */
        get_constant(name: StringName, theme_type: StringName): number /*i64*/
        
        /** Returns `true` if the constant property defined by [param name] and [param theme_type] exists.  
         *  Returns `false` if it doesn't exist. Use [method set_constant] to define it.  
         */
        has_constant(name: StringName, theme_type: StringName): boolean
        
        /** Renames the constant property defined by [param old_name] and [param theme_type] to [param name], if it exists.  
         *  Fails if it doesn't exist, or if a similar property with the new name already exists. Use [method has_constant] to check for existence, and [method clear_constant] to remove the existing property.  
         */
        rename_constant(old_name: StringName, name: StringName, theme_type: StringName): void
        
        /** Removes the constant property defined by [param name] and [param theme_type], if it exists.  
         *  Fails if it doesn't exist. Use [method has_constant] to check for existence.  
         */
        clear_constant(name: StringName, theme_type: StringName): void
        
        /** Returns a list of names for constant properties defined with [param theme_type]. Use [method get_constant_type_list] to get a list of possible theme type names. */
        get_constant_list(theme_type: string): PackedStringArray
        
        /** Returns a list of all unique theme type names for constant properties. Use [method get_type_list] to get a list of all unique theme types. */
        get_constant_type_list(): PackedStringArray
        set_default_base_scale(base_scale: number /*f64*/): void
        get_default_base_scale(): number /*f64*/
        
        /** Returns `true` if [member default_base_scale] has a valid value.  
         *  Returns `false` if it doesn't. The value must be greater than `0.0` to be considered valid.  
         */
        has_default_base_scale(): boolean
        set_default_font(font: Font): void
        get_default_font(): Font
        
        /** Returns `true` if [member default_font] has a valid value.  
         *  Returns `false` if it doesn't.  
         */
        has_default_font(): boolean
        set_default_font_size(font_size: number /*i64*/): void
        get_default_font_size(): number /*i64*/
        
        /** Returns `true` if [member default_font_size] has a valid value.  
         *  Returns `false` if it doesn't. The value must be greater than `0` to be considered valid.  
         */
        has_default_font_size(): boolean
        
        /** Creates or changes the value of the theme property of [param data_type] defined by [param name] and [param theme_type]. Use [method clear_theme_item] to remove the property.  
         *  Fails if the [param value] type is not accepted by [param data_type].  
         *      
         *  **Note:** This method is analogous to calling the corresponding data type specific method, but can be used for more generalized logic.  
         */
        set_theme_item(data_type: Theme.DataType, name: StringName, theme_type: StringName, value: any): void
        
        /** Returns the theme property of [param data_type] defined by [param name] and [param theme_type], if it exists.  
         *  Returns the engine fallback value if the property doesn't exist (see [ThemeDB]). Use [method has_theme_item] to check for existence.  
         *      
         *  **Note:** This method is analogous to calling the corresponding data type specific method, but can be used for more generalized logic.  
         */
        get_theme_item(data_type: Theme.DataType, name: StringName, theme_type: StringName): any
        
        /** Returns `true` if the theme property of [param data_type] defined by [param name] and [param theme_type] exists.  
         *  Returns `false` if it doesn't exist. Use [method set_theme_item] to define it.  
         *      
         *  **Note:** This method is analogous to calling the corresponding data type specific method, but can be used for more generalized logic.  
         */
        has_theme_item(data_type: Theme.DataType, name: StringName, theme_type: StringName): boolean
        
        /** Renames the theme property of [param data_type] defined by [param old_name] and [param theme_type] to [param name], if it exists.  
         *  Fails if it doesn't exist, or if a similar property with the new name already exists. Use [method has_theme_item] to check for existence, and [method clear_theme_item] to remove the existing property.  
         *      
         *  **Note:** This method is analogous to calling the corresponding data type specific method, but can be used for more generalized logic.  
         */
        rename_theme_item(data_type: Theme.DataType, old_name: StringName, name: StringName, theme_type: StringName): void
        
        /** Removes the theme property of [param data_type] defined by [param name] and [param theme_type], if it exists.  
         *  Fails if it doesn't exist. Use [method has_theme_item] to check for existence.  
         *      
         *  **Note:** This method is analogous to calling the corresponding data type specific method, but can be used for more generalized logic.  
         */
        clear_theme_item(data_type: Theme.DataType, name: StringName, theme_type: StringName): void
        
        /** Returns a list of names for properties of [param data_type] defined with [param theme_type]. Use [method get_theme_item_type_list] to get a list of possible theme type names.  
         *      
         *  **Note:** This method is analogous to calling the corresponding data type specific method, but can be used for more generalized logic.  
         */
        get_theme_item_list(data_type: Theme.DataType, theme_type: string): PackedStringArray
        
        /** Returns a list of all unique theme type names for [param data_type] properties. Use [method get_type_list] to get a list of all unique theme types.  
         *      
         *  **Note:** This method is analogous to calling the corresponding data type specific method, but can be used for more generalized logic.  
         */
        get_theme_item_type_list(data_type: Theme.DataType): PackedStringArray
        
        /** Marks [param theme_type] as a variation of [param base_type].  
         *  This adds [param theme_type] as a suggested option for [member Control.theme_type_variation] on a [Control] that is of the [param base_type] class.  
         *  Variations can also be nested, i.e. [param base_type] can be another variation. If a chain of variations ends with a [param base_type] matching the class of the [Control], the whole chain is going to be suggested as options.  
         *      
         *  **Note:** Suggestions only show up if this theme resource is set as the project default theme. See [member ProjectSettings.gui/theme/custom].  
         */
        set_type_variation(theme_type: StringName, base_type: StringName): void
        
        /** Returns `true` if [param theme_type] is marked as a variation of [param base_type]. */
        is_type_variation(theme_type: StringName, base_type: StringName): boolean
        
        /** Unmarks [param theme_type] as being a variation of another theme type. See [method set_type_variation]. */
        clear_type_variation(theme_type: StringName): void
        
        /** Returns the name of the base theme type if [param theme_type] is a valid variation type. Returns an empty string otherwise. */
        get_type_variation_base(theme_type: StringName): StringName
        
        /** Returns a list of all type variations for the given [param base_type]. */
        get_type_variation_list(base_type: StringName): PackedStringArray
        
        /** Adds an empty theme type for every valid data type.  
         *      
         *  **Note:** Empty types are not saved with the theme. This method only exists to perform in-memory changes to the resource. Use available `set_*` methods to add theme items.  
         */
        add_type(theme_type: StringName): void
        
        /** Removes the theme type, gracefully discarding defined theme items. If the type is a variation, this information is also erased. If the type is a base for type variations, those variations lose their base. */
        remove_type(theme_type: StringName): void
        
        /** Returns a list of all unique theme type names. Use the appropriate `get_*_type_list` method to get a list of unique theme types for a single data type. */
        get_type_list(): PackedStringArray
        
        /** Adds missing and overrides existing definitions with values from the [param other] theme resource.  
         *      
         *  **Note:** This modifies the current theme. If you want to merge two themes together without modifying either one, create a new empty theme and merge the other two into it one after another.  
         */
        merge_with(other: Theme): void
        
        /** Removes all the theme properties defined on the theme resource. */
        clear(): void
        
        /** The default base scale factor of this theme resource. Used by some controls to scale their visual properties based on the global scale factor. If this value is set to `0.0`, the global scale factor is used (see [member ThemeDB.fallback_base_scale]).  
         *  Use [method has_default_base_scale] to check if this value is valid.  
         */
        get default_base_scale(): number /*f64*/
        set default_base_scale(value: number /*f64*/)
        
        /** The default font of this theme resource. Used as the default value when trying to fetch a font resource that doesn't exist in this theme or is in invalid state. If the default font is also missing or invalid, the engine fallback value is used (see [member ThemeDB.fallback_font]).  
         *  Use [method has_default_font] to check if this value is valid.  
         */
        get default_font(): Font
        set default_font(value: Font)
        
        /** The default font size of this theme resource. Used as the default value when trying to fetch a font size value that doesn't exist in this theme or is in invalid state. If the default font size is also missing or invalid, the engine fallback value is used (see [member ThemeDB.fallback_font_size]).  
         *  Values below `0` are invalid and can be used to unset the property. Use [method has_default_font_size] to check if this value is valid.  
         */
        get default_font_size(): number /*i64*/
        set default_font_size(value: number /*i64*/)
    }
    class ThemeContext extends Object {
        constructor(identifier?: any)
        readonly changed: Signal //  => void
    }
    class ThemeEditor extends VBoxContainer {
        constructor(identifier?: any)
    }
    class ThemeEditorPlugin extends EditorPlugin {
        constructor(identifier?: any)
    }
    class ThemeEditorPreview extends VBoxContainer {
        constructor(identifier?: any)
        readonly control_picked: Signal // class_name: string => void
    }
    class ThemeItemEditorDialog extends AcceptDialog {
        constructor(identifier?: any)
        _update_edit_types(): void
        _update_edit_item_tree(_unnamed_arg0: string): void
    }
    class ThemeItemImportTree extends VBoxContainer {
        constructor(identifier?: any)
        readonly items_imported: Signal //  => void
    }
    class ThemeTypeDialog extends ConfirmationDialog {
        constructor(identifier?: any)
        readonly type_selected: Signal // type_name: string => void
    }
    class ThemeTypeEditor extends MarginContainer {
        constructor(identifier?: any)
        _update_type_items(): void
        _pin_leading_stylebox(_unnamed_arg0: string, _unnamed_arg1: StyleBox): void
        _unpin_leading_stylebox(): void
        _change_pinned_stylebox(): void
    }
    namespace Thread {
        enum Priority {
            /** A thread running with lower priority than normally. */
            PRIORITY_LOW = 0,
            
            /** A thread with a standard priority. */
            PRIORITY_NORMAL = 1,
            
            /** A thread running with higher priority than normally. */
            PRIORITY_HIGH = 2,
        }
    }
    /** A unit of execution in a process.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_thread.html  
     */
    class Thread extends RefCounted {
        constructor(identifier?: any)
        /** Starts a new [Thread] that calls [param callable].  
         *  If the method takes some arguments, you can pass them using [method Callable.bind].  
         *  The [param priority] of the [Thread] can be changed by passing a value from the [enum Priority] enum.  
         *  Returns [constant OK] on success, or [constant ERR_CANT_CREATE] on failure.  
         */
        start(callable: Callable, priority: Thread.Priority = 1): GodotError
        
        /** Returns the current [Thread]'s ID, uniquely identifying it among all threads. If the [Thread] has not started running or if [method wait_to_finish] has been called, this returns an empty string. */
        get_id(): string
        
        /** Returns `true` if this [Thread] has been started. Once started, this will return `true` until it is joined using [method wait_to_finish]. For checking if a [Thread] is still executing its task, use [method is_alive]. */
        is_started(): boolean
        
        /** Returns `true` if this [Thread] is currently running the provided function. This is useful for determining if [method wait_to_finish] can be called without blocking the calling thread.  
         *  To check if a [Thread] is joinable, use [method is_started].  
         */
        is_alive(): boolean
        
        /** Joins the [Thread] and waits for it to finish. Returns the output of the [Callable] passed to [method start].  
         *  Should either be used when you want to retrieve the value returned from the method called by the [Thread] or before freeing the instance that contains the [Thread].  
         *  To determine if this can be called without blocking the calling thread, check if [method is_alive] is `false`.  
         */
        wait_to_finish(): any
        
        /** Sets whether the thread safety checks the engine normally performs in methods of certain classes (e.g., [Node]) should happen **on the current thread**.  
         *  The default, for every thread, is that they are enabled (as if called with [param enabled] being `true`).  
         *  Those checks are conservative. That means that they will only succeed in considering a call thread-safe (and therefore allow it to happen) if the engine can guarantee such safety.  
         *  Because of that, there may be cases where the user may want to disable them ([param enabled] being `false`) to make certain operations allowed again. By doing so, it becomes the user's responsibility to ensure thread safety (e.g., by using [Mutex]) for those objects that are otherwise protected by the engine.  
         *      
         *  **Note:** This is an advanced usage of the engine. You are advised to use it only if you know what you are doing and there is no safer way.  
         *      
         *  **Note:** This is useful for scripts running on either arbitrary [Thread] objects or tasks submitted to the [WorkerThreadPool]. It doesn't apply to code running during [Node] group processing, where the checks will be always performed.  
         *      
         *  **Note:** Even in the case of having disabled the checks in a [WorkerThreadPool] task, there's no need to re-enable them at the end. The engine will do so.  
         */
        static set_thread_safety_checks_enabled(enabled: boolean): void
    }
    class TileAtlasView extends Control {
        constructor(identifier?: any)
        readonly transform_changed: Signal // zoom: number /*f64*/, scroll: Vector2 => void
    }
    /** Settings for a single tile in a [TileSet].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_tiledata.html  
     */
    class TileData extends Object {
        constructor(identifier?: any)
        set_flip_h(flip_h: boolean): void
        get_flip_h(): boolean
        set_flip_v(flip_v: boolean): void
        get_flip_v(): boolean
        set_transpose(transpose: boolean): void
        get_transpose(): boolean
        set_material(material: Material): void
        get_material(): Material
        set_texture_origin(texture_origin: Vector2i): void
        get_texture_origin(): Vector2i
        set_modulate(modulate: Color): void
        get_modulate(): Color
        set_z_index(z_index: number /*i64*/): void
        get_z_index(): number /*i64*/
        set_y_sort_origin(y_sort_origin: number /*i64*/): void
        get_y_sort_origin(): number /*i64*/
        
        /** Sets the occluder for the TileSet occlusion layer with index [param layer_id]. */
        set_occluder(layer_id: number /*i64*/, occluder_polygon: OccluderPolygon2D): void
        
        /** Returns the occluder polygon of the tile for the TileSet occlusion layer with index [param layer_id]. */
        get_occluder(layer_id: number /*i64*/): OccluderPolygon2D
        
        /** Sets the constant linear velocity. This does not move the tile. This linear velocity is applied to objects colliding with this tile. This is useful to create conveyor belts. */
        set_constant_linear_velocity(layer_id: number /*i64*/, velocity: Vector2): void
        
        /** Returns the constant linear velocity applied to objects colliding with this tile. */
        get_constant_linear_velocity(layer_id: number /*i64*/): Vector2
        
        /** Sets the constant angular velocity. This does not rotate the tile. This angular velocity is applied to objects colliding with this tile. */
        set_constant_angular_velocity(layer_id: number /*i64*/, velocity: number /*f64*/): void
        
        /** Returns the constant angular velocity applied to objects colliding with this tile. */
        get_constant_angular_velocity(layer_id: number /*i64*/): number /*f64*/
        
        /** Sets the polygons count for TileSet physics layer with index [param layer_id]. */
        set_collision_polygons_count(layer_id: number /*i64*/, polygons_count: number /*i64*/): void
        
        /** Returns how many polygons the tile has for TileSet physics layer with index [param layer_id]. */
        get_collision_polygons_count(layer_id: number /*i64*/): number /*i64*/
        
        /** Adds a collision polygon to the tile on the given TileSet physics layer. */
        add_collision_polygon(layer_id: number /*i64*/): void
        
        /** Removes the polygon at index [param polygon_index] for TileSet physics layer with index [param layer_id]. */
        remove_collision_polygon(layer_id: number /*i64*/, polygon_index: number /*i64*/): void
        
        /** Sets the points of the polygon at index [param polygon_index] for TileSet physics layer with index [param layer_id]. */
        set_collision_polygon_points(layer_id: number /*i64*/, polygon_index: number /*i64*/, polygon: PackedVector2Array): void
        
        /** Returns the points of the polygon at index [param polygon_index] for TileSet physics layer with index [param layer_id]. */
        get_collision_polygon_points(layer_id: number /*i64*/, polygon_index: number /*i64*/): PackedVector2Array
        
        /** Enables/disables one-way collisions on the polygon at index [param polygon_index] for TileSet physics layer with index [param layer_id]. */
        set_collision_polygon_one_way(layer_id: number /*i64*/, polygon_index: number /*i64*/, one_way: boolean): void
        
        /** Returns whether one-way collisions are enabled for the polygon at index [param polygon_index] for TileSet physics layer with index [param layer_id]. */
        is_collision_polygon_one_way(layer_id: number /*i64*/, polygon_index: number /*i64*/): boolean
        
        /** Enables/disables one-way collisions on the polygon at index [param polygon_index] for TileSet physics layer with index [param layer_id]. */
        set_collision_polygon_one_way_margin(layer_id: number /*i64*/, polygon_index: number /*i64*/, one_way_margin: number /*f64*/): void
        
        /** Returns the one-way margin (for one-way platforms) of the polygon at index [param polygon_index] for TileSet physics layer with index [param layer_id]. */
        get_collision_polygon_one_way_margin(layer_id: number /*i64*/, polygon_index: number /*i64*/): number /*f64*/
        set_terrain_set(terrain_set: number /*i64*/): void
        get_terrain_set(): number /*i64*/
        set_terrain(terrain: number /*i64*/): void
        get_terrain(): number /*i64*/
        
        /** Sets the tile's terrain bit for the given [param peering_bit] direction. */
        set_terrain_peering_bit(peering_bit: TileSet.CellNeighbor, terrain: number /*i64*/): void
        
        /** Returns the tile's terrain bit for the given [param peering_bit] direction. */
        get_terrain_peering_bit(peering_bit: TileSet.CellNeighbor): number /*i64*/
        
        /** Sets the navigation polygon for the TileSet navigation layer with index [param layer_id]. */
        set_navigation_polygon(layer_id: number /*i64*/, navigation_polygon: NavigationPolygon): void
        
        /** Returns the navigation polygon of the tile for the TileSet navigation layer with index [param layer_id]. */
        get_navigation_polygon(layer_id: number /*i64*/): NavigationPolygon
        set_probability(probability: number /*f64*/): void
        get_probability(): number /*f64*/
        
        /** Sets the tile's custom data value for the TileSet custom data layer with name [param layer_name]. */
        set_custom_data(layer_name: string, value: any): void
        
        /** Returns the custom data value for custom data layer named [param layer_name]. */
        get_custom_data(layer_name: string): any
        
        /** Sets the tile's custom data value for the TileSet custom data layer with index [param layer_id]. */
        set_custom_data_by_layer_id(layer_id: number /*i64*/, value: any): void
        
        /** Returns the custom data value for custom data layer with index [param layer_id]. */
        get_custom_data_by_layer_id(layer_id: number /*i64*/): any
        
        /** If `true`, the tile will have its texture flipped horizontally. */
        get flip_h(): boolean
        set flip_h(value: boolean)
        
        /** If `true`, the tile will have its texture flipped vertically. */
        get flip_v(): boolean
        set flip_v(value: boolean)
        
        /** If `true`, the tile will display transposed, i.e. with horizontal and vertical texture UVs swapped. */
        get transpose(): boolean
        set transpose(value: boolean)
        
        /** Offsets the position of where the tile is drawn. */
        get texture_origin(): Vector2i
        set texture_origin(value: Vector2i)
        
        /** Color modulation of the tile. */
        get modulate(): Color
        set modulate(value: Color)
        
        /** The [Material] to use for this [TileData]. This can be a [CanvasItemMaterial] to use the default shader, or a [ShaderMaterial] to use a custom shader. */
        get material(): CanvasItemMaterial | ShaderMaterial
        set material(value: CanvasItemMaterial | ShaderMaterial)
        
        /** Ordering index of this tile, relative to [TileMap]. */
        get z_index(): number /*i64*/
        set z_index(value: number /*i64*/)
        
        /** Vertical point of the tile used for determining y-sorted order. */
        get y_sort_origin(): number /*i64*/
        set y_sort_origin(value: number /*i64*/)
        
        /** ID of the terrain set that the tile uses. */
        get terrain_set(): number /*i64*/
        set terrain_set(value: number /*i64*/)
        
        /** ID of the terrain from the terrain set that the tile uses. */
        get terrain(): number /*i64*/
        set terrain(value: number /*i64*/)
        
        /** Relative probability of this tile being selected when drawing a pattern of random tiles. */
        get probability(): number /*f64*/
        set probability(value: number /*f64*/)
        
        /** Emitted when any of the properties are changed. */
        readonly changed: Signal //  => void
    }
    namespace TileMap {
        enum VisibilityMode {
            /** Use the debug settings to determine visibility. */
            VISIBILITY_MODE_DEFAULT = 0,
            
            /** Always hide. */
            VISIBILITY_MODE_FORCE_HIDE = 2,
            
            /** Always show. */
            VISIBILITY_MODE_FORCE_SHOW = 1,
        }
    }
    /** Node for 2D tile-based maps.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_tilemap.html  
     */
    class TileMap extends Node2D {
        constructor(identifier?: any)
        /** Should return `true` if the tile at coordinates [param coords] on layer [param layer] requires a runtime update.  
         *  **Warning:** Make sure this function only return `true` when needed. Any tile processed at runtime without a need for it will imply a significant performance penalty.  
         *      
         *  **Note:** If the result of this function should changed, use [method notify_runtime_tile_data_update] to notify the TileMap it needs an update.  
         */
        /* gdvirtual */ _use_tile_data_runtime_update(layer: number /*i64*/, coords: Vector2i): boolean
        
        /** Called with a TileData object about to be used internally by the TileMap, allowing its modification at runtime.  
         *  This method is only called if [method _use_tile_data_runtime_update] is implemented and returns `true` for the given tile [param coords] and [param layer].  
         *  **Warning:** The [param tile_data] object's sub-resources are the same as the one in the TileSet. Modifying them might impact the whole TileSet. Instead, make sure to duplicate those resources.  
         *      
         *  **Note:** If the properties of [param tile_data] object should change over time, use [method notify_runtime_tile_data_update] to notify the TileMap it needs an update.  
         */
        /* gdvirtual */ _tile_data_runtime_update(layer: number /*i64*/, coords: Vector2i, tile_data: TileData): void
        
        /** See [method set_layer_navigation_map]. */
        set_navigation_map(layer: number /*i64*/, map: RID): void
        
        /** See [method get_layer_navigation_map]. */
        get_navigation_map(layer: number /*i64*/): RID
        
        /**  *Deprecated.*  See [method notify_runtime_tile_data_update] and [method update_internals]. */
        force_update(layer: number /*i64*/ = -1): void
        set_tileset(tileset: TileSet): void
        get_tileset(): TileSet
        set_rendering_quadrant_size(size: number /*i64*/): void
        get_rendering_quadrant_size(): number /*i64*/
        
        /** Returns the number of layers in the TileMap. */
        get_layers_count(): number /*i64*/
        
        /** Adds a layer at the given position [param to_position] in the array. If [param to_position] is negative, the position is counted from the end, with `-1` adding the layer at the end of the array. */
        add_layer(to_position: number /*i64*/): void
        
        /** Moves the layer at index [param layer] to the given position [param to_position] in the array. */
        move_layer(layer: number /*i64*/, to_position: number /*i64*/): void
        
        /** Removes the layer at index [param layer]. */
        remove_layer(layer: number /*i64*/): void
        
        /** Sets a layer's name. This is mostly useful in the editor.  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        set_layer_name(layer: number /*i64*/, name: string): void
        
        /** Returns a TileMap layer's name.  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        get_layer_name(layer: number /*i64*/): string
        
        /** Enables or disables the layer [param layer]. A disabled layer is not processed at all (no rendering, no physics, etc...).  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        set_layer_enabled(layer: number /*i64*/, enabled: boolean): void
        
        /** Returns if a layer is enabled.  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        is_layer_enabled(layer: number /*i64*/): boolean
        
        /** Sets a layer's color. It will be multiplied by tile's color and TileMap's modulate.  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        set_layer_modulate(layer: number /*i64*/, modulate: Color): void
        
        /** Returns a TileMap layer's modulate.  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        get_layer_modulate(layer: number /*i64*/): Color
        
        /** Enables or disables a layer's Y-sorting. If a layer is Y-sorted, the layer will behave as a CanvasItem node where each of its tile gets Y-sorted.  
         *  Y-sorted layers should usually be on different Z-index values than not Y-sorted layers, otherwise, each of those layer will be Y-sorted as whole with the Y-sorted one. This is usually an undesired behavior.  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        set_layer_y_sort_enabled(layer: number /*i64*/, y_sort_enabled: boolean): void
        
        /** Returns if a layer Y-sorts its tiles.  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        is_layer_y_sort_enabled(layer: number /*i64*/): boolean
        
        /** Sets a layer's Y-sort origin value. This Y-sort origin value is added to each tile's Y-sort origin value.  
         *  This allows, for example, to fake a different height level on each layer. This can be useful for top-down view games.  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        set_layer_y_sort_origin(layer: number /*i64*/, y_sort_origin: number /*i64*/): void
        
        /** Returns a TileMap layer's Y sort origin.  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        get_layer_y_sort_origin(layer: number /*i64*/): number /*i64*/
        
        /** Sets a layers Z-index value. This Z-index is added to each tile's Z-index value.  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        set_layer_z_index(layer: number /*i64*/, z_index: number /*i64*/): void
        
        /** Returns a TileMap layer's Z-index value.  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        get_layer_z_index(layer: number /*i64*/): number /*i64*/
        
        /** Enables or disables a layer's built-in navigation regions generation. Disable this if you need to bake navigation regions from a TileMap using a [NavigationRegion2D] node. */
        set_layer_navigation_enabled(layer: number /*i64*/, enabled: boolean): void
        
        /** Returns if a layer's built-in navigation regions generation is enabled. */
        is_layer_navigation_enabled(layer: number /*i64*/): boolean
        
        /** Assigns a [NavigationServer2D] navigation map [RID] to the specified TileMap [param layer].  
         *  By default the TileMap uses the default [World2D] navigation map for the first TileMap layer. For each additional TileMap layer a new navigation map is created for the additional layer.  
         *  In order to make [NavigationAgent2D] switch between TileMap layer navigation maps use [method NavigationAgent2D.set_navigation_map] with the navigation map received from [method get_layer_navigation_map].  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        set_layer_navigation_map(layer: number /*i64*/, map: RID): void
        
        /** Returns the [NavigationServer2D] navigation map [RID] currently assigned to the specified TileMap [param layer].  
         *  By default the TileMap uses the default [World2D] navigation map for the first TileMap layer. For each additional TileMap layer a new navigation map is created for the additional layer.  
         *  In order to make [NavigationAgent2D] switch between TileMap layer navigation maps use [method NavigationAgent2D.set_navigation_map] with the navigation map received from [method get_layer_navigation_map].  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        get_layer_navigation_map(layer: number /*i64*/): RID
        set_collision_animatable(enabled: boolean): void
        is_collision_animatable(): boolean
        set_collision_visibility_mode(collision_visibility_mode: TileMap.VisibilityMode): void
        get_collision_visibility_mode(): TileMap.VisibilityMode
        set_navigation_visibility_mode(navigation_visibility_mode: TileMap.VisibilityMode): void
        get_navigation_visibility_mode(): TileMap.VisibilityMode
        
        /** Sets the tile identifiers for the cell on layer [param layer] at coordinates [param coords]. Each tile of the [TileSet] is identified using three parts:  
         *  - The source identifier [param source_id] identifies a [TileSetSource] identifier. See [method TileSet.set_source_id],  
         *  - The atlas coordinates identifier [param atlas_coords] identifies a tile coordinates in the atlas (if the source is a [TileSetAtlasSource]). For [TileSetScenesCollectionSource] it should always be `Vector2i(0, 0)`),  
         *  - The alternative tile identifier [param alternative_tile] identifies a tile alternative in the atlas (if the source is a [TileSetAtlasSource]), and the scene for a [TileSetScenesCollectionSource].  
         *  If [param source_id] is set to `-1`, [param atlas_coords] to `Vector2i(-1, -1)` or [param alternative_tile] to `-1`, the cell will be erased. An erased cell gets **all** its identifiers automatically set to their respective invalid values, namely `-1`, `Vector2i(-1, -1)` and `-1`.  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        set_cell(layer: number /*i64*/, coords: Vector2i, source_id: number /*i64*/ = -1, atlas_coords: Vector2i = <any> {} /*compound.type from 6([object Object])*/, alternative_tile: number /*i64*/ = 0): void
        
        /** Erases the cell on layer [param layer] at coordinates [param coords].  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        erase_cell(layer: number /*i64*/, coords: Vector2i): void
        
        /** Returns the tile source ID of the cell on layer [param layer] at coordinates [param coords]. Returns `-1` if the cell does not exist.  
         *  If [param use_proxies] is `false`, ignores the [TileSet]'s tile proxies, returning the raw alternative identifier. See [method TileSet.map_tile_proxy].  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        get_cell_source_id(layer: number /*i64*/, coords: Vector2i, use_proxies: boolean = false): number /*i64*/
        
        /** Returns the tile atlas coordinates ID of the cell on layer [param layer] at coordinates [param coords]. If [param use_proxies] is `false`, ignores the [TileSet]'s tile proxies, returning the raw alternative identifier. See [method TileSet.map_tile_proxy].  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        get_cell_atlas_coords(layer: number /*i64*/, coords: Vector2i, use_proxies: boolean = false): Vector2i
        
        /** Returns the tile alternative ID of the cell on layer [param layer] at [param coords]. If [param use_proxies] is `false`, ignores the [TileSet]'s tile proxies, returning the raw alternative identifier. See [method TileSet.map_tile_proxy].  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        get_cell_alternative_tile(layer: number /*i64*/, coords: Vector2i, use_proxies: boolean = false): number /*i64*/
        
        /** Returns the [TileData] object associated with the given cell, or `null` if the cell does not exist or is not a [TileSetAtlasSource].  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         *  If [param use_proxies] is `false`, ignores the [TileSet]'s tile proxies, returning the raw alternative identifier. See [method TileSet.map_tile_proxy].  
         *    
         */
        get_cell_tile_data(layer: number /*i64*/, coords: Vector2i, use_proxies: boolean = false): TileData
        
        /** Returns the coordinates of the tile for given physics body RID. Such RID can be retrieved from [method KinematicCollision2D.get_collider_rid], when colliding with a tile. */
        get_coords_for_body_rid(body: RID): Vector2i
        
        /** Returns the tilemap layer of the tile for given physics body RID. Such RID can be retrieved from [method KinematicCollision2D.get_collider_rid], when colliding with a tile. */
        get_layer_for_body_rid(body: RID): number /*i64*/
        
        /** Creates a new [TileMapPattern] from the given layer and set of cells.  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        get_pattern(layer: number /*i64*/, coords_array: Array): TileMapPattern
        
        /** Returns for the given coordinate [param coords_in_pattern] in a [TileMapPattern] the corresponding cell coordinates if the pattern was pasted at the [param position_in_tilemap] coordinates (see [method set_pattern]). This mapping is required as in half-offset tile shapes, the mapping might not work by calculating `position_in_tile_map + coords_in_pattern`. */
        map_pattern(position_in_tilemap: Vector2i, coords_in_pattern: Vector2i, pattern: TileMapPattern): Vector2i
        
        /** Paste the given [TileMapPattern] at the given [param position] and [param layer] in the tile map.  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        set_pattern(layer: number /*i64*/, position: Vector2i, pattern: TileMapPattern): void
        
        /** Update all the cells in the [param cells] coordinates array so that they use the given [param terrain] for the given [param terrain_set]. If an updated cell has the same terrain as one of its neighboring cells, this function tries to join the two. This function might update neighboring tiles if needed to create correct terrain transitions.  
         *  If [param ignore_empty_terrains] is true, empty terrains will be ignored when trying to find the best fitting tile for the given terrain constraints.  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         *      
         *  **Note:** To work correctly, this method requires the TileMap's TileSet to have terrains set up with all required terrain combinations. Otherwise, it may produce unexpected results.  
         */
        set_cells_terrain_connect(layer: number /*i64*/, cells: Array, terrain_set: number /*i64*/, terrain: number /*i64*/, ignore_empty_terrains: boolean = true): void
        
        /** Update all the cells in the [param path] coordinates array so that they use the given [param terrain] for the given [param terrain_set]. The function will also connect two successive cell in the path with the same terrain. This function might update neighboring tiles if needed to create correct terrain transitions.  
         *  If [param ignore_empty_terrains] is true, empty terrains will be ignored when trying to find the best fitting tile for the given terrain constraints.  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         *      
         *  **Note:** To work correctly, this method requires the TileMap's TileSet to have terrains set up with all required terrain combinations. Otherwise, it may produce unexpected results.  
         */
        set_cells_terrain_path(layer: number /*i64*/, path: Array, terrain_set: number /*i64*/, terrain: number /*i64*/, ignore_empty_terrains: boolean = true): void
        
        /** Clears cells that do not exist in the tileset. */
        fix_invalid_tiles(): void
        
        /** Clears all cells on the given layer.  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        clear_layer(layer: number /*i64*/): void
        
        /** Clears all cells. */
        clear(): void
        
        /** Triggers a direct update of the TileMap. Usually, calling this function is not needed, as TileMap node updates automatically when one of its properties or cells is modified.  
         *  However, for performance reasons, those updates are batched and delayed to the end of the frame. Calling this function will force the TileMap to update right away instead.  
         *  **Warning:** Updating the TileMap is computationally expensive and may impact performance. Try to limit the number of updates and how many tiles they impact.  
         */
        update_internals(): void
        
        /** Notifies the TileMap node that calls to [method _use_tile_data_runtime_update] or [method _tile_data_runtime_update] will lead to different results. This will thus trigger a TileMap update.  
         *  If [param layer] is provided, only notifies changes for the given layer. Providing the [param layer] argument (when applicable) is usually preferred for performance reasons.  
         *  **Warning:** Updating the TileMap is computationally expensive and may impact performance. Try to limit the number of calls to this function to avoid unnecessary update.  
         *      
         *  **Note:** This does not trigger a direct update of the TileMap, the update will be done at the end of the frame as usual (unless you call [method update_internals]).  
         */
        notify_runtime_tile_data_update(layer: number /*i64*/ = -1): void
        
        /** Returns the list of all neighbourings cells to the one at [param coords]. */
        get_surrounding_cells(coords: Vector2i): Array
        
        /** Returns a [Vector2i] array with the positions of all cells containing a tile in the given layer. A cell is considered empty if its source identifier equals -1, its atlas coordinates identifiers is `Vector2(-1, -1)` and its alternative identifier is -1.  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        get_used_cells(layer: number /*i64*/): Array
        
        /** Returns a [Vector2i] array with the positions of all cells containing a tile in the given layer. Tiles may be filtered according to their source ([param source_id]), their atlas coordinates ([param atlas_coords]) or alternative id ([param alternative_tile]).  
         *  If a parameter has its value set to the default one, this parameter is not used to filter a cell. Thus, if all parameters have their respective default value, this method returns the same result as [method get_used_cells].  
         *  A cell is considered empty if its source identifier equals -1, its atlas coordinates identifiers is `Vector2(-1, -1)` and its alternative identifier is -1.  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        get_used_cells_by_id(layer: number /*i64*/, source_id: number /*i64*/ = -1, atlas_coords: Vector2i = <any> {} /*compound.type from 6([object Object])*/, alternative_tile: number /*i64*/ = -1): Array
        
        /** Returns a rectangle enclosing the used (non-empty) tiles of the map, including all layers. */
        get_used_rect(): Rect2i
        
        /** Returns the centered position of a cell in the TileMap's local coordinate space. To convert the returned value into global coordinates, use [method Node2D.to_global]. See also [method local_to_map].  
         *      
         *  **Note:** This may not correspond to the visual position of the tile, i.e. it ignores the [member TileData.texture_origin] property of individual tiles.  
         */
        map_to_local(map_position: Vector2i): Vector2
        
        /** Returns the map coordinates of the cell containing the given [param local_position]. If [param local_position] is in global coordinates, consider using [method Node2D.to_local] before passing it to this method. See also [method map_to_local]. */
        local_to_map(local_position: Vector2): Vector2i
        
        /** Returns the neighboring cell to the one at coordinates [param coords], identified by the [param neighbor] direction. This method takes into account the different layouts a TileMap can take. */
        get_neighbor_cell(coords: Vector2i, neighbor: TileSet.CellNeighbor): Vector2i
        
        /** The assigned [TileSet]. */
        get tile_set(): TileSet
        set tile_set(value: TileSet)
        
        /** The TileMap's quadrant size. A quadrant is a group of tiles to be drawn together on a single canvas item, for optimization purposes. [member rendering_quadrant_size] defines the length of a square's side, in the map's coordinate system, that forms the quadrant. Thus, the default quandrant size groups together `16 * 16 = 256` tiles.  
         *  The quadrant size does not apply on Y-sorted layers, as tiles are be grouped by Y position instead in that case.  
         *      
         *  **Note:** As quadrants are created according to the map's coordinate system, the quadrant's "square shape" might not look like square in the TileMap's local coordinate system.  
         */
        get rendering_quadrant_size(): number /*i64*/
        set rendering_quadrant_size(value: number /*i64*/)
        
        /** If enabled, the TileMap will see its collisions synced to the physics tick and change its collision type from static to kinematic. This is required to create TileMap-based moving platform.  
         *      
         *  **Note:** Enabling [member collision_animatable] may have a small performance impact, only do it if the TileMap is moving and has colliding tiles.  
         */
        get collision_animatable(): boolean
        set collision_animatable(value: boolean)
        
        /** Show or hide the TileMap's collision shapes. If set to [constant VISIBILITY_MODE_DEFAULT], this depends on the show collision debug settings. */
        get collision_visibility_mode(): number /*i64*/
        set collision_visibility_mode(value: number /*i64*/)
        
        /** Show or hide the TileMap's navigation meshes. If set to [constant VISIBILITY_MODE_DEFAULT], this depends on the show navigation debug settings. */
        get navigation_visibility_mode(): number /*i64*/
        set navigation_visibility_mode(value: number /*i64*/)
        
        /** Emitted when the [TileSet] of this TileMap changes. */
        readonly changed: Signal //  => void
    }
    class TileMapEditor extends VBoxContainer {
        constructor(identifier?: any)
    }
    class TileMapEditorPlugin extends EditorPlugin {
        constructor(identifier?: any)
    }
    class TileMapEditorTerrainsPlugin extends Object {
        constructor(identifier?: any)
    }
    class TileMapEditorTilesPlugin extends Object {
        constructor(identifier?: any)
        _scene_thumbnail_done(_unnamed_arg0: string, _unnamed_arg1: Texture2D, _unnamed_arg2: Texture2D, _unnamed_arg3: any): void
        _set_tile_map_selection(selection: Array): void
        _get_tile_map_selection(): Array
    }
    /** Holds a pattern to be copied from or pasted into [TileMap]s.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_tilemappattern.html  
     */
    class TileMapPattern extends Resource {
        constructor(identifier?: any)
        /** Sets the tile identifiers for the cell at coordinates [param coords]. See [method TileMap.set_cell]. */
        set_cell(coords: Vector2i, source_id: number /*i64*/ = -1, atlas_coords: Vector2i = <any> {} /*compound.type from 6([object Object])*/, alternative_tile: number /*i64*/ = -1): void
        
        /** Returns whether the pattern has a tile at the given coordinates. */
        has_cell(coords: Vector2i): boolean
        
        /** Remove the cell at the given coordinates. */
        remove_cell(coords: Vector2i, update_size: boolean): void
        
        /** Returns the tile source ID of the cell at [param coords]. */
        get_cell_source_id(coords: Vector2i): number /*i64*/
        
        /** Returns the tile atlas coordinates ID of the cell at [param coords]. */
        get_cell_atlas_coords(coords: Vector2i): Vector2i
        
        /** Returns the tile alternative ID of the cell at [param coords]. */
        get_cell_alternative_tile(coords: Vector2i): number /*i64*/
        
        /** Returns the list of used cell coordinates in the pattern. */
        get_used_cells(): Array
        
        /** Returns the size, in cells, of the pattern. */
        get_size(): Vector2i
        
        /** Sets the size of the pattern. */
        set_size(size: Vector2i): void
        
        /** Returns whether the pattern is empty or not. */
        is_empty(): boolean
    }
    class TileProxiesManagerDialog extends ConfirmationDialog {
        constructor(identifier?: any)
        _update_lists(): void
        _unhandled_key_input(_unnamed_arg0: InputEvent): void
    }
    namespace TileSet {
        enum TileShape {
            /** Rectangular tile shape. */
            TILE_SHAPE_SQUARE = 0,
            
            /** Diamond tile shape (for isometric look).  
             *      
             *  **Note:** Isometric [TileSet] works best if [TileMap] and all its layers have Y-sort enabled.  
             */
            TILE_SHAPE_ISOMETRIC = 1,
            
            /** Rectangular tile shape with one row/column out of two offset by half a tile. */
            TILE_SHAPE_HALF_OFFSET_SQUARE = 2,
            
            /** Hexagonal tile shape. */
            TILE_SHAPE_HEXAGON = 3,
        }
        enum TileLayout {
            /** Tile coordinates layout where both axis stay consistent with their respective local horizontal and vertical axis. */
            TILE_LAYOUT_STACKED = 0,
            
            /** Same as [constant TILE_LAYOUT_STACKED], but the first half-offset is negative instead of positive. */
            TILE_LAYOUT_STACKED_OFFSET = 1,
            
            /** Tile coordinates layout where the horizontal axis stay horizontal, and the vertical one goes down-right. */
            TILE_LAYOUT_STAIRS_RIGHT = 2,
            
            /** Tile coordinates layout where the vertical axis stay vertical, and the horizontal one goes down-right. */
            TILE_LAYOUT_STAIRS_DOWN = 3,
            
            /** Tile coordinates layout where the horizontal axis goes up-right, and the vertical one goes down-right. */
            TILE_LAYOUT_DIAMOND_RIGHT = 4,
            
            /** Tile coordinates layout where the horizontal axis goes down-right, and the vertical one goes down-left. */
            TILE_LAYOUT_DIAMOND_DOWN = 5,
        }
        enum TileOffsetAxis {
            /** Horizontal half-offset. */
            TILE_OFFSET_AXIS_HORIZONTAL = 0,
            
            /** Vertical half-offset. */
            TILE_OFFSET_AXIS_VERTICAL = 1,
        }
        enum CellNeighbor {
            /** Neighbor on the right side. */
            CELL_NEIGHBOR_RIGHT_SIDE = 0,
            
            /** Neighbor in the right corner. */
            CELL_NEIGHBOR_RIGHT_CORNER = 1,
            
            /** Neighbor on the bottom right side. */
            CELL_NEIGHBOR_BOTTOM_RIGHT_SIDE = 2,
            
            /** Neighbor in the bottom right corner. */
            CELL_NEIGHBOR_BOTTOM_RIGHT_CORNER = 3,
            
            /** Neighbor on the bottom side. */
            CELL_NEIGHBOR_BOTTOM_SIDE = 4,
            
            /** Neighbor in the bottom corner. */
            CELL_NEIGHBOR_BOTTOM_CORNER = 5,
            
            /** Neighbor on the bottom left side. */
            CELL_NEIGHBOR_BOTTOM_LEFT_SIDE = 6,
            
            /** Neighbor in the bottom left corner. */
            CELL_NEIGHBOR_BOTTOM_LEFT_CORNER = 7,
            
            /** Neighbor on the left side. */
            CELL_NEIGHBOR_LEFT_SIDE = 8,
            
            /** Neighbor in the left corner. */
            CELL_NEIGHBOR_LEFT_CORNER = 9,
            
            /** Neighbor on the top left side. */
            CELL_NEIGHBOR_TOP_LEFT_SIDE = 10,
            
            /** Neighbor in the top left corner. */
            CELL_NEIGHBOR_TOP_LEFT_CORNER = 11,
            
            /** Neighbor on the top side. */
            CELL_NEIGHBOR_TOP_SIDE = 12,
            
            /** Neighbor in the top corner. */
            CELL_NEIGHBOR_TOP_CORNER = 13,
            
            /** Neighbor on the top right side. */
            CELL_NEIGHBOR_TOP_RIGHT_SIDE = 14,
            
            /** Neighbor in the top right corner. */
            CELL_NEIGHBOR_TOP_RIGHT_CORNER = 15,
        }
        enum TerrainMode {
            /** Requires both corners and side to match with neighboring tiles' terrains. */
            TERRAIN_MODE_MATCH_CORNERS_AND_SIDES = 0,
            
            /** Requires corners to match with neighboring tiles' terrains. */
            TERRAIN_MODE_MATCH_CORNERS = 1,
            
            /** Requires sides to match with neighboring tiles' terrains. */
            TERRAIN_MODE_MATCH_SIDES = 2,
        }
    }
    /** Tile library for tilemaps.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_tileset.html  
     */
    class TileSet extends Resource {
        constructor(identifier?: any)
        /** Returns a new unused source ID. This generated ID is the same that a call to [method add_source] would return. */
        get_next_source_id(): number /*i64*/
        
        /** Adds a [TileSetSource] to the TileSet. If [param atlas_source_id_override] is not -1, also set its source ID. Otherwise, a unique identifier is automatically generated.  
         *  The function returns the added source ID or -1 if the source could not be added.  
         *  **Warning:** A source cannot belong to two TileSets at the same time. If the added source was attached to another [TileSet], it will be removed from that one.  
         */
        add_source(source: TileSetSource, atlas_source_id_override: number /*i64*/ = -1): number /*i64*/
        
        /** Removes the source with the given source ID. */
        remove_source(source_id: number /*i64*/): void
        
        /** Changes a source's ID. */
        set_source_id(source_id: number /*i64*/, new_source_id: number /*i64*/): void
        
        /** Returns the number of [TileSetSource] in this TileSet. */
        get_source_count(): number /*i64*/
        
        /** Returns the source ID for source with index [param index]. */
        get_source_id(index: number /*i64*/): number /*i64*/
        
        /** Returns if this TileSet has a source for the given source ID. */
        has_source(source_id: number /*i64*/): boolean
        
        /** Returns the [TileSetSource] with ID [param source_id]. */
        get_source(source_id: number /*i64*/): TileSetSource
        set_tile_shape(shape: TileSet.TileShape): void
        get_tile_shape(): TileSet.TileShape
        set_tile_layout(layout: TileSet.TileLayout): void
        get_tile_layout(): TileSet.TileLayout
        set_tile_offset_axis(alignment: TileSet.TileOffsetAxis): void
        get_tile_offset_axis(): TileSet.TileOffsetAxis
        set_tile_size(size: Vector2i): void
        get_tile_size(): Vector2i
        set_uv_clipping(uv_clipping: boolean): void
        is_uv_clipping(): boolean
        
        /** Returns the occlusion layers count. */
        get_occlusion_layers_count(): number /*i64*/
        
        /** Adds an occlusion layer to the TileSet at the given position [param to_position] in the array. If [param to_position] is -1, adds it at the end of the array.  
         *  Occlusion layers allow assigning occlusion polygons to atlas tiles.  
         */
        add_occlusion_layer(to_position: number /*i64*/ = -1): void
        
        /** Moves the occlusion layer at index [param layer_index] to the given position [param to_position] in the array. Also updates the atlas tiles accordingly. */
        move_occlusion_layer(layer_index: number /*i64*/, to_position: number /*i64*/): void
        
        /** Removes the occlusion layer at index [param layer_index]. Also updates the atlas tiles accordingly. */
        remove_occlusion_layer(layer_index: number /*i64*/): void
        
        /** Sets the occlusion layer (as in the rendering server) for occluders in the given TileSet occlusion layer. */
        set_occlusion_layer_light_mask(layer_index: number /*i64*/, light_mask: number /*i64*/): void
        
        /** Returns the light mask of the occlusion layer. */
        get_occlusion_layer_light_mask(layer_index: number /*i64*/): number /*i64*/
        
        /** Enables or disables SDF collision for occluders in the given TileSet occlusion layer. */
        set_occlusion_layer_sdf_collision(layer_index: number /*i64*/, sdf_collision: boolean): void
        
        /** Returns if the occluders from this layer use `sdf_collision`. */
        get_occlusion_layer_sdf_collision(layer_index: number /*i64*/): boolean
        
        /** Returns the physics layers count. */
        get_physics_layers_count(): number /*i64*/
        
        /** Adds a physics layer to the TileSet at the given position [param to_position] in the array. If [param to_position] is -1, adds it at the end of the array.  
         *  Physics layers allow assigning collision polygons to atlas tiles.  
         */
        add_physics_layer(to_position: number /*i64*/ = -1): void
        
        /** Moves the physics layer at index [param layer_index] to the given position [param to_position] in the array. Also updates the atlas tiles accordingly. */
        move_physics_layer(layer_index: number /*i64*/, to_position: number /*i64*/): void
        
        /** Removes the physics layer at index [param layer_index]. Also updates the atlas tiles accordingly. */
        remove_physics_layer(layer_index: number /*i64*/): void
        
        /** Sets the physics layer (as in the physics server) for bodies in the given TileSet physics layer. */
        set_physics_layer_collision_layer(layer_index: number /*i64*/, layer: number /*i64*/): void
        
        /** Returns the collision layer (as in the physics server) bodies on the given TileSet's physics layer are in. */
        get_physics_layer_collision_layer(layer_index: number /*i64*/): number /*i64*/
        
        /** Sets the physics layer (as in the physics server) for bodies in the given TileSet physics layer. */
        set_physics_layer_collision_mask(layer_index: number /*i64*/, mask: number /*i64*/): void
        
        /** Returns the collision mask of bodies on the given TileSet's physics layer. */
        get_physics_layer_collision_mask(layer_index: number /*i64*/): number /*i64*/
        
        /** Sets the physics material for bodies in the given TileSet physics layer. */
        set_physics_layer_physics_material(layer_index: number /*i64*/, physics_material: PhysicsMaterial): void
        
        /** Returns the physics material of bodies on the given TileSet's physics layer. */
        get_physics_layer_physics_material(layer_index: number /*i64*/): PhysicsMaterial
        
        /** Returns the terrain sets count. */
        get_terrain_sets_count(): number /*i64*/
        
        /** Adds a new terrain set at the given position [param to_position] in the array. If [param to_position] is -1, adds it at the end of the array. */
        add_terrain_set(to_position: number /*i64*/ = -1): void
        
        /** Moves the terrain set at index [param terrain_set] to the given position [param to_position] in the array. Also updates the atlas tiles accordingly. */
        move_terrain_set(terrain_set: number /*i64*/, to_position: number /*i64*/): void
        
        /** Removes the terrain set at index [param terrain_set]. Also updates the atlas tiles accordingly. */
        remove_terrain_set(terrain_set: number /*i64*/): void
        
        /** Sets a terrain mode. Each mode determines which bits of a tile shape is used to match the neighboring tiles' terrains. */
        set_terrain_set_mode(terrain_set: number /*i64*/, mode: TileSet.TerrainMode): void
        
        /** Returns a terrain set mode. */
        get_terrain_set_mode(terrain_set: number /*i64*/): TileSet.TerrainMode
        
        /** Returns the number of terrains in the given terrain set. */
        get_terrains_count(terrain_set: number /*i64*/): number /*i64*/
        
        /** Adds a new terrain to the given terrain set [param terrain_set] at the given position [param to_position] in the array. If [param to_position] is -1, adds it at the end of the array. */
        add_terrain(terrain_set: number /*i64*/, to_position: number /*i64*/ = -1): void
        
        /** Moves the terrain at index [param terrain_index] for terrain set [param terrain_set] to the given position [param to_position] in the array. Also updates the atlas tiles accordingly. */
        move_terrain(terrain_set: number /*i64*/, terrain_index: number /*i64*/, to_position: number /*i64*/): void
        
        /** Removes the terrain at index [param terrain_index] in the given terrain set [param terrain_set]. Also updates the atlas tiles accordingly. */
        remove_terrain(terrain_set: number /*i64*/, terrain_index: number /*i64*/): void
        
        /** Sets a terrain's name. */
        set_terrain_name(terrain_set: number /*i64*/, terrain_index: number /*i64*/, name: string): void
        
        /** Returns a terrain's name. */
        get_terrain_name(terrain_set: number /*i64*/, terrain_index: number /*i64*/): string
        
        /** Sets a terrain's color. This color is used for identifying the different terrains in the TileSet editor. */
        set_terrain_color(terrain_set: number /*i64*/, terrain_index: number /*i64*/, color: Color): void
        
        /** Returns a terrain's color. */
        get_terrain_color(terrain_set: number /*i64*/, terrain_index: number /*i64*/): Color
        
        /** Returns the navigation layers count. */
        get_navigation_layers_count(): number /*i64*/
        
        /** Adds a navigation layer to the TileSet at the given position [param to_position] in the array. If [param to_position] is -1, adds it at the end of the array.  
         *  Navigation layers allow assigning a navigable area to atlas tiles.  
         */
        add_navigation_layer(to_position: number /*i64*/ = -1): void
        
        /** Moves the navigation layer at index [param layer_index] to the given position [param to_position] in the array. Also updates the atlas tiles accordingly. */
        move_navigation_layer(layer_index: number /*i64*/, to_position: number /*i64*/): void
        
        /** Removes the navigation layer at index [param layer_index]. Also updates the atlas tiles accordingly. */
        remove_navigation_layer(layer_index: number /*i64*/): void
        
        /** Sets the navigation layers (as in the navigation server) for navigation regions in the given TileSet navigation layer. */
        set_navigation_layer_layers(layer_index: number /*i64*/, layers: number /*i64*/): void
        
        /** Returns the navigation layers (as in the Navigation server) of the given TileSet navigation layer. */
        get_navigation_layer_layers(layer_index: number /*i64*/): number /*i64*/
        
        /** Based on [param value], enables or disables the specified navigation layer of the TileSet navigation data layer identified by the given [param layer_index], given a navigation_layers [param layer_number] between 1 and 32. */
        set_navigation_layer_layer_value(layer_index: number /*i64*/, layer_number: number /*i64*/, value: boolean): void
        
        /** Returns whether or not the specified navigation layer of the TileSet navigation data layer identified by the given [param layer_index] is enabled, given a navigation_layers [param layer_number] between 1 and 32. */
        get_navigation_layer_layer_value(layer_index: number /*i64*/, layer_number: number /*i64*/): boolean
        
        /** Returns the custom data layers count. */
        get_custom_data_layers_count(): number /*i64*/
        
        /** Adds a custom data layer to the TileSet at the given position [param to_position] in the array. If [param to_position] is -1, adds it at the end of the array.  
         *  Custom data layers allow assigning custom properties to atlas tiles.  
         */
        add_custom_data_layer(to_position: number /*i64*/ = -1): void
        
        /** Moves the custom data layer at index [param layer_index] to the given position [param to_position] in the array. Also updates the atlas tiles accordingly. */
        move_custom_data_layer(layer_index: number /*i64*/, to_position: number /*i64*/): void
        
        /** Removes the custom data layer at index [param layer_index]. Also updates the atlas tiles accordingly. */
        remove_custom_data_layer(layer_index: number /*i64*/): void
        
        /** Returns the index of the custom data layer identified by the given name. */
        get_custom_data_layer_by_name(layer_name: string): number /*i64*/
        
        /** Sets the name of the custom data layer identified by the given index. Names are identifiers of the layer therefore if the name is already taken it will fail and raise an error. */
        set_custom_data_layer_name(layer_index: number /*i64*/, layer_name: string): void
        
        /** Returns the name of the custom data layer identified by the given index. */
        get_custom_data_layer_name(layer_index: number /*i64*/): string
        
        /** Sets the type of the custom data layer identified by the given index. */
        set_custom_data_layer_type(layer_index: number /*i64*/, layer_type: Variant.Type): void
        
        /** Returns the type of the custom data layer identified by the given index. */
        get_custom_data_layer_type(layer_index: number /*i64*/): Variant.Type
        
        /** Creates a source-level proxy for the given source ID. A proxy will map set of tile identifiers to another set of identifiers. Both the atlas coordinates ID and the alternative tile ID are kept the same when using source-level proxies.  
         *  This can be used to replace a source in all TileMaps using this TileSet, as TileMap nodes will find and use the proxy's target source when one is available.  
         *  Proxied tiles can be automatically replaced in TileMap nodes using the editor.  
         */
        set_source_level_tile_proxy(source_from: number /*i64*/, source_to: number /*i64*/): void
        
        /** Returns the source-level proxy for the given source identifier.  
         *  If the TileSet has no proxy for the given identifier, returns -1.  
         */
        get_source_level_tile_proxy(source_from: number /*i64*/): number /*i64*/
        
        /** Returns if there is a source-level proxy for the given source ID. */
        has_source_level_tile_proxy(source_from: number /*i64*/): boolean
        
        /** Removes a source-level tile proxy. */
        remove_source_level_tile_proxy(source_from: number /*i64*/): void
        
        /** Creates a coordinates-level proxy for the given identifiers. A proxy will map set of tile identifiers to another set of identifiers. The alternative tile ID is kept the same when using coordinates-level proxies.  
         *  This can be used to replace a tile in all TileMaps using this TileSet, as TileMap nodes will find and use the proxy's target tile when one is available.  
         *  Proxied tiles can be automatically replaced in TileMap nodes using the editor.  
         */
        set_coords_level_tile_proxy(p_source_from: number /*i64*/, coords_from: Vector2i, source_to: number /*i64*/, coords_to: Vector2i): void
        
        /** Returns the coordinate-level proxy for the given identifiers. The returned array contains the two target identifiers of the proxy (source ID and atlas coordinates ID).  
         *  If the TileSet has no proxy for the given identifiers, returns an empty Array.  
         */
        get_coords_level_tile_proxy(source_from: number /*i64*/, coords_from: Vector2i): Array
        
        /** Returns if there is a coodinates-level proxy for the given identifiers. */
        has_coords_level_tile_proxy(source_from: number /*i64*/, coords_from: Vector2i): boolean
        
        /** Removes a coordinates-level proxy for the given identifiers. */
        remove_coords_level_tile_proxy(source_from: number /*i64*/, coords_from: Vector2i): void
        
        /** Create an alternative-level proxy for the given identifiers. A proxy will map set of tile identifiers to another set of identifiers.  
         *  This can be used to replace a tile in all TileMaps using this TileSet, as TileMap nodes will find and use the proxy's target tile when one is available.  
         *  Proxied tiles can be automatically replaced in TileMap nodes using the editor.  
         */
        set_alternative_level_tile_proxy(source_from: number /*i64*/, coords_from: Vector2i, alternative_from: number /*i64*/, source_to: number /*i64*/, coords_to: Vector2i, alternative_to: number /*i64*/): void
        
        /** Returns the alternative-level proxy for the given identifiers. The returned array contains the three proxie's target identifiers (source ID, atlas coords ID and alternative tile ID).  
         *  If the TileSet has no proxy for the given identifiers, returns an empty Array.  
         */
        get_alternative_level_tile_proxy(source_from: number /*i64*/, coords_from: Vector2i, alternative_from: number /*i64*/): Array
        
        /** Returns if there is an alternative-level proxy for the given identifiers. */
        has_alternative_level_tile_proxy(source_from: number /*i64*/, coords_from: Vector2i, alternative_from: number /*i64*/): boolean
        
        /** Removes an alternative-level proxy for the given identifiers. */
        remove_alternative_level_tile_proxy(source_from: number /*i64*/, coords_from: Vector2i, alternative_from: number /*i64*/): void
        
        /** According to the configured proxies, maps the provided identifiers to a new set of identifiers. The source ID, atlas coordinates ID and alternative tile ID are returned as a 3 elements Array.  
         *  This function first look for matching alternative-level proxies, then coordinates-level proxies, then source-level proxies.  
         *  If no proxy corresponding to provided identifiers are found, returns the same values the ones used as arguments.  
         */
        map_tile_proxy(source_from: number /*i64*/, coords_from: Vector2i, alternative_from: number /*i64*/): Array
        
        /** Clears tile proxies pointing to invalid tiles. */
        cleanup_invalid_tile_proxies(): void
        
        /** Clears all tile proxies. */
        clear_tile_proxies(): void
        
        /** Adds a [TileMapPattern] to be stored in the TileSet resource. If provided, insert it at the given [param index]. */
        add_pattern(pattern: TileMapPattern, index: number /*i64*/ = -1): number /*i64*/
        
        /** Returns the [TileMapPattern] at the given [param index]. */
        get_pattern(index: number /*i64*/ = -1): TileMapPattern
        
        /** Remove the [TileMapPattern] at the given index. */
        remove_pattern(index: number /*i64*/): void
        
        /** Returns the number of [TileMapPattern] this tile set handles. */
        get_patterns_count(): number /*i64*/
        
        /** The tile shape. */
        get tile_shape(): number /*i64*/
        set tile_shape(value: number /*i64*/)
        
        /** For all half-offset shapes (Isometric, Hexagonal and Half-Offset square), changes the way tiles are indexed in the TileMap grid. */
        get tile_layout(): number /*i64*/
        set tile_layout(value: number /*i64*/)
        
        /** For all half-offset shapes (Isometric, Hexagonal and Half-Offset square), determines the offset axis. */
        get tile_offset_axis(): number /*i64*/
        set tile_offset_axis(value: number /*i64*/)
        
        /** The tile size, in pixels. For all tile shapes, this size corresponds to the encompassing rectangle of the tile shape. This is thus the minimal cell size required in an atlas. */
        get tile_size(): Vector2i
        set tile_size(value: Vector2i)
        
        /** Enables/Disable uv clipping when rendering the tiles. */
        get uv_clipping(): boolean
        set uv_clipping(value: boolean)
    }
    namespace TileSetAtlasSource {
        enum TileAnimationMode {
            /** Tile animations start at same time, looking identical. */
            TILE_ANIMATION_MODE_DEFAULT = 0,
            
            /** Tile animations start at random times, looking varied. */
            TILE_ANIMATION_MODE_RANDOM_START_TIMES = 1,
            
            /** Represents the size of the [enum TileAnimationMode] enum. */
            TILE_ANIMATION_MODE_MAX = 2,
        }
    }
    /** Exposes a 2D atlas texture as a set of tiles for a [TileSet] resource.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_tilesetatlassource.html  
     */
    class TileSetAtlasSource extends TileSetSource {
        /** Represents cell's horizontal flip flag. Should be used directly with [TileMap] to flip placed tiles by altering their alternative IDs.  
         *    
         */
        static readonly TRANSFORM_FLIP_H = 4096
        
        /** Represents cell's vertical flip flag. See [constant TRANSFORM_FLIP_H] for usage. */
        static readonly TRANSFORM_FLIP_V = 8192
        
        /** Represents cell's transposed flag. See [constant TRANSFORM_FLIP_H] for usage. */
        static readonly TRANSFORM_TRANSPOSE = 16384
        constructor(identifier?: any)
        set_texture(texture: Texture2D): void
        get_texture(): Texture2D
        set_margins(margins: Vector2i): void
        get_margins(): Vector2i
        set_separation(separation: Vector2i): void
        get_separation(): Vector2i
        set_texture_region_size(texture_region_size: Vector2i): void
        get_texture_region_size(): Vector2i
        set_use_texture_padding(use_texture_padding: boolean): void
        get_use_texture_padding(): boolean
        
        /** Creates a new tile at coordinates [param atlas_coords] with the given [param size]. */
        create_tile(atlas_coords: Vector2i, size: Vector2i = <any> {} /*compound.type from 6([object Object])*/): void
        
        /** Remove a tile and its alternative at coordinates [param atlas_coords]. */
        remove_tile(atlas_coords: Vector2i): void
        
        /** Move the tile and its alternatives at the [param atlas_coords] coordinates to the [param new_atlas_coords] coordinates with the [param new_size] size. This functions will fail if a tile is already present in the given area.  
         *  If [param new_atlas_coords] is `Vector2i(-1, -1)`, keeps the tile's coordinates. If [param new_size] is `Vector2i(-1, -1)`, keeps the tile's size.  
         *  To avoid an error, first check if a move is possible using [method has_room_for_tile].  
         */
        move_tile_in_atlas(atlas_coords: Vector2i, new_atlas_coords: Vector2i = <any> {} /*compound.type from 6([object Object])*/, new_size: Vector2i = <any> {} /*compound.type from 6([object Object])*/): void
        
        /** Returns the size of the tile (in the grid coordinates system) at coordinates [param atlas_coords]. */
        get_tile_size_in_atlas(atlas_coords: Vector2i): Vector2i
        
        /** Returns whether there is enough room in an atlas to create/modify a tile with the given properties. If [param ignored_tile] is provided, act as is the given tile was not present in the atlas. This may be used when you want to modify a tile's properties. */
        has_room_for_tile(atlas_coords: Vector2i, size: Vector2i, animation_columns: number /*i64*/, animation_separation: Vector2i, frames_count: number /*i64*/, ignored_tile: Vector2i = <any> {} /*compound.type from 6([object Object])*/): boolean
        
        /** Returns an array of tiles coordinates ID that will be automatically removed when modifying one or several of those properties: [param texture], [param margins], [param separation] or [param texture_region_size]. This can be used to undo changes that would have caused tiles data loss. */
        get_tiles_to_be_removed_on_change(texture: Texture2D, margins: Vector2i, separation: Vector2i, texture_region_size: Vector2i): PackedVector2Array
        
        /** If there is a tile covering the [param atlas_coords] coordinates, returns the top-left coordinates of the tile (thus its coordinate ID). Returns `Vector2i(-1, -1)` otherwise. */
        get_tile_at_coords(atlas_coords: Vector2i): Vector2i
        
        /** Checks if the source has any tiles that don't fit the texture area (either partially or completely). */
        has_tiles_outside_texture(): boolean
        
        /** Removes all tiles that don't fit the available texture area. This method iterates over all the source's tiles, so it's advised to use [method has_tiles_outside_texture] beforehand. */
        clear_tiles_outside_texture(): void
        
        /** Sets the number of columns in the animation layout of the tile at coordinates [param atlas_coords]. If set to 0, then the different frames of the animation are laid out as a single horizontal line in the atlas. */
        set_tile_animation_columns(atlas_coords: Vector2i, frame_columns: number /*i64*/): void
        
        /** Returns how many columns the tile at [param atlas_coords] has in its animation layout. */
        get_tile_animation_columns(atlas_coords: Vector2i): number /*i64*/
        
        /** Sets the margin (in grid tiles) between each tile in the animation layout of the tile at coordinates [param atlas_coords] has. */
        set_tile_animation_separation(atlas_coords: Vector2i, separation: Vector2i): void
        
        /** Returns the separation (as in the atlas grid) between each frame of an animated tile at coordinates [param atlas_coords]. */
        get_tile_animation_separation(atlas_coords: Vector2i): Vector2i
        
        /** Sets the animation speed of the tile at coordinates [param atlas_coords] has. */
        set_tile_animation_speed(atlas_coords: Vector2i, speed: number /*f64*/): void
        
        /** Returns the animation speed of the tile at coordinates [param atlas_coords]. */
        get_tile_animation_speed(atlas_coords: Vector2i): number /*f64*/
        
        /** Sets the [enum TileAnimationMode] of the tile at [param atlas_coords] to [param mode]. See also [method get_tile_animation_mode]. */
        set_tile_animation_mode(atlas_coords: Vector2i, mode: TileSetAtlasSource.TileAnimationMode): void
        
        /** Returns the [enum TileAnimationMode] of the tile at [param atlas_coords]. See also [method set_tile_animation_mode]. */
        get_tile_animation_mode(atlas_coords: Vector2i): TileSetAtlasSource.TileAnimationMode
        
        /** Sets how many animation frames the tile at coordinates [param atlas_coords] has. */
        set_tile_animation_frames_count(atlas_coords: Vector2i, frames_count: number /*i64*/): void
        
        /** Returns how many animation frames has the tile at coordinates [param atlas_coords]. */
        get_tile_animation_frames_count(atlas_coords: Vector2i): number /*i64*/
        
        /** Sets the animation frame [param duration] of frame [param frame_index] for the tile at coordinates [param atlas_coords]. */
        set_tile_animation_frame_duration(atlas_coords: Vector2i, frame_index: number /*i64*/, duration: number /*f64*/): void
        
        /** Returns the animation frame duration of frame [param frame_index] for the tile at coordinates [param atlas_coords]. */
        get_tile_animation_frame_duration(atlas_coords: Vector2i, frame_index: number /*i64*/): number /*f64*/
        
        /** Returns the sum of the sum of the frame durations of the tile at coordinates [param atlas_coords]. This value needs to be divided by the animation speed to get the actual animation loop duration. */
        get_tile_animation_total_duration(atlas_coords: Vector2i): number /*f64*/
        
        /** Creates an alternative tile for the tile at coordinates [param atlas_coords]. If [param alternative_id_override] is -1, give it an automatically generated unique ID, or assigns it the given ID otherwise.  
         *  Returns the new alternative identifier, or -1 if the alternative could not be created with a provided [param alternative_id_override].  
         */
        create_alternative_tile(atlas_coords: Vector2i, alternative_id_override: number /*i64*/ = -1): number /*i64*/
        
        /** Remove a tile's alternative with alternative ID [param alternative_tile].  
         *  Calling this function with [param alternative_tile] equals to 0 will fail, as the base tile alternative cannot be removed.  
         */
        remove_alternative_tile(atlas_coords: Vector2i, alternative_tile: number /*i64*/): void
        
        /** Change a tile's alternative ID from [param alternative_tile] to [param new_id].  
         *  Calling this function with [param new_id] of 0 will fail, as the base tile alternative cannot be moved.  
         */
        set_alternative_tile_id(atlas_coords: Vector2i, alternative_tile: number /*i64*/, new_id: number /*i64*/): void
        
        /** Returns the alternative ID a following call to [method create_alternative_tile] would return. */
        get_next_alternative_tile_id(atlas_coords: Vector2i): number /*i64*/
        
        /** Returns the [TileData] object for the given atlas coordinates and alternative ID. */
        get_tile_data(atlas_coords: Vector2i, alternative_tile: number /*i64*/): TileData
        
        /** Returns the atlas grid size, which depends on how many tiles can fit in the texture. It thus depends on the [member texture]'s size, the atlas [member margins], and the tiles' [member texture_region_size]. */
        get_atlas_grid_size(): Vector2i
        
        /** Returns a tile's texture region in the atlas texture. For animated tiles, a [param frame] argument might be provided for the different frames of the animation. */
        get_tile_texture_region(atlas_coords: Vector2i, frame: number /*i64*/ = 0): Rect2i
        _update_padded_texture(): void
        
        /** If [member use_texture_padding] is `false`, returns [member texture]. Otherwise, returns and internal [ImageTexture] created that includes the padding. */
        get_runtime_texture(): Texture2D
        
        /** Returns the region of the tile at coordinates [param atlas_coords] for the given [param frame] inside the texture returned by [method get_runtime_texture].  
         *      
         *  **Note:** If [member use_texture_padding] is `false`, returns the same as [method get_tile_texture_region].  
         */
        get_runtime_tile_texture_region(atlas_coords: Vector2i, frame: number /*i64*/): Rect2i
        
        /** The atlas texture. */
        get texture(): Texture2D
        set texture(value: Texture2D)
        
        /** Margins, in pixels, to offset the origin of the grid in the texture. */
        get margins(): Vector2i
        set margins(value: Vector2i)
        
        /** Separation, in pixels, between each tile texture region of the grid. */
        get separation(): Vector2i
        set separation(value: Vector2i)
        
        /** The base tile size in the texture (in pixel). This size must be bigger than the TileSet's `tile_size` value. */
        get texture_region_size(): Vector2i
        set texture_region_size(value: Vector2i)
        
        /** If `true`, generates an internal texture with an additional one pixel padding around each tile. Texture padding avoids a common artifact where lines appear between tiles.  
         *  Disabling this setting might lead a small performance improvement, as generating the internal texture requires both memory and processing time when the TileSetAtlasSource resource is modified.  
         */
        get use_texture_padding(): boolean
        set use_texture_padding(value: boolean)
    }
    class TileSetAtlasSourceEditor extends HSplitContainer {
        constructor(identifier?: any)
        _set_selection_from_array(_unnamed_arg0: Array): void
        _check_outside_tiles(): void
        readonly source_id_changed: Signal // source_id: number /*i64*/ => void
    }
    class TileSetAtlasSourceProxyObject extends Object {
        constructor(identifier?: any)
        readonly changed: Signal // what: string => void
    }
    class TileSetEditor extends Control {
        constructor(identifier?: any)
    }
    class TileSetEditorPlugin extends EditorPlugin {
        constructor(identifier?: any)
    }
    class TileSetScenesCollectionProxyObject extends Object {
        constructor(identifier?: any)
        set_id(id: number /*i64*/): void
        get_id(): number /*i64*/
        get id(): number /*i64*/
        set id(value: number /*i64*/)
        readonly changed: Signal // what: string => void
    }
    /** Exposes a set of scenes as tiles for a [TileSet] resource.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_tilesetscenescollectionsource.html  
     */
    class TileSetScenesCollectionSource extends TileSetSource {
        constructor(identifier?: any)
        /** Returns the number or scene tiles this TileSet source has. */
        get_scene_tiles_count(): number /*i64*/
        
        /** Returns the scene tile ID of the scene tile at [param index]. */
        get_scene_tile_id(index: number /*i64*/): number /*i64*/
        
        /** Returns whether this TileSet source has a scene tile with [param id]. */
        has_scene_tile_id(id: number /*i64*/): boolean
        
        /** Creates a scene-based tile out of the given scene.  
         *  Returns a newly generated unique ID.  
         */
        create_scene_tile(packed_scene: PackedScene, id_override: number /*i64*/ = -1): number /*i64*/
        
        /** Changes a scene tile's ID from [param id] to [param new_id]. This will fail if there is already a tile with an ID equal to [param new_id]. */
        set_scene_tile_id(id: number /*i64*/, new_id: number /*i64*/): void
        
        /** Assigns a [PackedScene] resource to the scene tile with [param id]. This will fail if the scene does not extend CanvasItem, as positioning properties are needed to place the scene on the TileMap. */
        set_scene_tile_scene(id: number /*i64*/, packed_scene: PackedScene): void
        
        /** Returns the [PackedScene] resource of scene tile with [param id]. */
        get_scene_tile_scene(id: number /*i64*/): PackedScene
        
        /** Sets whether or not the scene tile with [param id] should display a placeholder in the editor. This might be useful for scenes that are not visible. */
        set_scene_tile_display_placeholder(id: number /*i64*/, display_placeholder: boolean): void
        
        /** Returns whether the scene tile with [param id] displays a placeholder in the editor. */
        get_scene_tile_display_placeholder(id: number /*i64*/): boolean
        
        /** Remove the scene tile with [param id]. */
        remove_scene_tile(id: number /*i64*/): void
        
        /** Returns the scene ID a following call to [method create_scene_tile] would return. */
        get_next_scene_tile_id(): number /*i64*/
    }
    class TileSetScenesCollectionSourceEditor extends HBoxContainer {
        constructor(identifier?: any)
        _scene_thumbnail_done(_unnamed_arg0: string, _unnamed_arg1: Texture2D, _unnamed_arg2: Texture2D, _unnamed_arg3: any): void
        readonly source_id_changed: Signal // source_id: number /*i64*/ => void
    }
    /** Exposes a set of tiles for a [TileSet] resource.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_tilesetsource.html  
     */
    class TileSetSource extends Resource {
        constructor(identifier?: any)
        /** Returns how many tiles this atlas source defines (not including alternative tiles). */
        get_tiles_count(): number /*i64*/
        
        /** Returns the tile coordinates ID of the tile with index [param index]. */
        get_tile_id(index: number /*i64*/): Vector2i
        
        /** Returns if this atlas has a tile with coordinates ID [param atlas_coords]. */
        has_tile(atlas_coords: Vector2i): boolean
        
        /** Returns the number of alternatives tiles for the coordinates ID [param atlas_coords].  
         *  For [TileSetAtlasSource], this always return at least 1, as the base tile with ID 0 is always part of the alternatives list.  
         *  Returns -1 if there is not tile at the given coords.  
         */
        get_alternative_tiles_count(atlas_coords: Vector2i): number /*i64*/
        
        /** Returns the alternative ID for the tile with coordinates ID [param atlas_coords] at index [param index]. */
        get_alternative_tile_id(atlas_coords: Vector2i, index: number /*i64*/): number /*i64*/
        
        /** Returns if the base tile at coordinates [param atlas_coords] has an alternative with ID [param alternative_tile]. */
        has_alternative_tile(atlas_coords: Vector2i, alternative_tile: number /*i64*/): boolean
    }
    class TileSourceInspectorPlugin extends EditorInspectorPlugin {
        constructor(identifier?: any)
    }
    class TilesEditorUtils extends Object {
        constructor(identifier?: any)
    }
    namespace Timer {
        enum TimerProcessCallback {
            /** Update the timer during physics frames (see [constant Node.NOTIFICATION_INTERNAL_PHYSICS_PROCESS]). */
            TIMER_PROCESS_PHYSICS = 0,
            
            /** Update the timer during process frames (see [constant Node.NOTIFICATION_INTERNAL_PROCESS]). */
            TIMER_PROCESS_IDLE = 1,
        }
    }
    /** A countdown timer.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_timer.html  
     */
    class Timer extends Node {
        constructor(identifier?: any)
        set_wait_time(time_sec: number /*f64*/): void
        get_wait_time(): number /*f64*/
        set_one_shot(enable: boolean): void
        is_one_shot(): boolean
        set_autostart(enable: boolean): void
        has_autostart(): boolean
        
        /** Starts the timer. Sets [member wait_time] to [param time_sec] if `time_sec > 0`. This also resets the remaining time to [member wait_time].  
         *      
         *  **Note:** This method will not resume a paused timer. See [member paused].  
         */
        start(time_sec: number /*f64*/ = -1): void
        
        /** Stops the timer. */
        stop(): void
        set_paused(paused: boolean): void
        is_paused(): boolean
        
        /** Returns `true` if the timer is stopped. */
        is_stopped(): boolean
        get_time_left(): number /*f64*/
        set_timer_process_callback(callback: Timer.TimerProcessCallback): void
        get_timer_process_callback(): Timer.TimerProcessCallback
        
        /** Processing callback. See [enum TimerProcessCallback]. */
        get process_callback(): number /*i64*/
        set process_callback(value: number /*i64*/)
        
        /** The wait time in seconds.  
         *      
         *  **Note:** Timers can only emit once per rendered frame at most (or once per physics frame if [member process_callback] is [constant TIMER_PROCESS_PHYSICS]). This means very low wait times (lower than 0.05 seconds) will behave in significantly different ways depending on the rendered framerate. For very low wait times, it is recommended to use a process loop in a script instead of using a Timer node. Timers are affected by [member Engine.time_scale], a higher scale means quicker timeouts, and vice versa.  
         */
        get wait_time(): number /*f64*/
        set wait_time(value: number /*f64*/)
        
        /** If `true`, the timer will stop when reaching 0. If `false`, it will restart. */
        get one_shot(): boolean
        set one_shot(value: boolean)
        
        /** If `true`, the timer will automatically start when entering the scene tree.  
         *      
         *  **Note:** This property is automatically set to `false` after the timer enters the scene tree and starts.  
         */
        get autostart(): boolean
        set autostart(value: boolean)
        
        /** If `true`, the timer is paused and will not process until it is unpaused again, even if [method start] is called. */
        get paused(): boolean
        set paused(value: boolean)
        
        /** The timer's remaining time in seconds. Returns 0 if the timer is inactive.  
         *      
         *  **Note:** This value is read-only and cannot be set. It is based on [member wait_time], which can be set using [method start].  
         */
        get time_left(): number /*f64*/
        
        /** Emitted when the timer reaches 0. */
        readonly timeout: Signal //  => void
    }
    /** Class representing a torus [PrimitiveMesh].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_torusmesh.html  
     */
    class TorusMesh extends PrimitiveMesh {
        constructor(identifier?: any)
        set_inner_radius(radius: number /*f64*/): void
        get_inner_radius(): number /*f64*/
        set_outer_radius(radius: number /*f64*/): void
        get_outer_radius(): number /*f64*/
        set_rings(rings: number /*i64*/): void
        get_rings(): number /*i64*/
        set_ring_segments(rings: number /*i64*/): void
        get_ring_segments(): number /*i64*/
        
        /** The inner radius of the torus. */
        get inner_radius(): number /*f64*/
        set inner_radius(value: number /*f64*/)
        
        /** The outer radius of the torus. */
        get outer_radius(): number /*f64*/
        set outer_radius(value: number /*f64*/)
        
        /** The number of slices the torus is constructed of. */
        get rings(): number /*i64*/
        set rings(value: number /*i64*/)
        
        /** The number of edges each ring of the torus is constructed of. */
        get ring_segments(): number /*i64*/
        set ring_segments(value: number /*i64*/)
    }
    namespace TouchScreenButton {
        enum VisibilityMode {
            /** Always visible. */
            VISIBILITY_ALWAYS = 0,
            
            /** Visible on touch screens only. */
            VISIBILITY_TOUCHSCREEN_ONLY = 1,
        }
    }
    /** Button for touch screen devices for gameplay use.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_touchscreenbutton.html  
     */
    class TouchScreenButton extends Node2D {
        constructor(identifier?: any)
        set_texture_normal(texture: Texture2D): void
        get_texture_normal(): Texture2D
        set_texture_pressed(texture: Texture2D): void
        get_texture_pressed(): Texture2D
        set_bitmask(bitmask: BitMap): void
        get_bitmask(): BitMap
        set_shape(shape: Shape2D): void
        get_shape(): Shape2D
        set_shape_centered(bool: boolean): void
        is_shape_centered(): boolean
        set_shape_visible(bool: boolean): void
        is_shape_visible(): boolean
        set_action(action: string): void
        get_action(): string
        set_visibility_mode(mode: TouchScreenButton.VisibilityMode): void
        get_visibility_mode(): TouchScreenButton.VisibilityMode
        set_passby_press(enabled: boolean): void
        is_passby_press_enabled(): boolean
        
        /** Returns `true` if this button is currently pressed. */
        is_pressed(): boolean
        
        /** The button's texture for the normal state. */
        get texture_normal(): Texture2D
        set texture_normal(value: Texture2D)
        
        /** The button's texture for the pressed state. */
        get texture_pressed(): Texture2D
        set texture_pressed(value: Texture2D)
        
        /** The button's bitmask. */
        get bitmask(): BitMap
        set bitmask(value: BitMap)
        
        /** The button's shape. */
        get shape(): Shape2D
        set shape(value: Shape2D)
        
        /** If `true`, the button's shape is centered in the provided texture. If no texture is used, this property has no effect. */
        get shape_centered(): boolean
        set shape_centered(value: boolean)
        
        /** If `true`, the button's shape is visible in the editor. */
        get shape_visible(): boolean
        set shape_visible(value: boolean)
        
        /** If `true`, the [signal pressed] and [signal released] signals are emitted whenever a pressed finger goes in and out of the button, even if the pressure started outside the active area of the button.  
         *      
         *  **Note:** This is a "pass-by" (not "bypass") press mode.  
         */
        get passby_press(): boolean
        set passby_press(value: boolean)
        
        /** The button's action. Actions can be handled with [InputEventAction]. */
        get action(): StringName
        set action(value: StringName)
        
        /** The button's visibility mode. See [enum VisibilityMode] for possible values. */
        get visibility_mode(): number /*i64*/
        set visibility_mode(value: number /*i64*/)
        
        /** Emitted when the button is pressed (down). */
        readonly pressed: Signal //  => void
        
        /** Emitted when the button is released (up). */
        readonly released: Signal //  => void
    }
    /** A language translation that maps a collection of strings to their individual translations.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_translation.html  
     */
    class Translation extends Resource {
        constructor(identifier?: any)
        /** Virtual method to override [method get_plural_message]. */
        /* gdvirtual */ _get_plural_message(src_message: StringName, src_plural_message: StringName, n: number /*i64*/, context: StringName): StringName
        
        /** Virtual method to override [method get_message]. */
        /* gdvirtual */ _get_message(src_message: StringName, context: StringName): StringName
        set_locale(locale: string): void
        get_locale(): string
        
        /** Adds a message if nonexistent, followed by its translation.  
         *  An additional context could be used to specify the translation context or differentiate polysemic words.  
         */
        add_message(src_message: StringName, xlated_message: StringName, context: StringName = ''): void
        
        /** Adds a message involving plural translation if nonexistent, followed by its translation.  
         *  An additional context could be used to specify the translation context or differentiate polysemic words.  
         */
        add_plural_message(src_message: StringName, xlated_messages: PackedStringArray, context: StringName = ''): void
        
        /** Returns a message's translation. */
        get_message(src_message: StringName, context: StringName = ''): StringName
        
        /** Returns a message's translation involving plurals.  
         *  The number [param n] is the number or quantity of the plural object. It will be used to guide the translation system to fetch the correct plural form for the selected language.  
         */
        get_plural_message(src_message: StringName, src_plural_message: StringName, n: number /*i64*/, context: StringName = ''): StringName
        
        /** Erases a message. */
        erase_message(src_message: StringName, context: StringName = ''): void
        
        /** Returns all the messages (keys). */
        get_message_list(): PackedStringArray
        
        /** Returns all the messages (translated text). */
        get_translated_message_list(): PackedStringArray
        
        /** Returns the number of existing messages. */
        get_message_count(): number /*i64*/
        _set_messages(messages: Dictionary): void
        _get_messages(): Dictionary
        get messages(): Dictionary
        set messages(value: Dictionary)
        
        /** The locale of the translation. */
        get locale(): string
        set locale(value: string)
    }
    namespace Tree {
        enum SelectMode {
            /** Allows selection of a single cell at a time. From the perspective of items, only a single item is allowed to be selected. And there is only one column selected in the selected item.  
             *  The focus cursor is always hidden in this mode, but it is positioned at the current selection, making the currently selected item the currently focused item.  
             */
            SELECT_SINGLE = 0,
            
            /** Allows selection of a single row at a time. From the perspective of items, only a single items is allowed to be selected. And all the columns are selected in the selected item.  
             *  The focus cursor is always hidden in this mode, but it is positioned at the first column of the current selection, making the currently selected item the currently focused item.  
             */
            SELECT_ROW = 1,
            
            /** Allows selection of multiple cells at the same time. From the perspective of items, multiple items are allowed to be selected. And there can be multiple columns selected in each selected item.  
             *  The focus cursor is visible in this mode, the item or column under the cursor is not necessarily selected.  
             */
            SELECT_MULTI = 2,
        }
        enum DropModeFlags {
            /** Disables all drop sections, but still allows to detect the "on item" drop section by [method get_drop_section_at_position].  
             *      
             *  **Note:** This is the default flag, it has no effect when combined with other flags.  
             */
            DROP_MODE_DISABLED = 0,
            
            /** Enables the "on item" drop section. This drop section covers the entire item.  
             *  When combined with [constant DROP_MODE_INBETWEEN], this drop section halves the height and stays centered vertically.  
             */
            DROP_MODE_ON_ITEM = 1,
            
            /** Enables "above item" and "below item" drop sections. The "above item" drop section covers the top half of the item, and the "below item" drop section covers the bottom half.  
             *  When combined with [constant DROP_MODE_ON_ITEM], these drop sections halves the height and stays on top / bottom accordingly.  
             */
            DROP_MODE_INBETWEEN = 2,
        }
    }
    /** A control used to show a set of internal [TreeItem]s in a hierarchical structure.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_tree.html  
     */
    class Tree extends Control {
        constructor(identifier?: any)
        /** Clears the tree. This removes all items. */
        clear(): void
        
        /** Creates an item in the tree and adds it as a child of [param parent], which can be either a valid [TreeItem] or `null`.  
         *  If [param parent] is `null`, the root item will be the parent, or the new item will be the root itself if the tree is empty.  
         *  The new item will be the [param index]-th child of parent, or it will be the last child if there are not enough siblings.  
         */
        create_item(parent: TreeItem = <any> {} /*compound.type from nil*/, index: number /*i64*/ = -1): TreeItem
        
        /** Returns the tree's root item, or `null` if the tree is empty. */
        get_root(): TreeItem
        
        /** Overrides the calculated minimum width of a column. It can be set to `0` to restore the default behavior. Columns that have the "Expand" flag will use their "min_width" in a similar fashion to [member Control.size_flags_stretch_ratio]. */
        set_column_custom_minimum_width(column: number /*i64*/, min_width: number /*i64*/): void
        
        /** If `true`, the column will have the "Expand" flag of [Control]. Columns that have the "Expand" flag will use their expand ratio in a similar fashion to [member Control.size_flags_stretch_ratio] (see [method set_column_expand_ratio]). */
        set_column_expand(column: number /*i64*/, expand: boolean): void
        
        /** Sets the relative expand ratio for a column. See [method set_column_expand]. */
        set_column_expand_ratio(column: number /*i64*/, ratio: number /*i64*/): void
        
        /** Allows to enable clipping for column's content, making the content size ignored. */
        set_column_clip_content(column: number /*i64*/, enable: boolean): void
        
        /** Returns `true` if the column has enabled expanding (see [method set_column_expand]). */
        is_column_expanding(column: number /*i64*/): boolean
        
        /** Returns `true` if the column has enabled clipping (see [method set_column_clip_content]). */
        is_column_clipping_content(column: number /*i64*/): boolean
        
        /** Returns the expand ratio assigned to the column. */
        get_column_expand_ratio(column: number /*i64*/): number /*i64*/
        
        /** Returns the column's width in pixels. */
        get_column_width(column: number /*i64*/): number /*i64*/
        set_hide_root(enable: boolean): void
        is_root_hidden(): boolean
        
        /** Returns the next selected [TreeItem] after the given one, or `null` if the end is reached.  
         *  If [param from] is `null`, this returns the first selected item.  
         */
        get_next_selected(from: TreeItem): TreeItem
        
        /** Returns the currently focused item, or `null` if no item is focused.  
         *  In [constant SELECT_ROW] and [constant SELECT_SINGLE] modes, the focused item is same as the selected item. In [constant SELECT_MULTI] mode, the focused item is the item under the focus cursor, not necessarily selected.  
         *  To get the currently selected item(s), use [method get_next_selected].  
         */
        get_selected(): TreeItem
        
        /** Selects the specified [TreeItem] and column. */
        set_selected(item: TreeItem, column: number /*i64*/): void
        
        /** Returns the currently focused column, or -1 if no column is focused.  
         *  In [constant SELECT_SINGLE] mode, the focused column is the selected column. In [constant SELECT_ROW] mode, the focused column is always 0 if any item is selected. In [constant SELECT_MULTI] mode, the focused column is the column under the focus cursor, and there are not necessarily any column selected.  
         *  To tell whether a column of an item is selected, use [method TreeItem.is_selected].  
         */
        get_selected_column(): number /*i64*/
        
        /** Returns the last pressed button's index. */
        get_pressed_button(): number /*i64*/
        set_select_mode(mode: Tree.SelectMode): void
        get_select_mode(): Tree.SelectMode
        
        /** Deselects all tree items (rows and columns). In [constant SELECT_MULTI] mode also removes selection cursor. */
        deselect_all(): void
        set_columns(amount: number /*i64*/): void
        get_columns(): number /*i64*/
        
        /** Returns the currently edited item. Can be used with [signal item_edited] to get the item that was modified.  
         *    
         */
        get_edited(): TreeItem
        
        /** Returns the column for the currently edited item. */
        get_edited_column(): number /*i64*/
        
        /** Edits the selected tree item as if it was clicked.  
         *  Either the item must be set editable with [method TreeItem.set_editable] or [param force_edit] must be `true`.  
         *  Returns `true` if the item could be edited. Fails if no item is selected.  
         */
        edit_selected(force_edit: boolean = false): boolean
        
        /** Returns the rectangle for custom popups. Helper to create custom cell controls that display a popup. See [method TreeItem.set_cell_mode]. */
        get_custom_popup_rect(): Rect2
        
        /** Returns the rectangle area for the specified [TreeItem]. If [param column] is specified, only get the position and size of that column, otherwise get the rectangle containing all columns. If a button index is specified, the rectangle of that button will be returned. */
        get_item_area_rect(item: TreeItem, column: number /*i64*/ = -1, button_index: number /*i64*/ = -1): Rect2
        
        /** Returns the tree item at the specified position (relative to the tree origin position). */
        get_item_at_position(position: Vector2): TreeItem
        
        /** Returns the column index at [param position], or -1 if no item is there. */
        get_column_at_position(position: Vector2): number /*i64*/
        
        /** Returns the drop section at [param position], or -100 if no item is there.  
         *  Values -1, 0, or 1 will be returned for the "above item", "on item", and "below item" drop sections, respectively. See [enum DropModeFlags] for a description of each drop section.  
         *  To get the item which the returned drop section is relative to, use [method get_item_at_position].  
         */
        get_drop_section_at_position(position: Vector2): number /*i64*/
        
        /** Returns the button ID at [param position], or -1 if no button is there. */
        get_button_id_at_position(position: Vector2): number /*i64*/
        
        /** Makes the currently focused cell visible.  
         *  This will scroll the tree if necessary. In [constant SELECT_ROW] mode, this will not do horizontal scrolling, as all the cells in the selected row is focused logically.  
         *      
         *  **Note:** Despite the name of this method, the focus cursor itself is only visible in [constant SELECT_MULTI] mode.  
         */
        ensure_cursor_is_visible(): void
        set_column_titles_visible(visible: boolean): void
        are_column_titles_visible(): boolean
        
        /** Sets the title of a column. */
        set_column_title(column: number /*i64*/, title: string): void
        
        /** Returns the column's title. */
        get_column_title(column: number /*i64*/): string
        
        /** Sets the column title alignment. Note that [constant @GlobalScope.HORIZONTAL_ALIGNMENT_FILL] is not supported for column titles. */
        set_column_title_alignment(column: number /*i64*/, title_alignment: HorizontalAlignment): void
        
        /** Returns the column title alignment. */
        get_column_title_alignment(column: number /*i64*/): HorizontalAlignment
        
        /** Sets column title base writing direction. */
        set_column_title_direction(column: number /*i64*/, direction: Control.TextDirection): void
        
        /** Returns column title base writing direction. */
        get_column_title_direction(column: number /*i64*/): Control.TextDirection
        
        /** Sets language code of column title used for line-breaking and text shaping algorithms, if left empty current locale is used instead. */
        set_column_title_language(column: number /*i64*/, language: string): void
        
        /** Returns column title language code. */
        get_column_title_language(column: number /*i64*/): string
        
        /** Returns the current scrolling position. */
        get_scroll(): Vector2
        
        /** Causes the [Tree] to jump to the specified [TreeItem]. */
        scroll_to_item(item: TreeItem, center_on_item: boolean = false): void
        set_h_scroll_enabled(h_scroll: boolean): void
        is_h_scroll_enabled(): boolean
        set_v_scroll_enabled(h_scroll: boolean): void
        is_v_scroll_enabled(): boolean
        set_hide_folding(hide: boolean): void
        is_folding_hidden(): boolean
        set_enable_recursive_folding(enable: boolean): void
        is_recursive_folding_enabled(): boolean
        set_drop_mode_flags(flags: number /*i64*/): void
        get_drop_mode_flags(): number /*i64*/
        set_allow_rmb_select(allow: boolean): void
        get_allow_rmb_select(): boolean
        set_allow_reselect(allow: boolean): void
        get_allow_reselect(): boolean
        set_allow_search(allow: boolean): void
        get_allow_search(): boolean
        
        /** The number of columns. */
        get columns(): number /*i64*/
        set columns(value: number /*i64*/)
        
        /** If `true`, column titles are visible. */
        get column_titles_visible(): boolean
        set column_titles_visible(value: boolean)
        
        /** If `true`, the currently selected cell may be selected again. */
        get allow_reselect(): boolean
        set allow_reselect(value: boolean)
        
        /** If `true`, a right mouse button click can select items. */
        get allow_rmb_select(): boolean
        set allow_rmb_select(value: boolean)
        
        /** If `true`, allows navigating the [Tree] with letter keys through incremental search. */
        get allow_search(): boolean
        set allow_search(value: boolean)
        
        /** If `true`, the folding arrow is hidden. */
        get hide_folding(): boolean
        set hide_folding(value: boolean)
        
        /** If `true`, recursive folding is enabled for this [Tree]. Holding down Shift while clicking the fold arrow collapses or uncollapses the [TreeItem] and all its descendants. */
        get enable_recursive_folding(): boolean
        set enable_recursive_folding(value: boolean)
        
        /** If `true`, the tree's root is hidden. */
        get hide_root(): boolean
        set hide_root(value: boolean)
        
        /** The drop mode as an OR combination of flags. See [enum DropModeFlags] constants. Once dropping is done, reverts to [constant DROP_MODE_DISABLED]. Setting this during [method Control._can_drop_data] is recommended.  
         *  This controls the drop sections, i.e. the decision and drawing of possible drop locations based on the mouse position.  
         */
        get drop_mode_flags(): number /*i64*/
        set drop_mode_flags(value: number /*i64*/)
        
        /** Allows single or multiple selection. See the [enum SelectMode] constants. */
        get select_mode(): number /*i64*/
        set select_mode(value: number /*i64*/)
        
        /** If `true`, enables horizontal scrolling. */
        get scroll_horizontal_enabled(): boolean
        set scroll_horizontal_enabled(value: boolean)
        
        /** If `true`, enables vertical scrolling. */
        get scroll_vertical_enabled(): boolean
        set scroll_vertical_enabled(value: boolean)
        
        /** Emitted when an item is selected. */
        readonly item_selected: Signal //  => void
        
        /** Emitted when a cell is selected. */
        readonly cell_selected: Signal //  => void
        
        /** Emitted instead of [signal item_selected] if [member select_mode] is set to [constant SELECT_MULTI]. */
        readonly multi_selected: Signal // item: TreeItem, column: number /*i64*/, selected: boolean => void
        
        /** Emitted when an item is selected with a mouse button. */
        readonly item_mouse_selected: Signal // position: Vector2, mouse_button_index: number /*i64*/ => void
        
        /** Emitted when a mouse button is clicked in the empty space of the tree. */
        readonly empty_clicked: Signal // position: Vector2, mouse_button_index: number /*i64*/ => void
        
        /** Emitted when an item is edited. */
        readonly item_edited: Signal //  => void
        
        /** Emitted when an item with [constant TreeItem.CELL_MODE_CUSTOM] is clicked with a mouse button. */
        readonly custom_item_clicked: Signal // mouse_button_index: number /*i64*/ => void
        
        /** Emitted when an item's icon is double-clicked. For a signal that emits when any part of the item is double-clicked, see [signal item_activated]. */
        readonly item_icon_double_clicked: Signal //  => void
        
        /** Emitted when an item is collapsed by a click on the folding arrow. */
        readonly item_collapsed: Signal // item: TreeItem => void
        
        /** Emitted when [method TreeItem.propagate_check] is called. Connect to this signal to process the items that are affected when [method TreeItem.propagate_check] is invoked. The order that the items affected will be processed is as follows: the item that invoked the method, children of that item, and finally parents of that item. */
        readonly check_propagated_to_item: Signal // item: TreeItem, column: number /*i64*/ => void
        
        /** Emitted when a button on the tree was pressed (see [method TreeItem.add_button]). */
        readonly button_clicked: Signal // item: TreeItem, column: number /*i64*/, id: number /*i64*/, mouse_button_index: number /*i64*/ => void
        
        /** Emitted when a cell with the [constant TreeItem.CELL_MODE_CUSTOM] is clicked to be edited. */
        readonly custom_popup_edited: Signal // arrow_clicked: boolean => void
        
        /** Emitted when an item is double-clicked, or selected with a `ui_accept` input event (e.g. using [kbd]Enter[/kbd] or [kbd]Space[/kbd] on the keyboard). */
        readonly item_activated: Signal //  => void
        
        /** Emitted when a column's title is clicked with either [constant MOUSE_BUTTON_LEFT] or [constant MOUSE_BUTTON_RIGHT]. */
        readonly column_title_clicked: Signal // column: number /*i64*/, mouse_button_index: number /*i64*/ => void
        
        /** Emitted when a left mouse button click does not select any item. */
        readonly nothing_selected: Signal //  => void
    }
    namespace TreeItem {
        enum TreeCellMode {
            /** Cell contains a string. */
            CELL_MODE_STRING = 0,
            
            /** Cell contains a checkbox. */
            CELL_MODE_CHECK = 1,
            
            /** Cell contains a range. */
            CELL_MODE_RANGE = 2,
            
            /** Cell contains an icon. */
            CELL_MODE_ICON = 3,
            CELL_MODE_CUSTOM = 4,
        }
    }
    /** An internal control for a single item inside [Tree].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_treeitem.html  
     */
    class TreeItem extends Object {
        constructor(identifier?: any)
        /** Sets the given column's cell mode to [param mode]. See [enum TreeCellMode] constants. */
        set_cell_mode(column: number /*i64*/, mode: TreeItem.TreeCellMode): void
        
        /** Returns the column's cell mode. */
        get_cell_mode(column: number /*i64*/): TreeItem.TreeCellMode
        
        /** If [param multiline] is `true`, the given [param column] is multiline editable.  
         *      
         *  **Note:** This option only affects the type of control ([LineEdit] or [TextEdit]) that appears when editing the column. You can set multiline values with [method set_text] even if the column is not multiline editable.  
         */
        set_edit_multiline(column: number /*i64*/, multiline: boolean): void
        
        /** Returns `true` if the given [param column] is multiline editable. */
        is_edit_multiline(column: number /*i64*/): boolean
        
        /** If [param checked] is `true`, the given [param column] is checked. Clears column's indeterminate status. */
        set_checked(column: number /*i64*/, checked: boolean): void
        
        /** If [param indeterminate] is `true`, the given [param column] is marked indeterminate.  
         *      
         *  **Note:** If set `true` from `false`, then column is cleared of checked status.  
         */
        set_indeterminate(column: number /*i64*/, indeterminate: boolean): void
        
        /** Returns `true` if the given [param column] is checked. */
        is_checked(column: number /*i64*/): boolean
        
        /** Returns `true` if the given [param column] is indeterminate. */
        is_indeterminate(column: number /*i64*/): boolean
        
        /** Propagates this item's checked status to its children and parents for the given [param column]. It is possible to process the items affected by this method call by connecting to [signal Tree.check_propagated_to_item]. The order that the items affected will be processed is as follows: the item invoking this method, children of that item, and finally parents of that item. If [param emit_signal] is `false`, then [signal Tree.check_propagated_to_item] will not be emitted. */
        propagate_check(column: number /*i64*/, emit_signal: boolean = true): void
        
        /** Sets the given column's text value. */
        set_text(column: number /*i64*/, text: string): void
        
        /** Returns the given column's text. */
        get_text(column: number /*i64*/): string
        
        /** Sets item's text base writing direction. */
        set_text_direction(column: number /*i64*/, direction: Control.TextDirection): void
        
        /** Returns item's text base writing direction. */
        get_text_direction(column: number /*i64*/): Control.TextDirection
        
        /** Sets the autowrap mode in the given [param column]. If set to something other than [constant TextServer.AUTOWRAP_OFF], the text gets wrapped inside the cell's bounding rectangle. */
        set_autowrap_mode(column: number /*i64*/, autowrap_mode: TextServer.AutowrapMode): void
        
        /** Returns the text autowrap mode in the given [param column]. By default it is [constant TextServer.AUTOWRAP_OFF]. */
        get_autowrap_mode(column: number /*i64*/): TextServer.AutowrapMode
        
        /** Sets the clipping behavior when the text exceeds the item's bounding rectangle in the given [param column]. */
        set_text_overrun_behavior(column: number /*i64*/, overrun_behavior: TextServer.OverrunBehavior): void
        
        /** Returns the clipping behavior when the text exceeds the item's bounding rectangle in the given [param column]. By default it is [constant TextServer.OVERRUN_TRIM_ELLIPSIS]. */
        get_text_overrun_behavior(column: number /*i64*/): TextServer.OverrunBehavior
        set_structured_text_bidi_override(column: number /*i64*/, parser: TextServer.StructuredTextParser): void
        get_structured_text_bidi_override(column: number /*i64*/): TextServer.StructuredTextParser
        set_structured_text_bidi_override_options(column: number /*i64*/, args: Array): void
        get_structured_text_bidi_override_options(column: number /*i64*/): Array
        
        /** Sets language code of item's text used for line-breaking and text shaping algorithms, if left empty current locale is used instead. */
        set_language(column: number /*i64*/, language: string): void
        
        /** Returns item's text language code. */
        get_language(column: number /*i64*/): string
        
        /** Sets a string to be shown after a column's value (for example, a unit abbreviation). */
        set_suffix(column: number /*i64*/, text: string): void
        
        /** Gets the suffix string shown after the column value. */
        get_suffix(column: number /*i64*/): string
        
        /** Sets the given column's icon [Texture2D]. */
        set_icon(column: number /*i64*/, texture: Texture2D): void
        
        /** Returns the given column's icon [Texture2D]. Error if no icon is set. */
        get_icon(column: number /*i64*/): Texture2D
        
        /** Sets the given column's icon's texture region. */
        set_icon_region(column: number /*i64*/, region: Rect2): void
        
        /** Returns the icon [Texture2D] region as [Rect2]. */
        get_icon_region(column: number /*i64*/): Rect2
        
        /** Sets the maximum allowed width of the icon in the given [param column]. This limit is applied on top of the default size of the icon and on top of [theme_item Tree.icon_max_width]. The height is adjusted according to the icon's ratio. */
        set_icon_max_width(column: number /*i64*/, width: number /*i64*/): void
        
        /** Returns the maximum allowed width of the icon in the given [param column]. */
        get_icon_max_width(column: number /*i64*/): number /*i64*/
        
        /** Modulates the given column's icon with [param modulate]. */
        set_icon_modulate(column: number /*i64*/, modulate: Color): void
        
        /** Returns the [Color] modulating the column's icon. */
        get_icon_modulate(column: number /*i64*/): Color
        
        /** Sets the value of a [constant CELL_MODE_RANGE] column. */
        set_range(column: number /*i64*/, value: number /*f64*/): void
        
        /** Returns the value of a [constant CELL_MODE_RANGE] column. */
        get_range(column: number /*i64*/): number /*f64*/
        
        /** Sets the range of accepted values for a column. The column must be in the [constant CELL_MODE_RANGE] mode.  
         *  If [param expr] is `true`, the edit mode slider will use an exponential scale as with [member Range.exp_edit].  
         */
        set_range_config(column: number /*i64*/, min: number /*f64*/, max: number /*f64*/, step: number /*f64*/, expr: boolean = false): void
        
        /** Returns a dictionary containing the range parameters for a given column. The keys are "min", "max", "step", and "expr". */
        get_range_config(column: number /*i64*/): Dictionary
        
        /** Sets the metadata value for the given column, which can be retrieved later using [method get_metadata]. This can be used, for example, to store a reference to the original data. */
        set_metadata(column: number /*i64*/, meta: any): void
        
        /** Returns the metadata value that was set for the given column using [method set_metadata]. */
        get_metadata(column: number /*i64*/): any
        
        /** Sets the given column's custom draw callback to [param callback] method on [param object].  
         *  The [param callback] should accept two arguments: the [TreeItem] that is drawn and its position and size as a [Rect2].  
         */
        set_custom_draw(column: number /*i64*/, object: Object, callback: StringName): void
        set_collapsed(enable: boolean): void
        is_collapsed(): boolean
        
        /** Collapses or uncollapses this [TreeItem] and all the descendants of this item. */
        set_collapsed_recursive(enable: boolean): void
        
        /** Returns `true` if this [TreeItem], or any of its descendants, is collapsed.  
         *  If [param only_visible] is `true` it ignores non-visible [TreeItem]s.  
         */
        is_any_collapsed(only_visible: boolean = false): boolean
        set_visible(enable: boolean): void
        is_visible(): boolean
        uncollapse_tree(): void
        set_custom_minimum_height(height: number /*i64*/): void
        get_custom_minimum_height(): number /*i64*/
        
        /** If [param selectable] is `true`, the given [param column] is selectable. */
        set_selectable(column: number /*i64*/, selectable: boolean): void
        
        /** Returns `true` if the given [param column] is selectable. */
        is_selectable(column: number /*i64*/): boolean
        
        /** Returns `true` if the given [param column] is selected. */
        is_selected(column: number /*i64*/): boolean
        
        /** Selects the given [param column]. */
        select(column: number /*i64*/): void
        
        /** Deselects the given column. */
        deselect(column: number /*i64*/): void
        
        /** If [param enabled] is `true`, the given [param column] is editable. */
        set_editable(column: number /*i64*/, enabled: boolean): void
        
        /** Returns `true` if the given [param column] is editable. */
        is_editable(column: number /*i64*/): boolean
        
        /** Sets the given column's custom color. */
        set_custom_color(column: number /*i64*/, color: Color): void
        
        /** Returns the custom color of column [param column]. */
        get_custom_color(column: number /*i64*/): Color
        
        /** Resets the color for the given column to default. */
        clear_custom_color(column: number /*i64*/): void
        
        /** Sets custom font used to draw text in the given [param column]. */
        set_custom_font(column: number /*i64*/, font: Font): void
        
        /** Returns custom font used to draw text in the column [param column]. */
        get_custom_font(column: number /*i64*/): Font
        
        /** Sets custom font size used to draw text in the given [param column]. */
        set_custom_font_size(column: number /*i64*/, font_size: number /*i64*/): void
        
        /** Returns custom font size used to draw text in the column [param column]. */
        get_custom_font_size(column: number /*i64*/): number /*i64*/
        
        /** Sets the given column's custom background color and whether to just use it as an outline. */
        set_custom_bg_color(column: number /*i64*/, color: Color, just_outline: boolean = false): void
        
        /** Resets the background color for the given column to default. */
        clear_custom_bg_color(column: number /*i64*/): void
        
        /** Returns the custom background color of column [param column]. */
        get_custom_bg_color(column: number /*i64*/): Color
        set_custom_as_button(column: number /*i64*/, enable: boolean): void
        is_custom_set_as_button(column: number /*i64*/): boolean
        
        /** Adds a button with [Texture2D] [param button] at column [param column]. The [param id] is used to identify the button in the according [signal Tree.button_clicked] signal and can be different from the buttons index. If not specified, the next available index is used, which may be retrieved by calling [method get_button_count] immediately before this method. Optionally, the button can be [param disabled] and have a [param tooltip_text]. */
        add_button(column: number /*i64*/, button: Texture2D, id: number /*i64*/ = -1, disabled: boolean = false, tooltip_text: string = ''): void
        
        /** Returns the number of buttons in column [param column]. */
        get_button_count(column: number /*i64*/): number /*i64*/
        
        /** Returns the tooltip text for the button at index [param button_index] in column [param column]. */
        get_button_tooltip_text(column: number /*i64*/, button_index: number /*i64*/): string
        
        /** Returns the ID for the button at index [param button_index] in column [param column]. */
        get_button_id(column: number /*i64*/, button_index: number /*i64*/): number /*i64*/
        
        /** Returns the button index if there is a button with ID [param id] in column [param column], otherwise returns -1. */
        get_button_by_id(column: number /*i64*/, id: number /*i64*/): number /*i64*/
        
        /** Returns the [Texture2D] of the button at index [param button_index] in column [param column]. */
        get_button(column: number /*i64*/, button_index: number /*i64*/): Texture2D
        
        /** Sets the tooltip text for the button at index [param button_index] in the given [param column]. */
        set_button_tooltip_text(column: number /*i64*/, button_index: number /*i64*/, tooltip: string): void
        
        /** Sets the given column's button [Texture2D] at index [param button_index] to [param button]. */
        set_button(column: number /*i64*/, button_index: number /*i64*/, button: Texture2D): void
        
        /** Removes the button at index [param button_index] in column [param column]. */
        erase_button(column: number /*i64*/, button_index: number /*i64*/): void
        
        /** If `true`, disables the button at index [param button_index] in the given [param column]. */
        set_button_disabled(column: number /*i64*/, button_index: number /*i64*/, disabled: boolean): void
        
        /** Sets the given column's button color at index [param button_index] to [param color]. */
        set_button_color(column: number /*i64*/, button_index: number /*i64*/, color: Color): void
        
        /** Returns `true` if the button at index [param button_index] for the given [param column] is disabled. */
        is_button_disabled(column: number /*i64*/, button_index: number /*i64*/): boolean
        
        /** Sets the given column's tooltip text. */
        set_tooltip_text(column: number /*i64*/, tooltip: string): void
        
        /** Returns the given column's tooltip text. */
        get_tooltip_text(column: number /*i64*/): string
        
        /** Sets the given column's text alignment. See [enum HorizontalAlignment] for possible values. */
        set_text_alignment(column: number /*i64*/, text_alignment: HorizontalAlignment): void
        
        /** Returns the given column's text alignment. */
        get_text_alignment(column: number /*i64*/): HorizontalAlignment
        
        /** If [param enable] is `true`, the given [param column] is expanded to the right. */
        set_expand_right(column: number /*i64*/, enable: boolean): void
        
        /** Returns `true` if `expand_right` is set. */
        get_expand_right(column: number /*i64*/): boolean
        set_disable_folding(disable: boolean): void
        is_folding_disabled(): boolean
        
        /** Creates an item and adds it as a child.  
         *  The new item will be inserted as position [param index] (the default value `-1` means the last position), or it will be the last child if [param index] is higher than the child count.  
         */
        create_child(index: number /*i64*/ = -1): TreeItem
        
        /** Adds a previously unparented [TreeItem] as a direct child of this one. The [param child] item must not be a part of any [Tree] or parented to any [TreeItem]. See also [method remove_child]. */
        add_child(child: TreeItem): void
        
        /** Removes the given child [TreeItem] and all its children from the [Tree]. Note that it doesn't free the item from memory, so it can be reused later (see [method add_child]). To completely remove a [TreeItem] use [method Object.free].  
         *      
         *  **Note:** If you want to move a child from one [Tree] to another, then instead of removing and adding it manually you can use [method move_before] or [method move_after].  
         */
        remove_child(child: TreeItem): void
        
        /** Returns the [Tree] that owns this TreeItem. */
        get_tree(): Tree
        
        /** Returns the next sibling TreeItem in the tree or a null object if there is none. */
        get_next(): TreeItem
        
        /** Returns the previous sibling TreeItem in the tree or a null object if there is none. */
        get_prev(): TreeItem
        
        /** Returns the parent TreeItem or a null object if there is none. */
        get_parent(): TreeItem
        
        /** Returns the TreeItem's first child. */
        get_first_child(): TreeItem
        
        /** Returns the next TreeItem in the tree (in the context of a depth-first search) or a `null` object if there is none.  
         *  If [param wrap] is enabled, the method will wrap around to the first element in the tree when called on the last element, otherwise it returns `null`.  
         */
        get_next_in_tree(wrap: boolean = false): TreeItem
        
        /** Returns the previous TreeItem in the tree (in the context of a depth-first search) or a `null` object if there is none.  
         *  If [param wrap] is enabled, the method will wrap around to the last element in the tree when called on the first visible element, otherwise it returns `null`.  
         */
        get_prev_in_tree(wrap: boolean = false): TreeItem
        
        /** Returns the next visible TreeItem in the tree (in the context of a depth-first search) or a `null` object if there is none.  
         *  If [param wrap] is enabled, the method will wrap around to the first visible element in the tree when called on the last visible element, otherwise it returns `null`.  
         */
        get_next_visible(wrap: boolean = false): TreeItem
        
        /** Returns the previous visible sibling TreeItem in the tree (in the context of a depth-first search) or a `null` object if there is none.  
         *  If [param wrap] is enabled, the method will wrap around to the last visible element in the tree when called on the first visible element, otherwise it returns `null`.  
         */
        get_prev_visible(wrap: boolean = false): TreeItem
        
        /** Returns a child item by its [param index] (see [method get_child_count]). This method is often used for iterating all children of an item.  
         *  Negative indices access the children from the last one.  
         */
        get_child(index: number /*i64*/): TreeItem
        
        /** Returns the number of child items. */
        get_child_count(): number /*i64*/
        
        /** Returns an array of references to the item's children. */
        get_children(): Array
        
        /** Returns the node's order in the tree. For example, if called on the first child item the position is `0`. */
        get_index(): number /*i64*/
        
        /** Moves this TreeItem right before the given [param item].  
         *      
         *  **Note:** You can't move to the root or move the root.  
         */
        move_before(item: TreeItem): void
        
        /** Moves this TreeItem right after the given [param item].  
         *      
         *  **Note:** You can't move to the root or move the root.  
         */
        move_after(item: TreeItem): void
        
        /** Calls the [param method] on the actual TreeItem and its children recursively. Pass parameters as a comma separated list. */
        call_recursive(method: StringName, ...vargargs: any[]): void
        
        /** If `true`, the TreeItem is collapsed. */
        get collapsed(): boolean
        set collapsed(value: boolean)
        
        /** If `true`, the [TreeItem] is visible (default).  
         *  Note that if a [TreeItem] is set to not be visible, none of its children will be visible either.  
         */
        get visible(): boolean
        set visible(value: boolean)
        
        /** If `true`, folding is disabled for this TreeItem. */
        get disable_folding(): boolean
        set disable_folding(value: boolean)
        
        /** The custom minimum height. */
        get custom_minimum_height(): number /*i64*/
        set custom_minimum_height(value: number /*i64*/)
    }
    /** Internal mesh type.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_trianglemesh.html  
     */
    class TriangleMesh extends RefCounted {
        constructor(identifier?: any)
    }
    /** Represents a straight tube-shaped [PrimitiveMesh] with variable width.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_tubetrailmesh.html  
     */
    class TubeTrailMesh extends PrimitiveMesh {
        constructor(identifier?: any)
        set_radius(radius: number /*f64*/): void
        get_radius(): number /*f64*/
        set_radial_steps(radial_steps: number /*i64*/): void
        get_radial_steps(): number /*i64*/
        set_sections(sections: number /*i64*/): void
        get_sections(): number /*i64*/
        set_section_length(section_length: number /*f64*/): void
        get_section_length(): number /*f64*/
        set_section_rings(section_rings: number /*i64*/): void
        get_section_rings(): number /*i64*/
        set_cap_top(cap_top: boolean): void
        is_cap_top(): boolean
        set_cap_bottom(cap_bottom: boolean): void
        is_cap_bottom(): boolean
        set_curve(curve: Curve): void
        get_curve(): Curve
        
        /** The baseline radius of the tube. The radius of a particular section ring is obtained by multiplying this radius by the value of the [member curve] at the given distance. */
        get radius(): number /*f64*/
        set radius(value: number /*f64*/)
        
        /** The number of sides on the tube. For example, a value of `5` means the tube will be pentagonal. Higher values result in a more detailed tube at the cost of performance. */
        get radial_steps(): number /*i64*/
        set radial_steps(value: number /*i64*/)
        
        /** The total number of sections on the tube. */
        get sections(): number /*i64*/
        set sections(value: number /*i64*/)
        
        /** The length of a section of the tube. */
        get section_length(): number /*f64*/
        set section_length(value: number /*f64*/)
        
        /** The number of rings in a section. The [member curve] is sampled on each ring to determine its radius. Higher values result in a more detailed tube at the cost of performance. */
        get section_rings(): number /*i64*/
        set section_rings(value: number /*i64*/)
        
        /** If `true`, generates a cap at the top of the tube. This can be set to `false` to speed up generation and rendering when the cap is never seen by the camera. */
        get cap_top(): boolean
        set cap_top(value: boolean)
        
        /** If `true`, generates a cap at the bottom of the tube. This can be set to `false` to speed up generation and rendering when the cap is never seen by the camera. */
        get cap_bottom(): boolean
        set cap_bottom(value: boolean)
        
        /** Determines the radius of the tube along its length. The radius of a particular section ring is obtained by multiplying the baseline [member radius] by the value of this curve at the given distance. For values smaller than `0`, the faces will be inverted. */
        get curve(): Curve
        set curve(value: Curve)
    }
    namespace Tween {
        enum TweenProcessMode {
            /** The [Tween] updates after each physics frame (see [method Node._physics_process]). */
            TWEEN_PROCESS_PHYSICS = 0,
            
            /** The [Tween] updates after each process frame (see [method Node._process]). */
            TWEEN_PROCESS_IDLE = 1,
        }
        enum TweenPauseMode {
            /** If the [Tween] has a bound node, it will process when that node can process (see [member Node.process_mode]). Otherwise it's the same as [constant TWEEN_PAUSE_STOP]. */
            TWEEN_PAUSE_BOUND = 0,
            
            /** If [SceneTree] is paused, the [Tween] will also pause. */
            TWEEN_PAUSE_STOP = 1,
            
            /** The [Tween] will process regardless of whether [SceneTree] is paused. */
            TWEEN_PAUSE_PROCESS = 2,
        }
        enum TransitionType {
            /** The animation is interpolated linearly. */
            TRANS_LINEAR = 0,
            
            /** The animation is interpolated using a sine function. */
            TRANS_SINE = 1,
            
            /** The animation is interpolated with a quintic (to the power of 5) function. */
            TRANS_QUINT = 2,
            
            /** The animation is interpolated with a quartic (to the power of 4) function. */
            TRANS_QUART = 3,
            
            /** The animation is interpolated with a quadratic (to the power of 2) function. */
            TRANS_QUAD = 4,
            
            /** The animation is interpolated with an exponential (to the power of x) function. */
            TRANS_EXPO = 5,
            
            /** The animation is interpolated with elasticity, wiggling around the edges. */
            TRANS_ELASTIC = 6,
            
            /** The animation is interpolated with a cubic (to the power of 3) function. */
            TRANS_CUBIC = 7,
            
            /** The animation is interpolated with a function using square roots. */
            TRANS_CIRC = 8,
            
            /** The animation is interpolated by bouncing at the end. */
            TRANS_BOUNCE = 9,
            
            /** The animation is interpolated backing out at ends. */
            TRANS_BACK = 10,
            
            /** The animation is interpolated like a spring towards the end. */
            TRANS_SPRING = 11,
        }
        enum EaseType {
            /** The interpolation starts slowly and speeds up towards the end. */
            EASE_IN = 0,
            
            /** The interpolation starts quickly and slows down towards the end. */
            EASE_OUT = 1,
            
            /** A combination of [constant EASE_IN] and [constant EASE_OUT]. The interpolation is slowest at both ends. */
            EASE_IN_OUT = 2,
            
            /** A combination of [constant EASE_IN] and [constant EASE_OUT]. The interpolation is fastest at both ends. */
            EASE_OUT_IN = 3,
        }
    }
    /** Lightweight object used for general-purpose animation via script, using [Tweener]s.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_tween.html  
     */
    class Tween extends RefCounted {
        constructor(identifier?: any)
        /** Creates and appends a [PropertyTweener]. This method tweens a [param property] of an [param object] between an initial value and [param final_val] in a span of time equal to [param duration], in seconds. The initial value by default is the property's value at the time the tweening of the [PropertyTweener] starts.  
         *  **Example:**  
         *    
         *  will move the sprite to position (100, 200) and then to (200, 300). If you use [method PropertyTweener.from] or [method PropertyTweener.from_current], the starting position will be overwritten by the given value instead. See other methods in [PropertyTweener] to see how the tweening can be tweaked further.  
         *      
         *  **Note:** You can find the correct property name by hovering over the property in the Inspector. You can also provide the components of a property directly by using `"property:component"` (eg. `position:x`), where it would only apply to that particular component.  
         *  **Example:** Moving an object twice from the same position, with different transition types:  
         *    
         */
        tween_property(object: Object, property: NodePath, final_val: any, duration: number /*f64*/): PropertyTweener
        
        /** Creates and appends an [IntervalTweener]. This method can be used to create delays in the tween animation, as an alternative to using the delay in other [Tweener]s, or when there's no animation (in which case the [Tween] acts as a timer). [param time] is the length of the interval, in seconds.  
         *  **Example:** Creating an interval in code execution:  
         *    
         *  **Example:** Creating an object that moves back and forth and jumps every few seconds:  
         *    
         */
        tween_interval(time: number /*f64*/): IntervalTweener
        
        /** Creates and appends a [CallbackTweener]. This method can be used to call an arbitrary method in any object. Use [method Callable.bind] to bind additional arguments for the call.  
         *  **Example:** Object that keeps shooting every 1 second:  
         *    
         *  **Example:** Turning a sprite red and then blue, with 2 second delay:  
         *    
         */
        tween_callback(callback: Callable): CallbackTweener
        
        /** Creates and appends a [MethodTweener]. This method is similar to a combination of [method tween_callback] and [method tween_property]. It calls a method over time with a tweened value provided as an argument. The value is tweened between [param from] and [param to] over the time specified by [param duration], in seconds. Use [method Callable.bind] to bind additional arguments for the call. You can use [method MethodTweener.set_ease] and [method MethodTweener.set_trans] to tweak the easing and transition of the value or [method MethodTweener.set_delay] to delay the tweening.  
         *  **Example:** Making a 3D object look from one point to another point:  
         *    
         *  **Example:** Setting the text of a [Label], using an intermediate method and after a delay:  
         *    
         */
        tween_method(method: Callable, from: any, to: any, duration: number /*f64*/): MethodTweener
        
        /** Processes the [Tween] by the given [param delta] value, in seconds. This is mostly useful for manual control when the [Tween] is paused. It can also be used to end the [Tween] animation immediately, by setting [param delta] longer than the whole duration of the [Tween] animation.  
         *  Returns `true` if the [Tween] still has [Tweener]s that haven't finished.  
         */
        custom_step(delta: number /*f64*/): boolean
        
        /** Stops the tweening and resets the [Tween] to its initial state. This will not remove any appended [Tweener]s.  
         *      
         *  **Note:** If a Tween is stopped and not bound to any node, it will exist indefinitely until manually started or invalidated. If you lose a reference to such Tween, you can retrieve it using [method SceneTree.get_processed_tweens].  
         */
        stop(): void
        
        /** Pauses the tweening. The animation can be resumed by using [method play].  
         *      
         *  **Note:** If a Tween is paused and not bound to any node, it will exist indefinitely until manually started or invalidated. If you lose a reference to such Tween, you can retrieve it using [method SceneTree.get_processed_tweens].  
         */
        pause(): void
        
        /** Resumes a paused or stopped [Tween]. */
        play(): void
        
        /** Aborts all tweening operations and invalidates the [Tween]. */
        kill(): void
        
        /** Returns the total time in seconds the [Tween] has been animating (i.e. the time since it started, not counting pauses etc.). The time is affected by [method set_speed_scale], and [method stop] will reset it to `0`.  
         *      
         *  **Note:** As it results from accumulating frame deltas, the time returned after the [Tween] has finished animating will be slightly greater than the actual [Tween] duration.  
         */
        get_total_elapsed_time(): number /*f64*/
        
        /** Returns whether the [Tween] is currently running, i.e. it wasn't paused and it's not finished. */
        is_running(): boolean
        
        /** Returns whether the [Tween] is valid. A valid [Tween] is a [Tween] contained by the scene tree (i.e. the array from [method SceneTree.get_processed_tweens] will contain this [Tween]). A [Tween] might become invalid when it has finished tweening, is killed, or when created with `Tween.new()`. Invalid [Tween]s can't have [Tweener]s appended. */
        is_valid(): boolean
        
        /** Binds this [Tween] with the given [param node]. [Tween]s are processed directly by the [SceneTree], so they run independently of the animated nodes. When you bind a [Node] with the [Tween], the [Tween] will halt the animation when the object is not inside tree and the [Tween] will be automatically killed when the bound object is freed. Also [constant TWEEN_PAUSE_BOUND] will make the pausing behavior dependent on the bound node.  
         *  For a shorter way to create and bind a [Tween], you can use [method Node.create_tween].  
         */
        bind_node(node: Node): Tween
        
        /** Determines whether the [Tween] should run after process frames (see [method Node._process]) or physics frames (see [method Node._physics_process]).  
         *  Default value is [constant TWEEN_PROCESS_IDLE].  
         */
        set_process_mode(mode: Tween.TweenProcessMode): Tween
        
        /** Determines the behavior of the [Tween] when the [SceneTree] is paused. Check [enum TweenPauseMode] for options.  
         *  Default value is [constant TWEEN_PAUSE_BOUND].  
         */
        set_pause_mode(mode: Tween.TweenPauseMode): Tween
        
        /** If [param parallel] is `true`, the [Tweener]s appended after this method will by default run simultaneously, as opposed to sequentially.  
         *      
         *  **Note:** Just like with [method parallel], the tweener added right before this method will also be part of the parallel step.  
         *    
         */
        set_parallel(parallel: boolean = true): Tween
        
        /** Sets the number of times the tweening sequence will be repeated, i.e. `set_loops(2)` will run the animation twice.  
         *  Calling this method without arguments will make the [Tween] run infinitely, until either it is killed with [method kill], the [Tween]'s bound node is freed, or all the animated objects have been freed (which makes further animation impossible).  
         *  **Warning:** Make sure to always add some duration/delay when using infinite loops. To prevent the game freezing, 0-duration looped animations (e.g. a single [CallbackTweener] with no delay) are stopped after a small number of loops, which may produce unexpected results. If a [Tween]'s lifetime depends on some node, always use [method bind_node].  
         */
        set_loops(loops: number /*i64*/ = 0): Tween
        
        /** Returns the number of remaining loops for this [Tween] (see [method set_loops]). A return value of `-1` indicates an infinitely looping [Tween], and a return value of `0` indicates that the [Tween] has already finished. */
        get_loops_left(): number /*i64*/
        
        /** Scales the speed of tweening. This affects all [Tweener]s and their delays. */
        set_speed_scale(speed: number /*f64*/): Tween
        
        /** Sets the default transition type for [PropertyTweener]s and [MethodTweener]s animated by this [Tween].  
         *  If not specified, the default value is [constant TRANS_LINEAR].  
         */
        set_trans(trans: Tween.TransitionType): Tween
        
        /** Sets the default ease type for [PropertyTweener]s and [MethodTweener]s animated by this [Tween].  
         *  If not specified, the default value is [constant EASE_IN_OUT].  
         */
        set_ease(ease: Tween.EaseType): Tween
        
        /** Makes the next [Tweener] run parallelly to the previous one.  
         *  **Example:**  
         *    
         *  All [Tweener]s in the example will run at the same time.  
         *  You can make the [Tween] parallel by default by using [method set_parallel].  
         */
        parallel(): Tween
        
        /** Used to chain two [Tweener]s after [method set_parallel] is called with `true`.  
         *    
         */
        chain(): Tween
        
        /** This method can be used for manual interpolation of a value, when you don't want [Tween] to do animating for you. It's similar to [method @GlobalScope.lerp], but with support for custom transition and easing.  
         *  [param initial_value] is the starting value of the interpolation.  
         *  [param delta_value] is the change of the value in the interpolation, i.e. it's equal to `final_value - initial_value`.  
         *  [param elapsed_time] is the time in seconds that passed after the interpolation started and it's used to control the position of the interpolation. E.g. when it's equal to half of the [param duration], the interpolated value will be halfway between initial and final values. This value can also be greater than [param duration] or lower than 0, which will extrapolate the value.  
         *  [param duration] is the total time of the interpolation.  
         *      
         *  **Note:** If [param duration] is equal to `0`, the method will always return the final value, regardless of [param elapsed_time] provided.  
         */
        static interpolate_value(initial_value: any, delta_value: any, elapsed_time: number /*f64*/, duration: number /*f64*/, trans_type: Tween.TransitionType, ease_type: Tween.EaseType): any
        
        /** Emitted when one step of the [Tween] is complete, providing the step index. One step is either a single [Tweener] or a group of [Tweener]s running in parallel. */
        readonly step_finished: Signal // idx: number /*i64*/ => void
        
        /** Emitted when a full loop is complete (see [method set_loops]), providing the loop index. This signal is not emitted after the final loop, use [signal finished] instead for this case. */
        readonly loop_finished: Signal // loop_count: number /*i64*/ => void
        
        /** Emitted when the [Tween] has finished all tweening. Never emitted when the [Tween] is set to infinite looping (see [method set_loops]). */
        readonly finished: Signal //  => void
    }
    /** Abstract class for all Tweeners used by [Tween].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_tweener.html  
     */
    class Tweener extends RefCounted {
        constructor(identifier?: any)
        /** Emitted when the [Tweener] has just finished its job. */
        readonly finished: Signal //  => void
    }
    /** Helper class to implement a UDP server.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_udpserver.html  
     */
    class UDPServer extends RefCounted {
        constructor(identifier?: any)
        /** Starts the server by opening a UDP socket listening on the given [param port]. You can optionally specify a [param bind_address] to only listen for packets sent to that address. See also [method PacketPeerUDP.bind]. */
        listen(port: number /*i64*/, bind_address: string = '*'): GodotError
        
        /** Call this method at regular intervals (e.g. inside [method Node._process]) to process new packets. And packet from known address/port pair will be delivered to the appropriate [PacketPeerUDP], any packet received from an unknown address/port pair will be added as a pending connection (see [method is_connection_available], [method take_connection]). The maximum number of pending connection is defined via [member max_pending_connections]. */
        poll(): GodotError
        
        /** Returns `true` if a packet with a new address/port combination was received on the socket. */
        is_connection_available(): boolean
        
        /** Returns the local port this server is listening to. */
        get_local_port(): number /*i64*/
        
        /** Returns `true` if the socket is open and listening on a port. */
        is_listening(): boolean
        
        /** Returns the first pending connection (connected to the appropriate address/port). Will return `null` if no new connection is available. See also [method is_connection_available], [method PacketPeerUDP.connect_to_host]. */
        take_connection(): PacketPeerUDP
        
        /** Stops the server, closing the UDP socket if open. Will close all connected [PacketPeerUDP] accepted via [method take_connection] (remote peers will not be notified). */
        stop(): void
        set_max_pending_connections(max_pending_connections: number /*i64*/): void
        get_max_pending_connections(): number /*i64*/
        
        /** Define the maximum number of pending connections, during [method poll], any new pending connection exceeding that value will be automatically dropped. Setting this value to `0` effectively prevents any new pending connection to be accepted (e.g. when all your players have connected). */
        get max_pending_connections(): number /*i64*/
        set max_pending_connections(value: number /*i64*/)
    }
    namespace UPNP {
        enum UPNPResult {
            /** UPNP command or discovery was successful. */
            UPNP_RESULT_SUCCESS = 0,
            
            /** Not authorized to use the command on the [UPNPDevice]. May be returned when the user disabled UPNP on their router. */
            UPNP_RESULT_NOT_AUTHORIZED = 1,
            
            /** No port mapping was found for the given port, protocol combination on the given [UPNPDevice]. */
            UPNP_RESULT_PORT_MAPPING_NOT_FOUND = 2,
            
            /** Inconsistent parameters. */
            UPNP_RESULT_INCONSISTENT_PARAMETERS = 3,
            
            /** No such entry in array. May be returned if a given port, protocol combination is not found on an [UPNPDevice]. */
            UPNP_RESULT_NO_SUCH_ENTRY_IN_ARRAY = 4,
            
            /** The action failed. */
            UPNP_RESULT_ACTION_FAILED = 5,
            
            /** The [UPNPDevice] does not allow wildcard values for the source IP address. */
            UPNP_RESULT_SRC_IP_WILDCARD_NOT_PERMITTED = 6,
            
            /** The [UPNPDevice] does not allow wildcard values for the external port. */
            UPNP_RESULT_EXT_PORT_WILDCARD_NOT_PERMITTED = 7,
            
            /** The [UPNPDevice] does not allow wildcard values for the internal port. */
            UPNP_RESULT_INT_PORT_WILDCARD_NOT_PERMITTED = 8,
            
            /** The remote host value must be a wildcard. */
            UPNP_RESULT_REMOTE_HOST_MUST_BE_WILDCARD = 9,
            
            /** The external port value must be a wildcard. */
            UPNP_RESULT_EXT_PORT_MUST_BE_WILDCARD = 10,
            
            /** No port maps are available. May also be returned if port mapping functionality is not available. */
            UPNP_RESULT_NO_PORT_MAPS_AVAILABLE = 11,
            
            /** Conflict with other mechanism. May be returned instead of [constant UPNP_RESULT_CONFLICT_WITH_OTHER_MAPPING] if a port mapping conflicts with an existing one. */
            UPNP_RESULT_CONFLICT_WITH_OTHER_MECHANISM = 12,
            
            /** Conflict with an existing port mapping. */
            UPNP_RESULT_CONFLICT_WITH_OTHER_MAPPING = 13,
            
            /** External and internal port values must be the same. */
            UPNP_RESULT_SAME_PORT_VALUES_REQUIRED = 14,
            
            /** Only permanent leases are supported. Do not use the `duration` parameter when adding port mappings. */
            UPNP_RESULT_ONLY_PERMANENT_LEASE_SUPPORTED = 15,
            
            /** Invalid gateway. */
            UPNP_RESULT_INVALID_GATEWAY = 16,
            
            /** Invalid port. */
            UPNP_RESULT_INVALID_PORT = 17,
            
            /** Invalid protocol. */
            UPNP_RESULT_INVALID_PROTOCOL = 18,
            
            /** Invalid duration. */
            UPNP_RESULT_INVALID_DURATION = 19,
            
            /** Invalid arguments. */
            UPNP_RESULT_INVALID_ARGS = 20,
            
            /** Invalid response. */
            UPNP_RESULT_INVALID_RESPONSE = 21,
            
            /** Invalid parameter. */
            UPNP_RESULT_INVALID_PARAM = 22,
            
            /** HTTP error. */
            UPNP_RESULT_HTTP_ERROR = 23,
            
            /** Socket error. */
            UPNP_RESULT_SOCKET_ERROR = 24,
            
            /** Error allocating memory. */
            UPNP_RESULT_MEM_ALLOC_ERROR = 25,
            
            /** No gateway available. You may need to call [method discover] first, or discovery didn't detect any valid IGDs (InternetGatewayDevices). */
            UPNP_RESULT_NO_GATEWAY = 26,
            
            /** No devices available. You may need to call [method discover] first, or discovery didn't detect any valid [UPNPDevice]s. */
            UPNP_RESULT_NO_DEVICES = 27,
            
            /** Unknown error. */
            UPNP_RESULT_UNKNOWN_ERROR = 28,
        }
    }
    /** Universal Plug and Play (UPnP) functions for network device discovery, querying and port forwarding.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_upnp.html  
     */
    class UPNP extends RefCounted {
        constructor(identifier?: any)
        /** Returns the number of discovered [UPNPDevice]s. */
        get_device_count(): number /*i64*/
        
        /** Returns the [UPNPDevice] at the given [param index]. */
        get_device(index: number /*i64*/): UPNPDevice
        
        /** Adds the given [UPNPDevice] to the list of discovered devices. */
        add_device(device: UPNPDevice): void
        
        /** Sets the device at [param index] from the list of discovered devices to [param device]. */
        set_device(index: number /*i64*/, device: UPNPDevice): void
        
        /** Removes the device at [param index] from the list of discovered devices. */
        remove_device(index: number /*i64*/): void
        
        /** Clears the list of discovered devices. */
        clear_devices(): void
        
        /** Returns the default gateway. That is the first discovered [UPNPDevice] that is also a valid IGD (InternetGatewayDevice). */
        get_gateway(): UPNPDevice
        
        /** Discovers local [UPNPDevice]s. Clears the list of previously discovered devices.  
         *  Filters for IGD (InternetGatewayDevice) type devices by default, as those manage port forwarding. [param timeout] is the time to wait for responses in milliseconds. [param ttl] is the time-to-live; only touch this if you know what you're doing.  
         *  See [enum UPNPResult] for possible return values.  
         */
        discover(timeout: number /*i64*/ = 2000, ttl: number /*i64*/ = 2, device_filter: string = 'InternetGatewayDevice'): number /*i64*/
        
        /** Returns the external [IP] address of the default gateway (see [method get_gateway]) as string. Returns an empty string on error. */
        query_external_address(): string
        
        /** Adds a mapping to forward the external [param port] (between 1 and 65535, although recommended to use port 1024 or above) on the default gateway (see [method get_gateway]) to the [param port_internal] on the local machine for the given protocol [param proto] (either `"TCP"` or `"UDP"`, with UDP being the default). If a port mapping for the given port and protocol combination already exists on that gateway device, this method tries to overwrite it. If that is not desired, you can retrieve the gateway manually with [method get_gateway] and call [method add_port_mapping] on it, if any. Note that forwarding a well-known port (below 1024) with UPnP may fail depending on the device.  
         *  Depending on the gateway device, if a mapping for that port already exists, it will either be updated or it will refuse this command due to that conflict, especially if the existing mapping for that port wasn't created via UPnP or points to a different network address (or device) than this one.  
         *  If [param port_internal] is `0` (the default), the same port number is used for both the external and the internal port (the [param port] value).  
         *  The description ([param desc]) is shown in some routers management UIs and can be used to point out which application added the mapping.  
         *  The mapping's lease [param duration] can be limited by specifying a duration in seconds. The default of `0` means no duration, i.e. a permanent lease and notably some devices only support these permanent leases. Note that whether permanent or not, this is only a request and the gateway may still decide at any point to remove the mapping (which usually happens on a reboot of the gateway, when its external IP address changes, or on some models when it detects a port mapping has become inactive, i.e. had no traffic for multiple minutes). If not `0` (permanent), the allowed range according to spec is between `120` (2 minutes) and `86400` seconds (24 hours).  
         *  See [enum UPNPResult] for possible return values.  
         */
        add_port_mapping(port: number /*i64*/, port_internal: number /*i64*/ = 0, desc: string = '', proto: string = 'UDP', duration: number /*i64*/ = 0): number /*i64*/
        
        /** Deletes the port mapping for the given port and protocol combination on the default gateway (see [method get_gateway]) if one exists. [param port] must be a valid port between 1 and 65535, [param proto] can be either `"TCP"` or `"UDP"`. May be refused for mappings pointing to addresses other than this one, for well-known ports (below 1024), or for mappings not added via UPnP. See [enum UPNPResult] for possible return values. */
        delete_port_mapping(port: number /*i64*/, proto: string = 'UDP'): number /*i64*/
        set_discover_multicast_if(m_if: string): void
        get_discover_multicast_if(): string
        set_discover_local_port(port: number /*i64*/): void
        get_discover_local_port(): number /*i64*/
        set_discover_ipv6(ipv6: boolean): void
        is_discover_ipv6(): boolean
        
        /** Multicast interface to use for discovery. Uses the default multicast interface if empty. */
        get discover_multicast_if(): string
        set discover_multicast_if(value: string)
        
        /** If `0`, the local port to use for discovery is chosen automatically by the system. If `1`, discovery will be done from the source port 1900 (same as destination port). Otherwise, the value will be used as the port. */
        get discover_local_port(): number /*i64*/
        set discover_local_port(value: number /*i64*/)
        
        /** If `true`, IPv6 is used for [UPNPDevice] discovery. */
        get discover_ipv6(): boolean
        set discover_ipv6(value: boolean)
    }
    namespace UPNPDevice {
        enum IGDStatus {
            /** OK. */
            IGD_STATUS_OK = 0,
            
            /** HTTP error. */
            IGD_STATUS_HTTP_ERROR = 1,
            
            /** Empty HTTP response. */
            IGD_STATUS_HTTP_EMPTY = 2,
            
            /** Returned response contained no URLs. */
            IGD_STATUS_NO_URLS = 3,
            
            /** Not a valid IGD. */
            IGD_STATUS_NO_IGD = 4,
            
            /** Disconnected. */
            IGD_STATUS_DISCONNECTED = 5,
            
            /** Unknown device. */
            IGD_STATUS_UNKNOWN_DEVICE = 6,
            
            /** Invalid control. */
            IGD_STATUS_INVALID_CONTROL = 7,
            
            /** Memory allocation error. */
            IGD_STATUS_MALLOC_ERROR = 8,
            
            /** Unknown error. */
            IGD_STATUS_UNKNOWN_ERROR = 9,
        }
    }
    /** Universal Plug and Play (UPnP) device.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_upnpdevice.html  
     */
    class UPNPDevice extends RefCounted {
        constructor(identifier?: any)
        /** Returns `true` if this is a valid IGD (InternetGatewayDevice) which potentially supports port forwarding. */
        is_valid_gateway(): boolean
        
        /** Returns the external IP address of this [UPNPDevice] or an empty string. */
        query_external_address(): string
        
        /** Adds a port mapping to forward the given external port on this [UPNPDevice] for the given protocol to the local machine. See [method UPNP.add_port_mapping]. */
        add_port_mapping(port: number /*i64*/, port_internal: number /*i64*/ = 0, desc: string = '', proto: string = 'UDP', duration: number /*i64*/ = 0): number /*i64*/
        
        /** Deletes the port mapping identified by the given port and protocol combination on this device. See [method UPNP.delete_port_mapping]. */
        delete_port_mapping(port: number /*i64*/, proto: string = 'UDP'): number /*i64*/
        set_description_url(url: string): void
        get_description_url(): string
        set_service_type(type: string): void
        get_service_type(): string
        set_igd_control_url(url: string): void
        get_igd_control_url(): string
        set_igd_service_type(type: string): void
        get_igd_service_type(): string
        set_igd_our_addr(addr: string): void
        get_igd_our_addr(): string
        set_igd_status(status: UPNPDevice.IGDStatus): void
        get_igd_status(): UPNPDevice.IGDStatus
        
        /** URL to the device description. */
        get description_url(): string
        set description_url(value: string)
        
        /** Service type. */
        get service_type(): string
        set service_type(value: string)
        
        /** IDG control URL. */
        get igd_control_url(): string
        set igd_control_url(value: string)
        
        /** IGD service type. */
        get igd_service_type(): string
        set igd_service_type(value: string)
        
        /** Address of the local machine in the network connecting it to this [UPNPDevice]. */
        get igd_our_addr(): string
        set igd_our_addr(value: string)
        
        /** IGD status. See [enum IGDStatus]. */
        get igd_status(): number /*i64*/
        set igd_status(value: number /*i64*/)
    }
    namespace UndoRedo {
        enum MergeMode {
            /** Makes "do"/"undo" operations stay in separate actions. */
            MERGE_DISABLE = 0,
            
            /** Makes so that the action's "undo" operations are from the first action created and the "do" operations are from the last subsequent action with the same name. */
            MERGE_ENDS = 1,
            
            /** Makes subsequent actions with the same name be merged into one. */
            MERGE_ALL = 2,
        }
    }
    /** Provides a high-level interface for implementing undo and redo operations.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_undoredo.html  
     */
    class UndoRedo extends Object {
        constructor(identifier?: any)
        /** Create a new action. After this is called, do all your calls to [method add_do_method], [method add_undo_method], [method add_do_property], and [method add_undo_property], then commit the action with [method commit_action].  
         *  The way actions are merged is dictated by [param merge_mode]. See [enum MergeMode] for details.  
         *  The way undo operation are ordered in actions is dictated by [param backward_undo_ops]. When [param backward_undo_ops] is `false` undo option are ordered in the same order they were added. Which means the first operation to be added will be the first to be undone.  
         */
        create_action(name: string, merge_mode: UndoRedo.MergeMode = 0, backward_undo_ops: boolean = false): void
        
        /** Commit the action. If [param execute] is `true` (which it is by default), all "do" methods/properties are called/set when this function is called. */
        commit_action(execute: boolean = true): void
        
        /** Returns `true` if the [UndoRedo] is currently committing the action, i.e. running its "do" method or property change (see [method commit_action]). */
        is_committing_action(): boolean
        
        /** Register a [Callable] that will be called when the action is committed. */
        add_do_method(callable: Callable): void
        
        /** Register a [Callable] that will be called when the action is undone. */
        add_undo_method(callable: Callable): void
        
        /** Register a [param property] that would change its value to [param value] when the action is committed. */
        add_do_property(object: Object, property: StringName, value: any): void
        
        /** Register a [param property] that would change its value to [param value] when the action is undone. */
        add_undo_property(object: Object, property: StringName, value: any): void
        
        /** Register a reference for "do" that will be erased if the "do" history is lost. This is useful mostly for new nodes created for the "do" call. Do not use for resources.  
         *    
         */
        add_do_reference(object: Object): void
        
        /** Register a reference for "undo" that will be erased if the "undo" history is lost. This is useful mostly for nodes removed with the "do" call (not the "undo" call!).  
         *    
         */
        add_undo_reference(object: Object): void
        
        /** Marks the next "do" and "undo" operations to be processed even if the action gets merged with another in the [constant MERGE_ENDS] mode. Return to normal operation using [method end_force_keep_in_merge_ends]. */
        start_force_keep_in_merge_ends(): void
        
        /** Stops marking operations as to be processed even if the action gets merged with another in the [constant MERGE_ENDS] mode. See [method start_force_keep_in_merge_ends]. */
        end_force_keep_in_merge_ends(): void
        
        /** Returns how many elements are in the history. */
        get_history_count(): number /*i64*/
        
        /** Gets the index of the current action. */
        get_current_action(): number /*i64*/
        
        /** Gets the action name from its index. */
        get_action_name(id: number /*i64*/): string
        
        /** Clear the undo/redo history and associated references.  
         *  Passing `false` to [param increase_version] will prevent the version number from increasing when the history is cleared.  
         */
        clear_history(increase_version: boolean = true): void
        
        /** Gets the name of the current action, equivalent to `get_action_name(get_current_action())`. */
        get_current_action_name(): string
        
        /** Returns `true` if an "undo" action is available. */
        has_undo(): boolean
        
        /** Returns `true` if a "redo" action is available. */
        has_redo(): boolean
        
        /** Gets the version. Every time a new action is committed, the [UndoRedo]'s version number is increased automatically.  
         *  This is useful mostly to check if something changed from a saved version.  
         */
        get_version(): number /*i64*/
        
        /** Redo the last action. */
        redo(): boolean
        
        /** Undo the last action. */
        undo(): boolean
        
        /** Called when [method undo] or [method redo] was called. */
        readonly version_changed: Signal //  => void
    }
    /** A container that arranges its child controls vertically.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_vboxcontainer.html  
     */
    class VBoxContainer extends BoxContainer {
        constructor(identifier?: any)
    }
    /** A container that arranges its child controls vertically and wraps them around at the borders.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_vflowcontainer.html  
     */
    class VFlowContainer extends FlowContainer {
        constructor(identifier?: any)
    }
    /** A vertical scrollbar that goes from top (min) to bottom (max).  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_vscrollbar.html  
     */
    class VScrollBar extends ScrollBar {
        constructor(identifier?: any)
    }
    /** A vertical line used for separating other controls.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_vseparator.html  
     */
    class VSeparator extends Separator {
        constructor(identifier?: any)
    }
    /** A vertical slider that goes from bottom (min) to top (max).  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_vslider.html  
     */
    class VSlider extends Slider {
        constructor(identifier?: any)
    }
    /** A container that splits two child controls vertically and provides a grabber for adjusting the split ratio.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_vsplitcontainer.html  
     */
    class VSplitContainer extends SplitContainer {
        constructor(identifier?: any)
    }
    /** A 3D physics body that simulates the behavior of a car.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_vehiclebody3d.html  
     */
    class VehicleBody3D extends RigidBody3D {
        constructor(identifier?: any)
        set_engine_force(engine_force: number /*f64*/): void
        get_engine_force(): number /*f64*/
        set_brake(brake: number /*f64*/): void
        get_brake(): number /*f64*/
        set_steering(steering: number /*f64*/): void
        get_steering(): number /*f64*/
        
        /** Accelerates the vehicle by applying an engine force. The vehicle is only sped up if the wheels that have [member VehicleWheel3D.use_as_traction] set to `true` and are in contact with a surface. The [member RigidBody3D.mass] of the vehicle has an effect on the acceleration of the vehicle. For a vehicle with a mass set to 1000, try a value in the 25 - 50 range for acceleration.  
         *      
         *  **Note:** The simulation does not take the effect of gears into account, you will need to add logic for this if you wish to simulate gears.  
         *  A negative value will result in the vehicle reversing.  
         */
        get engine_force(): number /*f64*/
        set engine_force(value: number /*f64*/)
        
        /** Slows down the vehicle by applying a braking force. The vehicle is only slowed down if the wheels are in contact with a surface. The force you need to apply to adequately slow down your vehicle depends on the [member RigidBody3D.mass] of the vehicle. For a vehicle with a mass set to 1000, try a value in the 25 - 30 range for hard braking. */
        get brake(): number /*f64*/
        set brake(value: number /*f64*/)
        
        /** The steering angle for the vehicle. Setting this to a non-zero value will result in the vehicle turning when it's moving. Wheels that have [member VehicleWheel3D.use_as_steering] set to `true` will automatically be rotated.  
         *      
         *  **Note:** This property is edited in the inspector in degrees. In code the property is set in radians.  
         */
        get steering(): number /*f64*/
        set steering(value: number /*f64*/)
    }
    /** A 3D physics body for a [VehicleBody3D] that simulates the behavior of a wheel.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_vehiclewheel3d.html  
     */
    class VehicleWheel3D extends Node3D {
        constructor(identifier?: any)
        set_radius(length: number /*f64*/): void
        get_radius(): number /*f64*/
        set_suspension_rest_length(length: number /*f64*/): void
        get_suspension_rest_length(): number /*f64*/
        set_suspension_travel(length: number /*f64*/): void
        get_suspension_travel(): number /*f64*/
        set_suspension_stiffness(length: number /*f64*/): void
        get_suspension_stiffness(): number /*f64*/
        set_suspension_max_force(length: number /*f64*/): void
        get_suspension_max_force(): number /*f64*/
        set_damping_compression(length: number /*f64*/): void
        get_damping_compression(): number /*f64*/
        set_damping_relaxation(length: number /*f64*/): void
        get_damping_relaxation(): number /*f64*/
        set_use_as_traction(enable: boolean): void
        is_used_as_traction(): boolean
        set_use_as_steering(enable: boolean): void
        is_used_as_steering(): boolean
        set_friction_slip(length: number /*f64*/): void
        get_friction_slip(): number /*f64*/
        
        /** Returns `true` if this wheel is in contact with a surface. */
        is_in_contact(): boolean
        
        /** Returns the contacting body node if valid in the tree, as [Node3D]. At the moment, [GridMap] is not supported so the node will be always of type [PhysicsBody3D].  
         *  Returns `null` if the wheel is not in contact with a surface, or the contact body is not a [PhysicsBody3D].  
         */
        get_contact_body(): Node3D
        set_roll_influence(roll_influence: number /*f64*/): void
        get_roll_influence(): number /*f64*/
        
        /** Returns a value between 0.0 and 1.0 that indicates whether this wheel is skidding. 0.0 is skidding (the wheel has lost grip, e.g. icy terrain), 1.0 means not skidding (the wheel has full grip, e.g. dry asphalt road). */
        get_skidinfo(): number /*f64*/
        
        /** Returns the rotational speed of the wheel in revolutions per minute. */
        get_rpm(): number /*f64*/
        set_engine_force(engine_force: number /*f64*/): void
        get_engine_force(): number /*f64*/
        set_brake(brake: number /*f64*/): void
        get_brake(): number /*f64*/
        set_steering(steering: number /*f64*/): void
        get_steering(): number /*f64*/
        
        /** Accelerates the wheel by applying an engine force. The wheel is only sped up if it is in contact with a surface. The [member RigidBody3D.mass] of the vehicle has an effect on the acceleration of the vehicle. For a vehicle with a mass set to 1000, try a value in the 25 - 50 range for acceleration.  
         *      
         *  **Note:** The simulation does not take the effect of gears into account, you will need to add logic for this if you wish to simulate gears.  
         *  A negative value will result in the wheel reversing.  
         */
        get engine_force(): number /*f64*/
        set engine_force(value: number /*f64*/)
        
        /** Slows down the wheel by applying a braking force. The wheel is only slowed down if it is in contact with a surface. The force you need to apply to adequately slow down your vehicle depends on the [member RigidBody3D.mass] of the vehicle. For a vehicle with a mass set to 1000, try a value in the 25 - 30 range for hard braking. */
        get brake(): number /*f64*/
        set brake(value: number /*f64*/)
        
        /** The steering angle for the wheel, in radians. Setting this to a non-zero value will result in the vehicle turning when it's moving. */
        get steering(): number /*f64*/
        set steering(value: number /*f64*/)
        
        /** If `true`, this wheel transfers engine force to the ground to propel the vehicle forward. This value is used in conjunction with [member VehicleBody3D.engine_force] and ignored if you are using the per-wheel [member engine_force] value instead. */
        get use_as_traction(): boolean
        set use_as_traction(value: boolean)
        
        /** If `true`, this wheel will be turned when the car steers. This value is used in conjunction with [member VehicleBody3D.steering] and ignored if you are using the per-wheel [member steering] value instead. */
        get use_as_steering(): boolean
        set use_as_steering(value: boolean)
        
        /** This value affects the roll of your vehicle. If set to 1.0 for all wheels, your vehicle will resist body roll, while a value of 0.0 will be prone to rolling over. */
        get wheel_roll_influence(): number /*f64*/
        set wheel_roll_influence(value: number /*f64*/)
        
        /** The radius of the wheel in meters. */
        get wheel_radius(): number /*f64*/
        set wheel_radius(value: number /*f64*/)
        
        /** This is the distance in meters the wheel is lowered from its origin point. Don't set this to 0.0 and move the wheel into position, instead move the origin point of your wheel (the gizmo in Godot) to the position the wheel will take when bottoming out, then use the rest length to move the wheel down to the position it should be in when the car is in rest. */
        get wheel_rest_length(): number /*f64*/
        set wheel_rest_length(value: number /*f64*/)
        
        /** This determines how much grip this wheel has. It is combined with the friction setting of the surface the wheel is in contact with. 0.0 means no grip, 1.0 is normal grip. For a drift car setup, try setting the grip of the rear wheels slightly lower than the front wheels, or use a lower value to simulate tire wear.  
         *  It's best to set this to 1.0 when starting out.  
         */
        get wheel_friction_slip(): number /*f64*/
        set wheel_friction_slip(value: number /*f64*/)
        
        /** This is the distance the suspension can travel. As Godot units are equivalent to meters, keep this setting relatively low. Try a value between 0.1 and 0.3 depending on the type of car. */
        get suspension_travel(): number /*f64*/
        set suspension_travel(value: number /*f64*/)
        
        /** This value defines the stiffness of the suspension. Use a value lower than 50 for an off-road car, a value between 50 and 100 for a race car and try something around 200 for something like a Formula 1 car. */
        get suspension_stiffness(): number /*f64*/
        set suspension_stiffness(value: number /*f64*/)
        
        /** The maximum force the spring can resist. This value should be higher than a quarter of the [member RigidBody3D.mass] of the [VehicleBody3D] or the spring will not carry the weight of the vehicle. Good results are often obtained by a value that is about 3× to 4× this number. */
        get suspension_max_force(): number /*f64*/
        set suspension_max_force(value: number /*f64*/)
        
        /** The damping applied to the spring when the spring is being compressed. This value should be between 0.0 (no damping) and 1.0. A value of 0.0 means the car will keep bouncing as the spring keeps its energy. A good value for this is around 0.3 for a normal car, 0.5 for a race car. */
        get damping_compression(): number /*f64*/
        set damping_compression(value: number /*f64*/)
        
        /** The damping applied to the spring when relaxing. This value should be between 0.0 (no damping) and 1.0. This value should always be slightly higher than the [member damping_compression] property. For a [member damping_compression] value of 0.3, try a relaxation value of 0.5. */
        get damping_relaxation(): number /*f64*/
        set damping_relaxation(value: number /*f64*/)
    }
    class VehicleWheel3DGizmoPlugin extends EditorNode3DGizmoPlugin {
        constructor(identifier?: any)
    }
    class VersionControlEditorPlugin extends EditorPlugin {
        constructor(identifier?: any)
    }
    /** Base resource for video streams.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_videostream.html  
     */
    class VideoStream extends Resource {
        constructor(identifier?: any)
        /** Called when the video starts playing, to initialize and return a subclass of [VideoStreamPlayback]. */
        /* gdvirtual */ _instantiate_playback(): VideoStreamPlayback
        set_file(file: string): void
        get_file(): string
        
        /** The video file path or URI that this [VideoStream] resource handles.  
         *  For [VideoStreamTheora], this filename should be an Ogg Theora video file with the `.ogv` extension.  
         */
        get file(): string
        set file(value: string)
    }
    /** Internal class used by [VideoStream] to manage playback state when played from a [VideoStreamPlayer].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_videostreamplayback.html  
     */
    class VideoStreamPlayback extends Resource {
        constructor(identifier?: any)
        /** Stops playback. May be called multiple times before [method _play], or in response to [method VideoStreamPlayer.stop]. [method _is_playing] should return false once stopped. */
        /* gdvirtual */ _stop(): void
        
        /** Called in response to [member VideoStreamPlayer.autoplay] or [method VideoStreamPlayer.play]. Note that manual playback may also invoke [method _stop] multiple times before this method is called. [method _is_playing] should return true once playing. */
        /* gdvirtual */ _play(): void
        
        /** Returns the playback state, as determined by calls to [method _play] and [method _stop]. */
        /* gdvirtual */ _is_playing(): boolean
        
        /** Set the paused status of video playback. [method _is_paused] must return [param paused]. Called in response to the [member VideoStreamPlayer.paused] setter. */
        /* gdvirtual */ _set_paused(paused: boolean): void
        
        /** Returns the paused status, as set by [method _set_paused]. */
        /* gdvirtual */ _is_paused(): boolean
        
        /** Returns the video duration in seconds, if known, or 0 if unknown. */
        /* gdvirtual */ _get_length(): number /*f64*/
        
        /** Return the current playback timestamp. Called in response to the [member VideoStreamPlayer.stream_position] getter. */
        /* gdvirtual */ _get_playback_position(): number /*f64*/
        
        /** Seeks to [param time] seconds. Called in response to the [member VideoStreamPlayer.stream_position] setter. */
        /* gdvirtual */ _seek(time: number /*f64*/): void
        
        /** Select the audio track [param idx]. Called when playback starts, and in response to the [member VideoStreamPlayer.audio_track] setter. */
        /* gdvirtual */ _set_audio_track(idx: number /*i64*/): void
        
        /** Allocates a [Texture2D] in which decoded video frames will be drawn. */
        /* gdvirtual */ _get_texture(): Texture2D
        
        /** Ticks video playback for [param delta] seconds. Called every frame as long as [method _is_paused] and [method _is_playing] return true. */
        /* gdvirtual */ _update(delta: number /*f64*/): void
        
        /** Returns the number of audio channels. */
        /* gdvirtual */ _get_channels(): number /*i64*/
        
        /** Returns the audio sample rate used for mixing. */
        /* gdvirtual */ _get_mix_rate(): number /*i64*/
        
        /** Render [param num_frames] audio frames (of [method _get_channels] floats each) from [param buffer], starting from index [param offset] in the array. Returns the number of audio frames rendered, or -1 on error. */
        mix_audio(num_frames: number /*i64*/, buffer: PackedFloat32Array = <any> {} /*compound.type from 32([object Object])*/, offset: number /*i64*/ = 0): number /*i64*/
    }
    /** A control used for video playback.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_videostreamplayer.html  
     */
    class VideoStreamPlayer extends Control {
        constructor(identifier?: any)
        set_stream(stream: VideoStream): void
        get_stream(): VideoStream
        
        /** Starts the video playback from the beginning. If the video is paused, this will not unpause the video. */
        play(): void
        
        /** Stops the video playback and sets the stream position to 0.  
         *      
         *  **Note:** Although the stream position will be set to 0, the first frame of the video stream won't become the current frame.  
         */
        stop(): void
        
        /** Returns `true` if the video is playing.  
         *      
         *  **Note:** The video is still considered playing if paused during playback.  
         */
        is_playing(): boolean
        set_paused(paused: boolean): void
        is_paused(): boolean
        set_loop(loop: boolean): void
        has_loop(): boolean
        set_volume(volume: number /*f64*/): void
        get_volume(): number /*f64*/
        set_volume_db(db: number /*f64*/): void
        get_volume_db(): number /*f64*/
        set_audio_track(track: number /*i64*/): void
        get_audio_track(): number /*i64*/
        
        /** Returns the video stream's name, or `"<No Stream>"` if no video stream is assigned. */
        get_stream_name(): string
        
        /** The length of the current stream, in seconds.  
         *      
         *  **Note:** For [VideoStreamTheora] streams (the built-in format supported by Godot), this value will always be zero, as getting the stream length is not implemented yet. The feature may be supported by video formats implemented by a GDExtension add-on.  
         */
        get_stream_length(): number /*f64*/
        set_stream_position(position: number /*f64*/): void
        get_stream_position(): number /*f64*/
        set_autoplay(enabled: boolean): void
        has_autoplay(): boolean
        set_expand(enable: boolean): void
        has_expand(): boolean
        set_buffering_msec(msec: number /*i64*/): void
        get_buffering_msec(): number /*i64*/
        set_bus(bus: StringName): void
        get_bus(): StringName
        
        /** Returns the current frame as a [Texture2D]. */
        get_video_texture(): Texture2D
        
        /** The embedded audio track to play. */
        get audio_track(): number /*i64*/
        set audio_track(value: number /*i64*/)
        
        /** The assigned video stream. See description for supported formats. */
        get stream(): VideoStream
        set stream(value: VideoStream)
        
        /** Audio volume in dB. */
        get volume_db(): number /*f64*/
        set volume_db(value: number /*f64*/)
        
        /** Audio volume as a linear value. */
        get volume(): number /*f64*/
        set volume(value: number /*f64*/)
        
        /** If `true`, playback starts when the scene loads. */
        get autoplay(): boolean
        set autoplay(value: boolean)
        
        /** If `true`, the video is paused. */
        get paused(): boolean
        set paused(value: boolean)
        
        /** If `true`, the video scales to the control size. Otherwise, the control minimum size will be automatically adjusted to match the video stream's dimensions. */
        get expand(): boolean
        set expand(value: boolean)
        
        /** If `true`, the video restarts when it reaches its end. */
        get loop(): boolean
        set loop(value: boolean)
        
        /** Amount of time in milliseconds to store in buffer while playing. */
        get buffering_msec(): number /*i64*/
        set buffering_msec(value: number /*i64*/)
        
        /** The current position of the stream, in seconds.  
         *      
         *  **Note:** Changing this value won't have any effect as seeking is not implemented yet, except in video formats implemented by a GDExtension add-on.  
         */
        get stream_position(): number /*f64*/
        set stream_position(value: number /*f64*/)
        
        /** Audio bus to use for sound playback. */
        get bus(): StringName
        set bus(value: StringName)
        
        /** Emitted when playback is finished. */
        readonly finished: Signal //  => void
    }
    /** [VideoStream] resource for Ogg Theora videos.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_videostreamtheora.html  
     */
    class VideoStreamTheora extends VideoStream {
        constructor(identifier?: any)
    }
    class ViewPanner extends RefCounted {
        constructor(identifier?: any)
    }
    namespace Viewport {
        enum PositionalShadowAtlasQuadrantSubdiv {
            /** This quadrant will not be used. */
            SHADOW_ATLAS_QUADRANT_SUBDIV_DISABLED = 0,
            
            /** This quadrant will only be used by one shadow map. */
            SHADOW_ATLAS_QUADRANT_SUBDIV_1 = 1,
            
            /** This quadrant will be split in 4 and used by up to 4 shadow maps. */
            SHADOW_ATLAS_QUADRANT_SUBDIV_4 = 2,
            
            /** This quadrant will be split 16 ways and used by up to 16 shadow maps. */
            SHADOW_ATLAS_QUADRANT_SUBDIV_16 = 3,
            
            /** This quadrant will be split 64 ways and used by up to 64 shadow maps. */
            SHADOW_ATLAS_QUADRANT_SUBDIV_64 = 4,
            
            /** This quadrant will be split 256 ways and used by up to 256 shadow maps. Unless the [member positional_shadow_atlas_size] is very high, the shadows in this quadrant will be very low resolution. */
            SHADOW_ATLAS_QUADRANT_SUBDIV_256 = 5,
            
            /** This quadrant will be split 1024 ways and used by up to 1024 shadow maps. Unless the [member positional_shadow_atlas_size] is very high, the shadows in this quadrant will be very low resolution. */
            SHADOW_ATLAS_QUADRANT_SUBDIV_1024 = 6,
            
            /** Represents the size of the [enum PositionalShadowAtlasQuadrantSubdiv] enum. */
            SHADOW_ATLAS_QUADRANT_SUBDIV_MAX = 7,
        }
        enum Scaling3DMode {
            /** Use bilinear scaling for the viewport's 3D buffer. The amount of scaling can be set using [member scaling_3d_scale]. Values less than `1.0` will result in undersampling while values greater than `1.0` will result in supersampling. A value of `1.0` disables scaling. */
            SCALING_3D_MODE_BILINEAR = 0,
            
            /** Use AMD FidelityFX Super Resolution 1.0 upscaling for the viewport's 3D buffer. The amount of scaling can be set using [member scaling_3d_scale]. Values less than `1.0` will be result in the viewport being upscaled using FSR. Values greater than `1.0` are not supported and bilinear downsampling will be used instead. A value of `1.0` disables scaling. */
            SCALING_3D_MODE_FSR = 1,
            
            /** Use AMD FidelityFX Super Resolution 2.2 upscaling for the viewport's 3D buffer. The amount of scaling can be set using [member Viewport.scaling_3d_scale]. Values less than `1.0` will be result in the viewport being upscaled using FSR2. Values greater than `1.0` are not supported and bilinear downsampling will be used instead. A value of `1.0` will use FSR2 at native resolution as a TAA solution. */
            SCALING_3D_MODE_FSR2 = 2,
            
            /** Represents the size of the [enum Scaling3DMode] enum. */
            SCALING_3D_MODE_MAX = 3,
        }
        enum MSAA {
            /** Multisample antialiasing mode disabled. This is the default value, and is also the fastest setting. */
            MSAA_DISABLED = 0,
            
            /** Use 2× Multisample Antialiasing. This has a moderate performance cost. It helps reduce aliasing noticeably, but 4× MSAA still looks substantially better. */
            MSAA_2X = 1,
            
            /** Use 4× Multisample Antialiasing. This has a significant performance cost, and is generally a good compromise between performance and quality. */
            MSAA_4X = 2,
            
            /** Use 8× Multisample Antialiasing. This has a very high performance cost. The difference between 4× and 8× MSAA may not always be visible in real gameplay conditions. Likely unsupported on low-end and older hardware. */
            MSAA_8X = 3,
            
            /** Represents the size of the [enum MSAA] enum. */
            MSAA_MAX = 4,
        }
        enum ScreenSpaceAA {
            /** Do not perform any antialiasing in the full screen post-process. */
            SCREEN_SPACE_AA_DISABLED = 0,
            
            /** Use fast approximate antialiasing. FXAA is a popular screen-space antialiasing method, which is fast but will make the image look blurry, especially at lower resolutions. It can still work relatively well at large resolutions such as 1440p and 4K. */
            SCREEN_SPACE_AA_FXAA = 1,
            
            /** Represents the size of the [enum ScreenSpaceAA] enum. */
            SCREEN_SPACE_AA_MAX = 2,
        }
        enum RenderInfo {
            /** Amount of objects in frame. */
            RENDER_INFO_OBJECTS_IN_FRAME = 0,
            
            /** Amount of vertices in frame. */
            RENDER_INFO_PRIMITIVES_IN_FRAME = 1,
            
            /** Amount of draw calls in frame. */
            RENDER_INFO_DRAW_CALLS_IN_FRAME = 2,
            
            /** Represents the size of the [enum RenderInfo] enum. */
            RENDER_INFO_MAX = 3,
        }
        enum RenderInfoType {
            RENDER_INFO_TYPE_VISIBLE = 0,
            RENDER_INFO_TYPE_SHADOW = 1,
            RENDER_INFO_TYPE_MAX = 2,
        }
        enum DebugDraw {
            /** Objects are displayed normally. */
            DEBUG_DRAW_DISABLED = 0,
            
            /** Objects are displayed without light information. */
            DEBUG_DRAW_UNSHADED = 1,
            DEBUG_DRAW_LIGHTING = 2,
            
            /** Objects are displayed semi-transparent with additive blending so you can see where they are drawing over top of one another. A higher overdraw means you are wasting performance on drawing pixels that are being hidden behind others. */
            DEBUG_DRAW_OVERDRAW = 3,
            
            /** Objects are displayed in wireframe style. */
            DEBUG_DRAW_WIREFRAME = 4,
            DEBUG_DRAW_NORMAL_BUFFER = 5,
            
            /** Objects are displayed with only the albedo value from [VoxelGI]s. */
            DEBUG_DRAW_VOXEL_GI_ALBEDO = 6,
            
            /** Objects are displayed with only the lighting value from [VoxelGI]s. */
            DEBUG_DRAW_VOXEL_GI_LIGHTING = 7,
            
            /** Objects are displayed with only the emission color from [VoxelGI]s. */
            DEBUG_DRAW_VOXEL_GI_EMISSION = 8,
            
            /** Draws the shadow atlas that stores shadows from [OmniLight3D]s and [SpotLight3D]s in the upper left quadrant of the [Viewport]. */
            DEBUG_DRAW_SHADOW_ATLAS = 9,
            
            /** Draws the shadow atlas that stores shadows from [DirectionalLight3D]s in the upper left quadrant of the [Viewport]. */
            DEBUG_DRAW_DIRECTIONAL_SHADOW_ATLAS = 10,
            DEBUG_DRAW_SCENE_LUMINANCE = 11,
            
            /** Draws the screen-space ambient occlusion texture instead of the scene so that you can clearly see how it is affecting objects. In order for this display mode to work, you must have [member Environment.ssao_enabled] set in your [WorldEnvironment]. */
            DEBUG_DRAW_SSAO = 12,
            
            /** Draws the screen-space indirect lighting texture instead of the scene so that you can clearly see how it is affecting objects. In order for this display mode to work, you must have [member Environment.ssil_enabled] set in your [WorldEnvironment]. */
            DEBUG_DRAW_SSIL = 13,
            
            /** Colors each PSSM split for the [DirectionalLight3D]s in the scene a different color so you can see where the splits are. In order, they will be colored red, green, blue, and yellow. */
            DEBUG_DRAW_PSSM_SPLITS = 14,
            
            /** Draws the decal atlas used by [Decal]s and light projector textures in the upper left quadrant of the [Viewport]. */
            DEBUG_DRAW_DECAL_ATLAS = 15,
            DEBUG_DRAW_SDFGI = 16,
            DEBUG_DRAW_SDFGI_PROBES = 17,
            DEBUG_DRAW_GI_BUFFER = 18,
            DEBUG_DRAW_DISABLE_LOD = 19,
            DEBUG_DRAW_CLUSTER_OMNI_LIGHTS = 20,
            DEBUG_DRAW_CLUSTER_SPOT_LIGHTS = 21,
            DEBUG_DRAW_CLUSTER_DECALS = 22,
            DEBUG_DRAW_CLUSTER_REFLECTION_PROBES = 23,
            DEBUG_DRAW_OCCLUDERS = 24,
            DEBUG_DRAW_MOTION_VECTORS = 25,
            
            /** Draws the internal resolution buffer of the scene before post-processing is applied. */
            DEBUG_DRAW_INTERNAL_BUFFER = 26,
        }
        enum DefaultCanvasItemTextureFilter {
            /** The texture filter reads from the nearest pixel only. This makes the texture look pixelated from up close, and grainy from a distance (due to mipmaps not being sampled). */
            DEFAULT_CANVAS_ITEM_TEXTURE_FILTER_NEAREST = 0,
            
            /** The texture filter blends between the nearest 4 pixels. This makes the texture look smooth from up close, and grainy from a distance (due to mipmaps not being sampled). */
            DEFAULT_CANVAS_ITEM_TEXTURE_FILTER_LINEAR = 1,
            
            /** The texture filter blends between the nearest 4 pixels and between the nearest 2 mipmaps (or uses the nearest mipmap if [member ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter] is `true`). This makes the texture look smooth from up close, and smooth from a distance.  
             *  Use this for non-pixel art textures that may be viewed at a low scale (e.g. due to [Camera2D] zoom or sprite scaling), as mipmaps are important to smooth out pixels that are smaller than on-screen pixels.  
             */
            DEFAULT_CANVAS_ITEM_TEXTURE_FILTER_LINEAR_WITH_MIPMAPS = 2,
            
            /** The texture filter reads from the nearest pixel and blends between the nearest 2 mipmaps (or uses the nearest mipmap if [member ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter] is `true`). This makes the texture look pixelated from up close, and smooth from a distance.  
             *  Use this for non-pixel art textures that may be viewed at a low scale (e.g. due to [Camera2D] zoom or sprite scaling), as mipmaps are important to smooth out pixels that are smaller than on-screen pixels.  
             */
            DEFAULT_CANVAS_ITEM_TEXTURE_FILTER_NEAREST_WITH_MIPMAPS = 3,
            
            /** Max value for [enum DefaultCanvasItemTextureFilter] enum. */
            DEFAULT_CANVAS_ITEM_TEXTURE_FILTER_MAX = 4,
        }
        enum DefaultCanvasItemTextureRepeat {
            /** Disables textures repeating. Instead, when reading UVs outside the 0-1 range, the value will be clamped to the edge of the texture, resulting in a stretched out look at the borders of the texture. */
            DEFAULT_CANVAS_ITEM_TEXTURE_REPEAT_DISABLED = 0,
            
            /** Enables the texture to repeat when UV coordinates are outside the 0-1 range. If using one of the linear filtering modes, this can result in artifacts at the edges of a texture when the sampler filters across the edges of the texture. */
            DEFAULT_CANVAS_ITEM_TEXTURE_REPEAT_ENABLED = 1,
            
            /** Flip the texture when repeating so that the edge lines up instead of abruptly changing. */
            DEFAULT_CANVAS_ITEM_TEXTURE_REPEAT_MIRROR = 2,
            
            /** Max value for [enum DefaultCanvasItemTextureRepeat] enum. */
            DEFAULT_CANVAS_ITEM_TEXTURE_REPEAT_MAX = 3,
        }
        enum SDFOversize {
            SDF_OVERSIZE_100_PERCENT = 0,
            SDF_OVERSIZE_120_PERCENT = 1,
            SDF_OVERSIZE_150_PERCENT = 2,
            SDF_OVERSIZE_200_PERCENT = 3,
            SDF_OVERSIZE_MAX = 4,
        }
        enum SDFScale {
            SDF_SCALE_100_PERCENT = 0,
            SDF_SCALE_50_PERCENT = 1,
            SDF_SCALE_25_PERCENT = 2,
            SDF_SCALE_MAX = 3,
        }
        enum VRSMode {
            /** VRS is disabled. */
            VRS_DISABLED = 0,
            
            /** VRS uses a texture. Note, for stereoscopic use a texture atlas with a texture for each view. */
            VRS_TEXTURE = 1,
            
            /** VRS texture is supplied by the primary [XRInterface]. */
            VRS_XR = 2,
            
            /** Represents the size of the [enum VRSMode] enum. */
            VRS_MAX = 3,
        }
    }
    /** Abstract base class for viewports. Encapsulates drawing and interaction with a game world.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_viewport.html  
     */
    class Viewport extends Node {
        constructor(identifier?: any)
        set_world_2d(world_2d: World2D): void
        get_world_2d(): World2D
        
        /** Returns the first valid [World2D] for this viewport, searching the [member world_2d] property of itself and any Viewport ancestor. */
        find_world_2d(): World2D
        set_canvas_transform(xform: Transform2D): void
        get_canvas_transform(): Transform2D
        set_global_canvas_transform(xform: Transform2D): void
        get_global_canvas_transform(): Transform2D
        
        /** Returns the transform from the viewport's coordinate system to the embedder's coordinate system. */
        get_final_transform(): Transform2D
        
        /** Returns the transform from the Viewport's coordinates to the screen coordinates of the containing window manager window. */
        get_screen_transform(): Transform2D
        
        /** Returns the visible rectangle in global screen coordinates. */
        get_visible_rect(): Rect2
        set_transparent_background(enable: boolean): void
        has_transparent_background(): boolean
        set_use_hdr_2d(enable: boolean): void
        is_using_hdr_2d(): boolean
        set_msaa_2d(msaa: Viewport.MSAA): void
        get_msaa_2d(): Viewport.MSAA
        set_msaa_3d(msaa: Viewport.MSAA): void
        get_msaa_3d(): Viewport.MSAA
        set_screen_space_aa(screen_space_aa: Viewport.ScreenSpaceAA): void
        get_screen_space_aa(): Viewport.ScreenSpaceAA
        set_use_taa(enable: boolean): void
        is_using_taa(): boolean
        set_use_debanding(enable: boolean): void
        is_using_debanding(): boolean
        set_use_occlusion_culling(enable: boolean): void
        is_using_occlusion_culling(): boolean
        set_debug_draw(debug_draw: Viewport.DebugDraw): void
        get_debug_draw(): Viewport.DebugDraw
        
        /** Returns rendering statistics of the given type. See [enum RenderInfoType] and [enum RenderInfo] for options. */
        get_render_info(type: Viewport.RenderInfoType, info: Viewport.RenderInfo): number /*i64*/
        
        /** Returns the viewport's texture.  
         *      
         *  **Note:** When trying to store the current texture (e.g. in a file), it might be completely black or outdated if used too early, especially when used in e.g. [method Node._ready]. To make sure the texture you get is correct, you can await [signal RenderingServer.frame_post_draw] signal.  
         *    
         */
        get_texture(): ViewportTexture
        set_physics_object_picking(enable: boolean): void
        get_physics_object_picking(): boolean
        set_physics_object_picking_sort(enable: boolean): void
        get_physics_object_picking_sort(): boolean
        
        /** Returns the viewport's RID from the [RenderingServer]. */
        get_viewport_rid(): RID
        
        /** Helper method which calls the `set_text()` method on the currently focused [Control], provided that it is defined (e.g. if the focused Control is [Button] or [LineEdit]). */
        push_text_input(text: string): void
        
        /** Triggers the given [param event] in this [Viewport]. This can be used to pass an [InputEvent] between viewports, or to locally apply inputs that were sent over the network or saved to a file.  
         *  If [param in_local_coords] is `false`, the event's position is in the embedder's coordinates and will be converted to viewport coordinates. If [param in_local_coords] is `true`, the event's position is in viewport coordinates.  
         *  While this method serves a similar purpose as [method Input.parse_input_event], it does not remap the specified [param event] based on project settings like [member ProjectSettings.input_devices/pointing/emulate_touch_from_mouse].  
         *  Calling this method will propagate calls to child nodes for following methods in the given order:  
         *  - [method Node._input]  
         *  - [method Control._gui_input] for [Control] nodes  
         *  - [method Node._shortcut_input]  
         *  - [method Node._unhandled_key_input]  
         *  - [method Node._unhandled_input]  
         *  If an earlier method marks the input as handled via [method set_input_as_handled], any later method in this list will not be called.  
         *  If none of the methods handle the event and [member physics_object_picking] is `true`, the event is used for physics object picking.  
         */
        push_input(event: InputEvent, in_local_coords: boolean = false): void
        
        /** Triggers the given [InputEvent] in this [Viewport]. This can be used to pass input events between viewports, or to locally apply inputs that were sent over the network or saved to a file.  
         *  If [param in_local_coords] is `false`, the event's position is in the embedder's coordinates and will be converted to viewport coordinates. If [param in_local_coords] is `true`, the event's position is in viewport coordinates.  
         *  While this method serves a similar purpose as [method Input.parse_input_event], it does not remap the specified [param event] based on project settings like [member ProjectSettings.input_devices/pointing/emulate_touch_from_mouse].  
         *  Calling this method will propagate calls to child nodes for following methods in the given order:  
         *  - [method Node._shortcut_input]  
         *  - [method Node._unhandled_key_input]  
         *  - [method Node._unhandled_input]  
         *  If an earlier method marks the input as handled via [method set_input_as_handled], any later method in this list will not be called.  
         *  If none of the methods handle the event and [member physics_object_picking] is `true`, the event is used for physics object picking.  
         *      
         *  **Note:** This method doesn't propagate input events to embedded [Window]s or [SubViewport]s.  
         *   *Deprecated.*  Use [method push_input] instead.  
         */
        push_unhandled_input(event: InputEvent, in_local_coords: boolean = false): void
        
        /** Returns the currently active 2D camera. Returns null if there are no active cameras. */
        get_camera_2d(): Camera2D
        set_as_audio_listener_2d(enable: boolean): void
        is_audio_listener_2d(): boolean
        
        /** Returns the mouse's position in this [Viewport] using the coordinate system of this [Viewport]. */
        get_mouse_position(): Vector2
        
        /** Moves the mouse pointer to the specified position in this [Viewport] using the coordinate system of this [Viewport].  
         *      
         *  **Note:** [method warp_mouse] is only supported on Windows, macOS and Linux. It has no effect on Android, iOS and Web.  
         */
        warp_mouse(position: Vector2): void
        
        /** Force instantly updating the display based on the current mouse cursor position. This includes updating the mouse cursor shape and sending necessary [signal Control.mouse_entered], [signal CollisionObject2D.mouse_entered], [signal CollisionObject3D.mouse_entered] and [signal Window.mouse_entered] signals and their respective `mouse_exited` counterparts. */
        update_mouse_cursor_state(): void
        
        /** Returns the drag data from the GUI, that was previously returned by [method Control._get_drag_data]. */
        gui_get_drag_data(): any
        
        /** Returns `true` if the viewport is currently performing a drag operation.  
         *  Alternative to [constant Node.NOTIFICATION_DRAG_BEGIN] and [constant Node.NOTIFICATION_DRAG_END] when you prefer polling the value.  
         */
        gui_is_dragging(): boolean
        
        /** Returns `true` if the drag operation is successful. */
        gui_is_drag_successful(): boolean
        
        /** Removes the focus from the currently focused [Control] within this viewport. If no [Control] has the focus, does nothing. */
        gui_release_focus(): void
        
        /** Returns the [Control] having the focus within this viewport. If no [Control] has the focus, returns null. */
        gui_get_focus_owner(): Control
        set_disable_input(disable: boolean): void
        is_input_disabled(): boolean
        _gui_remove_focus_for_window(_unnamed_arg0: Node): void
        _post_gui_grab_click_focus(): void
        set_positional_shadow_atlas_size(size: number /*i64*/): void
        get_positional_shadow_atlas_size(): number /*i64*/
        set_positional_shadow_atlas_16_bits(enable: boolean): void
        get_positional_shadow_atlas_16_bits(): boolean
        set_snap_controls_to_pixels(enabled: boolean): void
        is_snap_controls_to_pixels_enabled(): boolean
        set_snap_2d_transforms_to_pixel(enabled: boolean): void
        is_snap_2d_transforms_to_pixel_enabled(): boolean
        set_snap_2d_vertices_to_pixel(enabled: boolean): void
        is_snap_2d_vertices_to_pixel_enabled(): boolean
        
        /** Sets the number of subdivisions to use in the specified quadrant. A higher number of subdivisions allows you to have more shadows in the scene at once, but reduces the quality of the shadows. A good practice is to have quadrants with a varying number of subdivisions and to have as few subdivisions as possible. */
        set_positional_shadow_atlas_quadrant_subdiv(quadrant: number /*i64*/, subdiv: Viewport.PositionalShadowAtlasQuadrantSubdiv): void
        
        /** Returns the [enum PositionalShadowAtlasQuadrantSubdiv] of the specified quadrant. */
        get_positional_shadow_atlas_quadrant_subdiv(quadrant: number /*i64*/): Viewport.PositionalShadowAtlasQuadrantSubdiv
        
        /** Stops the input from propagating further down the [SceneTree].  
         *      
         *  **Note:** This does not affect the methods in [Input], only the way events are propagated.  
         */
        set_input_as_handled(): void
        
        /** Returns whether the current [InputEvent] has been handled. Input events are not handled until [method set_input_as_handled] has been called during the lifetime of an [InputEvent].  
         *  This is usually done as part of input handling methods like [method Node._input], [method Control._gui_input] or others, as well as in corresponding signal handlers.  
         *  If [member handle_input_locally] is set to `false`, this method will try finding the first parent viewport that is set to handle input locally, and return its value for [method is_input_handled] instead.  
         */
        is_input_handled(): boolean
        set_handle_input_locally(enable: boolean): void
        is_handling_input_locally(): boolean
        set_default_canvas_item_texture_filter(mode: Viewport.DefaultCanvasItemTextureFilter): void
        get_default_canvas_item_texture_filter(): Viewport.DefaultCanvasItemTextureFilter
        set_embedding_subwindows(enable: boolean): void
        is_embedding_subwindows(): boolean
        
        /** Returns a list of the visible embedded [Window]s inside the viewport.  
         *      
         *  **Note:** [Window]s inside other viewports will not be listed.  
         */
        get_embedded_subwindows(): Array
        set_canvas_cull_mask(mask: number /*i64*/): void
        get_canvas_cull_mask(): number /*i64*/
        
        /** Set/clear individual bits on the rendering layer mask. This simplifies editing this [Viewport]'s layers. */
        set_canvas_cull_mask_bit(layer: number /*i64*/, enable: boolean): void
        
        /** Returns an individual bit on the rendering layer mask. */
        get_canvas_cull_mask_bit(layer: number /*i64*/): boolean
        set_default_canvas_item_texture_repeat(mode: Viewport.DefaultCanvasItemTextureRepeat): void
        get_default_canvas_item_texture_repeat(): Viewport.DefaultCanvasItemTextureRepeat
        set_sdf_oversize(oversize: Viewport.SDFOversize): void
        get_sdf_oversize(): Viewport.SDFOversize
        set_sdf_scale(scale: Viewport.SDFScale): void
        get_sdf_scale(): Viewport.SDFScale
        set_mesh_lod_threshold(pixels: number /*f64*/): void
        get_mesh_lod_threshold(): number /*f64*/
        _process_picking(): void
        set_world_3d(world_3d: World3D): void
        get_world_3d(): World3D
        
        /** Returns the first valid [World3D] for this viewport, searching the [member world_3d] property of itself and any Viewport ancestor. */
        find_world_3d(): World3D
        set_use_own_world_3d(enable: boolean): void
        is_using_own_world_3d(): boolean
        
        /** Returns the currently active 3D camera. */
        get_camera_3d(): Camera3D
        set_as_audio_listener_3d(enable: boolean): void
        is_audio_listener_3d(): boolean
        set_disable_3d(disable: boolean): void
        is_3d_disabled(): boolean
        set_use_xr(use: boolean): void
        is_using_xr(): boolean
        set_scaling_3d_mode(scaling_3d_mode: Viewport.Scaling3DMode): void
        get_scaling_3d_mode(): Viewport.Scaling3DMode
        set_scaling_3d_scale(scale: number /*f64*/): void
        get_scaling_3d_scale(): number /*f64*/
        set_fsr_sharpness(fsr_sharpness: number /*f64*/): void
        get_fsr_sharpness(): number /*f64*/
        set_texture_mipmap_bias(texture_mipmap_bias: number /*f64*/): void
        get_texture_mipmap_bias(): number /*f64*/
        set_vrs_mode(mode: Viewport.VRSMode): void
        get_vrs_mode(): Viewport.VRSMode
        set_vrs_texture(texture: Texture2D): void
        get_vrs_texture(): Texture2D
        
        /** Disable 3D rendering (but keep 2D rendering). */
        get disable_3d(): boolean
        set disable_3d(value: boolean)
        
        /** If `true`, the viewport will use the primary XR interface to render XR output. When applicable this can result in a stereoscopic image and the resulting render being output to a headset. */
        get use_xr(): boolean
        set use_xr(value: boolean)
        
        /** If `true`, the viewport will use a unique copy of the [World3D] defined in [member world_3d]. */
        get own_world_3d(): boolean
        set own_world_3d(value: boolean)
        
        /** The custom [World3D] which can be used as 3D environment source. */
        get world_3d(): World3D
        set world_3d(value: World3D)
        
        /** The custom [World2D] which can be used as 2D environment source. */
        get world_2d(): World2D
        set world_2d(value: World2D)
        
        /** If `true`, the viewport should render its background as transparent. */
        get transparent_bg(): boolean
        set transparent_bg(value: boolean)
        
        /** If `true`, this viewport will mark incoming input events as handled by itself. If `false`, this is instead done by the first parent viewport that is set to handle input locally.  
         *  A [SubViewportContainer] will automatically set this property to `false` for the [Viewport] contained inside of it.  
         *  See also [method set_input_as_handled] and [method is_input_handled].  
         */
        get handle_input_locally(): boolean
        set handle_input_locally(value: boolean)
        get snap_2d_transforms_to_pixel(): boolean
        set snap_2d_transforms_to_pixel(value: boolean)
        get snap_2d_vertices_to_pixel(): boolean
        set snap_2d_vertices_to_pixel(value: boolean)
        
        /** The multisample anti-aliasing mode for 2D/Canvas rendering. A higher number results in smoother edges at the cost of significantly worse performance. A value of 2 or 4 is best unless targeting very high-end systems. This has no effect on shader-induced aliasing or texture aliasing. */
        get msaa_2d(): number /*i64*/
        set msaa_2d(value: number /*i64*/)
        
        /** The multisample anti-aliasing mode for 3D rendering. A higher number results in smoother edges at the cost of significantly worse performance. A value of 2 or 4 is best unless targeting very high-end systems. See also bilinear scaling 3d [member scaling_3d_mode] for supersampling, which provides higher quality but is much more expensive. This has no effect on shader-induced aliasing or texture aliasing. */
        get msaa_3d(): number /*i64*/
        set msaa_3d(value: number /*i64*/)
        
        /** Sets the screen-space antialiasing method used. Screen-space antialiasing works by selectively blurring edges in a post-process shader. It differs from MSAA which takes multiple coverage samples while rendering objects. Screen-space AA methods are typically faster than MSAA and will smooth out specular aliasing, but tend to make scenes appear blurry. */
        get screen_space_aa(): number /*i64*/
        set screen_space_aa(value: number /*i64*/)
        
        /** Enables Temporal Anti-Aliasing for this viewport. TAA works by jittering the camera and accumulating the images of the last rendered frames, motion vector rendering is used to account for camera and object motion.  
         *      
         *  **Note:** The implementation is not complete yet, some visual instances such as particles and skinned meshes may show artifacts.  
         */
        get use_taa(): boolean
        set use_taa(value: boolean)
        
        /** If `true`, uses a fast post-processing filter to make banding significantly less visible in 3D. 2D rendering is  *not*  affected by debanding unless the [member Environment.background_mode] is [constant Environment.BG_CANVAS]. See also [member ProjectSettings.rendering/anti_aliasing/quality/use_debanding].  
         *  In some cases, debanding may introduce a slightly noticeable dithering pattern. It's recommended to enable debanding only when actually needed since the dithering pattern will make lossless-compressed screenshots larger.  
         */
        get use_debanding(): boolean
        set use_debanding(value: boolean)
        
        /** If `true`, [OccluderInstance3D] nodes will be usable for occlusion culling in 3D for this viewport. For the root viewport, [member ProjectSettings.rendering/occlusion_culling/use_occlusion_culling] must be set to `true` instead.  
         *      
         *  **Note:** Enabling occlusion culling has a cost on the CPU. Only enable occlusion culling if you actually plan to use it, and think whether your scene can actually benefit from occlusion culling. Large, open scenes with few or no objects blocking the view will generally not benefit much from occlusion culling. Large open scenes generally benefit more from mesh LOD and visibility ranges ([member GeometryInstance3D.visibility_range_begin] and [member GeometryInstance3D.visibility_range_end]) compared to occlusion culling.  
         *      
         *  **Note:** Due to memory constraints, occlusion culling is not supported by default in Web export templates. It can be enabled by compiling custom Web export templates with `module_raycast_enabled=yes`.  
         */
        get use_occlusion_culling(): boolean
        set use_occlusion_culling(value: boolean)
        
        /** The automatic LOD bias to use for meshes rendered within the [Viewport] (this is analogous to [member ReflectionProbe.mesh_lod_threshold]). Higher values will use less detailed versions of meshes that have LOD variations generated. If set to `0.0`, automatic LOD is disabled. Increase [member mesh_lod_threshold] to improve performance at the cost of geometry detail.  
         *  To control this property on the root viewport, set the [member ProjectSettings.rendering/mesh_lod/lod_change/threshold_pixels] project setting.  
         *      
         *  **Note:** [member mesh_lod_threshold] does not affect [GeometryInstance3D] visibility ranges (also known as "manual" LOD or hierarchical LOD).  
         */
        get mesh_lod_threshold(): number /*f64*/
        set mesh_lod_threshold(value: number /*f64*/)
        
        /** The overlay mode for test rendered geometry in debug purposes. */
        get debug_draw(): number /*i64*/
        set debug_draw(value: number /*i64*/)
        
        /** If `true`, 2D rendering will use an high dynamic range (HDR) format framebuffer matching the bit depth of the 3D framebuffer. When using the Forward+ renderer this will be a `RGBA16` framebuffer, while when using the Mobile renderer it will be a `RGB10_A2` framebuffer. Additionally, 2D rendering will take place in linear color space and will be converted to sRGB space immediately before blitting to the screen (if the Viewport is attached to the screen). Practically speaking, this means that the end result of the Viewport will not be clamped into the `0-1` range and can be used in 3D rendering without color space adjustments. This allows 2D rendering to take advantage of effects requiring high dynamic range (e.g. 2D glow) as well as substantially improves the appearance of effects requiring highly detailed gradients.  
         *      
         *  **Note:** This setting will have no effect when using the GL Compatibility renderer as the GL Compatibility renderer always renders in low dynamic range for performance reasons.  
         */
        get use_hdr_2d(): boolean
        set use_hdr_2d(value: boolean)
        
        /** Sets scaling 3d mode. Bilinear scaling renders at different resolution to either undersample or supersample the viewport. FidelityFX Super Resolution 1.0, abbreviated to FSR, is an upscaling technology that produces high quality images at fast framerates by using a spatially aware upscaling algorithm. FSR is slightly more expensive than bilinear, but it produces significantly higher image quality. FSR should be used where possible.  
         *  To control this property on the root viewport, set the [member ProjectSettings.rendering/scaling_3d/mode] project setting.  
         */
        get scaling_3d_mode(): number /*i64*/
        set scaling_3d_mode(value: number /*i64*/)
        
        /** Scales the 3D render buffer based on the viewport size uses an image filter specified in [member ProjectSettings.rendering/scaling_3d/mode] to scale the output image to the full viewport size. Values lower than `1.0` can be used to speed up 3D rendering at the cost of quality (undersampling). Values greater than `1.0` are only valid for bilinear mode and can be used to improve 3D rendering quality at a high performance cost (supersampling). See also [member ProjectSettings.rendering/anti_aliasing/quality/msaa_3d] for multi-sample antialiasing, which is significantly cheaper but only smooths the edges of polygons.  
         *  When using FSR upscaling, AMD recommends exposing the following values as preset options to users "Ultra Quality: 0.77", "Quality: 0.67", "Balanced: 0.59", "Performance: 0.5" instead of exposing the entire scale.  
         *  To control this property on the root viewport, set the [member ProjectSettings.rendering/scaling_3d/scale] project setting.  
         */
        get scaling_3d_scale(): number /*f64*/
        set scaling_3d_scale(value: number /*f64*/)
        
        /** Affects the final texture sharpness by reading from a lower or higher mipmap (also called "texture LOD bias"). Negative values make mipmapped textures sharper but grainier when viewed at a distance, while positive values make mipmapped textures blurrier (even when up close).  
         *  Enabling temporal antialiasing ([member use_taa]) will automatically apply a `-0.5` offset to this value, while enabling FXAA ([member screen_space_aa]) will automatically apply a `-0.25` offset to this value. If both TAA and FXAA are enabled at the same time, an offset of `-0.75` is applied to this value.  
         *      
         *  **Note:** If [member scaling_3d_scale] is lower than `1.0` (exclusive), [member texture_mipmap_bias] is used to adjust the automatic mipmap bias which is calculated internally based on the scale factor. The formula for this is `log2(scaling_3d_scale) + mipmap_bias`.  
         *  To control this property on the root viewport, set the [member ProjectSettings.rendering/textures/default_filters/texture_mipmap_bias] project setting.  
         */
        get texture_mipmap_bias(): number /*f64*/
        set texture_mipmap_bias(value: number /*f64*/)
        
        /** Determines how sharp the upscaled image will be when using the FSR upscaling mode. Sharpness halves with every whole number. Values go from 0.0 (sharpest) to 2.0. Values above 2.0 won't make a visible difference.  
         *  To control this property on the root viewport, set the [member ProjectSettings.rendering/scaling_3d/fsr_sharpness] project setting.  
         */
        get fsr_sharpness(): number /*f64*/
        set fsr_sharpness(value: number /*f64*/)
        
        /** The Variable Rate Shading (VRS) mode that is used for this viewport. Note, if hardware does not support VRS this property is ignored. */
        get vrs_mode(): number /*i64*/
        set vrs_mode(value: number /*i64*/)
        
        /** Texture to use when [member vrs_mode] is set to [constant Viewport.VRS_TEXTURE].  
         *  The texture  *must*  use a lossless compression format so that colors can be matched precisely. The following VRS densities are mapped to various colors, with brighter colors representing a lower level of shading precision:  
         *    
         */
        get vrs_texture(): Texture2D
        set vrs_texture(value: Texture2D)
        
        /** Sets the default filter mode used by [CanvasItem]s in this Viewport. See [enum DefaultCanvasItemTextureFilter] for options. */
        get canvas_item_default_texture_filter(): number /*i64*/
        set canvas_item_default_texture_filter(value: number /*i64*/)
        
        /** Sets the default repeat mode used by [CanvasItem]s in this Viewport. See [enum DefaultCanvasItemTextureRepeat] for options. */
        get canvas_item_default_texture_repeat(): number /*i64*/
        set canvas_item_default_texture_repeat(value: number /*i64*/)
        
        /** If `true`, the viewport will process 2D audio streams. */
        get audio_listener_enable_2d(): boolean
        set audio_listener_enable_2d(value: boolean)
        
        /** If `true`, the viewport will process 3D audio streams. */
        get audio_listener_enable_3d(): boolean
        set audio_listener_enable_3d(value: boolean)
        
        /** If `true`, the objects rendered by viewport become subjects of mouse picking process.  
         *      
         *  **Note:** The number of simultaneously pickable objects is limited to 64 and they are selected in a non-deterministic order, which can be different in each picking process.  
         */
        get physics_object_picking(): boolean
        set physics_object_picking(value: boolean)
        
        /** If `true`, objects receive mouse picking events sorted primarily by their [member CanvasItem.z_index] and secondarily by their position in the scene tree. If `false`, the order is undetermined.  
         *      
         *  **Note:** This setting is disabled by default because of its potential expensive computational cost.  
         *      
         *  **Note:** Sorting happens after selecting the pickable objects. Because of the limitation of 64 simultaneously pickable objects, it is not guaranteed that the object with the highest [member CanvasItem.z_index] receives the picking event.  
         */
        get physics_object_picking_sort(): boolean
        set physics_object_picking_sort(value: boolean)
        
        /** If `true`, the viewport will not receive input events. */
        get gui_disable_input(): boolean
        set gui_disable_input(value: boolean)
        
        /** If `true`, the GUI controls on the viewport will lay pixel perfectly. */
        get gui_snap_controls_to_pixels(): boolean
        set gui_snap_controls_to_pixels(value: boolean)
        
        /** If `true`, sub-windows (popups and dialogs) will be embedded inside application window as control-like nodes. If `false`, they will appear as separate windows handled by the operating system. */
        get gui_embed_subwindows(): boolean
        set gui_embed_subwindows(value: boolean)
        get sdf_oversize(): number /*i64*/
        set sdf_oversize(value: number /*i64*/)
        get sdf_scale(): number /*i64*/
        set sdf_scale(value: number /*i64*/)
        
        /** The shadow atlas' resolution (used for omni and spot lights). The value is rounded up to the nearest power of 2.  
         *      
         *  **Note:** If this is set to `0`, no positional shadows will be visible at all. This can improve performance significantly on low-end systems by reducing both the CPU and GPU load (as fewer draw calls are needed to draw the scene without shadows).  
         */
        get positional_shadow_atlas_size(): number /*i64*/
        set positional_shadow_atlas_size(value: number /*i64*/)
        
        /** Use 16 bits for the omni/spot shadow depth map. Enabling this results in shadows having less precision and may result in shadow acne, but can lead to performance improvements on some devices. */
        get positional_shadow_atlas_16_bits(): boolean
        set positional_shadow_atlas_16_bits(value: boolean)
        
        /** The canvas transform of the viewport, useful for changing the on-screen positions of all child [CanvasItem]s. This is relative to the global canvas transform of the viewport. */
        get canvas_transform(): Transform2D
        set canvas_transform(value: Transform2D)
        
        /** The global canvas transform of the viewport. The canvas transform is relative to this. */
        get global_canvas_transform(): Transform2D
        set global_canvas_transform(value: Transform2D)
        
        /** The rendering layers in which this [Viewport] renders [CanvasItem] nodes. */
        get canvas_cull_mask(): number /*i64*/
        set canvas_cull_mask(value: number /*i64*/)
        
        /** Emitted when the size of the viewport is changed, whether by resizing of window, or some other means. */
        readonly size_changed: Signal //  => void
        
        /** Emitted when a Control node grabs keyboard focus. */
        readonly gui_focus_changed: Signal // node: Control => void
    }
    class ViewportNavigationControl extends Control {
        constructor(identifier?: any)
    }
    class ViewportRotationControl extends Control {
        constructor(identifier?: any)
    }
    /** Provides the content of a [Viewport] as a dynamic texture.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_viewporttexture.html  
     */
    class ViewportTexture extends Texture2D {
        constructor(identifier?: any)
        set_viewport_path_in_scene(path: NodePath): void
        get_viewport_path_in_scene(): NodePath
        
        /** The path to the [Viewport] node to display. This is relative to the scene root, not to the node that uses the texture.  
         *      
         *  **Note:** In the editor, this path is automatically updated when the target viewport or one of its ancestors is renamed or moved. At runtime, the path may not be able to automatically update due to the inability to determine the scene root.  
         */
        get viewport_path(): NodePath
        set viewport_path(value: NodePath)
    }
    namespace VisibleOnScreenEnabler2D {
        enum EnableMode {
            /** Corresponds to [constant Node.PROCESS_MODE_INHERIT]. */
            ENABLE_MODE_INHERIT = 0,
            
            /** Corresponds to [constant Node.PROCESS_MODE_ALWAYS]. */
            ENABLE_MODE_ALWAYS = 1,
            
            /** Corresponds to [constant Node.PROCESS_MODE_WHEN_PAUSED]. */
            ENABLE_MODE_WHEN_PAUSED = 2,
        }
    }
    /** A rectangular region of 2D space that, when visible on screen, enables a target node.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visibleonscreenenabler2d.html  
     */
    class VisibleOnScreenEnabler2D extends VisibleOnScreenNotifier2D {
        constructor(identifier?: any)
        set_enable_mode(mode: VisibleOnScreenEnabler2D.EnableMode): void
        get_enable_mode(): VisibleOnScreenEnabler2D.EnableMode
        set_enable_node_path(path: NodePath): void
        get_enable_node_path(): NodePath
        
        /** Determines how the target node is enabled. Corresponds to [enum Node.ProcessMode]. When the node is disabled, it always uses [constant Node.PROCESS_MODE_DISABLED]. */
        get enable_mode(): number /*i64*/
        set enable_mode(value: number /*i64*/)
        
        /** The path to the target node, relative to the [VisibleOnScreenEnabler2D]. The target node is cached; it's only assigned when setting this property (if the [VisibleOnScreenEnabler2D] is inside the scene tree) and every time the [VisibleOnScreenEnabler2D] enters the scene tree. If the path is invalid, an error will be printed in the editor and no node will be affected. */
        get enable_node_path(): NodePath
        set enable_node_path(value: NodePath)
    }
    namespace VisibleOnScreenEnabler3D {
        enum EnableMode {
            /** Corresponds to [constant Node.PROCESS_MODE_INHERIT]. */
            ENABLE_MODE_INHERIT = 0,
            
            /** Corresponds to [constant Node.PROCESS_MODE_ALWAYS]. */
            ENABLE_MODE_ALWAYS = 1,
            
            /** Corresponds to [constant Node.PROCESS_MODE_WHEN_PAUSED]. */
            ENABLE_MODE_WHEN_PAUSED = 2,
        }
    }
    /** A box-shaped region of 3D space that, when visible on screen, enables a target node.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visibleonscreenenabler3d.html  
     */
    class VisibleOnScreenEnabler3D extends VisibleOnScreenNotifier3D {
        constructor(identifier?: any)
        set_enable_mode(mode: VisibleOnScreenEnabler3D.EnableMode): void
        get_enable_mode(): VisibleOnScreenEnabler3D.EnableMode
        set_enable_node_path(path: NodePath): void
        get_enable_node_path(): NodePath
        
        /** Determines how the target node is enabled. Corresponds to [enum Node.ProcessMode]. When the node is disabled, it always uses [constant Node.PROCESS_MODE_DISABLED]. */
        get enable_mode(): number /*i64*/
        set enable_mode(value: number /*i64*/)
        
        /** The path to the target node, relative to the [VisibleOnScreenEnabler3D]. The target node is cached; it's only assigned when setting this property (if the [VisibleOnScreenEnabler3D] is inside the scene tree) and every time the [VisibleOnScreenEnabler3D] enters the scene tree. If the path is invalid, an error will be printed in the editor and no node will be affected. */
        get enable_node_path(): NodePath
        set enable_node_path(value: NodePath)
    }
    /** A rectangular region of 2D space that detects whether it is visible on screen.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visibleonscreennotifier2d.html  
     */
    class VisibleOnScreenNotifier2D extends Node2D {
        constructor(identifier?: any)
        set_rect(rect: Rect2): void
        get_rect(): Rect2
        
        /** If `true`, the bounding rectangle is on the screen.  
         *      
         *  **Note:** It takes one frame for the [VisibleOnScreenNotifier2D]'s visibility to be determined once added to the scene tree, so this method will always return `false` right after it is instantiated, before the draw pass.  
         */
        is_on_screen(): boolean
        
        /** The VisibleOnScreenNotifier2D's bounding rectangle. */
        get rect(): Rect2
        set rect(value: Rect2)
        
        /** Emitted when the VisibleOnScreenNotifier2D enters the screen. */
        readonly screen_entered: Signal //  => void
        
        /** Emitted when the VisibleOnScreenNotifier2D exits the screen. */
        readonly screen_exited: Signal //  => void
    }
    /** A box-shaped region of 3D space that detects whether it is visible on screen.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visibleonscreennotifier3d.html  
     */
    class VisibleOnScreenNotifier3D extends VisualInstance3D {
        constructor(identifier?: any)
        set_aabb(rect: AABB): void
        
        /** Returns `true` if the bounding box is on the screen.  
         *      
         *  **Note:** It takes one frame for the [VisibleOnScreenNotifier3D]'s visibility to be assessed once added to the scene tree, so this method will always return `false` right after it is instantiated.  
         */
        is_on_screen(): boolean
        
        /** The [VisibleOnScreenNotifier3D]'s bounding box. */
        get aabb(): AABB
        set aabb(value: AABB)
        
        /** Emitted when the [VisibleOnScreenNotifier3D] enters the screen. */
        readonly screen_entered: Signal //  => void
        
        /** Emitted when the [VisibleOnScreenNotifier3D] exits the screen. */
        readonly screen_exited: Signal //  => void
    }
    class VisibleOnScreenNotifier3DGizmoPlugin extends EditorNode3DGizmoPlugin {
        constructor(identifier?: any)
    }
    /** Parent of all visual 3D nodes.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualinstance3d.html  
     */
    class VisualInstance3D extends Node3D {
        constructor(identifier?: any)
        /* gdvirtual */ _get_aabb(): AABB
        
        /** Sets the resource that is instantiated by this [VisualInstance3D], which changes how the engine handles the [VisualInstance3D] under the hood. Equivalent to [method RenderingServer.instance_set_base]. */
        set_base(base: RID): void
        
        /** Returns the RID of the resource associated with this [VisualInstance3D]. For example, if the Node is a [MeshInstance3D], this will return the RID of the associated [Mesh]. */
        get_base(): RID
        
        /** Returns the RID of this instance. This RID is the same as the RID returned by [method RenderingServer.instance_create]. This RID is needed if you want to call [RenderingServer] functions directly on this [VisualInstance3D]. */
        get_instance(): RID
        set_layer_mask(mask: number /*i64*/): void
        get_layer_mask(): number /*i64*/
        
        /** Based on [param value], enables or disables the specified layer in the [member layers], given a [param layer_number] between 1 and 20. */
        set_layer_mask_value(layer_number: number /*i64*/, value: boolean): void
        
        /** Returns whether or not the specified layer of the [member layers] is enabled, given a [param layer_number] between 1 and 20. */
        get_layer_mask_value(layer_number: number /*i64*/): boolean
        set_sorting_offset(offset: number /*f64*/): void
        get_sorting_offset(): number /*f64*/
        set_sorting_use_aabb_center(enabled: boolean): void
        is_sorting_use_aabb_center(): boolean
        
        /** Returns the [AABB] (also known as the bounding box) for this [VisualInstance3D]. */
        get_aabb(): AABB
        
        /** The render layer(s) this [VisualInstance3D] is drawn on.  
         *  This object will only be visible for [Camera3D]s whose cull mask includes any of the render layers this [VisualInstance3D] is set to.  
         *  For [Light3D]s, this can be used to control which [VisualInstance3D]s are affected by a specific light. For [GPUParticles3D], this can be used to control which particles are effected by a specific attractor. For [Decal]s, this can be used to control which [VisualInstance3D]s are affected by a specific decal.  
         *  To adjust [member layers] more easily using a script, use [method get_layer_mask_value] and [method set_layer_mask_value].  
         *      
         *  **Note:** [VoxelGI], SDFGI and [LightmapGI] will always take all layers into account to determine what contributes to global illumination. If this is an issue, set [member GeometryInstance3D.gi_mode] to [constant GeometryInstance3D.GI_MODE_DISABLED] for meshes and [member Light3D.light_bake_mode] to [constant Light3D.BAKE_DISABLED] for lights to exclude them from global illumination.  
         */
        get layers(): number /*i64*/
        set layers(value: number /*i64*/)
        
        /** The amount by which the depth of this [VisualInstance3D] will be adjusted when sorting by depth. Uses the same units as the engine (which are typically meters). Adjusting it to a higher value will make the [VisualInstance3D] reliably draw on top of other [VisualInstance3D]s that are otherwise positioned at the same spot. To ensure it always draws on top of other objects around it (not positioned at the same spot), set the value to be greater than the distance between this [VisualInstance3D] and the other nearby [VisualInstance3D]s. */
        get sorting_offset(): number /*f64*/
        set sorting_offset(value: number /*f64*/)
        
        /** If `true`, the object is sorted based on the [AABB] center. The object will be sorted based on the global position otherwise.  
         *  The [AABB] center based sorting is generally more accurate for 3D models. The position based sorting instead allows to better control the drawing order when working with [GPUParticles3D] and [CPUParticles3D].  
         */
        get sorting_use_aabb_center(): boolean
        set sorting_use_aabb_center(value: boolean)
    }
    namespace VisualShader {
        enum Type {
            /** A vertex shader, operating on vertices. */
            TYPE_VERTEX = 0,
            
            /** A fragment shader, operating on fragments (pixels). */
            TYPE_FRAGMENT = 1,
            
            /** A shader for light calculations. */
            TYPE_LIGHT = 2,
            
            /** A function for the "start" stage of particle shader. */
            TYPE_START = 3,
            
            /** A function for the "process" stage of particle shader. */
            TYPE_PROCESS = 4,
            
            /** A function for the "collide" stage (particle collision handler) of particle shader. */
            TYPE_COLLIDE = 5,
            
            /** A function for the "start" stage of particle shader, with customized output. */
            TYPE_START_CUSTOM = 6,
            
            /** A function for the "process" stage of particle shader, with customized output. */
            TYPE_PROCESS_CUSTOM = 7,
            
            /** A shader for 3D environment's sky. */
            TYPE_SKY = 8,
            
            /** A compute shader that runs for each froxel of the volumetric fog map. */
            TYPE_FOG = 9,
            
            /** Represents the size of the [enum Type] enum. */
            TYPE_MAX = 10,
        }
        enum VaryingMode {
            /** Varying is passed from `Vertex` function to `Fragment` and `Light` functions. */
            VARYING_MODE_VERTEX_TO_FRAG_LIGHT = 0,
            
            /** Varying is passed from `Fragment` function to `Light` function. */
            VARYING_MODE_FRAG_TO_LIGHT = 1,
            
            /** Represents the size of the [enum VaryingMode] enum. */
            VARYING_MODE_MAX = 2,
        }
        enum VaryingType {
            /** Varying is of type [float]. */
            VARYING_TYPE_FLOAT = 0,
            
            /** Varying is of type [int]. */
            VARYING_TYPE_INT = 1,
            
            /** Varying is of type unsigned [int]. */
            VARYING_TYPE_UINT = 2,
            
            /** Varying is of type [Vector2]. */
            VARYING_TYPE_VECTOR_2D = 3,
            
            /** Varying is of type [Vector3]. */
            VARYING_TYPE_VECTOR_3D = 4,
            
            /** Varying is of type [Vector4]. */
            VARYING_TYPE_VECTOR_4D = 5,
            
            /** Varying is of type [bool]. */
            VARYING_TYPE_BOOLEAN = 6,
            
            /** Varying is of type [Transform3D]. */
            VARYING_TYPE_TRANSFORM = 7,
            
            /** Represents the size of the [enum VaryingType] enum. */
            VARYING_TYPE_MAX = 8,
        }
    }
    /** A custom shader program with a visual editor.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshader.html  
     */
    class VisualShader extends Shader {
        /** Denotes invalid [VisualShader] node. */
        static readonly NODE_ID_INVALID = -1
        
        /** Denotes output node of [VisualShader]. */
        static readonly NODE_ID_OUTPUT = 0
        constructor(identifier?: any)
        
        /** Sets the mode of this shader. */
        set_mode(mode: Shader.Mode): void
        
        /** Adds the specified [param node] to the shader. */
        add_node(type: VisualShader.Type, node: VisualShaderNode, position: Vector2, id: number /*i64*/): void
        
        /** Returns the shader node instance with specified [param type] and [param id]. */
        get_node(type: VisualShader.Type, id: number /*i64*/): VisualShaderNode
        
        /** Sets the position of the specified node. */
        set_node_position(type: VisualShader.Type, id: number /*i64*/, position: Vector2): void
        
        /** Returns the position of the specified node within the shader graph. */
        get_node_position(type: VisualShader.Type, id: number /*i64*/): Vector2
        
        /** Returns the list of all nodes in the shader with the specified type. */
        get_node_list(type: VisualShader.Type): PackedInt32Array
        
        /** Returns next valid node ID that can be added to the shader graph. */
        get_valid_node_id(type: VisualShader.Type): number /*i64*/
        
        /** Removes the specified node from the shader. */
        remove_node(type: VisualShader.Type, id: number /*i64*/): void
        
        /** Replaces the specified node with a node of new class type. */
        replace_node(type: VisualShader.Type, id: number /*i64*/, new_class: StringName): void
        
        /** Returns `true` if the specified node and port connection exist. */
        is_node_connection(type: VisualShader.Type, from_node: number /*i64*/, from_port: number /*i64*/, to_node: number /*i64*/, to_port: number /*i64*/): boolean
        
        /** Returns `true` if the specified nodes and ports can be connected together. */
        can_connect_nodes(type: VisualShader.Type, from_node: number /*i64*/, from_port: number /*i64*/, to_node: number /*i64*/, to_port: number /*i64*/): boolean
        
        /** Connects the specified nodes and ports. */
        connect_nodes(type: VisualShader.Type, from_node: number /*i64*/, from_port: number /*i64*/, to_node: number /*i64*/, to_port: number /*i64*/): GodotError
        
        /** Connects the specified nodes and ports. */
        disconnect_nodes(type: VisualShader.Type, from_node: number /*i64*/, from_port: number /*i64*/, to_node: number /*i64*/, to_port: number /*i64*/): void
        
        /** Connects the specified nodes and ports, even if they can't be connected. Such connection is invalid and will not function properly. */
        connect_nodes_forced(type: VisualShader.Type, from_node: number /*i64*/, from_port: number /*i64*/, to_node: number /*i64*/, to_port: number /*i64*/): void
        
        /** Returns the list of connected nodes with the specified type. */
        get_node_connections(type: VisualShader.Type): Array
        set_graph_offset(offset: Vector2): void
        get_graph_offset(): Vector2
        
        /** Adds a new varying value node to the shader. */
        add_varying(name: string, mode: VisualShader.VaryingMode, type: VisualShader.VaryingType): void
        
        /** Removes a varying value node with the given [param name]. Prints an error if a node with this name is not found. */
        remove_varying(name: string): void
        
        /** Returns `true` if the shader has a varying with the given [param name]. */
        has_varying(name: string): boolean
        _update_shader(): void
        
        /** The offset vector of the whole graph. */
        get graph_offset(): Vector2
        set graph_offset(value: Vector2)
    }
    class VisualShaderConversionPlugin extends EditorResourceConversionPlugin {
        constructor(identifier?: any)
    }
    namespace VisualShaderNode {
        enum PortType {
            /** Floating-point scalar. Translated to [code skip-lint]float` type in shader code. */
            PORT_TYPE_SCALAR = 0,
            
            /** Integer scalar. Translated to [code skip-lint]int` type in shader code. */
            PORT_TYPE_SCALAR_INT = 1,
            
            /** Unsigned integer scalar. Translated to [code skip-lint]uint` type in shader code. */
            PORT_TYPE_SCALAR_UINT = 2,
            
            /** 2D vector of floating-point values. Translated to [code skip-lint]vec2` type in shader code. */
            PORT_TYPE_VECTOR_2D = 3,
            
            /** 3D vector of floating-point values. Translated to [code skip-lint]vec3` type in shader code. */
            PORT_TYPE_VECTOR_3D = 4,
            
            /** 4D vector of floating-point values. Translated to [code skip-lint]vec4` type in shader code. */
            PORT_TYPE_VECTOR_4D = 5,
            
            /** Boolean type. Translated to [code skip-lint]bool` type in shader code. */
            PORT_TYPE_BOOLEAN = 6,
            
            /** Transform type. Translated to [code skip-lint]mat4` type in shader code. */
            PORT_TYPE_TRANSFORM = 7,
            
            /** Sampler type. Translated to reference of sampler uniform in shader code. Can only be used for input ports in non-uniform nodes. */
            PORT_TYPE_SAMPLER = 8,
            
            /** Represents the size of the [enum PortType] enum. */
            PORT_TYPE_MAX = 9,
        }
    }
    /** Base class for [VisualShader] nodes. Not related to scene nodes.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernode.html  
     */
    class VisualShaderNode extends Resource {
        constructor(identifier?: any)
        /** Returns the input port which should be connected by default when this node is created as a result of dragging a connection from an existing node to the empty space on the graph. */
        get_default_input_port(type: VisualShaderNode.PortType): number /*i64*/
        set_output_port_for_preview(port: number /*i64*/): void
        get_output_port_for_preview(): number /*i64*/
        _set_output_port_expanded(port: number /*i64*/, _unnamed_arg1: boolean): void
        _is_output_port_expanded(_unnamed_arg0: number /*i64*/): boolean
        _set_output_ports_expanded(values: Array): void
        _get_output_ports_expanded(): Array
        
        /** Sets the default [param value] for the selected input [param port]. */
        set_input_port_default_value(port: number /*i64*/, value: any, prev_value: any = <any> {} /*compound.type from nil*/): void
        
        /** Returns the default value of the input [param port]. */
        get_input_port_default_value(port: number /*i64*/): any
        
        /** Removes the default value of the input [param port]. */
        remove_input_port_default_value(port: number /*i64*/): void
        
        /** Clears the default input ports value. */
        clear_default_input_values(): void
        
        /** Sets the default input ports values using an [Array] of the form `[index0, value0, index1, value1, ...]`. For example: `[0, Vector3(0, 0, 0), 1, Vector3(0, 0, 0)]`. */
        set_default_input_values(values: Array): void
        
        /** Returns an [Array] containing default values for all of the input ports of the node in the form `[index0, value0, index1, value1, ...]`. */
        get_default_input_values(): Array
        
        /** Sets the output port index which will be showed for preview. If set to `-1` no port will be open for preview. */
        get output_port_for_preview(): number /*i64*/
        set output_port_for_preview(value: number /*i64*/)
        get default_input_values(): Array
        set default_input_values(value: Array)
        get expanded_output_ports(): Array
        set expanded_output_ports(value: Array)
    }
    namespace VisualShaderNodeBillboard {
        enum BillboardType {
            /** Billboarding is disabled and the node does nothing. */
            BILLBOARD_TYPE_DISABLED = 0,
            
            /** A standard billboarding algorithm is enabled. */
            BILLBOARD_TYPE_ENABLED = 1,
            
            /** A billboarding algorithm to rotate around Y-axis is enabled. */
            BILLBOARD_TYPE_FIXED_Y = 2,
            
            /** A billboarding algorithm designed to use on particles is enabled. */
            BILLBOARD_TYPE_PARTICLES = 3,
            
            /** Represents the size of the [enum BillboardType] enum. */
            BILLBOARD_TYPE_MAX = 4,
        }
    }
    /** A node that controls how the object faces the camera to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodebillboard.html  
     */
    class VisualShaderNodeBillboard extends VisualShaderNode {
        constructor(identifier?: any)
        set_billboard_type(billboard_type: VisualShaderNodeBillboard.BillboardType): void
        get_billboard_type(): VisualShaderNodeBillboard.BillboardType
        set_keep_scale_enabled(enabled: boolean): void
        is_keep_scale_enabled(): boolean
        
        /** Controls how the object faces the camera. See [enum BillboardType]. */
        get billboard_type(): number /*i64*/
        set billboard_type(value: number /*i64*/)
        
        /** If `true`, the shader will keep the scale set for the mesh. Otherwise, the scale is lost when billboarding. */
        get keep_scale(): boolean
        set keep_scale(value: boolean)
    }
    /** A boolean constant to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodebooleanconstant.html  
     */
    class VisualShaderNodeBooleanConstant extends VisualShaderNodeConstant {
        constructor(identifier?: any)
        set_constant(constant: boolean): void
        get_constant(): boolean
        
        /** A boolean constant which represents a state of this node. */
        get constant(): boolean
        set constant(value: boolean)
    }
    /** A boolean parameter to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodebooleanparameter.html  
     */
    class VisualShaderNodeBooleanParameter extends VisualShaderNodeParameter {
        constructor(identifier?: any)
        set_default_value_enabled(enabled: boolean): void
        is_default_value_enabled(): boolean
        set_default_value(value: boolean): void
        get_default_value(): boolean
        
        /** Enables usage of the [member default_value]. */
        get default_value_enabled(): boolean
        set default_value_enabled(value: boolean)
        
        /** A default value to be assigned within the shader. */
        get default_value(): boolean
        set default_value(value: boolean)
    }
    namespace VisualShaderNodeClamp {
        enum OpType {
            /** A floating-point scalar. */
            OP_TYPE_FLOAT = 0,
            
            /** An integer scalar. */
            OP_TYPE_INT = 1,
            
            /** An unsigned integer scalar. */
            OP_TYPE_UINT = 2,
            
            /** A 2D vector type. */
            OP_TYPE_VECTOR_2D = 3,
            
            /** A 3D vector type. */
            OP_TYPE_VECTOR_3D = 4,
            
            /** A 4D vector type. */
            OP_TYPE_VECTOR_4D = 5,
            
            /** Represents the size of the [enum OpType] enum. */
            OP_TYPE_MAX = 6,
        }
    }
    /** Clamps a value within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodeclamp.html  
     */
    class VisualShaderNodeClamp extends VisualShaderNode {
        constructor(identifier?: any)
        set_op_type(op_type: VisualShaderNodeClamp.OpType): void
        get_op_type(): VisualShaderNodeClamp.OpType
        
        /** A type of operands and returned value. */
        get op_type(): number /*i64*/
        set op_type(value: number /*i64*/)
    }
    /** A [Color] constant to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodecolorconstant.html  
     */
    class VisualShaderNodeColorConstant extends VisualShaderNodeConstant {
        constructor(identifier?: any)
        set_constant(constant: Color): void
        get_constant(): Color
        
        /** A [Color] constant which represents a state of this node. */
        get constant(): Color
        set constant(value: Color)
    }
    namespace VisualShaderNodeColorFunc {
        enum Function {
            /** Converts the color to grayscale using the following formula:  
             *    
             */
            FUNC_GRAYSCALE = 0,
            
            /** Converts HSV vector to RGB equivalent. */
            FUNC_HSV2RGB = 1,
            
            /** Converts RGB vector to HSV equivalent. */
            FUNC_RGB2HSV = 2,
            
            /** Applies sepia tone effect using the following formula:  
             *    
             */
            FUNC_SEPIA = 3,
            
            /** Represents the size of the [enum Function] enum. */
            FUNC_MAX = 4,
        }
    }
    /** A [Color] function to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodecolorfunc.html  
     */
    class VisualShaderNodeColorFunc extends VisualShaderNode {
        constructor(identifier?: any)
        set_function(func: VisualShaderNodeColorFunc.Function): void
        get_function(): VisualShaderNodeColorFunc.Function
        
        /** A function to be applied to the input color. See [enum Function] for options. */
        get function(): number /*i64*/
        set function(value: number /*i64*/)
    }
    namespace VisualShaderNodeColorOp {
        enum Operator {
            /** Produce a screen effect with the following formula:  
             *    
             */
            OP_SCREEN = 0,
            
            /** Produce a difference effect with the following formula:  
             *    
             */
            OP_DIFFERENCE = 1,
            
            /** Produce a darken effect with the following formula:  
             *    
             */
            OP_DARKEN = 2,
            
            /** Produce a lighten effect with the following formula:  
             *    
             */
            OP_LIGHTEN = 3,
            
            /** Produce an overlay effect with the following formula:  
             *    
             */
            OP_OVERLAY = 4,
            
            /** Produce a dodge effect with the following formula:  
             *    
             */
            OP_DODGE = 5,
            
            /** Produce a burn effect with the following formula:  
             *    
             */
            OP_BURN = 6,
            
            /** Produce a soft light effect with the following formula:  
             *    
             */
            OP_SOFT_LIGHT = 7,
            
            /** Produce a hard light effect with the following formula:  
             *    
             */
            OP_HARD_LIGHT = 8,
            
            /** Represents the size of the [enum Operator] enum. */
            OP_MAX = 9,
        }
    }
    /** A [Color] operator to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodecolorop.html  
     */
    class VisualShaderNodeColorOp extends VisualShaderNode {
        constructor(identifier?: any)
        set_operator(op: VisualShaderNodeColorOp.Operator): void
        get_operator(): VisualShaderNodeColorOp.Operator
        
        /** An operator to be applied to the inputs. See [enum Operator] for options. */
        get operator(): number /*i64*/
        set operator(value: number /*i64*/)
    }
    /** A [Color] parameter to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodecolorparameter.html  
     */
    class VisualShaderNodeColorParameter extends VisualShaderNodeParameter {
        constructor(identifier?: any)
        set_default_value_enabled(enabled: boolean): void
        is_default_value_enabled(): boolean
        set_default_value(value: Color): void
        get_default_value(): Color
        
        /** Enables usage of the [member default_value]. */
        get default_value_enabled(): boolean
        set default_value_enabled(value: boolean)
        
        /** A default value to be assigned within the shader. */
        get default_value(): Color
        set default_value(value: Color)
    }
    /** A comment node to be placed on visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodecomment.html  
     */
    class VisualShaderNodeComment extends VisualShaderNodeResizableBase {
        constructor(identifier?: any)
        set_title(title: string): void
        get_title(): string
        set_description(description: string): void
        get_description(): string
        
        /** A title of the node. */
        get title(): string
        set title(value: string)
        
        /** An additional description which placed below the title. */
        get description(): string
        set description(value: string)
    }
    namespace VisualShaderNodeCompare {
        enum ComparisonType {
            /** A floating-point scalar. */
            CTYPE_SCALAR = 0,
            
            /** An integer scalar. */
            CTYPE_SCALAR_INT = 1,
            
            /** An unsigned integer scalar. */
            CTYPE_SCALAR_UINT = 2,
            
            /** A 2D vector type. */
            CTYPE_VECTOR_2D = 3,
            
            /** A 3D vector type. */
            CTYPE_VECTOR_3D = 4,
            
            /** A 4D vector type. */
            CTYPE_VECTOR_4D = 5,
            
            /** A boolean type. */
            CTYPE_BOOLEAN = 6,
            
            /** A transform (`mat4`) type. */
            CTYPE_TRANSFORM = 7,
            
            /** Represents the size of the [enum ComparisonType] enum. */
            CTYPE_MAX = 8,
        }
        enum Function {
            /** Comparison for equality (`a == b`). */
            FUNC_EQUAL = 0,
            
            /** Comparison for inequality (`a != b`). */
            FUNC_NOT_EQUAL = 1,
            
            /** Comparison for greater than (`a > b`). Cannot be used if [member type] set to [constant CTYPE_BOOLEAN] or [constant CTYPE_TRANSFORM]. */
            FUNC_GREATER_THAN = 2,
            
            /** Comparison for greater than or equal (`a >= b`). Cannot be used if [member type] set to [constant CTYPE_BOOLEAN] or [constant CTYPE_TRANSFORM]. */
            FUNC_GREATER_THAN_EQUAL = 3,
            
            /** Comparison for less than (`a < b`). Cannot be used if [member type] set to [constant CTYPE_BOOLEAN] or [constant CTYPE_TRANSFORM]. */
            FUNC_LESS_THAN = 4,
            
            /** Comparison for less than or equal (`a <= b`). Cannot be used if [member type] set to [constant CTYPE_BOOLEAN] or [constant CTYPE_TRANSFORM]. */
            FUNC_LESS_THAN_EQUAL = 5,
            
            /** Represents the size of the [enum Function] enum. */
            FUNC_MAX = 6,
        }
        enum Condition {
            /** The result will be true if all of component in vector satisfy the comparison condition. */
            COND_ALL = 0,
            
            /** The result will be true if any of component in vector satisfy the comparison condition. */
            COND_ANY = 1,
            
            /** Represents the size of the [enum Condition] enum. */
            COND_MAX = 2,
        }
    }
    /** A comparison function for common types within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodecompare.html  
     */
    class VisualShaderNodeCompare extends VisualShaderNode {
        constructor(identifier?: any)
        set_comparison_type(type: VisualShaderNodeCompare.ComparisonType): void
        get_comparison_type(): VisualShaderNodeCompare.ComparisonType
        set_function(func: VisualShaderNodeCompare.Function): void
        get_function(): VisualShaderNodeCompare.Function
        set_condition(condition: VisualShaderNodeCompare.Condition): void
        get_condition(): VisualShaderNodeCompare.Condition
        
        /** The type to be used in the comparison. See [enum ComparisonType] for options. */
        get type(): number /*i64*/
        set type(value: number /*i64*/)
        
        /** A comparison function. See [enum Function] for options. */
        get function(): number /*i64*/
        set function(value: number /*i64*/)
        
        /** Extra condition which is applied if [member type] is set to [constant CTYPE_VECTOR_3D]. */
        get condition(): number /*i64*/
        set condition(value: number /*i64*/)
    }
    /** A base type for the constants within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodeconstant.html  
     */
    class VisualShaderNodeConstant extends VisualShaderNode {
        constructor(identifier?: any)
    }
    namespace VisualShaderNodeCubemap {
        enum Source {
            /** Use the [Cubemap] set via [member cube_map]. If this is set to [member source], the `samplerCube` port is ignored. */
            SOURCE_TEXTURE = 0,
            
            /** Use the [Cubemap] sampler reference passed via the `samplerCube` port. If this is set to [member source], the [member cube_map] texture is ignored. */
            SOURCE_PORT = 1,
            
            /** Represents the size of the [enum Source] enum. */
            SOURCE_MAX = 2,
        }
        enum TextureType {
            /** No hints are added to the uniform declaration. */
            TYPE_DATA = 0,
            
            /** Adds `source_color` as hint to the uniform declaration for proper sRGB to linear conversion. */
            TYPE_COLOR = 1,
            
            /** Adds `hint_normal` as hint to the uniform declaration, which internally converts the texture for proper usage as normal map. */
            TYPE_NORMAL_MAP = 2,
            
            /** Represents the size of the [enum TextureType] enum. */
            TYPE_MAX = 3,
        }
    }
    /** A [Cubemap] sampling node to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodecubemap.html  
     */
    class VisualShaderNodeCubemap extends VisualShaderNode {
        constructor(identifier?: any)
        set_source(value: VisualShaderNodeCubemap.Source): void
        get_source(): VisualShaderNodeCubemap.Source
        set_cube_map(value: Cubemap): void
        get_cube_map(): Cubemap
        set_texture_type(value: VisualShaderNodeCubemap.TextureType): void
        get_texture_type(): VisualShaderNodeCubemap.TextureType
        
        /** Defines which source should be used for the sampling. See [enum Source] for options. */
        get source(): number /*i64*/
        set source(value: number /*i64*/)
        
        /** The [Cubemap] texture to sample when using [constant SOURCE_TEXTURE] as [member source]. */
        get cube_map(): Cubemap
        set cube_map(value: Cubemap)
        
        /** Defines the type of data provided by the source texture. See [enum TextureType] for options. */
        get texture_type(): number /*i64*/
        set texture_type(value: number /*i64*/)
    }
    /** A [Cubemap] parameter node to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodecubemapparameter.html  
     */
    class VisualShaderNodeCubemapParameter extends VisualShaderNodeTextureParameter {
        constructor(identifier?: any)
    }
    /** Performs a [CurveTexture] lookup within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodecurvetexture.html  
     */
    class VisualShaderNodeCurveTexture extends VisualShaderNodeResizableBase {
        constructor(identifier?: any)
        set_texture(texture: CurveTexture): void
        get_texture(): CurveTexture
        
        /** The source texture. */
        get texture(): CurveTexture
        set texture(value: CurveTexture)
    }
    /** Performs a [CurveXYZTexture] lookup within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodecurvexyztexture.html  
     */
    class VisualShaderNodeCurveXYZTexture extends VisualShaderNodeResizableBase {
        constructor(identifier?: any)
        set_texture(texture: CurveXYZTexture): void
        get_texture(): CurveXYZTexture
        
        /** The source texture. */
        get texture(): CurveXYZTexture
        set texture(value: CurveXYZTexture)
    }
    /** Virtual class to define custom [VisualShaderNode]s for use in the Visual Shader Editor.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodecustom.html  
     */
    class VisualShaderNodeCustom extends VisualShaderNode {
        constructor(identifier?: any)
        /** Override this method to define the name of the associated custom node in the Visual Shader Editor's members dialog and graph.  
         *  Defining this method is **optional**, but recommended. If not overridden, the node will be named as "Unnamed".  
         */
        /* gdvirtual */ _get_name(): string
        
        /** Override this method to define the description of the associated custom node in the Visual Shader Editor's members dialog.  
         *  Defining this method is **optional**.  
         */
        /* gdvirtual */ _get_description(): string
        
        /** Override this method to define the path to the associated custom node in the Visual Shader Editor's members dialog. The path may look like `"MyGame/MyFunctions/Noise"`.  
         *  Defining this method is **optional**. If not overridden, the node will be filed under the "Addons" category.  
         */
        /* gdvirtual */ _get_category(): string
        
        /** Override this method to define the return icon of the associated custom node in the Visual Shader Editor's members dialog.  
         *  Defining this method is **optional**. If not overridden, no return icon is shown.  
         */
        /* gdvirtual */ _get_return_icon_type(): VisualShaderNode.PortType
        
        /** Override this method to define the number of input ports of the associated custom node.  
         *  Defining this method is **required**. If not overridden, the node has no input ports.  
         */
        /* gdvirtual */ _get_input_port_count(): number /*i64*/
        
        /** Override this method to define the returned type of each input port of the associated custom node (see [enum VisualShaderNode.PortType] for possible types).  
         *  Defining this method is **optional**, but recommended. If not overridden, input ports will return the [constant VisualShaderNode.PORT_TYPE_SCALAR] type.  
         */
        /* gdvirtual */ _get_input_port_type(port: number /*i64*/): VisualShaderNode.PortType
        
        /** Override this method to define the names of input ports of the associated custom node. The names are used both for the input slots in the editor and as identifiers in the shader code, and are passed in the `input_vars` array in [method _get_code].  
         *  Defining this method is **optional**, but recommended. If not overridden, input ports are named as `"in" + str(port)`.  
         */
        /* gdvirtual */ _get_input_port_name(port: number /*i64*/): string
        
        /** Override this method to define the default value for the specified input port. Prefer use this over [method VisualShaderNode.set_input_port_default_value].  
         *  Defining this method is **required**. If not overridden, the node has no default values for their input ports.  
         */
        /* gdvirtual */ _get_input_port_default_value(port: number /*i64*/): void
        
        /** Override this method to define the input port which should be connected by default when this node is created as a result of dragging a connection from an existing node to the empty space on the graph.  
         *  Defining this method is **optional**. If not overridden, the connection will be created to the first valid port.  
         */
        /* gdvirtual */ _get_default_input_port(type: VisualShaderNode.PortType): number /*i64*/
        
        /** Override this method to define the number of output ports of the associated custom node.  
         *  Defining this method is **required**. If not overridden, the node has no output ports.  
         */
        /* gdvirtual */ _get_output_port_count(): number /*i64*/
        
        /** Override this method to define the returned type of each output port of the associated custom node (see [enum VisualShaderNode.PortType] for possible types).  
         *  Defining this method is **optional**, but recommended. If not overridden, output ports will return the [constant VisualShaderNode.PORT_TYPE_SCALAR] type.  
         */
        /* gdvirtual */ _get_output_port_type(port: number /*i64*/): VisualShaderNode.PortType
        
        /** Override this method to define the names of output ports of the associated custom node. The names are used both for the output slots in the editor and as identifiers in the shader code, and are passed in the `output_vars` array in [method _get_code].  
         *  Defining this method is **optional**, but recommended. If not overridden, output ports are named as `"out" + str(port)`.  
         */
        /* gdvirtual */ _get_output_port_name(port: number /*i64*/): string
        
        /** Override this method to define the number of the properties.  
         *  Defining this method is **optional**.  
         */
        /* gdvirtual */ _get_property_count(): number /*i64*/
        
        /** Override this method to define the names of the property of the associated custom node.  
         *  Defining this method is **optional**.  
         */
        /* gdvirtual */ _get_property_name(index: number /*i64*/): string
        
        /** Override this method to define the default index of the property of the associated custom node.  
         *  Defining this method is **optional**.  
         */
        /* gdvirtual */ _get_property_default_index(index: number /*i64*/): number /*i64*/
        
        /** Override this method to define the options inside the drop-down list property of the associated custom node.  
         *  Defining this method is **optional**.  
         */
        /* gdvirtual */ _get_property_options(index: number /*i64*/): PackedStringArray
        
        /** Override this method to define the actual shader code of the associated custom node. The shader code should be returned as a string, which can have multiple lines (the `"""` multiline string construct can be used for convenience).  
         *  The [param input_vars] and [param output_vars] arrays contain the string names of the various input and output variables, as defined by `_get_input_*` and `_get_output_*` virtual methods in this class.  
         *  The output ports can be assigned values in the shader code. For example, `return output_vars[0] + " = " + input_vars[0] + ";"`.  
         *  You can customize the generated code based on the shader [param mode] (see [enum Shader.Mode]) and/or [param type] (see [enum VisualShader.Type]).  
         *  Defining this method is **required**.  
         */
        /* gdvirtual */ _get_code(input_vars: Array, output_vars: Array, mode: Shader.Mode, type: VisualShader.Type): string
        
        /** Override this method to add a shader code to the beginning of each shader function (once). The shader code should be returned as a string, which can have multiple lines (the `"""` multiline string construct can be used for convenience).  
         *  If there are multiple custom nodes of different types which use this feature the order of each insertion is undefined.  
         *  You can customize the generated code based on the shader [param mode] (see [enum Shader.Mode]) and/or [param type] (see [enum VisualShader.Type]).  
         *  Defining this method is **optional**.  
         */
        /* gdvirtual */ _get_func_code(mode: Shader.Mode, type: VisualShader.Type): string
        
        /** Override this method to add shader code on top of the global shader, to define your own standard library of reusable methods, varyings, constants, uniforms, etc. The shader code should be returned as a string, which can have multiple lines (the `"""` multiline string construct can be used for convenience).  
         *  Be careful with this functionality as it can cause name conflicts with other custom nodes, so be sure to give the defined entities unique names.  
         *  You can customize the generated code based on the shader [param mode] (see [enum Shader.Mode]).  
         *  Defining this method is **optional**.  
         */
        /* gdvirtual */ _get_global_code(mode: Shader.Mode): string
        
        /** Override this method to enable high-end mark in the Visual Shader Editor's members dialog.  
         *  Defining this method is **optional**. If not overridden, it's `false`.  
         */
        /* gdvirtual */ _is_highend(): boolean
        
        /** Override this method to prevent the node to be visible in the member dialog for the certain [param mode] (see [enum Shader.Mode]) and/or [param type] (see [enum VisualShader.Type]).  
         *  Defining this method is **optional**. If not overridden, it's `true`.  
         */
        /* gdvirtual */ _is_available(mode: Shader.Mode, type: VisualShader.Type): boolean
        _set_initialized(enabled: boolean): void
        _is_initialized(): boolean
        _set_input_port_default_value(port: number /*i64*/, value: any): void
        _set_option_index(option: number /*i64*/, value: number /*i64*/): void
        _set_properties(properties: string): void
        _get_properties(): string
        
        /** Returns the selected index of the drop-down list option within a graph. You may use this function to define the specific behavior in the [method _get_code] or [method _get_global_code]. */
        get_option_index(option: number /*i64*/): number /*i64*/
        get initialized(): boolean
        set initialized(value: boolean)
        get properties(): string
        set properties(value: string)
    }
    namespace VisualShaderNodeDerivativeFunc {
        enum OpType {
            /** A floating-point scalar. */
            OP_TYPE_SCALAR = 0,
            
            /** A 2D vector type. */
            OP_TYPE_VECTOR_2D = 1,
            
            /** A 3D vector type. */
            OP_TYPE_VECTOR_3D = 2,
            
            /** A 4D vector type. */
            OP_TYPE_VECTOR_4D = 3,
            
            /** Represents the size of the [enum OpType] enum. */
            OP_TYPE_MAX = 4,
        }
        enum Function {
            /** Sum of absolute derivative in `x` and `y`. */
            FUNC_SUM = 0,
            
            /** Derivative in `x` using local differencing. */
            FUNC_X = 1,
            
            /** Derivative in `y` using local differencing. */
            FUNC_Y = 2,
            
            /** Represents the size of the [enum Function] enum. */
            FUNC_MAX = 3,
        }
        enum Precision {
            /** No precision is specified, the GPU driver is allowed to use whatever level of precision it chooses. This is the default option and is equivalent to using `dFdx()` or `dFdy()` in text shaders. */
            PRECISION_NONE = 0,
            
            /** The derivative will be calculated using the current fragment's neighbors (which may not include the current fragment). This tends to be faster than using [constant PRECISION_FINE], but may not be suitable when more precision is needed. This is equivalent to using `dFdxCoarse()` or `dFdyCoarse()` in text shaders. */
            PRECISION_COARSE = 1,
            
            /** The derivative will be calculated using the current fragment and its immediate neighbors. This tends to be slower than using [constant PRECISION_COARSE], but may be necessary when more precision is needed. This is equivalent to using `dFdxFine()` or `dFdyFine()` in text shaders. */
            PRECISION_FINE = 2,
            
            /** Represents the size of the [enum Precision] enum. */
            PRECISION_MAX = 3,
        }
    }
    /** Calculates a derivative within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodederivativefunc.html  
     */
    class VisualShaderNodeDerivativeFunc extends VisualShaderNode {
        constructor(identifier?: any)
        set_op_type(type: VisualShaderNodeDerivativeFunc.OpType): void
        get_op_type(): VisualShaderNodeDerivativeFunc.OpType
        set_function(func: VisualShaderNodeDerivativeFunc.Function): void
        get_function(): VisualShaderNodeDerivativeFunc.Function
        set_precision(precision: VisualShaderNodeDerivativeFunc.Precision): void
        get_precision(): VisualShaderNodeDerivativeFunc.Precision
        
        /** A type of operands and returned value. See [enum OpType] for options. */
        get op_type(): number /*i64*/
        set op_type(value: number /*i64*/)
        
        /** A derivative function type. See [enum Function] for options. */
        get function(): number /*i64*/
        set function(value: number /*i64*/)
        
        /** Sets the level of precision to use for the derivative function. See [enum Precision] for options. When using the GL Compatibility renderer, this setting has no effect. */
        get precision(): number /*i64*/
        set precision(value: number /*i64*/)
    }
    /** Calculates the determinant of a [Transform3D] within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodedeterminant.html  
     */
    class VisualShaderNodeDeterminant extends VisualShaderNode {
        constructor(identifier?: any)
    }
    /** A visual shader node representing distance fade effect.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodedistancefade.html  
     */
    class VisualShaderNodeDistanceFade extends VisualShaderNode {
        constructor(identifier?: any)
    }
    /** Calculates a dot product of two vectors within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodedotproduct.html  
     */
    class VisualShaderNodeDotProduct extends VisualShaderNode {
        constructor(identifier?: any)
    }
    /** A custom visual shader graph expression written in Godot Shading Language.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodeexpression.html  
     */
    class VisualShaderNodeExpression extends VisualShaderNodeGroupBase {
        constructor(identifier?: any)
        set_expression(expression: string): void
        get_expression(): string
        
        /** An expression in Godot Shading Language, which will be injected at the start of the graph's matching shader function (`vertex`, `fragment`, or `light`), and thus cannot be used to declare functions, varyings, uniforms, or global constants. */
        get expression(): string
        set expression(value: string)
    }
    /** Returns the vector that points in the same direction as a reference vector within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodefaceforward.html  
     */
    class VisualShaderNodeFaceForward extends VisualShaderNodeVectorBase {
        constructor(identifier?: any)
    }
    /** A scalar floating-point constant to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodefloatconstant.html  
     */
    class VisualShaderNodeFloatConstant extends VisualShaderNodeConstant {
        constructor(identifier?: any)
        set_constant(constant: number /*f64*/): void
        get_constant(): number /*f64*/
        
        /** A floating-point constant which represents a state of this node. */
        get constant(): number /*f64*/
        set constant(value: number /*f64*/)
    }
    namespace VisualShaderNodeFloatFunc {
        enum Function {
            /** Returns the sine of the parameter. Translates to `sin(x)` in the Godot Shader Language. */
            FUNC_SIN = 0,
            
            /** Returns the cosine of the parameter. Translates to `cos(x)` in the Godot Shader Language. */
            FUNC_COS = 1,
            
            /** Returns the tangent of the parameter. Translates to `tan(x)` in the Godot Shader Language. */
            FUNC_TAN = 2,
            
            /** Returns the arc-sine of the parameter. Translates to `asin(x)` in the Godot Shader Language. */
            FUNC_ASIN = 3,
            
            /** Returns the arc-cosine of the parameter. Translates to `acos(x)` in the Godot Shader Language. */
            FUNC_ACOS = 4,
            
            /** Returns the arc-tangent of the parameter. Translates to `atan(x)` in the Godot Shader Language. */
            FUNC_ATAN = 5,
            
            /** Returns the hyperbolic sine of the parameter. Translates to `sinh(x)` in the Godot Shader Language. */
            FUNC_SINH = 6,
            
            /** Returns the hyperbolic cosine of the parameter. Translates to `cosh(x)` in the Godot Shader Language. */
            FUNC_COSH = 7,
            
            /** Returns the hyperbolic tangent of the parameter. Translates to `tanh(x)` in the Godot Shader Language. */
            FUNC_TANH = 8,
            
            /** Returns the natural logarithm of the parameter. Translates to `log(x)` in the Godot Shader Language. */
            FUNC_LOG = 9,
            
            /** Returns the natural exponentiation of the parameter. Translates to `exp(x)` in the Godot Shader Language. */
            FUNC_EXP = 10,
            
            /** Returns the square root of the parameter. Translates to `sqrt(x)` in the Godot Shader Language. */
            FUNC_SQRT = 11,
            
            /** Returns the absolute value of the parameter. Translates to `abs(x)` in the Godot Shader Language. */
            FUNC_ABS = 12,
            
            /** Extracts the sign of the parameter. Translates to `sign(x)` in the Godot Shader Language. */
            FUNC_SIGN = 13,
            
            /** Finds the nearest integer less than or equal to the parameter. Translates to `floor(x)` in the Godot Shader Language. */
            FUNC_FLOOR = 14,
            
            /** Finds the nearest integer to the parameter. Translates to `round(x)` in the Godot Shader Language. */
            FUNC_ROUND = 15,
            
            /** Finds the nearest integer that is greater than or equal to the parameter. Translates to `ceil(x)` in the Godot Shader Language. */
            FUNC_CEIL = 16,
            
            /** Computes the fractional part of the argument. Translates to `fract(x)` in the Godot Shader Language. */
            FUNC_FRACT = 17,
            
            /** Clamps the value between `0.0` and `1.0` using `min(max(x, 0.0), 1.0)`. */
            FUNC_SATURATE = 18,
            
            /** Negates the `x` using `-(x)`. */
            FUNC_NEGATE = 19,
            
            /** Returns the arc-hyperbolic-cosine of the parameter. Translates to `acosh(x)` in the Godot Shader Language. */
            FUNC_ACOSH = 20,
            
            /** Returns the arc-hyperbolic-sine of the parameter. Translates to `asinh(x)` in the Godot Shader Language. */
            FUNC_ASINH = 21,
            
            /** Returns the arc-hyperbolic-tangent of the parameter. Translates to `atanh(x)` in the Godot Shader Language. */
            FUNC_ATANH = 22,
            
            /** Convert a quantity in radians to degrees. Translates to `degrees(x)` in the Godot Shader Language. */
            FUNC_DEGREES = 23,
            
            /** Returns 2 raised by the power of the parameter. Translates to `exp2(x)` in the Godot Shader Language. */
            FUNC_EXP2 = 24,
            
            /** Returns the inverse of the square root of the parameter. Translates to `inversesqrt(x)` in the Godot Shader Language. */
            FUNC_INVERSE_SQRT = 25,
            
            /** Returns the base 2 logarithm of the parameter. Translates to `log2(x)` in the Godot Shader Language. */
            FUNC_LOG2 = 26,
            
            /** Convert a quantity in degrees to radians. Translates to `radians(x)` in the Godot Shader Language. */
            FUNC_RADIANS = 27,
            
            /** Finds reciprocal value of dividing 1 by `x` (i.e. `1 / x`). */
            FUNC_RECIPROCAL = 28,
            
            /** Finds the nearest even integer to the parameter. Translates to `roundEven(x)` in the Godot Shader Language. */
            FUNC_ROUNDEVEN = 29,
            
            /** Returns a value equal to the nearest integer to `x` whose absolute value is not larger than the absolute value of `x`. Translates to `trunc(x)` in the Godot Shader Language. */
            FUNC_TRUNC = 30,
            
            /** Subtracts scalar `x` from 1 (i.e. `1 - x`). */
            FUNC_ONEMINUS = 31,
            
            /** Represents the size of the [enum Function] enum. */
            FUNC_MAX = 32,
        }
    }
    /** A scalar floating-point function to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodefloatfunc.html  
     */
    class VisualShaderNodeFloatFunc extends VisualShaderNode {
        constructor(identifier?: any)
        set_function(func: VisualShaderNodeFloatFunc.Function): void
        get_function(): VisualShaderNodeFloatFunc.Function
        
        /** A function to be applied to the scalar. See [enum Function] for options. */
        get function(): number /*i64*/
        set function(value: number /*i64*/)
    }
    namespace VisualShaderNodeFloatOp {
        enum Operator {
            /** Sums two numbers using `a + b`. */
            OP_ADD = 0,
            
            /** Subtracts two numbers using `a - b`. */
            OP_SUB = 1,
            
            /** Multiplies two numbers using `a * b`. */
            OP_MUL = 2,
            
            /** Divides two numbers using `a / b`. */
            OP_DIV = 3,
            
            /** Calculates the remainder of two numbers. Translates to `mod(a, b)` in the Godot Shader Language. */
            OP_MOD = 4,
            
            /** Raises the `a` to the power of `b`. Translates to `pow(a, b)` in the Godot Shader Language. */
            OP_POW = 5,
            
            /** Returns the greater of two numbers. Translates to `max(a, b)` in the Godot Shader Language. */
            OP_MAX = 6,
            
            /** Returns the lesser of two numbers. Translates to `min(a, b)` in the Godot Shader Language. */
            OP_MIN = 7,
            
            /** Returns the arc-tangent of the parameters. Translates to `atan(a, b)` in the Godot Shader Language. */
            OP_ATAN2 = 8,
            
            /** Generates a step function by comparing `b`(x) to `a`(edge). Returns 0.0 if `x` is smaller than `edge` and otherwise 1.0. Translates to `step(a, b)` in the Godot Shader Language. */
            OP_STEP = 9,
            
            /** Represents the size of the [enum Operator] enum. */
            OP_ENUM_SIZE = 10,
        }
    }
    /** A floating-point scalar operator to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodefloatop.html  
     */
    class VisualShaderNodeFloatOp extends VisualShaderNode {
        constructor(identifier?: any)
        set_operator(op: VisualShaderNodeFloatOp.Operator): void
        get_operator(): VisualShaderNodeFloatOp.Operator
        
        /** An operator to be applied to the inputs. See [enum Operator] for options. */
        get operator(): number /*i64*/
        set operator(value: number /*i64*/)
    }
    namespace VisualShaderNodeFloatParameter {
        enum Hint {
            /** No hint used. */
            HINT_NONE = 0,
            
            /** A range hint for scalar value, which limits possible input values between [member min] and [member max]. Translated to `hint_range(min, max)` in shader code. */
            HINT_RANGE = 1,
            
            /** A range hint for scalar value with step, which limits possible input values between [member min] and [member max], with a step (increment) of [member step]). Translated to `hint_range(min, max, step)` in shader code. */
            HINT_RANGE_STEP = 2,
            
            /** Represents the size of the [enum Hint] enum. */
            HINT_MAX = 3,
        }
    }
    /** A scalar float parameter to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodefloatparameter.html  
     */
    class VisualShaderNodeFloatParameter extends VisualShaderNodeParameter {
        constructor(identifier?: any)
        set_hint(hint: VisualShaderNodeFloatParameter.Hint): void
        get_hint(): VisualShaderNodeFloatParameter.Hint
        set_min(value: number /*f64*/): void
        get_min(): number /*f64*/
        set_max(value: number /*f64*/): void
        get_max(): number /*f64*/
        set_step(value: number /*f64*/): void
        get_step(): number /*f64*/
        set_default_value_enabled(enabled: boolean): void
        is_default_value_enabled(): boolean
        set_default_value(value: number /*f64*/): void
        get_default_value(): number /*f64*/
        
        /** A hint applied to the uniform, which controls the values it can take when set through the Inspector. */
        get hint(): number /*i64*/
        set hint(value: number /*i64*/)
        
        /** Maximum value for range hints. Used if [member hint] is set to [constant HINT_RANGE] or [constant HINT_RANGE_STEP]. */
        get min(): number /*f64*/
        set min(value: number /*f64*/)
        
        /** Minimum value for range hints. Used if [member hint] is set to [constant HINT_RANGE] or [constant HINT_RANGE_STEP]. */
        get max(): number /*f64*/
        set max(value: number /*f64*/)
        
        /** Step (increment) value for the range hint with step. Used if [member hint] is set to [constant HINT_RANGE_STEP]. */
        get step(): number /*f64*/
        set step(value: number /*f64*/)
        
        /** Enables usage of the [member default_value]. */
        get default_value_enabled(): boolean
        set default_value_enabled(value: boolean)
        
        /** A default value to be assigned within the shader. */
        get default_value(): number /*f64*/
        set default_value(value: number /*f64*/)
    }
    /** A Fresnel effect to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodefresnel.html  
     */
    class VisualShaderNodeFresnel extends VisualShaderNode {
        constructor(identifier?: any)
    }
    /** A custom global visual shader graph expression written in Godot Shading Language.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodeglobalexpression.html  
     */
    class VisualShaderNodeGlobalExpression extends VisualShaderNodeExpression {
        constructor(identifier?: any)
    }
    /** Base class for a family of nodes with variable number of input and output ports within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodegroupbase.html  
     */
    class VisualShaderNodeGroupBase extends VisualShaderNodeResizableBase {
        constructor(identifier?: any)
        /** Defines all input ports using a [String] formatted as a colon-separated list: `id,type,name;` (see [method add_input_port]). */
        set_inputs(inputs: string): void
        
        /** Returns a [String] description of the input ports as a colon-separated list using the format `id,type,name;` (see [method add_input_port]). */
        get_inputs(): string
        
        /** Defines all output ports using a [String] formatted as a colon-separated list: `id,type,name;` (see [method add_output_port]). */
        set_outputs(outputs: string): void
        
        /** Returns a [String] description of the output ports as a colon-separated list using the format `id,type,name;` (see [method add_output_port]). */
        get_outputs(): string
        
        /** Returns `true` if the specified port name does not override an existed port name and is valid within the shader. */
        is_valid_port_name(name: string): boolean
        
        /** Adds an input port with the specified [param type] (see [enum VisualShaderNode.PortType]) and [param name]. */
        add_input_port(id: number /*i64*/, type: number /*i64*/, name: string): void
        
        /** Removes the specified input port. */
        remove_input_port(id: number /*i64*/): void
        
        /** Returns the number of input ports in use. Alternative for [method get_free_input_port_id]. */
        get_input_port_count(): number /*i64*/
        
        /** Returns `true` if the specified input port exists. */
        has_input_port(id: number /*i64*/): boolean
        
        /** Removes all previously specified input ports. */
        clear_input_ports(): void
        
        /** Adds an output port with the specified [param type] (see [enum VisualShaderNode.PortType]) and [param name]. */
        add_output_port(id: number /*i64*/, type: number /*i64*/, name: string): void
        
        /** Removes the specified output port. */
        remove_output_port(id: number /*i64*/): void
        
        /** Returns the number of output ports in use. Alternative for [method get_free_output_port_id]. */
        get_output_port_count(): number /*i64*/
        
        /** Returns `true` if the specified output port exists. */
        has_output_port(id: number /*i64*/): boolean
        
        /** Removes all previously specified output ports. */
        clear_output_ports(): void
        
        /** Renames the specified input port. */
        set_input_port_name(id: number /*i64*/, name: string): void
        
        /** Sets the specified input port's type (see [enum VisualShaderNode.PortType]). */
        set_input_port_type(id: number /*i64*/, type: number /*i64*/): void
        
        /** Renames the specified output port. */
        set_output_port_name(id: number /*i64*/, name: string): void
        
        /** Sets the specified output port's type (see [enum VisualShaderNode.PortType]). */
        set_output_port_type(id: number /*i64*/, type: number /*i64*/): void
        
        /** Returns a free input port ID which can be used in [method add_input_port]. */
        get_free_input_port_id(): number /*i64*/
        
        /** Returns a free output port ID which can be used in [method add_output_port]. */
        get_free_output_port_id(): number /*i64*/
    }
    /** Outputs a 3D vector based on the result of a floating point comparison within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodeif.html  
     */
    class VisualShaderNodeIf extends VisualShaderNode {
        constructor(identifier?: any)
    }
    /** Represents the input shader parameter within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodeinput.html  
     */
    class VisualShaderNodeInput extends VisualShaderNode {
        constructor(identifier?: any)
        set_input_name(name: string): void
        get_input_name(): string
        
        /** Returns a translated name of the current constant in the Godot Shader Language. E.g. `"ALBEDO"` if the [member input_name] equal to `"albedo"`. */
        get_input_real_name(): string
        
        /** One of the several input constants in lower-case style like: "vertex" (`VERTEX`) or "point_size" (`POINT_SIZE`). */
        get input_name(): StringName
        set input_name(value: StringName)
        
        /** Emitted when input is changed via [member input_name]. */
        readonly input_type_changed: Signal //  => void
    }
    /** A scalar integer constant to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodeintconstant.html  
     */
    class VisualShaderNodeIntConstant extends VisualShaderNodeConstant {
        constructor(identifier?: any)
        set_constant(constant: number /*i64*/): void
        get_constant(): number /*i64*/
        
        /** An integer constant which represents a state of this node. */
        get constant(): number /*i64*/
        set constant(value: number /*i64*/)
    }
    namespace VisualShaderNodeIntFunc {
        enum Function {
            /** Returns the absolute value of the parameter. Translates to `abs(x)` in the Godot Shader Language. */
            FUNC_ABS = 0,
            
            /** Negates the `x` using `-(x)`. */
            FUNC_NEGATE = 1,
            
            /** Extracts the sign of the parameter. Translates to `sign(x)` in the Godot Shader Language. */
            FUNC_SIGN = 2,
            
            /** Returns the result of bitwise `NOT` operation on the integer. Translates to `~a` in the Godot Shader Language. */
            FUNC_BITWISE_NOT = 3,
            
            /** Represents the size of the [enum Function] enum. */
            FUNC_MAX = 4,
        }
    }
    /** A scalar integer function to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodeintfunc.html  
     */
    class VisualShaderNodeIntFunc extends VisualShaderNode {
        constructor(identifier?: any)
        set_function(func: VisualShaderNodeIntFunc.Function): void
        get_function(): VisualShaderNodeIntFunc.Function
        
        /** A function to be applied to the scalar. See [enum Function] for options. */
        get function(): number /*i64*/
        set function(value: number /*i64*/)
    }
    namespace VisualShaderNodeIntOp {
        enum Operator {
            /** Sums two numbers using `a + b`. */
            OP_ADD = 0,
            
            /** Subtracts two numbers using `a - b`. */
            OP_SUB = 1,
            
            /** Multiplies two numbers using `a * b`. */
            OP_MUL = 2,
            
            /** Divides two numbers using `a / b`. */
            OP_DIV = 3,
            
            /** Calculates the remainder of two numbers using `a % b`. */
            OP_MOD = 4,
            
            /** Returns the greater of two numbers. Translates to `max(a, b)` in the Godot Shader Language. */
            OP_MAX = 5,
            
            /** Returns the lesser of two numbers. Translates to `max(a, b)` in the Godot Shader Language. */
            OP_MIN = 6,
            
            /** Returns the result of bitwise `AND` operation on the integer. Translates to `a & b` in the Godot Shader Language. */
            OP_BITWISE_AND = 7,
            
            /** Returns the result of bitwise `OR` operation for two integers. Translates to `a | b` in the Godot Shader Language. */
            OP_BITWISE_OR = 8,
            
            /** Returns the result of bitwise `XOR` operation for two integers. Translates to `a ^ b` in the Godot Shader Language. */
            OP_BITWISE_XOR = 9,
            
            /** Returns the result of bitwise left shift operation on the integer. Translates to `a << b` in the Godot Shader Language. */
            OP_BITWISE_LEFT_SHIFT = 10,
            
            /** Returns the result of bitwise right shift operation on the integer. Translates to `a >> b` in the Godot Shader Language. */
            OP_BITWISE_RIGHT_SHIFT = 11,
            
            /** Represents the size of the [enum Operator] enum. */
            OP_ENUM_SIZE = 12,
        }
    }
    /** An integer scalar operator to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodeintop.html  
     */
    class VisualShaderNodeIntOp extends VisualShaderNode {
        constructor(identifier?: any)
        set_operator(op: VisualShaderNodeIntOp.Operator): void
        get_operator(): VisualShaderNodeIntOp.Operator
        
        /** An operator to be applied to the inputs. See [enum Operator] for options. */
        get operator(): number /*i64*/
        set operator(value: number /*i64*/)
    }
    namespace VisualShaderNodeIntParameter {
        enum Hint {
            /** The parameter will not constrain its value. */
            HINT_NONE = 0,
            
            /** The parameter's value must be within the specified [member min]/[member max] range. */
            HINT_RANGE = 1,
            
            /** The parameter's value must be within the specified range, with the given [member step] between values. */
            HINT_RANGE_STEP = 2,
            
            /** Represents the size of the [enum Hint] enum. */
            HINT_MAX = 3,
        }
    }
    /** A visual shader node for shader parameter (uniform) of type [int].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodeintparameter.html  
     */
    class VisualShaderNodeIntParameter extends VisualShaderNodeParameter {
        constructor(identifier?: any)
        set_hint(hint: VisualShaderNodeIntParameter.Hint): void
        get_hint(): VisualShaderNodeIntParameter.Hint
        set_min(value: number /*i64*/): void
        get_min(): number /*i64*/
        set_max(value: number /*i64*/): void
        get_max(): number /*i64*/
        set_step(value: number /*i64*/): void
        get_step(): number /*i64*/
        set_default_value_enabled(enabled: boolean): void
        is_default_value_enabled(): boolean
        set_default_value(value: number /*i64*/): void
        get_default_value(): number /*i64*/
        
        /** Range hint of this node. Use it to customize valid parameter range. */
        get hint(): number /*i64*/
        set hint(value: number /*i64*/)
        
        /** The minimum value this parameter can take. [member hint] must be either [constant HINT_RANGE] or [constant HINT_RANGE_STEP] for this to take effect. */
        get min(): number /*i64*/
        set min(value: number /*i64*/)
        
        /** The maximum value this parameter can take. [member hint] must be either [constant HINT_RANGE] or [constant HINT_RANGE_STEP] for this to take effect. */
        get max(): number /*i64*/
        set max(value: number /*i64*/)
        
        /** The step between parameter's values. Forces the parameter to be a multiple of the given value. [member hint] must be [constant HINT_RANGE_STEP] for this to take effect. */
        get step(): number /*i64*/
        set step(value: number /*i64*/)
        
        /** If `true`, the node will have a custom default value. */
        get default_value_enabled(): boolean
        set default_value_enabled(value: boolean)
        
        /** Default value of this parameter, which will be used if not set externally. [member default_value_enabled] must be enabled; defaults to `0` otherwise. */
        get default_value(): number /*i64*/
        set default_value(value: number /*i64*/)
    }
    namespace VisualShaderNodeIs {
        enum Function {
            /** Comparison with `INF` (Infinity). */
            FUNC_IS_INF = 0,
            
            /** Comparison with `NaN` (Not a Number; denotes invalid numeric results, e.g. division by zero). */
            FUNC_IS_NAN = 1,
            
            /** Represents the size of the [enum Function] enum. */
            FUNC_MAX = 2,
        }
    }
    /** A boolean comparison operator to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodeis.html  
     */
    class VisualShaderNodeIs extends VisualShaderNode {
        constructor(identifier?: any)
        set_function(func: VisualShaderNodeIs.Function): void
        get_function(): VisualShaderNodeIs.Function
        
        /** The comparison function. See [enum Function] for options. */
        get function(): number /*i64*/
        set function(value: number /*i64*/)
    }
    /** A visual shader node that returns the depth value of the DEPTH_TEXTURE node in a linear space.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodelinearscenedepth.html  
     */
    class VisualShaderNodeLinearSceneDepth extends VisualShaderNode {
        constructor(identifier?: any)
    }
    namespace VisualShaderNodeMix {
        enum OpType {
            /** A floating-point scalar. */
            OP_TYPE_SCALAR = 0,
            
            /** A 2D vector type. */
            OP_TYPE_VECTOR_2D = 1,
            
            /** The `a` and `b` ports use a 2D vector type. The `weight` port uses a scalar type. */
            OP_TYPE_VECTOR_2D_SCALAR = 2,
            
            /** A 3D vector type. */
            OP_TYPE_VECTOR_3D = 3,
            
            /** The `a` and `b` ports use a 3D vector type. The `weight` port uses a scalar type. */
            OP_TYPE_VECTOR_3D_SCALAR = 4,
            
            /** A 4D vector type. */
            OP_TYPE_VECTOR_4D = 5,
            
            /** The `a` and `b` ports use a 4D vector type. The `weight` port uses a scalar type. */
            OP_TYPE_VECTOR_4D_SCALAR = 6,
            
            /** Represents the size of the [enum OpType] enum. */
            OP_TYPE_MAX = 7,
        }
    }
    /** Linearly interpolates between two values within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodemix.html  
     */
    class VisualShaderNodeMix extends VisualShaderNode {
        constructor(identifier?: any)
        set_op_type(op_type: VisualShaderNodeMix.OpType): void
        get_op_type(): VisualShaderNodeMix.OpType
        
        /** A type of operands and returned value. */
        get op_type(): number /*i64*/
        set op_type(value: number /*i64*/)
    }
    namespace VisualShaderNodeMultiplyAdd {
        enum OpType {
            /** A floating-point scalar type. */
            OP_TYPE_SCALAR = 0,
            
            /** A 2D vector type. */
            OP_TYPE_VECTOR_2D = 1,
            
            /** A 3D vector type. */
            OP_TYPE_VECTOR_3D = 2,
            
            /** A 4D vector type. */
            OP_TYPE_VECTOR_4D = 3,
            
            /** Represents the size of the [enum OpType] enum. */
            OP_TYPE_MAX = 4,
        }
    }
    /** Performs a fused multiply-add operation within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodemultiplyadd.html  
     */
    class VisualShaderNodeMultiplyAdd extends VisualShaderNode {
        constructor(identifier?: any)
        set_op_type(type: VisualShaderNodeMultiplyAdd.OpType): void
        get_op_type(): VisualShaderNodeMultiplyAdd.OpType
        
        /** A type of operands and returned value. */
        get op_type(): number /*i64*/
        set op_type(value: number /*i64*/)
    }
    /** Calculates an outer product of two vectors within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodeouterproduct.html  
     */
    class VisualShaderNodeOuterProduct extends VisualShaderNode {
        constructor(identifier?: any)
    }
    /** Represents the output shader parameters within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodeoutput.html  
     */
    class VisualShaderNodeOutput extends VisualShaderNode {
        constructor(identifier?: any)
    }
    namespace VisualShaderNodeParameter {
        enum Qualifier {
            /** The parameter will be tied to the [ShaderMaterial] using this shader. */
            QUAL_NONE = 0,
            
            /** The parameter will use a global value, defined in Project Settings. */
            QUAL_GLOBAL = 1,
            
            /** The parameter will be tied to the node with attached [ShaderMaterial] using this shader. */
            QUAL_INSTANCE = 2,
            
            /** Represents the size of the [enum Qualifier] enum. */
            QUAL_MAX = 3,
        }
    }
    /** A base type for the parameters within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodeparameter.html  
     */
    class VisualShaderNodeParameter extends VisualShaderNode {
        constructor(identifier?: any)
        set_parameter_name(name: string): void
        get_parameter_name(): string
        set_qualifier(qualifier: VisualShaderNodeParameter.Qualifier): void
        get_qualifier(): VisualShaderNodeParameter.Qualifier
        
        /** Name of the parameter, by which it can be accessed through the [ShaderMaterial] properties. */
        get parameter_name(): StringName
        set parameter_name(value: StringName)
        
        /** Defines the scope of the parameter. */
        get qualifier(): number /*i64*/
        set qualifier(value: number /*i64*/)
    }
    /** A reference to an existing [VisualShaderNodeParameter].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodeparameterref.html  
     */
    class VisualShaderNodeParameterRef extends VisualShaderNode {
        constructor(identifier?: any)
        set_parameter_name(name: string): void
        get_parameter_name(): string
        _set_parameter_type(type: number /*i64*/): void
        _get_parameter_type(): number /*i64*/
        
        /** The name of the parameter which this reference points to. */
        get parameter_name(): StringName
        set parameter_name(value: StringName)
        get param_type(): number /*i64*/
        set param_type(value: number /*i64*/)
    }
    namespace VisualShaderNodeParticleAccelerator {
        enum Mode {
            /** The particles will be accelerated based on their velocity. */
            MODE_LINEAR = 0,
            
            /** The particles will be accelerated towards or away from the center. */
            MODE_RADIAL = 1,
            
            /** The particles will be accelerated tangentially to the radius vector from center to their position. */
            MODE_TANGENTIAL = 2,
            
            /** Represents the size of the [enum Mode] enum. */
            MODE_MAX = 3,
        }
    }
    /** A visual shader node that accelerates particles.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodeparticleaccelerator.html  
     */
    class VisualShaderNodeParticleAccelerator extends VisualShaderNode {
        constructor(identifier?: any)
        set_mode(mode: VisualShaderNodeParticleAccelerator.Mode): void
        get_mode(): VisualShaderNodeParticleAccelerator.Mode
        
        /** Defines in what manner the particles will be accelerated. */
        get mode(): number /*i64*/
        set mode(value: number /*i64*/)
    }
    /** A visual shader node that makes particles emitted in a box shape.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodeparticleboxemitter.html  
     */
    class VisualShaderNodeParticleBoxEmitter extends VisualShaderNodeParticleEmitter {
        constructor(identifier?: any)
    }
    /** A visual shader node that makes particles move in a cone shape.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodeparticleconevelocity.html  
     */
    class VisualShaderNodeParticleConeVelocity extends VisualShaderNode {
        constructor(identifier?: any)
    }
    namespace VisualShaderNodeParticleEmit {
        enum EmitFlags {
            /** If enabled, the particle starts with the position defined by this node. */
            EMIT_FLAG_POSITION = 1,
            
            /** If enabled, the particle starts with the rotation and scale defined by this node. */
            EMIT_FLAG_ROT_SCALE = 2,
            
            /** If enabled,the particle starts with the velocity defined by this node. */
            EMIT_FLAG_VELOCITY = 4,
            
            /** If enabled, the particle starts with the color defined by this node. */
            EMIT_FLAG_COLOR = 8,
            
            /** If enabled, the particle starts with the `CUSTOM` data defined by this node. */
            EMIT_FLAG_CUSTOM = 16,
        }
    }
    /** A visual shader node that forces to emit a particle from a sub-emitter.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodeparticleemit.html  
     */
    class VisualShaderNodeParticleEmit extends VisualShaderNode {
        constructor(identifier?: any)
        set_flags(flags: VisualShaderNodeParticleEmit.EmitFlags): void
        get_flags(): VisualShaderNodeParticleEmit.EmitFlags
        
        /** Flags used to override the properties defined in the sub-emitter's process material. */
        get flags(): number /*i64*/
        set flags(value: number /*i64*/)
    }
    /** A base class for particle emitters.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodeparticleemitter.html  
     */
    class VisualShaderNodeParticleEmitter extends VisualShaderNode {
        constructor(identifier?: any)
        set_mode_2d(enabled: boolean): void
        is_mode_2d(): boolean
        
        /** If `true`, the result of this emitter is projected to 2D space. By default it is `false` and meant for use in 3D space. */
        get mode_2d(): boolean
        set mode_2d(value: boolean)
    }
    /** A visual shader node that makes particles emitted in a shape defined by a [Mesh].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodeparticlemeshemitter.html  
     */
    class VisualShaderNodeParticleMeshEmitter extends VisualShaderNodeParticleEmitter {
        constructor(identifier?: any)
        set_mesh(mesh: Mesh): void
        get_mesh(): Mesh
        set_use_all_surfaces(enabled: boolean): void
        is_use_all_surfaces(): boolean
        set_surface_index(surface_index: number /*i64*/): void
        get_surface_index(): number /*i64*/
        
        /** The [Mesh] that defines emission shape. */
        get mesh(): Mesh
        set mesh(value: Mesh)
        
        /** If `true`, the particles will emit from all surfaces of the mesh. */
        get use_all_surfaces(): boolean
        set use_all_surfaces(value: boolean)
        
        /** Index of the surface that emits particles. [member use_all_surfaces] must be `false` for this to take effect. */
        get surface_index(): number /*i64*/
        set surface_index(value: number /*i64*/)
    }
    /** A visual shader helper node for multiplying position and rotation of particles.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodeparticlemultiplybyaxisangle.html  
     */
    class VisualShaderNodeParticleMultiplyByAxisAngle extends VisualShaderNode {
        constructor(identifier?: any)
        set_degrees_mode(enabled: boolean): void
        is_degrees_mode(): boolean
        
        /** If `true`, the angle will be interpreted in degrees instead of radians. */
        get degrees_mode(): boolean
        set degrees_mode(value: boolean)
    }
    /** Visual shader node that defines output values for particle emitting.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodeparticleoutput.html  
     */
    class VisualShaderNodeParticleOutput extends VisualShaderNodeOutput {
        constructor(identifier?: any)
    }
    namespace VisualShaderNodeParticleRandomness {
        enum OpType {
            /** A floating-point scalar. */
            OP_TYPE_SCALAR = 0,
            
            /** A 2D vector type. */
            OP_TYPE_VECTOR_2D = 1,
            
            /** A 3D vector type. */
            OP_TYPE_VECTOR_3D = 2,
            
            /** A 4D vector type. */
            OP_TYPE_VECTOR_4D = 3,
            
            /** Represents the size of the [enum OpType] enum. */
            OP_TYPE_MAX = 4,
        }
    }
    /** Visual shader node for randomizing particle values.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodeparticlerandomness.html  
     */
    class VisualShaderNodeParticleRandomness extends VisualShaderNode {
        constructor(identifier?: any)
        set_op_type(type: VisualShaderNodeParticleRandomness.OpType): void
        get_op_type(): VisualShaderNodeParticleRandomness.OpType
        
        /** A type of operands and returned value. */
        get op_type(): number /*i64*/
        set op_type(value: number /*i64*/)
    }
    /** A visual shader node that makes particles emitted in a ring shape.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodeparticleringemitter.html  
     */
    class VisualShaderNodeParticleRingEmitter extends VisualShaderNodeParticleEmitter {
        constructor(identifier?: any)
    }
    /** A visual shader node that makes particles emitted in a sphere shape.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodeparticlesphereemitter.html  
     */
    class VisualShaderNodeParticleSphereEmitter extends VisualShaderNodeParticleEmitter {
        constructor(identifier?: any)
    }
    /** A visual shader node representing proximity fade effect.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodeproximityfade.html  
     */
    class VisualShaderNodeProximityFade extends VisualShaderNode {
        constructor(identifier?: any)
    }
    /** A visual shader node that generates a pseudo-random scalar.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernoderandomrange.html  
     */
    class VisualShaderNodeRandomRange extends VisualShaderNode {
        constructor(identifier?: any)
    }
    /** A visual shader node for remap function.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernoderemap.html  
     */
    class VisualShaderNodeRemap extends VisualShaderNode {
        constructor(identifier?: any)
    }
    /** Base class for resizable nodes in a visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernoderesizablebase.html  
     */
    class VisualShaderNodeResizableBase extends VisualShaderNode {
        constructor(identifier?: any)
        set_size(size: Vector2): void
        get_size(): Vector2
        
        /** The size of the node in the visual shader graph. */
        get size(): Vector2
        set size(value: Vector2)
    }
    /** A visual shader node that modifies the rotation of the object using a rotation matrix.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernoderotationbyaxis.html  
     */
    class VisualShaderNodeRotationByAxis extends VisualShaderNode {
        constructor(identifier?: any)
    }
    /** SDF raymarching algorithm to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodesdfraymarch.html  
     */
    class VisualShaderNodeSDFRaymarch extends VisualShaderNode {
        constructor(identifier?: any)
    }
    /** A function to convert an SDF (signed-distance field) to screen UV, to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodesdftoscreenuv.html  
     */
    class VisualShaderNodeSDFToScreenUV extends VisualShaderNode {
        constructor(identifier?: any)
    }
    namespace VisualShaderNodeSample3D {
        enum Source {
            /** Creates internal uniform and provides a way to assign it within node. */
            SOURCE_TEXTURE = 0,
            
            /** Use the uniform texture from sampler port. */
            SOURCE_PORT = 1,
            
            /** Represents the size of the [enum Source] enum. */
            SOURCE_MAX = 2,
        }
    }
    /** A base node for nodes which samples 3D textures in the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodesample3d.html  
     */
    class VisualShaderNodeSample3D extends VisualShaderNode {
        constructor(identifier?: any)
        set_source(value: VisualShaderNodeSample3D.Source): void
        get_source(): VisualShaderNodeSample3D.Source
        
        /** An input source type. */
        get source(): number /*i64*/
        set source(value: number /*i64*/)
    }
    /** A visual shader node that unpacks the screen normal texture in World Space.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodescreennormalworldspace.html  
     */
    class VisualShaderNodeScreenNormalWorldSpace extends VisualShaderNode {
        constructor(identifier?: any)
    }
    /** A function to convert screen UV to an SDF (signed-distance field), to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodescreenuvtosdf.html  
     */
    class VisualShaderNodeScreenUVToSDF extends VisualShaderNode {
        constructor(identifier?: any)
    }
    namespace VisualShaderNodeSmoothStep {
        enum OpType {
            /** A floating-point scalar type. */
            OP_TYPE_SCALAR = 0,
            
            /** A 2D vector type. */
            OP_TYPE_VECTOR_2D = 1,
            
            /** The `x` port uses a 2D vector type. The first two ports use a floating-point scalar type. */
            OP_TYPE_VECTOR_2D_SCALAR = 2,
            
            /** A 3D vector type. */
            OP_TYPE_VECTOR_3D = 3,
            
            /** The `x` port uses a 3D vector type. The first two ports use a floating-point scalar type. */
            OP_TYPE_VECTOR_3D_SCALAR = 4,
            
            /** A 4D vector type. */
            OP_TYPE_VECTOR_4D = 5,
            
            /** The `a` and `b` ports use a 4D vector type. The `weight` port uses a scalar type. */
            OP_TYPE_VECTOR_4D_SCALAR = 6,
            
            /** Represents the size of the [enum OpType] enum. */
            OP_TYPE_MAX = 7,
        }
    }
    /** Calculates a SmoothStep function within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodesmoothstep.html  
     */
    class VisualShaderNodeSmoothStep extends VisualShaderNode {
        constructor(identifier?: any)
        set_op_type(op_type: VisualShaderNodeSmoothStep.OpType): void
        get_op_type(): VisualShaderNodeSmoothStep.OpType
        
        /** A type of operands and returned value. */
        get op_type(): number /*i64*/
        set op_type(value: number /*i64*/)
    }
    namespace VisualShaderNodeStep {
        enum OpType {
            /** A floating-point scalar type. */
            OP_TYPE_SCALAR = 0,
            
            /** A 2D vector type. */
            OP_TYPE_VECTOR_2D = 1,
            
            /** The `x` port uses a 2D vector type, while the `edge` port uses a floating-point scalar type. */
            OP_TYPE_VECTOR_2D_SCALAR = 2,
            
            /** A 3D vector type. */
            OP_TYPE_VECTOR_3D = 3,
            
            /** The `x` port uses a 3D vector type, while the `edge` port uses a floating-point scalar type. */
            OP_TYPE_VECTOR_3D_SCALAR = 4,
            
            /** A 4D vector type. */
            OP_TYPE_VECTOR_4D = 5,
            
            /** The `a` and `b` ports use a 4D vector type. The `weight` port uses a scalar type. */
            OP_TYPE_VECTOR_4D_SCALAR = 6,
            
            /** Represents the size of the [enum OpType] enum. */
            OP_TYPE_MAX = 7,
        }
    }
    /** Calculates a Step function within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodestep.html  
     */
    class VisualShaderNodeStep extends VisualShaderNode {
        constructor(identifier?: any)
        set_op_type(op_type: VisualShaderNodeStep.OpType): void
        get_op_type(): VisualShaderNodeStep.OpType
        
        /** A type of operands and returned value. */
        get op_type(): number /*i64*/
        set op_type(value: number /*i64*/)
    }
    namespace VisualShaderNodeSwitch {
        enum OpType {
            /** A floating-point scalar. */
            OP_TYPE_FLOAT = 0,
            
            /** An integer scalar. */
            OP_TYPE_INT = 1,
            
            /** An unsigned integer scalar. */
            OP_TYPE_UINT = 2,
            
            /** A 2D vector type. */
            OP_TYPE_VECTOR_2D = 3,
            
            /** A 3D vector type. */
            OP_TYPE_VECTOR_3D = 4,
            
            /** A 4D vector type. */
            OP_TYPE_VECTOR_4D = 5,
            
            /** A boolean type. */
            OP_TYPE_BOOLEAN = 6,
            
            /** A transform type. */
            OP_TYPE_TRANSFORM = 7,
            
            /** Represents the size of the [enum OpType] enum. */
            OP_TYPE_MAX = 8,
        }
    }
    /** A selector function for use within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodeswitch.html  
     */
    class VisualShaderNodeSwitch extends VisualShaderNode {
        constructor(identifier?: any)
        set_op_type(type: VisualShaderNodeSwitch.OpType): void
        get_op_type(): VisualShaderNodeSwitch.OpType
        
        /** A type of operands and returned value. */
        get op_type(): number /*i64*/
        set op_type(value: number /*i64*/)
    }
    namespace VisualShaderNodeTexture {
        enum Source {
            /** Use the texture given as an argument for this function. */
            SOURCE_TEXTURE = 0,
            
            /** Use the current viewport's texture as the source. */
            SOURCE_SCREEN = 1,
            
            /** Use the texture from this shader's texture built-in (e.g. a texture of a [Sprite2D]). */
            SOURCE_2D_TEXTURE = 2,
            
            /** Use the texture from this shader's normal map built-in. */
            SOURCE_2D_NORMAL = 3,
            
            /** Use the depth texture captured during the depth prepass. Only available when the depth prepass is used (i.e. in spatial shaders and in the forward_plus or gl_compatibility renderers). */
            SOURCE_DEPTH = 4,
            
            /** Use the texture provided in the input port for this function. */
            SOURCE_PORT = 5,
            
            /** Use the normal buffer captured during the depth prepass. Only available when the normal-roughness buffer is available (i.e. in spatial shaders and in the forward_plus renderer). */
            SOURCE_3D_NORMAL = 6,
            
            /** Use the roughness buffer captured during the depth prepass. Only available when the normal-roughness buffer is available (i.e. in spatial shaders and in the forward_plus renderer). */
            SOURCE_ROUGHNESS = 7,
            
            /** Represents the size of the [enum Source] enum. */
            SOURCE_MAX = 8,
        }
        enum TextureType {
            /** No hints are added to the uniform declaration. */
            TYPE_DATA = 0,
            
            /** Adds `source_color` as hint to the uniform declaration for proper sRGB to linear conversion. */
            TYPE_COLOR = 1,
            
            /** Adds `hint_normal` as hint to the uniform declaration, which internally converts the texture for proper usage as normal map. */
            TYPE_NORMAL_MAP = 2,
            
            /** Represents the size of the [enum TextureType] enum. */
            TYPE_MAX = 3,
        }
    }
    /** Performs a 2D texture lookup within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodetexture.html  
     */
    class VisualShaderNodeTexture extends VisualShaderNode {
        constructor(identifier?: any)
        set_source(value: VisualShaderNodeTexture.Source): void
        get_source(): VisualShaderNodeTexture.Source
        set_texture(value: Texture2D): void
        get_texture(): Texture2D
        set_texture_type(value: VisualShaderNodeTexture.TextureType): void
        get_texture_type(): VisualShaderNodeTexture.TextureType
        
        /** Determines the source for the lookup. See [enum Source] for options. */
        get source(): number /*i64*/
        set source(value: number /*i64*/)
        
        /** The source texture, if needed for the selected [member source]. */
        get texture(): Texture2D
        set texture(value: Texture2D)
        
        /** Specifies the type of the texture if [member source] is set to [constant SOURCE_TEXTURE]. See [enum TextureType] for options. */
        get texture_type(): number /*i64*/
        set texture_type(value: number /*i64*/)
    }
    /** A 2D texture uniform array to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodetexture2darray.html  
     */
    class VisualShaderNodeTexture2DArray extends VisualShaderNodeSample3D {
        constructor(identifier?: any)
        set_texture_array(value: Texture2DArray): void
        get_texture_array(): Texture2DArray
        
        /** A source texture array. Used if [member VisualShaderNodeSample3D.source] is set to [constant VisualShaderNodeSample3D.SOURCE_TEXTURE]. */
        get texture_array(): Texture2DArray
        set texture_array(value: Texture2DArray)
    }
    /** A visual shader node for shader parameter (uniform) of type [Texture2DArray].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodetexture2darrayparameter.html  
     */
    class VisualShaderNodeTexture2DArrayParameter extends VisualShaderNodeTextureParameter {
        constructor(identifier?: any)
    }
    /** Provides a 2D texture parameter within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodetexture2dparameter.html  
     */
    class VisualShaderNodeTexture2DParameter extends VisualShaderNodeTextureParameter {
        constructor(identifier?: any)
    }
    /** Performs a 3D texture lookup within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodetexture3d.html  
     */
    class VisualShaderNodeTexture3D extends VisualShaderNodeSample3D {
        constructor(identifier?: any)
        set_texture(value: Texture3D): void
        get_texture(): Texture3D
        
        /** A source texture. Used if [member VisualShaderNodeSample3D.source] is set to [constant VisualShaderNodeSample3D.SOURCE_TEXTURE]. */
        get texture(): Texture3D
        set texture(value: Texture3D)
    }
    /** Provides a 3D texture parameter within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodetexture3dparameter.html  
     */
    class VisualShaderNodeTexture3DParameter extends VisualShaderNodeTextureParameter {
        constructor(identifier?: any)
    }
    namespace VisualShaderNodeTextureParameter {
        enum TextureType {
            /** No hints are added to the uniform declaration. */
            TYPE_DATA = 0,
            
            /** Adds `source_color` as hint to the uniform declaration for proper sRGB to linear conversion. */
            TYPE_COLOR = 1,
            
            /** Adds `hint_normal` as hint to the uniform declaration, which internally converts the texture for proper usage as normal map. */
            TYPE_NORMAL_MAP = 2,
            
            /** Adds `hint_anisotropy` as hint to the uniform declaration to use for a flowmap. */
            TYPE_ANISOTROPY = 3,
            
            /** Represents the size of the [enum TextureType] enum. */
            TYPE_MAX = 4,
        }
        enum ColorDefault {
            /** Defaults to fully opaque white color. */
            COLOR_DEFAULT_WHITE = 0,
            
            /** Defaults to fully opaque black color. */
            COLOR_DEFAULT_BLACK = 1,
            
            /** Defaults to fully transparent black color. */
            COLOR_DEFAULT_TRANSPARENT = 2,
            
            /** Represents the size of the [enum ColorDefault] enum. */
            COLOR_DEFAULT_MAX = 3,
        }
        enum TextureFilter {
            /** Sample the texture using the filter determined by the node this shader is attached to. */
            FILTER_DEFAULT = 0,
            
            /** The texture filter reads from the nearest pixel only. This makes the texture look pixelated from up close, and grainy from a distance (due to mipmaps not being sampled). */
            FILTER_NEAREST = 1,
            
            /** The texture filter blends between the nearest 4 pixels. This makes the texture look smooth from up close, and grainy from a distance (due to mipmaps not being sampled). */
            FILTER_LINEAR = 2,
            
            /** The texture filter reads from the nearest pixel and blends between the nearest 2 mipmaps (or uses the nearest mipmap if [member ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter] is `true`). This makes the texture look pixelated from up close, and smooth from a distance.  
             *  Use this for non-pixel art textures that may be viewed at a low scale (e.g. due to [Camera2D] zoom or sprite scaling), as mipmaps are important to smooth out pixels that are smaller than on-screen pixels.  
             */
            FILTER_NEAREST_MIPMAP = 3,
            
            /** The texture filter blends between the nearest 4 pixels and between the nearest 2 mipmaps (or uses the nearest mipmap if [member ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter] is `true`). This makes the texture look smooth from up close, and smooth from a distance.  
             *  Use this for non-pixel art textures that may be viewed at a low scale (e.g. due to [Camera2D] zoom or sprite scaling), as mipmaps are important to smooth out pixels that are smaller than on-screen pixels.  
             */
            FILTER_LINEAR_MIPMAP = 4,
            
            /** The texture filter reads from the nearest pixel and blends between 2 mipmaps (or uses the nearest mipmap if [member ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter] is `true`) based on the angle between the surface and the camera view. This makes the texture look pixelated from up close, and smooth from a distance. Anisotropic filtering improves texture quality on surfaces that are almost in line with the camera, but is slightly slower. The anisotropic filtering level can be changed by adjusting [member ProjectSettings.rendering/textures/default_filters/anisotropic_filtering_level].  
             *      
             *  **Note:** This texture filter is rarely useful in 2D projects. [constant FILTER_NEAREST_MIPMAP] is usually more appropriate in this case.  
             */
            FILTER_NEAREST_MIPMAP_ANISOTROPIC = 5,
            
            /** The texture filter blends between the nearest 4 pixels and blends between 2 mipmaps (or uses the nearest mipmap if [member ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter] is `true`) based on the angle between the surface and the camera view. This makes the texture look smooth from up close, and smooth from a distance. Anisotropic filtering improves texture quality on surfaces that are almost in line with the camera, but is slightly slower. The anisotropic filtering level can be changed by adjusting [member ProjectSettings.rendering/textures/default_filters/anisotropic_filtering_level].  
             *      
             *  **Note:** This texture filter is rarely useful in 2D projects. [constant FILTER_LINEAR_MIPMAP] is usually more appropriate in this case.  
             */
            FILTER_LINEAR_MIPMAP_ANISOTROPIC = 6,
            
            /** Represents the size of the [enum TextureFilter] enum. */
            FILTER_MAX = 7,
        }
        enum TextureRepeat {
            /** Sample the texture using the repeat mode determined by the node this shader is attached to. */
            REPEAT_DEFAULT = 0,
            
            /** Texture will repeat normally. */
            REPEAT_ENABLED = 1,
            
            /** Texture will not repeat. */
            REPEAT_DISABLED = 2,
            
            /** Represents the size of the [enum TextureRepeat] enum. */
            REPEAT_MAX = 3,
        }
        enum TextureSource {
            /** The texture source is not specified in the shader. */
            SOURCE_NONE = 0,
            
            /** The texture source is the screen texture which captures all opaque objects drawn this frame. */
            SOURCE_SCREEN = 1,
            
            /** The texture source is the depth texture from the depth prepass. */
            SOURCE_DEPTH = 2,
            
            /** The texture source is the normal-roughness buffer from the depth prepass. */
            SOURCE_NORMAL_ROUGHNESS = 3,
            
            /** Represents the size of the [enum TextureSource] enum. */
            SOURCE_MAX = 4,
        }
    }
    /** Performs a uniform texture lookup within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodetextureparameter.html  
     */
    class VisualShaderNodeTextureParameter extends VisualShaderNodeParameter {
        constructor(identifier?: any)
        set_texture_type(type: VisualShaderNodeTextureParameter.TextureType): void
        get_texture_type(): VisualShaderNodeTextureParameter.TextureType
        set_color_default(color: VisualShaderNodeTextureParameter.ColorDefault): void
        get_color_default(): VisualShaderNodeTextureParameter.ColorDefault
        set_texture_filter(filter: VisualShaderNodeTextureParameter.TextureFilter): void
        get_texture_filter(): VisualShaderNodeTextureParameter.TextureFilter
        set_texture_repeat(repeat: VisualShaderNodeTextureParameter.TextureRepeat): void
        get_texture_repeat(): VisualShaderNodeTextureParameter.TextureRepeat
        set_texture_source(source: VisualShaderNodeTextureParameter.TextureSource): void
        get_texture_source(): VisualShaderNodeTextureParameter.TextureSource
        
        /** Defines the type of data provided by the source texture. See [enum TextureType] for options. */
        get texture_type(): number /*i64*/
        set texture_type(value: number /*i64*/)
        
        /** Sets the default color if no texture is assigned to the uniform. */
        get color_default(): number /*i64*/
        set color_default(value: number /*i64*/)
        
        /** Sets the texture filtering mode. See [enum TextureFilter] for options. */
        get texture_filter(): number /*i64*/
        set texture_filter(value: number /*i64*/)
        
        /** Sets the texture repeating mode. See [enum TextureRepeat] for options. */
        get texture_repeat(): number /*i64*/
        set texture_repeat(value: number /*i64*/)
        
        /** Sets the texture source mode. Used for reading from the screen, depth, or normal_roughness texture. See [enum TextureSource] for options. */
        get texture_source(): number /*i64*/
        set texture_source(value: number /*i64*/)
    }
    /** Performs a uniform texture lookup with triplanar within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodetextureparametertriplanar.html  
     */
    class VisualShaderNodeTextureParameterTriplanar extends VisualShaderNodeTextureParameter {
        constructor(identifier?: any)
    }
    /** Performs an SDF (signed-distance field) texture lookup within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodetexturesdf.html  
     */
    class VisualShaderNodeTextureSDF extends VisualShaderNode {
        constructor(identifier?: any)
    }
    /** Performs an SDF (signed-distance field) normal texture lookup within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodetexturesdfnormal.html  
     */
    class VisualShaderNodeTextureSDFNormal extends VisualShaderNode {
        constructor(identifier?: any)
    }
    /** Composes a [Transform3D] from four [Vector3]s within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodetransformcompose.html  
     */
    class VisualShaderNodeTransformCompose extends VisualShaderNode {
        constructor(identifier?: any)
    }
    /** A [Transform3D] constant for use within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodetransformconstant.html  
     */
    class VisualShaderNodeTransformConstant extends VisualShaderNodeConstant {
        constructor(identifier?: any)
        set_constant(constant: Transform3D): void
        get_constant(): Transform3D
        
        /** A [Transform3D] constant which represents the state of this node. */
        get constant(): Transform3D
        set constant(value: Transform3D)
    }
    /** Decomposes a [Transform3D] into four [Vector3]s within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodetransformdecompose.html  
     */
    class VisualShaderNodeTransformDecompose extends VisualShaderNode {
        constructor(identifier?: any)
    }
    namespace VisualShaderNodeTransformFunc {
        enum Function {
            /** Perform the inverse operation on the [Transform3D] matrix. */
            FUNC_INVERSE = 0,
            
            /** Perform the transpose operation on the [Transform3D] matrix. */
            FUNC_TRANSPOSE = 1,
            
            /** Represents the size of the [enum Function] enum. */
            FUNC_MAX = 2,
        }
    }
    /** Computes a [Transform3D] function within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodetransformfunc.html  
     */
    class VisualShaderNodeTransformFunc extends VisualShaderNode {
        constructor(identifier?: any)
        set_function(func: VisualShaderNodeTransformFunc.Function): void
        get_function(): VisualShaderNodeTransformFunc.Function
        
        /** The function to be computed. See [enum Function] for options. */
        get function(): number /*i64*/
        set function(value: number /*i64*/)
    }
    namespace VisualShaderNodeTransformOp {
        enum Operator {
            /** Multiplies transform `a` by the transform `b`. */
            OP_AxB = 0,
            
            /** Multiplies transform `b` by the transform `a`. */
            OP_BxA = 1,
            
            /** Performs a component-wise multiplication of transform `a` by the transform `b`. */
            OP_AxB_COMP = 2,
            
            /** Performs a component-wise multiplication of transform `b` by the transform `a`. */
            OP_BxA_COMP = 3,
            
            /** Adds two transforms. */
            OP_ADD = 4,
            
            /** Subtracts the transform `a` from the transform `b`. */
            OP_A_MINUS_B = 5,
            
            /** Subtracts the transform `b` from the transform `a`. */
            OP_B_MINUS_A = 6,
            
            /** Divides the transform `a` by the transform `b`. */
            OP_A_DIV_B = 7,
            
            /** Divides the transform `b` by the transform `a`. */
            OP_B_DIV_A = 8,
            
            /** Represents the size of the [enum Operator] enum. */
            OP_MAX = 9,
        }
    }
    /** A [Transform3D] operator to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodetransformop.html  
     */
    class VisualShaderNodeTransformOp extends VisualShaderNode {
        constructor(identifier?: any)
        set_operator(op: VisualShaderNodeTransformOp.Operator): void
        get_operator(): VisualShaderNodeTransformOp.Operator
        
        /** The type of the operation to be performed on the transforms. See [enum Operator] for options. */
        get operator(): number /*i64*/
        set operator(value: number /*i64*/)
    }
    /** A [Transform3D] parameter for use within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodetransformparameter.html  
     */
    class VisualShaderNodeTransformParameter extends VisualShaderNodeParameter {
        constructor(identifier?: any)
        set_default_value_enabled(enabled: boolean): void
        is_default_value_enabled(): boolean
        set_default_value(value: Transform3D): void
        get_default_value(): Transform3D
        
        /** Enables usage of the [member default_value]. */
        get default_value_enabled(): boolean
        set default_value_enabled(value: boolean)
        
        /** A default value to be assigned within the shader. */
        get default_value(): Transform3D
        set default_value(value: Transform3D)
    }
    namespace VisualShaderNodeTransformVecMult {
        enum Operator {
            /** Multiplies transform `a` by the vector `b`. */
            OP_AxB = 0,
            
            /** Multiplies vector `b` by the transform `a`. */
            OP_BxA = 1,
            
            /** Multiplies transform `a` by the vector `b`, skipping the last row and column of the transform. */
            OP_3x3_AxB = 2,
            
            /** Multiplies vector `b` by the transform `a`, skipping the last row and column of the transform. */
            OP_3x3_BxA = 3,
            
            /** Represents the size of the [enum Operator] enum. */
            OP_MAX = 4,
        }
    }
    /** Multiplies a [Transform3D] and a [Vector3] within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodetransformvecmult.html  
     */
    class VisualShaderNodeTransformVecMult extends VisualShaderNode {
        constructor(identifier?: any)
        set_operator(op: VisualShaderNodeTransformVecMult.Operator): void
        get_operator(): VisualShaderNodeTransformVecMult.Operator
        
        /** The multiplication type to be performed. See [enum Operator] for options. */
        get operator(): number /*i64*/
        set operator(value: number /*i64*/)
    }
    /** An unsigned scalar integer constant to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodeuintconstant.html  
     */
    class VisualShaderNodeUIntConstant extends VisualShaderNodeConstant {
        constructor(identifier?: any)
        set_constant(constant: number /*i64*/): void
        get_constant(): number /*i64*/
        
        /** An unsigned integer constant which represents a state of this node. */
        get constant(): number /*i64*/
        set constant(value: number /*i64*/)
    }
    namespace VisualShaderNodeUIntFunc {
        enum Function {
            /** Negates the `x` using `-(x)`. */
            FUNC_NEGATE = 0,
            
            /** Returns the result of bitwise `NOT` operation on the integer. Translates to `~a` in the Godot Shader Language. */
            FUNC_BITWISE_NOT = 1,
            
            /** Represents the size of the [enum Function] enum. */
            FUNC_MAX = 2,
        }
    }
    /** An unsigned scalar integer function to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodeuintfunc.html  
     */
    class VisualShaderNodeUIntFunc extends VisualShaderNode {
        constructor(identifier?: any)
        set_function(func: VisualShaderNodeUIntFunc.Function): void
        get_function(): VisualShaderNodeUIntFunc.Function
        
        /** A function to be applied to the scalar. See [enum Function] for options. */
        get function(): number /*i64*/
        set function(value: number /*i64*/)
    }
    namespace VisualShaderNodeUIntOp {
        enum Operator {
            /** Sums two numbers using `a + b`. */
            OP_ADD = 0,
            
            /** Subtracts two numbers using `a - b`. */
            OP_SUB = 1,
            
            /** Multiplies two numbers using `a * b`. */
            OP_MUL = 2,
            
            /** Divides two numbers using `a / b`. */
            OP_DIV = 3,
            
            /** Calculates the remainder of two numbers using `a % b`. */
            OP_MOD = 4,
            
            /** Returns the greater of two numbers. Translates to `max(a, b)` in the Godot Shader Language. */
            OP_MAX = 5,
            
            /** Returns the lesser of two numbers. Translates to `max(a, b)` in the Godot Shader Language. */
            OP_MIN = 6,
            
            /** Returns the result of bitwise `AND` operation on the integer. Translates to `a & b` in the Godot Shader Language. */
            OP_BITWISE_AND = 7,
            
            /** Returns the result of bitwise `OR` operation for two integers. Translates to `a | b` in the Godot Shader Language. */
            OP_BITWISE_OR = 8,
            
            /** Returns the result of bitwise `XOR` operation for two integers. Translates to `a ^ b` in the Godot Shader Language. */
            OP_BITWISE_XOR = 9,
            
            /** Returns the result of bitwise left shift operation on the integer. Translates to `a << b` in the Godot Shader Language. */
            OP_BITWISE_LEFT_SHIFT = 10,
            
            /** Returns the result of bitwise right shift operation on the integer. Translates to `a >> b` in the Godot Shader Language. */
            OP_BITWISE_RIGHT_SHIFT = 11,
            
            /** Represents the size of the [enum Operator] enum. */
            OP_ENUM_SIZE = 12,
        }
    }
    /** An unsigned integer scalar operator to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodeuintop.html  
     */
    class VisualShaderNodeUIntOp extends VisualShaderNode {
        constructor(identifier?: any)
        set_operator(op: VisualShaderNodeUIntOp.Operator): void
        get_operator(): VisualShaderNodeUIntOp.Operator
        
        /** An operator to be applied to the inputs. See [enum Operator] for options. */
        get operator(): number /*i64*/
        set operator(value: number /*i64*/)
    }
    /** A visual shader node for shader parameter (uniform) of type unsigned [int].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodeuintparameter.html  
     */
    class VisualShaderNodeUIntParameter extends VisualShaderNodeParameter {
        constructor(identifier?: any)
        set_default_value_enabled(enabled: boolean): void
        is_default_value_enabled(): boolean
        set_default_value(value: number /*i64*/): void
        get_default_value(): number /*i64*/
        
        /** If `true`, the node will have a custom default value. */
        get default_value_enabled(): boolean
        set default_value_enabled(value: boolean)
        
        /** Default value of this parameter, which will be used if not set externally. [member default_value_enabled] must be enabled; defaults to `0` otherwise. */
        get default_value(): number /*i64*/
        set default_value(value: number /*i64*/)
    }
    namespace VisualShaderNodeUVFunc {
        enum Function {
            /** Translates `uv` by using `scale` and `offset` values using the following formula: `uv = uv + offset * scale`. `uv` port is connected to `UV` built-in by default. */
            FUNC_PANNING = 0,
            
            /** Scales `uv` by using `scale` and `pivot` values using the following formula: `uv = (uv - pivot) * scale + pivot`. `uv` port is connected to `UV` built-in by default. */
            FUNC_SCALING = 1,
            
            /** Represents the size of the [enum Function] enum. */
            FUNC_MAX = 2,
        }
    }
    /** Contains functions to modify texture coordinates (`uv`) to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodeuvfunc.html  
     */
    class VisualShaderNodeUVFunc extends VisualShaderNode {
        constructor(identifier?: any)
        set_function(func: VisualShaderNodeUVFunc.Function): void
        get_function(): VisualShaderNodeUVFunc.Function
        
        /** A function to be applied to the texture coordinates. See [enum Function] for options. */
        get function(): number /*i64*/
        set function(value: number /*i64*/)
    }
    /** A visual shader node that modifies the texture UV using polar coordinates.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodeuvpolarcoord.html  
     */
    class VisualShaderNodeUVPolarCoord extends VisualShaderNode {
        constructor(identifier?: any)
    }
    /** A visual shader node that represents a "varying" shader value.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodevarying.html  
     */
    class VisualShaderNodeVarying extends VisualShaderNode {
        constructor(identifier?: any)
        set_varying_name(name: string): void
        get_varying_name(): string
        set_varying_type(type: VisualShader.VaryingType): void
        get_varying_type(): VisualShader.VaryingType
        
        /** Name of the variable. Must be unique. */
        get varying_name(): StringName
        set varying_name(value: StringName)
        
        /** Type of the variable. Determines where the variable can be accessed. */
        get varying_type(): number /*i64*/
        set varying_type(value: number /*i64*/)
    }
    /** A visual shader node that gets a value of a varying.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodevaryinggetter.html  
     */
    class VisualShaderNodeVaryingGetter extends VisualShaderNodeVarying {
        constructor(identifier?: any)
    }
    /** A visual shader node that sets a value of a varying.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodevaryingsetter.html  
     */
    class VisualShaderNodeVaryingSetter extends VisualShaderNodeVarying {
        constructor(identifier?: any)
    }
    /** A [Vector2] constant to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodevec2constant.html  
     */
    class VisualShaderNodeVec2Constant extends VisualShaderNodeConstant {
        constructor(identifier?: any)
        set_constant(constant: Vector2): void
        get_constant(): Vector2
        
        /** A [Vector2] constant which represents the state of this node. */
        get constant(): Vector2
        set constant(value: Vector2)
    }
    /** A [Vector2] parameter to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodevec2parameter.html  
     */
    class VisualShaderNodeVec2Parameter extends VisualShaderNodeParameter {
        constructor(identifier?: any)
        set_default_value_enabled(enabled: boolean): void
        is_default_value_enabled(): boolean
        set_default_value(value: Vector2): void
        get_default_value(): Vector2
        
        /** Enables usage of the [member default_value]. */
        get default_value_enabled(): boolean
        set default_value_enabled(value: boolean)
        
        /** A default value to be assigned within the shader. */
        get default_value(): Vector2
        set default_value(value: Vector2)
    }
    /** A [Vector3] constant to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodevec3constant.html  
     */
    class VisualShaderNodeVec3Constant extends VisualShaderNodeConstant {
        constructor(identifier?: any)
        set_constant(constant: Vector3): void
        get_constant(): Vector3
        
        /** A [Vector3] constant which represents the state of this node. */
        get constant(): Vector3
        set constant(value: Vector3)
    }
    /** A [Vector3] parameter to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodevec3parameter.html  
     */
    class VisualShaderNodeVec3Parameter extends VisualShaderNodeParameter {
        constructor(identifier?: any)
        set_default_value_enabled(enabled: boolean): void
        is_default_value_enabled(): boolean
        set_default_value(value: Vector3): void
        get_default_value(): Vector3
        
        /** Enables usage of the [member default_value]. */
        get default_value_enabled(): boolean
        set default_value_enabled(value: boolean)
        
        /** A default value to be assigned within the shader. */
        get default_value(): Vector3
        set default_value(value: Vector3)
    }
    /** A 4D vector constant to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodevec4constant.html  
     */
    class VisualShaderNodeVec4Constant extends VisualShaderNodeConstant {
        constructor(identifier?: any)
        set_constant(constant: Quaternion): void
        get_constant(): Quaternion
        
        /** A 4D vector (represented as a [Quaternion]) constant which represents the state of this node. */
        get constant(): Quaternion
        set constant(value: Quaternion)
    }
    /** A 4D vector parameter to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodevec4parameter.html  
     */
    class VisualShaderNodeVec4Parameter extends VisualShaderNodeParameter {
        constructor(identifier?: any)
        set_default_value_enabled(enabled: boolean): void
        is_default_value_enabled(): boolean
        set_default_value(value: Vector4): void
        get_default_value(): Vector4
        
        /** Enables usage of the [member default_value]. */
        get default_value_enabled(): boolean
        set default_value_enabled(value: boolean)
        
        /** A default value to be assigned within the shader. */
        get default_value(): Vector4
        set default_value(value: Vector4)
    }
    namespace VisualShaderNodeVectorBase {
        enum OpType {
            /** A 2D vector type. */
            OP_TYPE_VECTOR_2D = 0,
            
            /** A 3D vector type. */
            OP_TYPE_VECTOR_3D = 1,
            
            /** A 4D vector type. */
            OP_TYPE_VECTOR_4D = 2,
            
            /** Represents the size of the [enum OpType] enum. */
            OP_TYPE_MAX = 3,
        }
    }
    /** A base type for the nodes that perform vector operations within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodevectorbase.html  
     */
    class VisualShaderNodeVectorBase extends VisualShaderNode {
        constructor(identifier?: any)
        set_op_type(type: VisualShaderNodeVectorBase.OpType): void
        get_op_type(): VisualShaderNodeVectorBase.OpType
        
        /** A vector type that this operation is performed on. */
        get op_type(): number /*i64*/
        set op_type(value: number /*i64*/)
    }
    /** Composes a [Vector2], [Vector3] or 4D vector (represented as a [Quaternion]) from scalars within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodevectorcompose.html  
     */
    class VisualShaderNodeVectorCompose extends VisualShaderNodeVectorBase {
        constructor(identifier?: any)
    }
    /** Decomposes a [Vector2], [Vector3] or 4D vector (represented as a [Quaternion]) into scalars within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodevectordecompose.html  
     */
    class VisualShaderNodeVectorDecompose extends VisualShaderNodeVectorBase {
        constructor(identifier?: any)
    }
    /** Returns the distance between two points. To be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodevectordistance.html  
     */
    class VisualShaderNodeVectorDistance extends VisualShaderNodeVectorBase {
        constructor(identifier?: any)
    }
    namespace VisualShaderNodeVectorFunc {
        enum Function {
            /** Normalizes the vector so that it has a length of `1` but points in the same direction. */
            FUNC_NORMALIZE = 0,
            
            /** Clamps the value between `0.0` and `1.0`. */
            FUNC_SATURATE = 1,
            
            /** Returns the opposite value of the parameter. */
            FUNC_NEGATE = 2,
            
            /** Returns `1/vector`. */
            FUNC_RECIPROCAL = 3,
            
            /** Returns the absolute value of the parameter. */
            FUNC_ABS = 4,
            
            /** Returns the arc-cosine of the parameter. */
            FUNC_ACOS = 5,
            
            /** Returns the inverse hyperbolic cosine of the parameter. */
            FUNC_ACOSH = 6,
            
            /** Returns the arc-sine of the parameter. */
            FUNC_ASIN = 7,
            
            /** Returns the inverse hyperbolic sine of the parameter. */
            FUNC_ASINH = 8,
            
            /** Returns the arc-tangent of the parameter. */
            FUNC_ATAN = 9,
            
            /** Returns the inverse hyperbolic tangent of the parameter. */
            FUNC_ATANH = 10,
            
            /** Finds the nearest integer that is greater than or equal to the parameter. */
            FUNC_CEIL = 11,
            
            /** Returns the cosine of the parameter. */
            FUNC_COS = 12,
            
            /** Returns the hyperbolic cosine of the parameter. */
            FUNC_COSH = 13,
            
            /** Converts a quantity in radians to degrees. */
            FUNC_DEGREES = 14,
            
            /** Base-e Exponential. */
            FUNC_EXP = 15,
            
            /** Base-2 Exponential. */
            FUNC_EXP2 = 16,
            
            /** Finds the nearest integer less than or equal to the parameter. */
            FUNC_FLOOR = 17,
            
            /** Computes the fractional part of the argument. */
            FUNC_FRACT = 18,
            
            /** Returns the inverse of the square root of the parameter. */
            FUNC_INVERSE_SQRT = 19,
            
            /** Natural logarithm. */
            FUNC_LOG = 20,
            
            /** Base-2 logarithm. */
            FUNC_LOG2 = 21,
            
            /** Converts a quantity in degrees to radians. */
            FUNC_RADIANS = 22,
            
            /** Finds the nearest integer to the parameter. */
            FUNC_ROUND = 23,
            
            /** Finds the nearest even integer to the parameter. */
            FUNC_ROUNDEVEN = 24,
            
            /** Extracts the sign of the parameter, i.e. returns `-1` if the parameter is negative, `1` if it's positive and `0` otherwise. */
            FUNC_SIGN = 25,
            
            /** Returns the sine of the parameter. */
            FUNC_SIN = 26,
            
            /** Returns the hyperbolic sine of the parameter. */
            FUNC_SINH = 27,
            
            /** Returns the square root of the parameter. */
            FUNC_SQRT = 28,
            
            /** Returns the tangent of the parameter. */
            FUNC_TAN = 29,
            
            /** Returns the hyperbolic tangent of the parameter. */
            FUNC_TANH = 30,
            
            /** Returns a value equal to the nearest integer to the parameter whose absolute value is not larger than the absolute value of the parameter. */
            FUNC_TRUNC = 31,
            
            /** Returns `1.0 - vector`. */
            FUNC_ONEMINUS = 32,
            
            /** Represents the size of the [enum Function] enum. */
            FUNC_MAX = 33,
        }
    }
    /** A vector function to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodevectorfunc.html  
     */
    class VisualShaderNodeVectorFunc extends VisualShaderNodeVectorBase {
        constructor(identifier?: any)
        set_function(func: VisualShaderNodeVectorFunc.Function): void
        get_function(): VisualShaderNodeVectorFunc.Function
        
        /** The function to be performed. See [enum Function] for options. */
        get function(): number /*i64*/
        set function(value: number /*i64*/)
    }
    /** Returns the length of a [Vector3] within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodevectorlen.html  
     */
    class VisualShaderNodeVectorLen extends VisualShaderNodeVectorBase {
        constructor(identifier?: any)
    }
    namespace VisualShaderNodeVectorOp {
        enum Operator {
            /** Adds two vectors. */
            OP_ADD = 0,
            
            /** Subtracts a vector from a vector. */
            OP_SUB = 1,
            
            /** Multiplies two vectors. */
            OP_MUL = 2,
            
            /** Divides vector by vector. */
            OP_DIV = 3,
            
            /** Returns the remainder of the two vectors. */
            OP_MOD = 4,
            
            /** Returns the value of the first parameter raised to the power of the second, for each component of the vectors. */
            OP_POW = 5,
            
            /** Returns the greater of two values, for each component of the vectors. */
            OP_MAX = 6,
            
            /** Returns the lesser of two values, for each component of the vectors. */
            OP_MIN = 7,
            
            /** Calculates the cross product of two vectors. */
            OP_CROSS = 8,
            
            /** Returns the arc-tangent of the parameters. */
            OP_ATAN2 = 9,
            
            /** Returns the vector that points in the direction of reflection. `a` is incident vector and `b` is the normal vector. */
            OP_REFLECT = 10,
            
            /** Vector step operator. Returns `0.0` if `a` is smaller than `b` and `1.0` otherwise. */
            OP_STEP = 11,
            
            /** Represents the size of the [enum Operator] enum. */
            OP_ENUM_SIZE = 12,
        }
    }
    /** A vector operator to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodevectorop.html  
     */
    class VisualShaderNodeVectorOp extends VisualShaderNodeVectorBase {
        constructor(identifier?: any)
        set_operator(op: VisualShaderNodeVectorOp.Operator): void
        get_operator(): VisualShaderNodeVectorOp.Operator
        
        /** The operator to be used. See [enum Operator] for options. */
        get operator(): number /*i64*/
        set operator(value: number /*i64*/)
    }
    /** Returns the vector that points in the direction of refraction. For use within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodevectorrefract.html  
     */
    class VisualShaderNodeVectorRefract extends VisualShaderNodeVectorBase {
        constructor(identifier?: any)
    }
    /** A visual shader node that calculates the position of the pixel in world space using the depth texture.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodeworldpositionfromdepth.html  
     */
    class VisualShaderNodeWorldPositionFromDepth extends VisualShaderNode {
        constructor(identifier?: any)
    }
    namespace VoxelGI {
        enum Subdiv {
            /** Use 64 subdivisions. This is the lowest quality setting, but the fastest. Use it if you can, but especially use it on lower-end hardware. */
            SUBDIV_64 = 0,
            
            /** Use 128 subdivisions. This is the default quality setting. */
            SUBDIV_128 = 1,
            
            /** Use 256 subdivisions. */
            SUBDIV_256 = 2,
            
            /** Use 512 subdivisions. This is the highest quality setting, but the slowest. On lower-end hardware, this could cause the GPU to stall. */
            SUBDIV_512 = 3,
            
            /** Represents the size of the [enum Subdiv] enum. */
            SUBDIV_MAX = 4,
        }
    }
    /** Real-time global illumination (GI) probe.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_voxelgi.html  
     */
    class VoxelGI extends VisualInstance3D {
        constructor(identifier?: any)
        set_probe_data(data: VoxelGIData): void
        get_probe_data(): VoxelGIData
        set_subdiv(subdiv: VoxelGI.Subdiv): void
        get_subdiv(): VoxelGI.Subdiv
        set_size(size: Vector3): void
        get_size(): Vector3
        set_camera_attributes(camera_attributes: CameraAttributes): void
        get_camera_attributes(): CameraAttributes
        
        /** Bakes the effect from all [GeometryInstance3D]s marked with [constant GeometryInstance3D.GI_MODE_STATIC] and [Light3D]s marked with either [constant Light3D.BAKE_STATIC] or [constant Light3D.BAKE_DYNAMIC]. If [param create_visual_debug] is `true`, after baking the light, this will generate a [MultiMesh] that has a cube representing each solid cell with each cube colored to the cell's albedo color. This can be used to visualize the [VoxelGI]'s data and debug any issues that may be occurring.  
         *      
         *  **Note:** [method bake] works from the editor and in exported projects. This makes it suitable for procedurally generated or user-built levels. Baking a [VoxelGI] node generally takes from 5 to 20 seconds in most scenes. Reducing [member subdiv] can speed up baking.  
         *      
         *  **Note:** [GeometryInstance3D]s and [Light3D]s must be fully ready before [method bake] is called. If you are procedurally creating those and some meshes or lights are missing from your baked [VoxelGI], use `call_deferred("bake")` instead of calling [method bake] directly.  
         */
        bake(from_node: Node = <any> {} /*compound.type from nil*/, create_visual_debug: boolean = false): void
        
        /** Calls [method bake] with `create_visual_debug` enabled. */
        debug_bake(): void
        
        /** Number of times to subdivide the grid that the [VoxelGI] operates on. A higher number results in finer detail and thus higher visual quality, while lower numbers result in better performance. */
        get subdiv(): number /*i64*/
        set subdiv(value: number /*i64*/)
        
        /** The size of the area covered by the [VoxelGI]. If you make the size larger without increasing the subdivisions with [member subdiv], the size of each cell will increase and result in lower detailed lighting.  
         *      
         *  **Note:** Size is clamped to 1.0 unit or more on each axis.  
         */
        get size(): Vector3
        set size(value: Vector3)
        
        /** The [CameraAttributes] resource that specifies exposure levels to bake at. Auto-exposure and non exposure properties will be ignored. Exposure settings should be used to reduce the dynamic range present when baking. If exposure is too high, the [VoxelGI] will have banding artifacts or may have over-exposure artifacts. */
        get camera_attributes(): CameraAttributesPractical | CameraAttributesPhysical
        set camera_attributes(value: CameraAttributesPractical | CameraAttributesPhysical)
        
        /** The [VoxelGIData] resource that holds the data for this [VoxelGI]. */
        get data(): VoxelGIData
        set data(value: VoxelGIData)
    }
    /** Contains baked voxel global illumination data for use in a [VoxelGI] node.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_voxelgidata.html  
     */
    class VoxelGIData extends Resource {
        constructor(identifier?: any)
        allocate(to_cell_xform: Transform3D, aabb: AABB, octree_size: Vector3, octree_cells: PackedByteArray, data_cells: PackedByteArray, distance_field: PackedByteArray, level_counts: PackedInt32Array): void
        
        /** Returns the bounds of the baked voxel data as an [AABB], which should match [member VoxelGI.size] after being baked (which only contains the size as a [Vector3]).  
         *      
         *  **Note:** If the size was modified without baking the VoxelGI data, then the value of [method get_bounds] and [member VoxelGI.size] will not match.  
         */
        get_bounds(): AABB
        get_octree_size(): Vector3
        get_to_cell_xform(): Transform3D
        get_octree_cells(): PackedByteArray
        get_data_cells(): PackedByteArray
        get_level_counts(): PackedInt32Array
        set_dynamic_range(dynamic_range: number /*f64*/): void
        get_dynamic_range(): number /*f64*/
        set_energy(energy: number /*f64*/): void
        get_energy(): number /*f64*/
        set_bias(bias: number /*f64*/): void
        get_bias(): number /*f64*/
        set_normal_bias(bias: number /*f64*/): void
        get_normal_bias(): number /*f64*/
        set_propagation(propagation: number /*f64*/): void
        get_propagation(): number /*f64*/
        set_interior(interior: boolean): void
        is_interior(): boolean
        set_use_two_bounces(enable: boolean): void
        is_using_two_bounces(): boolean
        _set_data(data: Dictionary): void
        _get_data(): Dictionary
        get _data(): Dictionary
        set _data(value: Dictionary)
        
        /** The dynamic range to use (`1.0` represents a low dynamic range scene brightness). Higher values can be used to provide brighter indirect lighting, at the cost of more visible color banding in dark areas (both in indirect lighting and reflections). To avoid color banding, it's recommended to use the lowest value that does not result in visible light clipping. */
        get dynamic_range(): number /*f64*/
        set dynamic_range(value: number /*f64*/)
        
        /** The energy of the indirect lighting and reflections produced by the [VoxelGI] node. Higher values result in brighter indirect lighting. If indirect lighting looks too flat, try decreasing [member propagation] while increasing [member energy] at the same time. See also [member use_two_bounces] which influences the indirect lighting's effective brightness. */
        get energy(): number /*f64*/
        set energy(value: number /*f64*/)
        
        /** The normal bias to use for indirect lighting and reflections. Higher values reduce self-reflections visible in non-rough materials, at the cost of more visible light leaking and flatter-looking indirect lighting. To prioritize hiding self-reflections over lighting quality, set [member bias] to `0.0` and [member normal_bias] to a value between `1.0` and `2.0`. */
        get bias(): number /*f64*/
        set bias(value: number /*f64*/)
        
        /** The normal bias to use for indirect lighting and reflections. Higher values reduce self-reflections visible in non-rough materials, at the cost of more visible light leaking and flatter-looking indirect lighting. See also [member bias]. To prioritize hiding self-reflections over lighting quality, set [member bias] to `0.0` and [member normal_bias] to a value between `1.0` and `2.0`. */
        get normal_bias(): number /*f64*/
        set normal_bias(value: number /*f64*/)
        
        /** The multiplier to use when light bounces off a surface. Higher values result in brighter indirect lighting. If indirect lighting looks too flat, try decreasing [member propagation] while increasing [member energy] at the same time. See also [member use_two_bounces] which influences the indirect lighting's effective brightness. */
        get propagation(): number /*f64*/
        set propagation(value: number /*f64*/)
        
        /** If `true`, performs two bounces of indirect lighting instead of one. This makes indirect lighting look more natural and brighter at a small performance cost. The second bounce is also visible in reflections. If the scene appears too bright after enabling [member use_two_bounces], adjust [member propagation] and [member energy]. */
        get use_two_bounces(): boolean
        set use_two_bounces(value: boolean)
        
        /** If `true`, [Environment] lighting is ignored by the [VoxelGI] node. If `false`, [Environment] lighting is taken into account by the [VoxelGI] node. [Environment] lighting updates in real-time, which means it can be changed without having to bake the [VoxelGI] node again. */
        get interior(): boolean
        set interior(value: boolean)
    }
    class VoxelGIEditorPlugin extends EditorPlugin {
        constructor(identifier?: any)
    }
    class VoxelGIGizmoPlugin extends EditorNode3DGizmoPlugin {
        constructor(identifier?: any)
    }
    /** Holds an [Object]. If the object is [RefCounted], it doesn't update the reference count.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_weakref.html  
     */
    class WeakRef extends RefCounted {
        constructor(identifier?: any)
        /** Returns the [Object] this weakref is referring to. Returns `null` if that object no longer exists. */
        get_ref(): any
    }
    namespace WebRTCDataChannel {
        enum WriteMode {
            /** Tells the channel to send data over this channel as text. An external peer (non-Godot) would receive this as a string. */
            WRITE_MODE_TEXT = 0,
            
            /** Tells the channel to send data over this channel as binary. An external peer (non-Godot) would receive this as array buffer or blob. */
            WRITE_MODE_BINARY = 1,
        }
        enum ChannelState {
            /** The channel was created, but it's still trying to connect. */
            STATE_CONNECTING = 0,
            
            /** The channel is currently open, and data can flow over it. */
            STATE_OPEN = 1,
            
            /** The channel is being closed, no new messages will be accepted, but those already in queue will be flushed. */
            STATE_CLOSING = 2,
            
            /** The channel was closed, or connection failed. */
            STATE_CLOSED = 3,
        }
    }
    /** @link https://docs.godotengine.org/en/4.2/classes/class_webrtcdatachannel.html */
    class WebRTCDataChannel extends PacketPeer {
        constructor(identifier?: any)
        /** Reserved, but not used for now. */
        poll(): GodotError
        
        /** Closes this data channel, notifying the other peer. */
        close(): void
        
        /** Returns `true` if the last received packet was transferred as text. See [member write_mode]. */
        was_string_packet(): boolean
        set_write_mode(write_mode: WebRTCDataChannel.WriteMode): void
        get_write_mode(): WebRTCDataChannel.WriteMode
        
        /** Returns the current state of this channel, see [enum ChannelState]. */
        get_ready_state(): WebRTCDataChannel.ChannelState
        
        /** Returns the label assigned to this channel during creation. */
        get_label(): string
        
        /** Returns `true` if this channel was created with ordering enabled (default). */
        is_ordered(): boolean
        
        /** Returns the ID assigned to this channel during creation (or auto-assigned during negotiation).  
         *  If the channel is not negotiated out-of-band the ID will only be available after the connection is established (will return `65535` until then).  
         */
        get_id(): number /*i64*/
        
        /** Returns the `maxPacketLifeTime` value assigned to this channel during creation.  
         *  Will be `65535` if not specified.  
         */
        get_max_packet_life_time(): number /*i64*/
        
        /** Returns the `maxRetransmits` value assigned to this channel during creation.  
         *  Will be `65535` if not specified.  
         */
        get_max_retransmits(): number /*i64*/
        
        /** Returns the sub-protocol assigned to this channel during creation. An empty string if not specified. */
        get_protocol(): string
        
        /** Returns `true` if this channel was created with out-of-band configuration. */
        is_negotiated(): boolean
        
        /** Returns the number of bytes currently queued to be sent over this channel. */
        get_buffered_amount(): number /*i64*/
        
        /** The transfer mode to use when sending outgoing packet. Either text or binary. */
        get write_mode(): number /*i64*/
        set write_mode(value: number /*i64*/)
    }
    /** @link https://docs.godotengine.org/en/4.2/classes/class_webrtcdatachannelextension.html */
    class WebRTCDataChannelExtension extends WebRTCDataChannel {
        constructor(identifier?: any)
        /* gdvirtual */ _get_packet(r_buffer: number /*i64*/, r_buffer_size: number /*i64*/): GodotError
        /* gdvirtual */ _put_packet(p_buffer: number /*i64*/, p_buffer_size: number /*i64*/): GodotError
        /* gdvirtual */ _get_available_packet_count(): number /*i64*/
        /* gdvirtual */ _get_max_packet_size(): number /*i64*/
        /* gdvirtual */ _poll(): GodotError
        /* gdvirtual */ _close(): void
        /* gdvirtual */ _set_write_mode(p_write_mode: WebRTCDataChannel.WriteMode): void
        /* gdvirtual */ _get_write_mode(): WebRTCDataChannel.WriteMode
        /* gdvirtual */ _was_string_packet(): boolean
        /* gdvirtual */ _get_ready_state(): WebRTCDataChannel.ChannelState
        /* gdvirtual */ _get_label(): string
        /* gdvirtual */ _is_ordered(): boolean
        /* gdvirtual */ _get_id(): number /*i64*/
        /* gdvirtual */ _get_max_packet_life_time(): number /*i64*/
        /* gdvirtual */ _get_max_retransmits(): number /*i64*/
        /* gdvirtual */ _get_protocol(): string
        /* gdvirtual */ _is_negotiated(): boolean
        /* gdvirtual */ _get_buffered_amount(): number /*i64*/
    }
    /** A simple interface to create a peer-to-peer mesh network composed of [WebRTCPeerConnection] that is compatible with the [MultiplayerAPI].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_webrtcmultiplayerpeer.html  
     */
    class WebRTCMultiplayerPeer extends MultiplayerPeer {
        constructor(identifier?: any)
        /** Initialize the multiplayer peer as a server (with unique ID of `1`). This mode enables [method MultiplayerPeer.is_server_relay_supported], allowing the upper [MultiplayerAPI] layer to perform peer exchange and packet relaying.  
         *  You can optionally specify a [param channels_config] array of [enum MultiplayerPeer.TransferMode] which will be used to create extra channels (WebRTC only supports one transfer mode per channel).  
         */
        create_server(channels_config: Array = <any> {} /*compound.type from 28([object Object])*/): GodotError
        
        /** Initialize the multiplayer peer as a client with the given [param peer_id] (must be between 2 and 2147483647). In this mode, you should only call [method add_peer] once and with [param peer_id] of `1`. This mode enables [method MultiplayerPeer.is_server_relay_supported], allowing the upper [MultiplayerAPI] layer to perform peer exchange and packet relaying.  
         *  You can optionally specify a [param channels_config] array of [enum MultiplayerPeer.TransferMode] which will be used to create extra channels (WebRTC only supports one transfer mode per channel).  
         */
        create_client(peer_id: number /*i64*/, channels_config: Array = <any> {} /*compound.type from 28([object Object])*/): GodotError
        
        /** Initialize the multiplayer peer as a mesh (i.e. all peers connect to each other) with the given [param peer_id] (must be between 1 and 2147483647). */
        create_mesh(peer_id: number /*i64*/, channels_config: Array = <any> {} /*compound.type from 28([object Object])*/): GodotError
        
        /** Add a new peer to the mesh with the given [param peer_id]. The [WebRTCPeerConnection] must be in state [constant WebRTCPeerConnection.STATE_NEW].  
         *  Three channels will be created for reliable, unreliable, and ordered transport. The value of [param unreliable_lifetime] will be passed to the `"maxPacketLifetime"` option when creating unreliable and ordered channels (see [method WebRTCPeerConnection.create_data_channel]).  
         */
        add_peer(peer: WebRTCPeerConnection, peer_id: number /*i64*/, unreliable_lifetime: number /*i64*/ = 1): GodotError
        
        /** Remove the peer with given [param peer_id] from the mesh. If the peer was connected, and [signal MultiplayerPeer.peer_connected] was emitted for it, then [signal MultiplayerPeer.peer_disconnected] will be emitted. */
        remove_peer(peer_id: number /*i64*/): void
        
        /** Returns `true` if the given [param peer_id] is in the peers map (it might not be connected though). */
        has_peer(peer_id: number /*i64*/): boolean
        
        /** Returns a dictionary representation of the peer with given [param peer_id] with three keys. `"connection"` containing the [WebRTCPeerConnection] to this peer, `"channels"` an array of three [WebRTCDataChannel], and `"connected"` a boolean representing if the peer connection is currently connected (all three channels are open). */
        get_peer(peer_id: number /*i64*/): Dictionary
        
        /** Returns a dictionary which keys are the peer ids and values the peer representation as in [method get_peer]. */
        get_peers(): Dictionary
    }
    namespace WebRTCPeerConnection {
        enum ConnectionState {
            /** The connection is new, data channels and an offer can be created in this state. */
            STATE_NEW = 0,
            
            /** The peer is connecting, ICE is in progress, none of the transports has failed. */
            STATE_CONNECTING = 1,
            
            /** The peer is connected, all ICE transports are connected. */
            STATE_CONNECTED = 2,
            
            /** At least one ICE transport is disconnected. */
            STATE_DISCONNECTED = 3,
            
            /** One or more of the ICE transports failed. */
            STATE_FAILED = 4,
            
            /** The peer connection is closed (after calling [method close] for example). */
            STATE_CLOSED = 5,
        }
        enum GatheringState {
            /** The peer connection was just created and hasn't done any networking yet. */
            GATHERING_STATE_NEW = 0,
            
            /** The ICE agent is in the process of gathering candidates for the connection. */
            GATHERING_STATE_GATHERING = 1,
            
            /** The ICE agent has finished gathering candidates. If something happens that requires collecting new candidates, such as a new interface being added or the addition of a new ICE server, the state will revert to gathering to gather those candidates. */
            GATHERING_STATE_COMPLETE = 2,
        }
        enum SignalingState {
            /** There is no ongoing exchange of offer and answer underway. This may mean that the [WebRTCPeerConnection] is new ([constant STATE_NEW]) or that negotiation is complete and a connection has been established ([constant STATE_CONNECTED]). */
            SIGNALING_STATE_STABLE = 0,
            
            /** The local peer has called [method set_local_description], passing in SDP representing an offer (usually created by calling [method create_offer]), and the offer has been applied successfully. */
            SIGNALING_STATE_HAVE_LOCAL_OFFER = 1,
            
            /** The remote peer has created an offer and used the signaling server to deliver it to the local peer, which has set the offer as the remote description by calling [method set_remote_description]. */
            SIGNALING_STATE_HAVE_REMOTE_OFFER = 2,
            
            /** The offer sent by the remote peer has been applied and an answer has been created and applied by calling [method set_local_description]. This provisional answer describes the supported media formats and so forth, but may not have a complete set of ICE candidates included. Further candidates will be delivered separately later. */
            SIGNALING_STATE_HAVE_LOCAL_PRANSWER = 3,
            
            /** A provisional answer has been received and successfully applied in response to an offer previously sent and established by calling [method set_local_description]. */
            SIGNALING_STATE_HAVE_REMOTE_PRANSWER = 4,
            
            /** The [WebRTCPeerConnection] has been closed. */
            SIGNALING_STATE_CLOSED = 5,
        }
    }
    /** Interface to a WebRTC peer connection.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_webrtcpeerconnection.html  
     */
    class WebRTCPeerConnection extends RefCounted {
        constructor(identifier?: any)
        /** Sets the [param extension_class] as the default [WebRTCPeerConnectionExtension] returned when creating a new [WebRTCPeerConnection]. */
        static set_default_extension(extension_class: StringName): void
        
        /** Re-initialize this peer connection, closing any previously active connection, and going back to state [constant STATE_NEW]. A dictionary of [param configuration] options can be passed to configure the peer connection.  
         *  Valid [param configuration] options are:  
         *    
         */
        initialize(configuration: Dictionary = <any> {} /*compound.type from 27([object Object])*/): GodotError
        
        /** Returns a new [WebRTCDataChannel] (or `null` on failure) with given [param label] and optionally configured via the [param options] dictionary. This method can only be called when the connection is in state [constant STATE_NEW].  
         *  There are two ways to create a working data channel: either call [method create_data_channel] on only one of the peer and listen to [signal data_channel_received] on the other, or call [method create_data_channel] on both peers, with the same values, and the `"negotiated"` option set to `true`.  
         *  Valid [param options] are:  
         *    
         *      
         *  **Note:** You must keep a reference to channels created this way, or it will be closed.  
         */
        create_data_channel(label: string, options: Dictionary = <any> {} /*compound.type from 27([object Object])*/): WebRTCDataChannel
        
        /** Creates a new SDP offer to start a WebRTC connection with a remote peer. At least one [WebRTCDataChannel] must have been created before calling this method.  
         *  If this functions returns [constant OK], [signal session_description_created] will be called when the session is ready to be sent.  
         */
        create_offer(): GodotError
        
        /** Sets the SDP description of the local peer. This should be called in response to [signal session_description_created].  
         *  After calling this function the peer will start emitting [signal ice_candidate_created] (unless an [enum Error] different from [constant OK] is returned).  
         */
        set_local_description(type: string, sdp: string): GodotError
        
        /** Sets the SDP description of the remote peer. This should be called with the values generated by a remote peer and received over the signaling server.  
         *  If [param type] is `"offer"` the peer will emit [signal session_description_created] with the appropriate answer.  
         *  If [param type] is `"answer"` the peer will start emitting [signal ice_candidate_created].  
         */
        set_remote_description(type: string, sdp: string): GodotError
        
        /** Add an ice candidate generated by a remote peer (and received over the signaling server). See [signal ice_candidate_created]. */
        add_ice_candidate(media: string, index: number /*i64*/, name: string): GodotError
        
        /** Call this method frequently (e.g. in [method Node._process] or [method Node._physics_process]) to properly receive signals. */
        poll(): GodotError
        
        /** Close the peer connection and all data channels associated with it.  
         *      
         *  **Note:** You cannot reuse this object for a new connection unless you call [method initialize].  
         */
        close(): void
        
        /** Returns the connection state. See [enum ConnectionState]. */
        get_connection_state(): WebRTCPeerConnection.ConnectionState
        
        /** Returns the ICE [enum GatheringState] of the connection. This lets you detect, for example, when collection of ICE candidates has finished. */
        get_gathering_state(): WebRTCPeerConnection.GatheringState
        
        /** Returns the [enum SignalingState] on the local end of the connection while connecting or reconnecting to another peer. */
        get_signaling_state(): WebRTCPeerConnection.SignalingState
        
        /** Emitted after a successful call to [method create_offer] or [method set_remote_description] (when it generates an answer). The parameters are meant to be passed to [method set_local_description] on this object, and sent to the remote peer over the signaling server. */
        readonly session_description_created: Signal // type: string, sdp: string => void
        
        /** Emitted when a new ICE candidate has been created. The three parameters are meant to be passed to the remote peer over the signaling server. */
        readonly ice_candidate_created: Signal // media: string, index: number /*i64*/, name: string => void
        
        /** Emitted when a new in-band channel is received, i.e. when the channel was created with `negotiated: false` (default).  
         *  The object will be an instance of [WebRTCDataChannel]. You must keep a reference of it or it will be closed automatically. See [method create_data_channel].  
         */
        readonly data_channel_received: Signal // channel: WebRTCDataChannel => void
    }
    /** @link https://docs.godotengine.org/en/4.2/classes/class_webrtcpeerconnectionextension.html */
    class WebRTCPeerConnectionExtension extends WebRTCPeerConnection {
        constructor(identifier?: any)
        /* gdvirtual */ _get_connection_state(): WebRTCPeerConnection.ConnectionState
        /* gdvirtual */ _get_gathering_state(): WebRTCPeerConnection.GatheringState
        /* gdvirtual */ _get_signaling_state(): WebRTCPeerConnection.SignalingState
        /* gdvirtual */ _initialize(p_config: Dictionary): GodotError
        /* gdvirtual */ _create_data_channel(p_label: string, p_config: Dictionary): WebRTCDataChannel
        /* gdvirtual */ _create_offer(): GodotError
        /* gdvirtual */ _set_remote_description(p_type: string, p_sdp: string): GodotError
        /* gdvirtual */ _set_local_description(p_type: string, p_sdp: string): GodotError
        /* gdvirtual */ _add_ice_candidate(p_sdp_mid_name: string, p_sdp_mline_index: number /*i64*/, p_sdp_name: string): GodotError
        /* gdvirtual */ _poll(): GodotError
        /* gdvirtual */ _close(): void
    }
    namespace WebXRInterface {
        enum TargetRayMode {
            /** We don't know the the target ray mode. */
            TARGET_RAY_MODE_UNKNOWN = 0,
            
            /** Target ray originates at the viewer's eyes and points in the direction they are looking. */
            TARGET_RAY_MODE_GAZE = 1,
            
            /** Target ray from a handheld pointer, most likely a VR touch controller. */
            TARGET_RAY_MODE_TRACKED_POINTER = 2,
            
            /** Target ray from touch screen, mouse or other tactile input device. */
            TARGET_RAY_MODE_SCREEN = 3,
        }
    }
    /** XR interface using WebXR.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_webxrinterface.html  
     */
    class WebXRInterface extends XRInterface {
        constructor(identifier?: any)
        /** Checks if the given [param session_mode] is supported by the user's browser.  
         *  Possible values come from [url=https://developer.mozilla.org/en-US/docs/Web/API/XRSessionMode]WebXR's XRSessionMode[/url], including: `"immersive-vr"`, `"immersive-ar"`, and `"inline"`.  
         *  This method returns nothing, instead it emits the [signal session_supported] signal with the result.  
         */
        is_session_supported(session_mode: string): void
        set_session_mode(session_mode: string): void
        get_session_mode(): string
        set_required_features(required_features: string): void
        get_required_features(): string
        set_optional_features(optional_features: string): void
        get_optional_features(): string
        get_reference_space_type(): string
        set_requested_reference_space_types(requested_reference_space_types: string): void
        get_requested_reference_space_types(): string
        
        /** Returns `true` if there is an active input source with the given [param input_source_id]. */
        is_input_source_active(input_source_id: number /*i64*/): boolean
        
        /** Gets an [XRPositionalTracker] for the given [param input_source_id].  
         *  In the context of WebXR, an input source can be an advanced VR controller like the Oculus Touch or Index controllers, or even a tap on the screen, a spoken voice command or a button press on the device itself. When a non-traditional input source is used, interpret the position and orientation of the [XRPositionalTracker] as a ray pointing at the object the user wishes to interact with.  
         *  Use this method to get information about the input source that triggered one of these signals:  
         *  - [signal selectstart]  
         *  - [signal select]  
         *  - [signal selectend]  
         *  - [signal squeezestart]  
         *  - [signal squeeze]  
         *  - [signal squeezestart]  
         */
        get_input_source_tracker(input_source_id: number /*i64*/): XRPositionalTracker
        
        /** Returns the target ray mode for the given [param input_source_id].  
         *  This can help interpret the input coming from that input source. See [url=https://developer.mozilla.org/en-US/docs/Web/API/XRInputSource/targetRayMode]XRInputSource.targetRayMode[/url] for more information.  
         */
        get_input_source_target_ray_mode(input_source_id: number /*i64*/): WebXRInterface.TargetRayMode
        get_visibility_state(): string
        
        /** Returns the display refresh rate for the current HMD. Not supported on all HMDs and browsers. It may not report an accurate value until after using [method set_display_refresh_rate]. */
        get_display_refresh_rate(): number /*f64*/
        
        /** Sets the display refresh rate for the current HMD. Not supported on all HMDs and browsers. It won't take effect right away until after [signal display_refresh_rate_changed] is emitted. */
        set_display_refresh_rate(refresh_rate: number /*f64*/): void
        
        /** Returns display refresh rates supported by the current HMD. Only returned if this feature is supported by the web browser and after the interface has been initialized. */
        get_available_display_refresh_rates(): Array
        
        /** The session mode used by [method XRInterface.initialize] when setting up the WebXR session.  
         *  This doesn't have any effect on the interface when already initialized.  
         *  Possible values come from [url=https://developer.mozilla.org/en-US/docs/Web/API/XRSessionMode]WebXR's XRSessionMode[/url], including: `"immersive-vr"`, `"immersive-ar"`, and `"inline"`.  
         */
        get session_mode(): string
        set session_mode(value: string)
        
        /** A comma-seperated list of required features used by [method XRInterface.initialize] when setting up the WebXR session.  
         *  If a user's browser or device doesn't support one of the given features, initialization will fail and [signal session_failed] will be emitted.  
         *  This doesn't have any effect on the interface when already initialized.  
         *  Possible values come from [url=https://developer.mozilla.org/en-US/docs/Web/API/XRReferenceSpaceType]WebXR's XRReferenceSpaceType[/url]. If you want to use a particular reference space type, it must be listed in either [member required_features] or [member optional_features].  
         */
        get required_features(): string
        set required_features(value: string)
        
        /** A comma-seperated list of optional features used by [method XRInterface.initialize] when setting up the WebXR session.  
         *  If a user's browser or device doesn't support one of the given features, initialization will continue, but you won't be able to use the requested feature.  
         *  This doesn't have any effect on the interface when already initialized.  
         *  Possible values come from [url=https://developer.mozilla.org/en-US/docs/Web/API/XRReferenceSpaceType]WebXR's XRReferenceSpaceType[/url]. If you want to use a particular reference space type, it must be listed in either [member required_features] or [member optional_features].  
         */
        get optional_features(): string
        set optional_features(value: string)
        
        /** A comma-seperated list of reference space types used by [method XRInterface.initialize] when setting up the WebXR session.  
         *  The reference space types are requested in order, and the first one supported by the users device or browser will be used. The [member reference_space_type] property contains the reference space type that was ultimately selected.  
         *  This doesn't have any effect on the interface when already initialized.  
         *  Possible values come from [url=https://developer.mozilla.org/en-US/docs/Web/API/XRReferenceSpaceType]WebXR's XRReferenceSpaceType[/url]. If you want to use a particular reference space type, it must be listed in either [member required_features] or [member optional_features].  
         */
        get requested_reference_space_types(): string
        set requested_reference_space_types(value: string)
        
        /** The reference space type (from the list of requested types set in the [member requested_reference_space_types] property), that was ultimately used by [method XRInterface.initialize] when setting up the WebXR session.  
         *  Possible values come from [url=https://developer.mozilla.org/en-US/docs/Web/API/XRReferenceSpaceType]WebXR's XRReferenceSpaceType[/url]. If you want to use a particular reference space type, it must be listed in either [member required_features] or [member optional_features].  
         */
        get reference_space_type(): string
        
        /** Indicates if the WebXR session's imagery is visible to the user.  
         *  Possible values come from [url=https://developer.mozilla.org/en-US/docs/Web/API/XRVisibilityState]WebXR's XRVisibilityState[/url], including `"hidden"`, `"visible"`, and `"visible-blurred"`.  
         */
        get visibility_state(): string
        
        /** Emitted by [method is_session_supported] to indicate if the given [param session_mode] is supported or not. */
        readonly session_supported: Signal // session_mode: string, supported: boolean => void
        
        /** Emitted by [method XRInterface.initialize] if the session is successfully started.  
         *  At this point, it's safe to do `get_viewport().use_xr = true` to instruct Godot to start rendering to the XR device.  
         */
        readonly session_started: Signal //  => void
        
        /** Emitted when the user ends the WebXR session (which can be done using UI from the browser or device).  
         *  At this point, you should do `get_viewport().use_xr = false` to instruct Godot to resume rendering to the screen.  
         */
        readonly session_ended: Signal //  => void
        
        /** Emitted by [method XRInterface.initialize] if the session fails to start.  
         *  [param message] may optionally contain an error message from WebXR, or an empty string if no message is available.  
         */
        readonly session_failed: Signal // message: string => void
        
        /** Emitted when one of the input source has started its "primary action".  
         *  Use [method get_input_source_tracker] and [method get_input_source_target_ray_mode] to get more information about the input source.  
         */
        readonly selectstart: Signal // input_source_id: number /*i64*/ => void
        
        /** Emitted after one of the input sources has finished its "primary action".  
         *  Use [method get_input_source_tracker] and [method get_input_source_target_ray_mode] to get more information about the input source.  
         */
        readonly select: Signal // input_source_id: number /*i64*/ => void
        
        /** Emitted when one of the input sources has finished its "primary action".  
         *  Use [method get_input_source_tracker] and [method get_input_source_target_ray_mode] to get more information about the input source.  
         */
        readonly selectend: Signal // input_source_id: number /*i64*/ => void
        
        /** Emitted when one of the input sources has started its "primary squeeze action".  
         *  Use [method get_input_source_tracker] and [method get_input_source_target_ray_mode] to get more information about the input source.  
         */
        readonly squeezestart: Signal // input_source_id: number /*i64*/ => void
        
        /** Emitted after one of the input sources has finished its "primary squeeze action".  
         *  Use [method get_input_source_tracker] and [method get_input_source_target_ray_mode] to get more information about the input source.  
         */
        readonly squeeze: Signal // input_source_id: number /*i64*/ => void
        
        /** Emitted when one of the input sources has finished its "primary squeeze action".  
         *  Use [method get_input_source_tracker] and [method get_input_source_target_ray_mode] to get more information about the input source.  
         */
        readonly squeezeend: Signal // input_source_id: number /*i64*/ => void
        
        /** Emitted when [member visibility_state] has changed. */
        readonly visibility_state_changed: Signal //  => void
        
        /** Emitted to indicate that the reference space has been reset or reconfigured.  
         *  When (or whether) this is emitted depends on the user's browser or device, but may include when the user has changed the dimensions of their play space (which you may be able to access via [method XRInterface.get_play_area]) or pressed/held a button to recenter their position.  
         *  See [url=https://developer.mozilla.org/en-US/docs/Web/API/XRReferenceSpace/reset_event]WebXR's XRReferenceSpace reset event[/url] for more information.  
         */
        readonly reference_space_reset: Signal //  => void
        
        /** Emitted after the display's refresh rate has changed. */
        readonly display_refresh_rate_changed: Signal //  => void
    }
    namespace Window {
        enum Mode {
            /** Windowed mode, i.e. [Window] doesn't occupy the whole screen (unless set to the size of the screen). */
            MODE_WINDOWED = 0,
            
            /** Minimized window mode, i.e. [Window] is not visible and available on window manager's window list. Normally happens when the minimize button is pressed. */
            MODE_MINIMIZED = 1,
            
            /** Maximized window mode, i.e. [Window] will occupy whole screen area except task bar and still display its borders. Normally happens when the maximize button is pressed. */
            MODE_MAXIMIZED = 2,
            
            /** Full screen mode with full multi-window support.  
             *  Full screen window covers the entire display area of a screen and has no decorations. The display's video mode is not changed.  
             *  **On Windows:** Multi-window full-screen mode has a 1px border of the [member ProjectSettings.rendering/environment/defaults/default_clear_color] color.  
             *  **On macOS:** A new desktop is used to display the running project.  
             *      
             *  **Note:** Regardless of the platform, enabling full screen will change the window size to match the monitor's size. Therefore, make sure your project supports [url=$DOCS_URL/tutorials/rendering/multiple_resolutions.html]multiple resolutions[/url] when enabling full screen mode.  
             */
            MODE_FULLSCREEN = 3,
            
            /** A single window full screen mode. This mode has less overhead, but only one window can be open on a given screen at a time (opening a child window or application switching will trigger a full screen transition).  
             *  Full screen window covers the entire display area of a screen and has no border or decorations. The display's video mode is not changed.  
             *  **On Windows:** Depending on video driver, full screen transition might cause screens to go black for a moment.  
             *  **On macOS:** A new desktop is used to display the running project. Exclusive full screen mode prevents Dock and Menu from showing up when the mouse pointer is hovering the edge of the screen.  
             *  **On Linux (X11):** Exclusive full screen mode bypasses compositor.  
             *      
             *  **Note:** Regardless of the platform, enabling full screen will change the window size to match the monitor's size. Therefore, make sure your project supports [url=$DOCS_URL/tutorials/rendering/multiple_resolutions.html]multiple resolutions[/url] when enabling full screen mode.  
             */
            MODE_EXCLUSIVE_FULLSCREEN = 4,
        }
        enum Flags {
            /** The window can't be resized by dragging its resize grip. It's still possible to resize the window using [member size]. This flag is ignored for full screen windows. Set with [member unresizable]. */
            FLAG_RESIZE_DISABLED = 0,
            
            /** The window do not have native title bar and other decorations. This flag is ignored for full-screen windows. Set with [member borderless]. */
            FLAG_BORDERLESS = 1,
            
            /** The window is floating on top of all other windows. This flag is ignored for full-screen windows. Set with [member always_on_top]. */
            FLAG_ALWAYS_ON_TOP = 2,
            
            /** The window background can be transparent. Set with [member transparent].  
             *      
             *  **Note:** This flag has no effect if either [member ProjectSettings.display/window/per_pixel_transparency/allowed], or the window's [member Viewport.transparent_bg] is set to `false`.  
             */
            FLAG_TRANSPARENT = 3,
            
            /** The window can't be focused. No-focus window will ignore all input, except mouse clicks. Set with [member unfocusable]. */
            FLAG_NO_FOCUS = 4,
            
            /** Window is part of menu or [OptionButton] dropdown. This flag can't be changed when the window is visible. An active popup window will exclusively receive all input, without stealing focus from its parent. Popup windows are automatically closed when uses click outside it, or when an application is switched. Popup window must have transient parent set (see [member transient]).  
             *      
             *  **Note:** This flag has no effect in embedded windows (unless said window is a [Popup]).  
             */
            FLAG_POPUP = 5,
            
            /** Window content is expanded to the full size of the window. Unlike borderless window, the frame is left intact and can be used to resize the window, title bar is transparent, but have minimize/maximize/close buttons. Set with [member extend_to_title].  
             *      
             *  **Note:** This flag is implemented only on macOS.  
             *      
             *  **Note:** This flag has no effect in embedded windows.  
             */
            FLAG_EXTEND_TO_TITLE = 6,
            
            /** All mouse events are passed to the underlying window of the same application.  
             *      
             *  **Note:** This flag has no effect in embedded windows.  
             */
            FLAG_MOUSE_PASSTHROUGH = 7,
            
            /** Max value of the [enum Flags]. */
            FLAG_MAX = 8,
        }
        enum ContentScaleMode {
            /** The content will not be scaled to match the [Window]'s size. */
            CONTENT_SCALE_MODE_DISABLED = 0,
            
            /** The content will be rendered at the target size. This is more performance-expensive than [constant CONTENT_SCALE_MODE_VIEWPORT], but provides better results. */
            CONTENT_SCALE_MODE_CANVAS_ITEMS = 1,
            
            /** The content will be rendered at the base size and then scaled to the target size. More performant than [constant CONTENT_SCALE_MODE_CANVAS_ITEMS], but results in pixelated image. */
            CONTENT_SCALE_MODE_VIEWPORT = 2,
        }
        enum ContentScaleAspect {
            /** The aspect will be ignored. Scaling will simply stretch the content to fit the target size. */
            CONTENT_SCALE_ASPECT_IGNORE = 0,
            
            /** The content's aspect will be preserved. If the target size has different aspect from the base one, the image will be centered and black bars will appear on left and right sides. */
            CONTENT_SCALE_ASPECT_KEEP = 1,
            
            /** The content can be expanded vertically. Scaling horizontally will result in keeping the width ratio and then black bars on left and right sides. */
            CONTENT_SCALE_ASPECT_KEEP_WIDTH = 2,
            
            /** The content can be expanded horizontally. Scaling vertically will result in keeping the height ratio and then black bars on top and bottom sides. */
            CONTENT_SCALE_ASPECT_KEEP_HEIGHT = 3,
            
            /** The content's aspect will be preserved. If the target size has different aspect from the base one, the content will stay in the top-left corner and add an extra visible area in the stretched space. */
            CONTENT_SCALE_ASPECT_EXPAND = 4,
        }
        enum ContentScaleStretch {
            /** The content will be stretched according to a fractional factor. This fills all the space available in the window, but allows "pixel wobble" to occur due to uneven pixel scaling. */
            CONTENT_SCALE_STRETCH_FRACTIONAL = 0,
            
            /** The content will be stretched only according to an integer factor, preserving sharp pixels. This may leave a black background visible on the window's edges depending on the window size. */
            CONTENT_SCALE_STRETCH_INTEGER = 1,
        }
        enum LayoutDirection {
            /** Automatic layout direction, determined from the parent window layout direction. */
            LAYOUT_DIRECTION_INHERITED = 0,
            
            /** Automatic layout direction, determined from the current locale. */
            LAYOUT_DIRECTION_LOCALE = 1,
            
            /** Left-to-right layout direction. */
            LAYOUT_DIRECTION_LTR = 2,
            
            /** Right-to-left layout direction. */
            LAYOUT_DIRECTION_RTL = 3,
        }
        enum WindowInitialPosition {
            /** Initial window position is determined by [member position]. */
            WINDOW_INITIAL_POSITION_ABSOLUTE = 0,
            
            /** Initial window position is the center of the primary screen. */
            WINDOW_INITIAL_POSITION_CENTER_PRIMARY_SCREEN = 1,
            
            /** Initial window position is the center of the main window screen. */
            WINDOW_INITIAL_POSITION_CENTER_MAIN_WINDOW_SCREEN = 2,
            
            /** Initial window position is the center of [member current_screen] screen. */
            WINDOW_INITIAL_POSITION_CENTER_OTHER_SCREEN = 3,
            
            /** Initial window position is the center of the screen containing the mouse pointer. */
            WINDOW_INITIAL_POSITION_CENTER_SCREEN_WITH_MOUSE_FOCUS = 4,
            
            /** Initial window position is the center of the screen containing the window with the keyboard focus. */
            WINDOW_INITIAL_POSITION_CENTER_SCREEN_WITH_KEYBOARD_FOCUS = 5,
        }
    }
    /** Base class for all windows, dialogs, and popups.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_window.html  
     */
    class Window extends Viewport {
        /** Emitted when [Window]'s visibility changes, right before [signal visibility_changed]. */
        static readonly NOTIFICATION_VISIBILITY_CHANGED = 30
        
        /** Sent when the node needs to refresh its theme items. This happens in one of the following cases:  
         *  - The [member theme] property is changed on this node or any of its ancestors.  
         *  - The [member theme_type_variation] property is changed on this node.  
         *  - The node enters the scene tree.  
         *      
         *  **Note:** As an optimization, this notification won't be sent from changes that occur while this node is outside of the scene tree. Instead, all of the theme item updates can be applied at once when the node enters the scene tree.  
         */
        static readonly NOTIFICATION_THEME_CHANGED = 32
        constructor(identifier?: any)
        
        /** Virtual method to be implemented by the user. Overrides the value returned by [method get_contents_minimum_size]. */
        /* gdvirtual */ _get_contents_minimum_size(): Vector2
        set_title(title: string): void
        get_title(): string
        
        /** Returns the ID of the window. */
        get_window_id(): number /*i64*/
        set_initial_position(initial_position: Window.WindowInitialPosition): void
        get_initial_position(): Window.WindowInitialPosition
        set_current_screen(index: number /*i64*/): void
        get_current_screen(): number /*i64*/
        set_position(position: Vector2i): void
        get_position(): Vector2i
        
        /** Centers a native window on the current screen and an embedded window on its embedder [Viewport]. */
        move_to_center(): void
        set_size(size: Vector2i): void
        get_size(): Vector2i
        
        /** Resets the size to the minimum size, which is the max of [member min_size] and (if [member wrap_controls] is enabled) [method get_contents_minimum_size]. This is equivalent to calling `set_size(Vector2i())` (or any size below the minimum). */
        reset_size(): void
        
        /** Returns the window's position including its border. */
        get_position_with_decorations(): Vector2i
        
        /** Returns the window's size including its border. */
        get_size_with_decorations(): Vector2i
        set_max_size(max_size: Vector2i): void
        get_max_size(): Vector2i
        set_min_size(min_size: Vector2i): void
        get_min_size(): Vector2i
        set_mode(mode: Window.Mode): void
        get_mode(): Window.Mode
        
        /** Sets a specified window flag. */
        set_flag(flag: Window.Flags, enabled: boolean): void
        
        /** Returns `true` if the [param flag] is set. */
        get_flag(flag: Window.Flags): boolean
        
        /** Returns `true` if the window can be maximized (the maximize button is enabled). */
        is_maximize_allowed(): boolean
        
        /** Tells the OS that the [Window] needs an attention. This makes the window stand out in some way depending on the system, e.g. it might blink on the task bar. */
        request_attention(): void
        
        /** Moves the [Window] on top of other windows and focuses it. */
        move_to_foreground(): void
        set_visible(visible: boolean): void
        is_visible(): boolean
        
        /** Hides the window. This is not the same as minimized state. Hidden window can't be interacted with and needs to be made visible with [method show]. */
        hide(): void
        
        /** Makes the [Window] appear. This enables interactions with the [Window] and doesn't change any of its property other than visibility (unlike e.g. [method popup]). */
        show(): void
        set_transient(transient: boolean): void
        is_transient(): boolean
        set_exclusive(exclusive: boolean): void
        is_exclusive(): boolean
        
        /** If [param unparent] is `true`, the window is automatically unparented when going invisible.  
         *      
         *  **Note:** Make sure to keep a reference to the node, otherwise it will be orphaned. You also need to manually call [method Node.queue_free] to free the window if it's not parented.  
         */
        set_unparent_when_invisible(unparent: boolean): void
        
        /** Returns whether the window is being drawn to the screen. */
        can_draw(): boolean
        
        /** Returns `true` if the window is focused. */
        has_focus(): boolean
        
        /** Causes the window to grab focus, allowing it to receive user input. */
        grab_focus(): void
        
        /** If [param active] is `true`, enables system's native IME (Input Method Editor). */
        set_ime_active(active: boolean): void
        
        /** Moves IME to the given position. */
        set_ime_position(position: Vector2i): void
        
        /** Returns `true` if the window is currently embedded in another window. */
        is_embedded(): boolean
        
        /** Returns the combined minimum size from the child [Control] nodes of the window. Use [method child_controls_changed] to update it when child nodes have changed.  
         *  The value returned by this method can be overridden with [method _get_contents_minimum_size].  
         */
        get_contents_minimum_size(): Vector2
        set_content_scale_size(size: Vector2i): void
        get_content_scale_size(): Vector2i
        set_content_scale_mode(mode: Window.ContentScaleMode): void
        get_content_scale_mode(): Window.ContentScaleMode
        set_content_scale_aspect(aspect: Window.ContentScaleAspect): void
        get_content_scale_aspect(): Window.ContentScaleAspect
        set_content_scale_stretch(stretch: Window.ContentScaleStretch): void
        get_content_scale_stretch(): Window.ContentScaleStretch
        set_keep_title_visible(title_visible: boolean): void
        get_keep_title_visible(): boolean
        set_content_scale_factor(factor: number /*f64*/): void
        get_content_scale_factor(): number /*f64*/
        
        /** Enables font oversampling. This makes fonts look better when they are scaled up. */
        set_use_font_oversampling(enable: boolean): void
        
        /** Returns `true` if font oversampling is enabled. See [method set_use_font_oversampling]. */
        is_using_font_oversampling(): boolean
        set_mouse_passthrough_polygon(polygon: PackedVector2Array): void
        get_mouse_passthrough_polygon(): PackedVector2Array
        set_wrap_controls(enable: boolean): void
        is_wrapping_controls(): boolean
        
        /** Requests an update of the [Window] size to fit underlying [Control] nodes. */
        child_controls_changed(): void
        _update_child_controls(): void
        _update_embedded_window(): void
        set_theme(theme: Theme): void
        get_theme(): Theme
        set_theme_type_variation(theme_type: StringName): void
        get_theme_type_variation(): StringName
        
        /** Prevents `*_theme_*_override` methods from emitting [constant NOTIFICATION_THEME_CHANGED] until [method end_bulk_theme_override] is called. */
        begin_bulk_theme_override(): void
        
        /** Ends a bulk theme override update. See [method begin_bulk_theme_override]. */
        end_bulk_theme_override(): void
        
        /** Creates a local override for a theme icon with the specified [param name]. Local overrides always take precedence when fetching theme items for the control. An override can be removed with [method remove_theme_icon_override].  
         *  See also [method get_theme_icon].  
         */
        add_theme_icon_override(name: StringName, texture: Texture2D): void
        
        /** Creates a local override for a theme [StyleBox] with the specified [param name]. Local overrides always take precedence when fetching theme items for the control. An override can be removed with [method remove_theme_stylebox_override].  
         *  See also [method get_theme_stylebox] and [method Control.add_theme_stylebox_override] for more details.  
         */
        add_theme_stylebox_override(name: StringName, stylebox: StyleBox): void
        
        /** Creates a local override for a theme [Font] with the specified [param name]. Local overrides always take precedence when fetching theme items for the control. An override can be removed with [method remove_theme_font_override].  
         *  See also [method get_theme_font].  
         */
        add_theme_font_override(name: StringName, font: Font): void
        
        /** Creates a local override for a theme font size with the specified [param name]. Local overrides always take precedence when fetching theme items for the control. An override can be removed with [method remove_theme_font_size_override].  
         *  See also [method get_theme_font_size].  
         */
        add_theme_font_size_override(name: StringName, font_size: number /*i64*/): void
        
        /** Creates a local override for a theme [Color] with the specified [param name]. Local overrides always take precedence when fetching theme items for the control. An override can be removed with [method remove_theme_color_override].  
         *  See also [method get_theme_color] and [method Control.add_theme_color_override] for more details.  
         */
        add_theme_color_override(name: StringName, color: Color): void
        
        /** Creates a local override for a theme constant with the specified [param name]. Local overrides always take precedence when fetching theme items for the control. An override can be removed with [method remove_theme_constant_override].  
         *  See also [method get_theme_constant].  
         */
        add_theme_constant_override(name: StringName, constant: number /*i64*/): void
        
        /** Removes a local override for a theme icon with the specified [param name] previously added by [method add_theme_icon_override] or via the Inspector dock. */
        remove_theme_icon_override(name: StringName): void
        
        /** Removes a local override for a theme [StyleBox] with the specified [param name] previously added by [method add_theme_stylebox_override] or via the Inspector dock. */
        remove_theme_stylebox_override(name: StringName): void
        
        /** Removes a local override for a theme [Font] with the specified [param name] previously added by [method add_theme_font_override] or via the Inspector dock. */
        remove_theme_font_override(name: StringName): void
        
        /** Removes a local override for a theme font size with the specified [param name] previously added by [method add_theme_font_size_override] or via the Inspector dock. */
        remove_theme_font_size_override(name: StringName): void
        
        /** Removes a local override for a theme [Color] with the specified [param name] previously added by [method add_theme_color_override] or via the Inspector dock. */
        remove_theme_color_override(name: StringName): void
        
        /** Removes a local override for a theme constant with the specified [param name] previously added by [method add_theme_constant_override] or via the Inspector dock. */
        remove_theme_constant_override(name: StringName): void
        
        /** Returns an icon from the first matching [Theme] in the tree if that [Theme] has an icon item with the specified [param name] and [param theme_type].  
         *  See [method Control.get_theme_color] for details.  
         */
        get_theme_icon(name: StringName, theme_type: StringName = ''): Texture2D
        
        /** Returns a [StyleBox] from the first matching [Theme] in the tree if that [Theme] has a stylebox item with the specified [param name] and [param theme_type].  
         *  See [method Control.get_theme_color] for details.  
         */
        get_theme_stylebox(name: StringName, theme_type: StringName = ''): StyleBox
        
        /** Returns a [Font] from the first matching [Theme] in the tree if that [Theme] has a font item with the specified [param name] and [param theme_type].  
         *  See [method Control.get_theme_color] for details.  
         */
        get_theme_font(name: StringName, theme_type: StringName = ''): Font
        
        /** Returns a font size from the first matching [Theme] in the tree if that [Theme] has a font size item with the specified [param name] and [param theme_type].  
         *  See [method Control.get_theme_color] for details.  
         */
        get_theme_font_size(name: StringName, theme_type: StringName = ''): number /*i64*/
        
        /** Returns a [Color] from the first matching [Theme] in the tree if that [Theme] has a color item with the specified [param name] and [param theme_type].  
         *  See [method Control.get_theme_color] for more details.  
         */
        get_theme_color(name: StringName, theme_type: StringName = ''): Color
        
        /** Returns a constant from the first matching [Theme] in the tree if that [Theme] has a constant item with the specified [param name] and [param theme_type].  
         *  See [method Control.get_theme_color] for more details.  
         */
        get_theme_constant(name: StringName, theme_type: StringName = ''): number /*i64*/
        
        /** Returns `true` if there is a local override for a theme icon with the specified [param name] in this [Control] node.  
         *  See [method add_theme_icon_override].  
         */
        has_theme_icon_override(name: StringName): boolean
        
        /** Returns `true` if there is a local override for a theme [StyleBox] with the specified [param name] in this [Control] node.  
         *  See [method add_theme_stylebox_override].  
         */
        has_theme_stylebox_override(name: StringName): boolean
        
        /** Returns `true` if there is a local override for a theme [Font] with the specified [param name] in this [Control] node.  
         *  See [method add_theme_font_override].  
         */
        has_theme_font_override(name: StringName): boolean
        
        /** Returns `true` if there is a local override for a theme font size with the specified [param name] in this [Control] node.  
         *  See [method add_theme_font_size_override].  
         */
        has_theme_font_size_override(name: StringName): boolean
        
        /** Returns `true` if there is a local override for a theme [Color] with the specified [param name] in this [Control] node.  
         *  See [method add_theme_color_override].  
         */
        has_theme_color_override(name: StringName): boolean
        
        /** Returns `true` if there is a local override for a theme constant with the specified [param name] in this [Control] node.  
         *  See [method add_theme_constant_override].  
         */
        has_theme_constant_override(name: StringName): boolean
        
        /** Returns `true` if there is a matching [Theme] in the tree that has an icon item with the specified [param name] and [param theme_type].  
         *  See [method Control.get_theme_color] for details.  
         */
        has_theme_icon(name: StringName, theme_type: StringName = ''): boolean
        
        /** Returns `true` if there is a matching [Theme] in the tree that has a stylebox item with the specified [param name] and [param theme_type].  
         *  See [method Control.get_theme_color] for details.  
         */
        has_theme_stylebox(name: StringName, theme_type: StringName = ''): boolean
        
        /** Returns `true` if there is a matching [Theme] in the tree that has a font item with the specified [param name] and [param theme_type].  
         *  See [method Control.get_theme_color] for details.  
         */
        has_theme_font(name: StringName, theme_type: StringName = ''): boolean
        
        /** Returns `true` if there is a matching [Theme] in the tree that has a font size item with the specified [param name] and [param theme_type].  
         *  See [method Control.get_theme_color] for details.  
         */
        has_theme_font_size(name: StringName, theme_type: StringName = ''): boolean
        
        /** Returns `true` if there is a matching [Theme] in the tree that has a color item with the specified [param name] and [param theme_type].  
         *  See [method Control.get_theme_color] for details.  
         */
        has_theme_color(name: StringName, theme_type: StringName = ''): boolean
        
        /** Returns `true` if there is a matching [Theme] in the tree that has a constant item with the specified [param name] and [param theme_type].  
         *  See [method Control.get_theme_color] for details.  
         */
        has_theme_constant(name: StringName, theme_type: StringName = ''): boolean
        
        /** Returns the default base scale value from the first matching [Theme] in the tree if that [Theme] has a valid [member Theme.default_base_scale] value.  
         *  See [method Control.get_theme_color] for details.  
         */
        get_theme_default_base_scale(): number /*f64*/
        
        /** Returns the default font from the first matching [Theme] in the tree if that [Theme] has a valid [member Theme.default_font] value.  
         *  See [method Control.get_theme_color] for details.  
         */
        get_theme_default_font(): Font
        
        /** Returns the default font size value from the first matching [Theme] in the tree if that [Theme] has a valid [member Theme.default_font_size] value.  
         *  See [method Control.get_theme_color] for details.  
         */
        get_theme_default_font_size(): number /*i64*/
        
        /** Sets layout direction and text writing direction. Right-to-left layouts are necessary for certain languages (e.g. Arabic and Hebrew). */
        set_layout_direction(direction: Window.LayoutDirection): void
        
        /** Returns layout direction and text writing direction. */
        get_layout_direction(): Window.LayoutDirection
        
        /** Returns `true` if layout is right-to-left. */
        is_layout_rtl(): boolean
        set_auto_translate(enable: boolean): void
        is_auto_translating(): boolean
        
        /** Shows the [Window] and makes it transient (see [member transient]). If [param rect] is provided, it will be set as the [Window]'s size. Fails if called on the main window. */
        popup(rect: Rect2i = <any> {} /*compound.type from 8([object Object])*/): void
        
        /** Popups the [Window] with a position shifted by parent [Window]'s position. If the [Window] is embedded, has the same effect as [method popup]. */
        popup_on_parent(parent_rect: Rect2i): void
        
        /** Popups the [Window] at the center of the current screen, with optionally given minimum size. If the [Window] is embedded, it will be centered in the parent [Viewport] instead.  
         *      
         *  **Note:** Calling it with the default value of [param minsize] is equivalent to calling it with [member size].  
         */
        popup_centered(minsize: Vector2i = <any> {} /*compound.type from 6([object Object])*/): void
        
        /** If [Window] is embedded, popups the [Window] centered inside its embedder and sets its size as a [param ratio] of embedder's size.  
         *  If [Window] is a native window, popups the [Window] centered inside the screen of its parent [Window] and sets its size as a [param ratio] of the screen size.  
         */
        popup_centered_ratio(ratio: number /*f64*/ = 0.8): void
        
        /** Popups the [Window] centered inside its parent [Window]. [param fallback_ratio] determines the maximum size of the [Window], in relation to its parent.  
         *      
         *  **Note:** Calling it with the default value of [param minsize] is equivalent to calling it with [member size].  
         */
        popup_centered_clamped(minsize: Vector2i = <any> {} /*compound.type from 6([object Object])*/, fallback_ratio: number /*f64*/ = 0.75): void
        
        /** Attempts to parent this dialog to the last exclusive window relative to [param from_node], and then calls [method Window.popup] on it. The dialog must have no current parent, otherwise the method fails.  
         *  See also [method set_unparent_when_invisible] and [method Node.get_last_exclusive_window].  
         */
        popup_exclusive(from_node: Node, rect: Rect2i = <any> {} /*compound.type from 8([object Object])*/): void
        
        /** Attempts to parent this dialog to the last exclusive window relative to [param from_node], and then calls [method Window.popup_on_parent] on it. The dialog must have no current parent, otherwise the method fails.  
         *  See also [method set_unparent_when_invisible] and [method Node.get_last_exclusive_window].  
         */
        popup_exclusive_on_parent(from_node: Node, parent_rect: Rect2i): void
        
        /** Attempts to parent this dialog to the last exclusive window relative to [param from_node], and then calls [method Window.popup_centered] on it. The dialog must have no current parent, otherwise the method fails.  
         *  See also [method set_unparent_when_invisible] and [method Node.get_last_exclusive_window].  
         */
        popup_exclusive_centered(from_node: Node, minsize: Vector2i = <any> {} /*compound.type from 6([object Object])*/): void
        
        /** Attempts to parent this dialog to the last exclusive window relative to [param from_node], and then calls [method Window.popup_centered_ratio] on it. The dialog must have no current parent, otherwise the method fails.  
         *  See also [method set_unparent_when_invisible] and [method Node.get_last_exclusive_window].  
         */
        popup_exclusive_centered_ratio(from_node: Node, ratio: number /*f64*/ = 0.8): void
        
        /** Attempts to parent this dialog to the last exclusive window relative to [param from_node], and then calls [method Window.popup_centered_clamped] on it. The dialog must have no current parent, otherwise the method fails.  
         *  See also [method set_unparent_when_invisible] and [method Node.get_last_exclusive_window].  
         */
        popup_exclusive_centered_clamped(from_node: Node, minsize: Vector2i = <any> {} /*compound.type from 6([object Object])*/, fallback_ratio: number /*f64*/ = 0.75): void
        
        /** Set's the window's current mode.  
         *      
         *  **Note:** Fullscreen mode is not exclusive full screen on Windows and Linux.  
         *      
         *  **Note:** This method only works with native windows, i.e. the main window and [Window]-derived nodes when [member Viewport.gui_embed_subwindows] is disabled in the main viewport.  
         */
        get mode(): number /*i64*/
        set mode(value: number /*i64*/)
        
        /** The window's title. If the [Window] is native, title styles set in [Theme] will have no effect. */
        get title(): string
        set title(value: string)
        
        /** Specifies the initial type of position for the [Window]. See [enum WindowInitialPosition] constants. */
        get initial_position(): number /*i64*/
        set initial_position(value: number /*i64*/)
        
        /** The window's position in pixels.  
         *  If [member ProjectSettings.display/window/subwindows/embed_subwindows] is `false`, the position is in absolute screen coordinates. This typically applies to editor plugins. If the setting is `true`, the window's position is in the coordinates of its parent [Viewport].  
         *      
         *  **Note:** This property only works if [member initial_position] is set to [constant WINDOW_INITIAL_POSITION_ABSOLUTE].  
         */
        get position(): Vector2i
        set position(value: Vector2i)
        
        /** The window's size in pixels. */
        get size(): Vector2i
        set size(value: Vector2i)
        
        /** The screen the window is currently on. */
        get current_screen(): number /*i64*/
        set current_screen(value: number /*i64*/)
        
        /** Sets a polygonal region of the window which accepts mouse events. Mouse events outside the region will be passed through.  
         *  Passing an empty array will disable passthrough support (all mouse events will be intercepted by the window, which is the default behavior).  
         *    
         *      
         *  **Note:** This property is ignored if [member mouse_passthrough] is set to `true`.  
         *      
         *  **Note:** On Windows, the portion of a window that lies outside the region is not drawn, while on Linux (X11) and macOS it is.  
         *      
         *  **Note:** This property is implemented on Linux (X11), macOS and Windows.  
         */
        get mouse_passthrough_polygon(): PackedVector2Array
        set mouse_passthrough_polygon(value: PackedVector2Array)
        
        /** If `true`, the window is visible. */
        get visible(): boolean
        set visible(value: boolean)
        
        /** If `true`, the window's size will automatically update when a child node is added or removed, ignoring [member min_size] if the new size is bigger.  
         *  If `false`, you need to call [method child_controls_changed] manually.  
         */
        get wrap_controls(): boolean
        set wrap_controls(value: boolean)
        
        /** If `true`, the [Window] is transient, i.e. it's considered a child of another [Window]. The transient window will be destroyed with its transient parent and will return focus to their parent when closed. The transient window is displayed on top of a non-exclusive full-screen parent window. Transient windows can't enter full-screen mode.  
         *  Note that behavior might be different depending on the platform.  
         */
        get transient(): boolean
        set transient(value: boolean)
        
        /** If `true`, the [Window] will be in exclusive mode. Exclusive windows are always on top of their parent and will block all input going to the parent [Window].  
         *  Needs [member transient] enabled to work.  
         */
        get exclusive(): boolean
        set exclusive(value: boolean)
        
        /** If non-zero, the [Window] can't be resized to be smaller than this size.  
         *      
         *  **Note:** This property will be ignored in favor of [method get_contents_minimum_size] if [member wrap_controls] is enabled and if its size is bigger.  
         */
        get min_size(): Vector2i
        set min_size(value: Vector2i)
        
        /** If non-zero, the [Window] can't be resized to be bigger than this size.  
         *      
         *  **Note:** This property will be ignored if the value is lower than [member min_size].  
         */
        get max_size(): Vector2i
        set max_size(value: Vector2i)
        
        /** If `true`, the [Window] width is expanded to keep the title bar text fully visible. */
        get keep_title_visible(): boolean
        set keep_title_visible(value: boolean)
        
        /** Base size of the content (i.e. nodes that are drawn inside the window). If non-zero, [Window]'s content will be scaled when the window is resized to a different size. */
        get content_scale_size(): Vector2i
        set content_scale_size(value: Vector2i)
        
        /** Specifies how the content is scaled when the [Window] is resized. */
        get content_scale_mode(): number /*i64*/
        set content_scale_mode(value: number /*i64*/)
        
        /** Specifies how the content's aspect behaves when the [Window] is resized. The base aspect is determined by [member content_scale_size]. */
        get content_scale_aspect(): number /*i64*/
        set content_scale_aspect(value: number /*i64*/)
        
        /** The policy to use to determine the final scale factor for 2D elements. This affects how [member content_scale_factor] is applied, in addition to the automatic scale factor determined by [member content_scale_size]. */
        get content_scale_stretch(): number /*i64*/
        set content_scale_stretch(value: number /*i64*/)
        
        /** Specifies the base scale of [Window]'s content when its [member size] is equal to [member content_scale_size]. */
        get content_scale_factor(): number /*f64*/
        set content_scale_factor(value: number /*f64*/)
        
        /** Toggles if any text should automatically change to its translated version depending on the current locale. */
        get auto_translate(): boolean
        set auto_translate(value: boolean)
        
        /** The [Theme] resource this node and all its [Control] and [Window] children use. If a child node has its own [Theme] resource set, theme items are merged with child's definitions having higher priority.  
         *      
         *  **Note:** [Window] styles will have no effect unless the window is embedded.  
         */
        get theme(): Theme
        set theme(value: Theme)
        
        /** The name of a theme type variation used by this [Window] to look up its own theme items. See [member Control.theme_type_variation] for more details. */
        get theme_type_variation(): string
        set theme_type_variation(value: string)
        
        /** Emitted when the [Window] is currently focused and receives any input, passing the received event as an argument. The event's position, if present, is in the embedder's coordinate system. */
        readonly window_input: Signal // event: InputEvent => void
        
        /** Emitted when files are dragged from the OS file manager and dropped in the game window. The argument is a list of file paths.  
         *  Note that this method only works with native windows, i.e. the main window and [Window]-derived nodes when [member Viewport.gui_embed_subwindows] is disabled in the main viewport.  
         *  Example usage:  
         *    
         */
        readonly files_dropped: Signal // files: PackedStringArray => void
        
        /** Emitted when the mouse cursor enters the [Window]'s visible area, that is not occluded behind other [Control]s or windows, provided its [member Viewport.gui_disable_input] is `false` and regardless if it's currently focused or not. */
        readonly mouse_entered: Signal //  => void
        
        /** Emitted when the mouse cursor leaves the [Window]'s visible area, that is not occluded behind other [Control]s or windows, provided its [member Viewport.gui_disable_input] is `false` and regardless if it's currently focused or not. */
        readonly mouse_exited: Signal //  => void
        
        /** Emitted when the [Window] gains focus. */
        readonly focus_entered: Signal //  => void
        
        /** Emitted when the [Window] loses its focus. */
        readonly focus_exited: Signal //  => void
        
        /** Emitted when the [Window]'s close button is pressed or when [member popup_window] is enabled and user clicks outside the window.  
         *  This signal can be used to handle window closing, e.g. by connecting it to [method hide].  
         */
        readonly close_requested: Signal //  => void
        
        /** Emitted when a go back request is sent (e.g. pressing the "Back" button on Android), right after [constant Node.NOTIFICATION_WM_GO_BACK_REQUEST]. */
        readonly go_back_requested: Signal //  => void
        
        /** Emitted when [Window] is made visible or disappears. */
        readonly visibility_changed: Signal //  => void
        
        /** Emitted right after [method popup] call, before the [Window] appears or does anything. */
        readonly about_to_popup: Signal //  => void
        
        /** Emitted when the [constant NOTIFICATION_THEME_CHANGED] notification is sent. */
        readonly theme_changed: Signal //  => void
        
        /** Emitted when the [Window]'s DPI changes as a result of OS-level changes (e.g. moving the window from a Retina display to a lower resolution one).  
         *      
         *  **Note:** Only implemented on macOS.  
         */
        readonly dpi_changed: Signal //  => void
        
        /** Emitted when window title bar decorations are changed, e.g. macOS window enter/exit full screen mode, or extend-to-title flag is changed. */
        readonly titlebar_changed: Signal //  => void
    }
    class WindowWrapper extends MarginContainer {
        constructor(identifier?: any)
        readonly window_visibility_changed: Signal // visible: boolean => void
        readonly window_close_requested: Signal //  => void
    }
    /** A resource that holds all components of a 2D world, such as a canvas and a physics space.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_world2d.html  
     */
    class World2D extends Resource {
        constructor(identifier?: any)
        get_canvas(): RID
        get_space(): RID
        get_navigation_map(): RID
        get_direct_space_state(): PhysicsDirectSpaceState2D
        
        /** The [RID] of this world's canvas resource. Used by the [RenderingServer] for 2D drawing. */
        get canvas(): RID
        
        /** The [RID] of this world's physics space resource. Used by the [PhysicsServer2D] for 2D physics, treating it as both a space and an area. */
        get space(): RID
        
        /** The [RID] of this world's navigation map. Used by the [NavigationServer2D]. */
        get navigation_map(): RID
        
        /** Direct access to the world's physics 2D space state. Used for querying current and potential collisions. When using multi-threaded physics, access is limited to [method Node._physics_process] in the main thread. */
        get direct_space_state(): PhysicsDirectSpaceState2D
    }
    /** A resource that holds all components of a 3D world, such as a visual scenario and a physics space.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_world3d.html  
     */
    class World3D extends Resource {
        constructor(identifier?: any)
        get_space(): RID
        get_navigation_map(): RID
        get_scenario(): RID
        set_environment(env: Environment): void
        get_environment(): Environment
        set_fallback_environment(env: Environment): void
        get_fallback_environment(): Environment
        set_camera_attributes(attributes: CameraAttributes): void
        get_camera_attributes(): CameraAttributes
        get_direct_space_state(): PhysicsDirectSpaceState3D
        
        /** The World3D's [Environment]. */
        get environment(): Environment
        set environment(value: Environment)
        
        /** The World3D's fallback environment will be used if [member environment] fails or is missing. */
        get fallback_environment(): Environment
        set fallback_environment(value: Environment)
        
        /** The default [CameraAttributes] resource to use if none set on the [Camera3D]. */
        get camera_attributes(): CameraAttributesPractical | CameraAttributesPhysical
        set camera_attributes(value: CameraAttributesPractical | CameraAttributesPhysical)
        
        /** The World3D's physics space. */
        get space(): RID
        
        /** The [RID] of this world's navigation map. Used by the [NavigationServer3D]. */
        get navigation_map(): RID
        
        /** The World3D's visual scenario. */
        get scenario(): RID
        
        /** Direct access to the world's physics 3D space state. Used for querying current and potential collisions. When using multi-threaded physics, access is limited to [method Node._physics_process] in the main thread. */
        get direct_space_state(): PhysicsDirectSpaceState3D
    }
    /** A 2D world boundary (half-plane) shape used for physics collision.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_worldboundaryshape2d.html  
     */
    class WorldBoundaryShape2D extends Shape2D {
        constructor(identifier?: any)
        set_normal(normal: Vector2): void
        get_normal(): Vector2
        set_distance(distance: number /*f64*/): void
        get_distance(): number /*f64*/
        
        /** The line's normal, typically a unit vector. Its direction indicates the non-colliding half-plane. Can be of any length but zero. Defaults to [constant Vector2.UP]. */
        get normal(): Vector2
        set normal(value: Vector2)
        
        /** The distance from the origin to the line, expressed in terms of [member normal] (according to its direction and magnitude). Actual absolute distance from the origin to the line can be calculated as `abs(distance) / normal.length()`.  
         *  In the scalar equation of the line `ax + by = d`, this is `d`, while the `(a, b)` coordinates are represented by the [member normal] property.  
         */
        get distance(): number /*f64*/
        set distance(value: number /*f64*/)
    }
    /** A 3D world boundary (half-space) shape used for physics collision.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_worldboundaryshape3d.html  
     */
    class WorldBoundaryShape3D extends Shape3D {
        constructor(identifier?: any)
        set_plane(plane: Plane): void
        get_plane(): Plane
        
        /** The [Plane] used by the [WorldBoundaryShape3D] for collision. */
        get plane(): Plane
        set plane(value: Plane)
    }
    /** Default environment properties for the entire scene (post-processing effects, lighting and background settings).  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_worldenvironment.html  
     */
    class WorldEnvironment extends Node {
        constructor(identifier?: any)
        set_environment(env: Environment): void
        get_environment(): Environment
        set_camera_attributes(camera_attributes: CameraAttributes): void
        get_camera_attributes(): CameraAttributes
        
        /** The [Environment] resource used by this [WorldEnvironment], defining the default properties. */
        get environment(): Environment
        set environment(value: Environment)
        
        /** The default [CameraAttributes] resource to use if none set on the [Camera3D]. */
        get camera_attributes(): CameraAttributesPractical | CameraAttributesPhysical
        set camera_attributes(value: CameraAttributesPractical | CameraAttributesPhysical)
    }
    /** An X509 certificate (e.g. for TLS).  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_x509certificate.html  
     */
    class X509Certificate extends Resource {
        constructor(identifier?: any)
        /** Saves a certificate to the given [param path] (should be a "*.crt" file). */
        save(path: string): GodotError
        
        /** Loads a certificate from [param path] ("*.crt" file). */
        load(path: string): GodotError
        
        /** Returns a string representation of the certificate, or an empty string if the certificate is invalid. */
        save_to_string(): string
        
        /** Loads a certificate from the given [param string]. */
        load_from_string(string_: string): GodotError
    }
    namespace XMLParser {
        enum NodeType {
            /** There's no node (no file or buffer opened). */
            NODE_NONE = 0,
            
            /** An element node type, also known as a tag, e.g. `<title>`. */
            NODE_ELEMENT = 1,
            
            /** An end of element node type, e.g. `</title>`. */
            NODE_ELEMENT_END = 2,
            
            /** A text node type, i.e. text that is not inside an element. This includes whitespace. */
            NODE_TEXT = 3,
            
            /** A comment node type, e.g. `<!--A comment-->`. */
            NODE_COMMENT = 4,
            
            /** A node type for CDATA (Character Data) sections, e.g. `<![CDATA[CDATA section]]>`. */
            NODE_CDATA = 5,
            
            /** An unknown node type. */
            NODE_UNKNOWN = 6,
        }
    }
    /** Provides a low-level interface for creating parsers for XML files.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_xmlparser.html  
     */
    class XMLParser extends RefCounted {
        constructor(identifier?: any)
        /** Parses the next node in the file. This method returns an error code. */
        read(): GodotError
        
        /** Returns the type of the current node. Compare with [enum NodeType] constants. */
        get_node_type(): XMLParser.NodeType
        
        /** Returns the name of an element node. This method will raise an error if the currently parsed node is not of [constant NODE_ELEMENT] or [constant NODE_ELEMENT_END] type. */
        get_node_name(): string
        
        /** Returns the contents of a text node. This method will raise an error if the current parsed node is of any other type. */
        get_node_data(): string
        
        /** Returns the byte offset of the currently parsed node since the beginning of the file or buffer. This is usually equivalent to the number of characters before the read position. */
        get_node_offset(): number /*i64*/
        
        /** Returns the number of attributes in the currently parsed element.  
         *      
         *  **Note:** If this method is used while the currently parsed node is not [constant NODE_ELEMENT] or [constant NODE_ELEMENT_END], this count will not be updated and will still reflect the last element.  
         */
        get_attribute_count(): number /*i64*/
        
        /** Returns the name of an attribute of the currently parsed element, specified by the [param idx] index. */
        get_attribute_name(idx: number /*i64*/): string
        
        /** Returns the value of an attribute of the currently parsed element, specified by the [param idx] index. */
        get_attribute_value(idx: number /*i64*/): string
        
        /** Returns `true` if the currently parsed element has an attribute with the [param name]. */
        has_attribute(name: string): boolean
        
        /** Returns the value of an attribute of the currently parsed element, specified by its [param name]. This method will raise an error if the element has no such attribute. */
        get_named_attribute_value(name: string): string
        
        /** Returns the value of an attribute of the currently parsed element, specified by its [param name]. This method will return an empty string if the element has no such attribute. */
        get_named_attribute_value_safe(name: string): string
        
        /** Returns `true` if the currently parsed element is empty, e.g. `<element />`. */
        is_empty(): boolean
        
        /** Returns the current line in the parsed file, counting from 0. */
        get_current_line(): number /*i64*/
        
        /** Skips the current section. If the currently parsed node contains more inner nodes, they will be ignored and the cursor will go to the closing of the current element. */
        skip_section(): void
        
        /** Moves the buffer cursor to a certain offset (since the beginning) and reads the next node there. This method returns an error code. */
        seek(position: number /*i64*/): GodotError
        
        /** Opens an XML [param file] for parsing. This method returns an error code. */
        open(file: string): GodotError
        
        /** Opens an XML raw [param buffer] for parsing. This method returns an error code. */
        open_buffer(buffer: PackedByteArray): GodotError
    }
    /** An anchor point in AR space.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_xranchor3d.html  
     */
    class XRAnchor3D extends XRNode3D {
        constructor(identifier?: any)
        /** Returns the estimated size of the plane that was detected. Say when the anchor relates to a table in the real world, this is the estimated size of the surface of that table. */
        get_size(): Vector3
        
        /** Returns a plane aligned with our anchor; handy for intersection testing. */
        get_plane(): Plane
    }
    /** A camera node with a few overrules for AR/VR applied, such as location tracking.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_xrcamera3d.html  
     */
    class XRCamera3D extends Camera3D {
        constructor(identifier?: any)
    }
    /** A spatial node representing a spatially-tracked controller.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_xrcontroller3d.html  
     */
    class XRController3D extends XRNode3D {
        constructor(identifier?: any)
        /** Returns `true` if the button with the given [param name] is pressed. */
        is_button_pressed(name: StringName): boolean
        
        /** Returns a [Variant] for the input with the given [param name]. This works for any input type, the variant will be typed according to the actions configuration. */
        get_input(name: StringName): any
        
        /** Returns a numeric value for the input with the given [param name]. This is used for triggers and grip sensors. */
        get_float(name: StringName): number /*f64*/
        
        /** Returns a [Vector2] for the input with the given [param name]. This is used for thumbsticks and thumbpads found on many controllers. */
        get_vector2(name: StringName): Vector2
        
        /** Returns the hand holding this controller, if known. See [enum XRPositionalTracker.TrackerHand]. */
        get_tracker_hand(): XRPositionalTracker.TrackerHand
        
        /** Emitted when a button on this controller is pressed. */
        readonly button_pressed: Signal // name: string => void
        
        /** Emitted when a button on this controller is released. */
        readonly button_released: Signal // name: string => void
        
        /** Emitted when a trigger or similar input on this controller changes value. */
        readonly input_float_changed: Signal // name: string, value: number /*f64*/ => void
        
        /** Emitted when a thumbstick or thumbpad on this controller is moved. */
        readonly input_vector2_changed: Signal // name: string, value: Vector2 => void
    }
}