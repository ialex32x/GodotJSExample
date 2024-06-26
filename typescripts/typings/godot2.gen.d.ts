// AUTO-GENERATED
/// <reference no-default-lib="true"/>
declare module "godot" {
    class CollisionShape3DGizmoPlugin extends EditorNode3DGizmoPlugin {
    }
    namespace ColorPicker {
        enum ColorModeType {
            /** Allows editing the color with Red/Green/Blue sliders. */
            MODE_RGB = 0,
            
            /** Allows editing the color with Hue/Saturation/Value sliders. */
            MODE_HSV = 1,
            
            /** Allows the color R, G, B component values to go beyond 1.0, which can be used for certain special operations that require it (like tinting without darkening or rendering sprites in HDR). */
            MODE_RAW = 2,
            
            /** Allows editing the color with Hue/Saturation/Lightness sliders.  
             *  OKHSL is a new color space similar to HSL but that better match perception by leveraging the Oklab color space which is designed to be simple to use, while doing a good job at predicting perceived lightness, chroma and hue.  
             *  [url=https://bottosson.github.io/posts/colorpicker/]Okhsv and Okhsl color spaces[/url]  
             */
            MODE_OKHSL = 3,
        }
        enum PickerShapeType {
            /** HSV Color Model rectangle color space. */
            SHAPE_HSV_RECTANGLE = 0,
            
            /** HSV Color Model rectangle color space with a wheel. */
            SHAPE_HSV_WHEEL = 1,
            
            /** HSV Color Model circle color space. Use Saturation as a radius. */
            SHAPE_VHS_CIRCLE = 2,
            
            /** HSL OK Color Model circle color space. */
            SHAPE_OKHSL_CIRCLE = 3,
            
            /** The color space shape and the shape select button are hidden. Can't be selected from the shapes popup. */
            SHAPE_NONE = 4,
        }
    }
    /** A widget that provides an interface for selecting or modifying a color.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_colorpicker.html  
     */
    class ColorPicker extends VBoxContainer {
        set_pick_color(color: Color): void
        get_pick_color(): Color
        set_deferred_mode(mode: boolean): void
        is_deferred_mode(): boolean
        set_color_mode(color_mode: ColorPicker.ColorModeType): void
        get_color_mode(): ColorPicker.ColorModeType
        set_edit_alpha(show: boolean): void
        is_editing_alpha(): boolean
        set_can_add_swatches(enabled: boolean): void
        are_swatches_enabled(): boolean
        set_presets_visible(visible: boolean): void
        are_presets_visible(): boolean
        set_modes_visible(visible: boolean): void
        are_modes_visible(): boolean
        set_sampler_visible(visible: boolean): void
        is_sampler_visible(): boolean
        set_sliders_visible(visible: boolean): void
        are_sliders_visible(): boolean
        set_hex_visible(visible: boolean): void
        is_hex_visible(): boolean
        
        /** Adds the given color to a list of color presets. The presets are displayed in the color picker and the user will be able to select them.  
         *      
         *  **Note:** The presets list is only for  *this*  color picker.  
         */
        add_preset(color: Color): void
        
        /** Removes the given color from the list of color presets of this color picker. */
        erase_preset(color: Color): void
        
        /** Returns the list of colors in the presets of the color picker. */
        get_presets(): PackedColorArray
        
        /** Adds the given color to a list of color recent presets so that it can be picked later. Recent presets are the colors that were picked recently, a new preset is automatically created and added to recent presets when you pick a new color.  
         *      
         *  **Note:** The recent presets list is only for  *this*  color picker.  
         */
        add_recent_preset(color: Color): void
        
        /** Removes the given color from the list of color recent presets of this color picker. */
        erase_recent_preset(color: Color): void
        
        /** Returns the list of colors in the recent presets of the color picker. */
        get_recent_presets(): PackedColorArray
        set_picker_shape(shape: ColorPicker.PickerShapeType): void
        get_picker_shape(): ColorPicker.PickerShapeType
        
        /** The currently selected color. */
        color: Color
        
        /** If `true`, shows an alpha channel slider (opacity). */
        edit_alpha: boolean
        
        /** The currently selected color mode. See [enum ColorModeType]. */
        color_mode: number /*i64*/
        
        /** If `true`, the color will apply only after the user releases the mouse button, otherwise it will apply immediately even in mouse motion event (which can cause performance issues). */
        deferred_mode: boolean
        
        /** The shape of the color space view. See [enum PickerShapeType]. */
        picker_shape: number /*i64*/
        
        /** If `true`, it's possible to add presets under Swatches. If `false`, the button to add presets is disabled. */
        can_add_swatches: boolean
        
        /** If `true`, the color sampler and color preview are visible. */
        sampler_visible: boolean
        
        /** If `true`, the color mode buttons are visible. */
        color_modes_visible: boolean
        
        /** If `true`, the color sliders are visible. */
        sliders_visible: boolean
        
        /** If `true`, the hex color code input field is visible. */
        hex_visible: boolean
        
        /** If `true`, the Swatches and Recent Colors presets are visible. */
        presets_visible: boolean
        
        /** Emitted when the color is changed. */
        readonly color_changed: Signal // color: Color => void
        
        /** Emitted when a preset is added. */
        readonly preset_added: Signal // color: Color => void
        
        /** Emitted when a preset is removed. */
        readonly preset_removed: Signal // color: Color => void
    }
    /** A button that brings up a [ColorPicker] when pressed.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_colorpickerbutton.html  
     */
    class ColorPickerButton extends Button {
        set_pick_color(color: Color): void
        get_pick_color(): Color
        
        /** Returns the [ColorPicker] that this node toggles.  
         *  **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [member CanvasItem.visible] property.  
         */
        get_picker(): ColorPicker
        
        /** Returns the control's [PopupPanel] which allows you to connect to popup signals. This allows you to handle events when the ColorPicker is shown or hidden.  
         *  **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [member Window.visible] property.  
         */
        get_popup(): PopupPanel
        set_edit_alpha(show: boolean): void
        is_editing_alpha(): boolean
        _about_to_popup(): void
        
        /** The currently selected color. */
        color: Color
        
        /** If `true`, the alpha channel in the displayed [ColorPicker] will be visible. */
        edit_alpha: boolean
        
        /** Emitted when the color changes. */
        readonly color_changed: Signal // color: Color => void
        
        /** Emitted when the [ColorPicker] is closed. */
        readonly popup_closed: Signal //  => void
        
        /** Emitted when the [ColorPicker] is created (the button is pressed for the first time). */
        readonly picker_created: Signal //  => void
    }
    /** A control that displays a solid color rectangle.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_colorrect.html  
     */
    class ColorRect extends Control {
        set_color(color: Color): void
        get_color(): Color
        
        /** The fill color of the rectangle. */
        color: Color
    }
    /** An optionally compressed [Cubemap].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_compressedcubemap.html  
     */
    class CompressedCubemap extends CompressedTextureLayered {
    }
    /** An optionally compressed [CubemapArray].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_compressedcubemaparray.html  
     */
    class CompressedCubemapArray extends CompressedTextureLayered {
    }
    /** Texture with 2 dimensions, optionally compressed.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_compressedtexture2d.html  
     */
    class CompressedTexture2D extends Texture2D {
        /** Loads the texture from the specified [param path]. */
        load(path: string): GodotError
        get_load_path(): string
        
        /** The [CompressedTexture2D]'s file path to a `.ctex` file. */
        load_path: string
    }
    /** Array of 2-dimensional textures, optionally compressed.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_compressedtexture2darray.html  
     */
    class CompressedTexture2DArray extends CompressedTextureLayered {
    }
    /** Texture with 3 dimensions, optionally compressed.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_compressedtexture3d.html  
     */
    class CompressedTexture3D extends Texture3D {
        /** Loads the texture from the specified [param path]. */
        load(path: string): GodotError
        get_load_path(): string
        
        /** The [CompressedTexture3D]'s file path to a `.ctex3d` file. */
        load_path: string
    }
    /** Base class for texture arrays that can optionally be compressed.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_compressedtexturelayered.html  
     */
    class CompressedTextureLayered extends TextureLayered {
        /** Loads the texture at [param path]. */
        load(path: string): GodotError
        get_load_path(): string
        
        /** The path the texture should be loaded from. */
        load_path: string
    }
    /** A 2D polyline shape used for physics collision.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_concavepolygonshape2d.html  
     */
    class ConcavePolygonShape2D extends Shape2D {
        set_segments(segments: PackedVector2Array): void
        get_segments(): PackedVector2Array
        
        /** The array of points that make up the [ConcavePolygonShape2D]'s line segments. The array (of length divisible by two) is naturally divided into pairs (one pair for each segment); each pair consists of the starting point of a segment and the endpoint of a segment. */
        segments: PackedVector2Array
    }
    /** A 3D trimesh shape used for physics collision.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_concavepolygonshape3d.html  
     */
    class ConcavePolygonShape3D extends Shape3D {
        /** Sets the faces of the trimesh shape from an array of vertices. The [param faces] array should be composed of triples such that each triple of vertices defines a triangle. */
        set_faces(faces: PackedVector3Array): void
        
        /** Returns the faces of the trimesh shape as an array of vertices. The array (of length divisible by three) is naturally divided into triples; each triple of vertices defines a triangle. */
        get_faces(): PackedVector3Array
        set_backface_collision_enabled(enabled: boolean): void
        is_backface_collision_enabled(): boolean
        data: PackedVector3Array
        
        /** If set to `true`, collisions occur on both sides of the concave shape faces. Otherwise they occur only along the face normals. */
        backface_collision: boolean
    }
    namespace ConeTwistJoint3D {
        enum Param {
            /** Swing is rotation from side to side, around the axis perpendicular to the twist axis.  
             *  The swing span defines, how much rotation will not get corrected along the swing axis.  
             *  Could be defined as looseness in the [ConeTwistJoint3D].  
             *  If below 0.05, this behavior is locked.  
             */
            PARAM_SWING_SPAN = 0,
            
            /** Twist is the rotation around the twist axis, this value defined how far the joint can twist.  
             *  Twist is locked if below 0.05.  
             */
            PARAM_TWIST_SPAN = 1,
            
            /** The speed with which the swing or twist will take place.  
             *  The higher, the faster.  
             */
            PARAM_BIAS = 2,
            
            /** The ease with which the joint starts to twist. If it's too low, it takes more force to start twisting the joint. */
            PARAM_SOFTNESS = 3,
            
            /** Defines, how fast the swing- and twist-speed-difference on both sides gets synced. */
            PARAM_RELAXATION = 4,
            
            /** Represents the size of the [enum Param] enum. */
            PARAM_MAX = 5,
        }
    }
    /** A physics joint that connects two 3D physics bodies in a way that simulates a ball-and-socket joint.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_conetwistjoint3d.html  
     */
    class ConeTwistJoint3D extends Joint3D {
        /** Sets the value of the specified parameter. */
        set_param(param: ConeTwistJoint3D.Param, value: number /*f64*/): void
        
        /** Returns the value of the specified parameter. */
        get_param(param: ConeTwistJoint3D.Param): number /*f64*/
    }
    /** Helper class to handle INI-style files.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_configfile.html  
     */
    class ConfigFile extends RefCounted {
        /** Assigns a value to the specified key of the specified section. If either the section or the key do not exist, they are created. Passing a `null` value deletes the specified key if it exists, and deletes the section if it ends up empty once the key has been removed. */
        set_value(section: string, key: string, value: any): void
        
        /** Returns the current value for the specified section and key. If either the section or the key do not exist, the method returns the fallback [param default] value. If [param default] is not specified or set to `null`, an error is also raised. */
        get_value(section: string, key: string, default_: any = <any> {} /*compound.type from nil*/): any
        
        /** Returns `true` if the specified section exists. */
        has_section(section: string): boolean
        
        /** Returns `true` if the specified section-key pair exists. */
        has_section_key(section: string, key: string): boolean
        
        /** Returns an array of all defined section identifiers. */
        get_sections(): PackedStringArray
        
        /** Returns an array of all defined key identifiers in the specified section. Raises an error and returns an empty array if the section does not exist. */
        get_section_keys(section: string): PackedStringArray
        
        /** Deletes the specified section along with all the key-value pairs inside. Raises an error if the section does not exist. */
        erase_section(section: string): void
        
        /** Deletes the specified key in a section. Raises an error if either the section or the key do not exist. */
        erase_section_key(section: string, key: string): void
        
        /** Loads the config file specified as a parameter. The file's contents are parsed and loaded in the [ConfigFile] object which the method was called on.  
         *  Returns [constant OK] on success, or one of the other [enum Error] values if the operation failed.  
         */
        load(path: string): GodotError
        
        /** Parses the passed string as the contents of a config file. The string is parsed and loaded in the ConfigFile object which the method was called on.  
         *  Returns [constant OK] on success, or one of the other [enum Error] values if the operation failed.  
         */
        parse(data: string): GodotError
        
        /** Saves the contents of the [ConfigFile] object to the file specified as a parameter. The output file uses an INI-style structure.  
         *  Returns [constant OK] on success, or one of the other [enum Error] values if the operation failed.  
         */
        save(path: string): GodotError
        
        /** Obtain the text version of this config file (the same text that would be written to a file). */
        encode_to_text(): string
        
        /** Loads the encrypted config file specified as a parameter, using the provided [param key] to decrypt it. The file's contents are parsed and loaded in the [ConfigFile] object which the method was called on.  
         *  Returns [constant OK] on success, or one of the other [enum Error] values if the operation failed.  
         */
        load_encrypted(path: string, key: PackedByteArray): GodotError
        
        /** Loads the encrypted config file specified as a parameter, using the provided [param password] to decrypt it. The file's contents are parsed and loaded in the [ConfigFile] object which the method was called on.  
         *  Returns [constant OK] on success, or one of the other [enum Error] values if the operation failed.  
         */
        load_encrypted_pass(path: string, password: string): GodotError
        
        /** Saves the contents of the [ConfigFile] object to the AES-256 encrypted file specified as a parameter, using the provided [param key] to encrypt it. The output file uses an INI-style structure.  
         *  Returns [constant OK] on success, or one of the other [enum Error] values if the operation failed.  
         */
        save_encrypted(path: string, key: PackedByteArray): GodotError
        
        /** Saves the contents of the [ConfigFile] object to the AES-256 encrypted file specified as a parameter, using the provided [param password] to encrypt it. The output file uses an INI-style structure.  
         *  Returns [constant OK] on success, or one of the other [enum Error] values if the operation failed.  
         */
        save_encrypted_pass(path: string, password: string): GodotError
        
        /** Removes the entire contents of the config. */
        clear(): void
    }
    /** A dialog used for confirmation of actions.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_confirmationdialog.html  
     */
    class ConfirmationDialog extends AcceptDialog {
        /** Returns the cancel button.  
         *  **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [member CanvasItem.visible] property.  
         */
        get_cancel_button(): Button
        set_cancel_button_text(text: string): void
        get_cancel_button_text(): string
        
        /** The text displayed by the cancel button (see [method get_cancel_button]). */
        cancel_button_text: string
    }
    class ConnectDialog extends ConfirmationDialog {
        readonly connected: Signal //  => void
    }
    class ConnectDialogBinds extends Object {
    }
    class ConnectionInfoDialog extends AcceptDialog {
    }
    class ConnectionsDock extends VBoxContainer {
        update_tree(): void
    }
    /** Base class for all GUI containers.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_container.html  
     */
    class Container extends Control {
        /** Notification just before children are going to be sorted, in case there's something to process beforehand. */
        static readonly NOTIFICATION_PRE_SORT_CHILDREN = 50
        
        /** Notification for when sorting the children, it must be obeyed immediately. */
        static readonly NOTIFICATION_SORT_CHILDREN = 51
        
        /** Implement to return a list of allowed horizontal [enum Control.SizeFlags] for child nodes. This doesn't technically prevent the usages of any other size flags, if your implementation requires that. This only limits the options available to the user in the Inspector dock.  
         *      
         *  **Note:** Having no size flags is equal to having [constant Control.SIZE_SHRINK_BEGIN]. As such, this value is always implicitly allowed.  
         */
        /* gdvirtual */ _get_allowed_size_flags_horizontal(): PackedInt32Array
        
        /** Implement to return a list of allowed vertical [enum Control.SizeFlags] for child nodes. This doesn't technically prevent the usages of any other size flags, if your implementation requires that. This only limits the options available to the user in the Inspector dock.  
         *      
         *  **Note:** Having no size flags is equal to having [constant Control.SIZE_SHRINK_BEGIN]. As such, this value is always implicitly allowed.  
         */
        /* gdvirtual */ _get_allowed_size_flags_vertical(): PackedInt32Array
        
        /** Queue resort of the contained children. This is called automatically anyway, but can be called upon request. */
        queue_sort(): void
        
        /** Fit a child control in a given rect. This is mainly a helper for creating custom container classes. */
        fit_child_in_rect(child: Control, rect: Rect2): void
        
        /** Emitted when children are going to be sorted. */
        readonly pre_sort_children: Signal //  => void
        
        /** Emitted when sorting the children is needed. */
        readonly sort_children: Signal //  => void
    }
    namespace Control {
        enum FocusMode {
            /** The node cannot grab focus. Use with [member focus_mode]. */
            FOCUS_NONE = 0,
            
            /** The node can only grab focus on mouse clicks. Use with [member focus_mode]. */
            FOCUS_CLICK = 1,
            
            /** The node can grab focus on mouse click, using the arrows and the Tab keys on the keyboard, or using the D-pad buttons on a gamepad. Use with [member focus_mode]. */
            FOCUS_ALL = 2,
        }
        enum CursorShape {
            /** Show the system's arrow mouse cursor when the user hovers the node. Use with [member mouse_default_cursor_shape]. */
            CURSOR_ARROW = 0,
            
            /** Show the system's I-beam mouse cursor when the user hovers the node. The I-beam pointer has a shape similar to "I". It tells the user they can highlight or insert text. */
            CURSOR_IBEAM = 1,
            
            /** Show the system's pointing hand mouse cursor when the user hovers the node. */
            CURSOR_POINTING_HAND = 2,
            
            /** Show the system's cross mouse cursor when the user hovers the node. */
            CURSOR_CROSS = 3,
            
            /** Show the system's wait mouse cursor when the user hovers the node. Often an hourglass. */
            CURSOR_WAIT = 4,
            
            /** Show the system's busy mouse cursor when the user hovers the node. Often an arrow with a small hourglass. */
            CURSOR_BUSY = 5,
            
            /** Show the system's drag mouse cursor, often a closed fist or a cross symbol, when the user hovers the node. It tells the user they're currently dragging an item, like a node in the Scene dock. */
            CURSOR_DRAG = 6,
            
            /** Show the system's drop mouse cursor when the user hovers the node. It can be an open hand. It tells the user they can drop an item they're currently grabbing, like a node in the Scene dock. */
            CURSOR_CAN_DROP = 7,
            
            /** Show the system's forbidden mouse cursor when the user hovers the node. Often a crossed circle. */
            CURSOR_FORBIDDEN = 8,
            
            /** Show the system's vertical resize mouse cursor when the user hovers the node. A double-headed vertical arrow. It tells the user they can resize the window or the panel vertically. */
            CURSOR_VSIZE = 9,
            
            /** Show the system's horizontal resize mouse cursor when the user hovers the node. A double-headed horizontal arrow. It tells the user they can resize the window or the panel horizontally. */
            CURSOR_HSIZE = 10,
            
            /** Show the system's window resize mouse cursor when the user hovers the node. The cursor is a double-headed arrow that goes from the bottom left to the top right. It tells the user they can resize the window or the panel both horizontally and vertically. */
            CURSOR_BDIAGSIZE = 11,
            
            /** Show the system's window resize mouse cursor when the user hovers the node. The cursor is a double-headed arrow that goes from the top left to the bottom right, the opposite of [constant CURSOR_BDIAGSIZE]. It tells the user they can resize the window or the panel both horizontally and vertically. */
            CURSOR_FDIAGSIZE = 12,
            
            /** Show the system's move mouse cursor when the user hovers the node. It shows 2 double-headed arrows at a 90 degree angle. It tells the user they can move a UI element freely. */
            CURSOR_MOVE = 13,
            
            /** Show the system's vertical split mouse cursor when the user hovers the node. On Windows, it's the same as [constant CURSOR_VSIZE]. */
            CURSOR_VSPLIT = 14,
            
            /** Show the system's horizontal split mouse cursor when the user hovers the node. On Windows, it's the same as [constant CURSOR_HSIZE]. */
            CURSOR_HSPLIT = 15,
            
            /** Show the system's help mouse cursor when the user hovers the node, a question mark. */
            CURSOR_HELP = 16,
        }
        enum LayoutPreset {
            /** Snap all 4 anchors to the top-left of the parent control's bounds. Use with [method set_anchors_preset]. */
            PRESET_TOP_LEFT = 0,
            
            /** Snap all 4 anchors to the top-right of the parent control's bounds. Use with [method set_anchors_preset]. */
            PRESET_TOP_RIGHT = 1,
            
            /** Snap all 4 anchors to the bottom-left of the parent control's bounds. Use with [method set_anchors_preset]. */
            PRESET_BOTTOM_LEFT = 2,
            
            /** Snap all 4 anchors to the bottom-right of the parent control's bounds. Use with [method set_anchors_preset]. */
            PRESET_BOTTOM_RIGHT = 3,
            
            /** Snap all 4 anchors to the center of the left edge of the parent control's bounds. Use with [method set_anchors_preset]. */
            PRESET_CENTER_LEFT = 4,
            
            /** Snap all 4 anchors to the center of the top edge of the parent control's bounds. Use with [method set_anchors_preset]. */
            PRESET_CENTER_TOP = 5,
            
            /** Snap all 4 anchors to the center of the right edge of the parent control's bounds. Use with [method set_anchors_preset]. */
            PRESET_CENTER_RIGHT = 6,
            
            /** Snap all 4 anchors to the center of the bottom edge of the parent control's bounds. Use with [method set_anchors_preset]. */
            PRESET_CENTER_BOTTOM = 7,
            
            /** Snap all 4 anchors to the center of the parent control's bounds. Use with [method set_anchors_preset]. */
            PRESET_CENTER = 8,
            
            /** Snap all 4 anchors to the left edge of the parent control. The left offset becomes relative to the left edge and the top offset relative to the top left corner of the node's parent. Use with [method set_anchors_preset]. */
            PRESET_LEFT_WIDE = 9,
            
            /** Snap all 4 anchors to the top edge of the parent control. The left offset becomes relative to the top left corner, the top offset relative to the top edge, and the right offset relative to the top right corner of the node's parent. Use with [method set_anchors_preset]. */
            PRESET_TOP_WIDE = 10,
            
            /** Snap all 4 anchors to the right edge of the parent control. The right offset becomes relative to the right edge and the top offset relative to the top right corner of the node's parent. Use with [method set_anchors_preset]. */
            PRESET_RIGHT_WIDE = 11,
            
            /** Snap all 4 anchors to the bottom edge of the parent control. The left offset becomes relative to the bottom left corner, the bottom offset relative to the bottom edge, and the right offset relative to the bottom right corner of the node's parent. Use with [method set_anchors_preset]. */
            PRESET_BOTTOM_WIDE = 12,
            
            /** Snap all 4 anchors to a vertical line that cuts the parent control in half. Use with [method set_anchors_preset]. */
            PRESET_VCENTER_WIDE = 13,
            
            /** Snap all 4 anchors to a horizontal line that cuts the parent control in half. Use with [method set_anchors_preset]. */
            PRESET_HCENTER_WIDE = 14,
            
            /** Snap all 4 anchors to the respective corners of the parent control. Set all 4 offsets to 0 after you applied this preset and the [Control] will fit its parent control. Use with [method set_anchors_preset]. */
            PRESET_FULL_RECT = 15,
        }
        enum LayoutPresetMode {
            /** The control will be resized to its minimum size. */
            PRESET_MODE_MINSIZE = 0,
            
            /** The control's width will not change. */
            PRESET_MODE_KEEP_WIDTH = 1,
            
            /** The control's height will not change. */
            PRESET_MODE_KEEP_HEIGHT = 2,
            
            /** The control's size will not change. */
            PRESET_MODE_KEEP_SIZE = 3,
        }
        enum SizeFlags {
            /** Tells the parent [Container] to align the node with its start, either the top or the left edge. It is mutually exclusive with [constant SIZE_FILL] and other shrink size flags, but can be used with [constant SIZE_EXPAND] in some containers. Use with [member size_flags_horizontal] and [member size_flags_vertical].  
             *      
             *  **Note:** Setting this flag is equal to not having any size flags.  
             */
            SIZE_SHRINK_BEGIN = 0,
            
            /** Tells the parent [Container] to expand the bounds of this node to fill all the available space without pushing any other node. It is mutually exclusive with shrink size flags. Use with [member size_flags_horizontal] and [member size_flags_vertical]. */
            SIZE_FILL = 1,
            
            /** Tells the parent [Container] to let this node take all the available space on the axis you flag. If multiple neighboring nodes are set to expand, they'll share the space based on their stretch ratio. See [member size_flags_stretch_ratio]. Use with [member size_flags_horizontal] and [member size_flags_vertical]. */
            SIZE_EXPAND = 2,
            
            /** Sets the node's size flags to both fill and expand. See [constant SIZE_FILL] and [constant SIZE_EXPAND] for more information. */
            SIZE_EXPAND_FILL = 3,
            
            /** Tells the parent [Container] to center the node in the available space. It is mutually exclusive with [constant SIZE_FILL] and other shrink size flags, but can be used with [constant SIZE_EXPAND] in some containers. Use with [member size_flags_horizontal] and [member size_flags_vertical]. */
            SIZE_SHRINK_CENTER = 4,
            
            /** Tells the parent [Container] to align the node with its end, either the bottom or the right edge. It is mutually exclusive with [constant SIZE_FILL] and other shrink size flags, but can be used with [constant SIZE_EXPAND] in some containers. Use with [member size_flags_horizontal] and [member size_flags_vertical]. */
            SIZE_SHRINK_END = 8,
        }
        enum MouseFilter {
            /** The control will receive mouse movement input events and mouse button input events if clicked on through [method _gui_input]. And the control will receive the [signal mouse_entered] and [signal mouse_exited] signals. These events are automatically marked as handled, and they will not propagate further to other controls. This also results in blocking signals in other controls. */
            MOUSE_FILTER_STOP = 0,
            
            /** The control will receive mouse movement input events and mouse button input events if clicked on through [method _gui_input]. And the control will receive the [signal mouse_entered] and [signal mouse_exited] signals. If this control does not handle the event, the parent control (if any) will be considered, and so on until there is no more parent control to potentially handle it. This also allows signals to fire in other controls. If no control handled it, the event will be passed to [method Node._shortcut_input] for further processing. */
            MOUSE_FILTER_PASS = 1,
            
            /** The control will not receive mouse movement input events and mouse button input events if clicked on through [method _gui_input]. The control will also not receive the [signal mouse_entered] nor [signal mouse_exited] signals. This will not block other controls from receiving these events or firing the signals. Ignored events will not be handled automatically.  
             *      
             *  **Note:** If the control has received [signal mouse_entered] but not [signal mouse_exited], changing the [member mouse_filter] to [constant MOUSE_FILTER_IGNORE] will cause [signal mouse_exited] to be emitted.  
             */
            MOUSE_FILTER_IGNORE = 2,
        }
        enum GrowDirection {
            /** The control will grow to the left or top to make up if its minimum size is changed to be greater than its current size on the respective axis. */
            GROW_DIRECTION_BEGIN = 0,
            
            /** The control will grow to the right or bottom to make up if its minimum size is changed to be greater than its current size on the respective axis. */
            GROW_DIRECTION_END = 1,
            
            /** The control will grow in both directions equally to make up if its minimum size is changed to be greater than its current size. */
            GROW_DIRECTION_BOTH = 2,
        }
        enum Anchor {
            /** Snaps one of the 4 anchor's sides to the origin of the node's `Rect`, in the top left. Use it with one of the `anchor_*` member variables, like [member anchor_left]. To change all 4 anchors at once, use [method set_anchors_preset]. */
            ANCHOR_BEGIN = 0,
            
            /** Snaps one of the 4 anchor's sides to the end of the node's `Rect`, in the bottom right. Use it with one of the `anchor_*` member variables, like [member anchor_left]. To change all 4 anchors at once, use [method set_anchors_preset]. */
            ANCHOR_END = 1,
        }
        enum LayoutDirection {
            /** Automatic layout direction, determined from the parent control layout direction. */
            LAYOUT_DIRECTION_INHERITED = 0,
            
            /** Automatic layout direction, determined from the current locale. */
            LAYOUT_DIRECTION_LOCALE = 1,
            
            /** Left-to-right layout direction. */
            LAYOUT_DIRECTION_LTR = 2,
            
            /** Right-to-left layout direction. */
            LAYOUT_DIRECTION_RTL = 3,
        }
        enum TextDirection {
            /** Text writing direction is the same as layout direction. */
            TEXT_DIRECTION_INHERITED = 3,
            
            /** Automatic text writing direction, determined from the current locale and text content. */
            TEXT_DIRECTION_AUTO = 0,
            
            /** Left-to-right text writing direction. */
            TEXT_DIRECTION_LTR = 1,
            
            /** Right-to-left text writing direction. */
            TEXT_DIRECTION_RTL = 2,
        }
    }
    /** Base class for all GUI controls. Adapts its position and size based on its parent control.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_control.html  
     */
    class Control extends CanvasItem {
        /** Sent when the node changes size. Use [member size] to get the new size. */
        static readonly NOTIFICATION_RESIZED = 40
        
        /** Sent when the mouse cursor enters the control's (or any child control's) visible area, that is not occluded behind other Controls or Windows, provided its [member mouse_filter] lets the event reach it and regardless if it's currently focused or not.  
         *      
         *  **Note:** [member CanvasItem.z_index] doesn't affect which Control receives the notification.  
         *  See also [constant NOTIFICATION_MOUSE_ENTER_SELF].  
         */
        static readonly NOTIFICATION_MOUSE_ENTER = 41
        
        /** Sent when the mouse cursor leaves the control's (and all child control's) visible area, that is not occluded behind other Controls or Windows, provided its [member mouse_filter] lets the event reach it and regardless if it's currently focused or not.  
         *      
         *  **Note:** [member CanvasItem.z_index] doesn't affect which Control receives the notification.  
         *  See also [constant NOTIFICATION_MOUSE_EXIT_SELF].  
         */
        static readonly NOTIFICATION_MOUSE_EXIT = 42
        
        /** Sent when the mouse cursor enters the control's visible area, that is not occluded behind other Controls or Windows, provided its [member mouse_filter] lets the event reach it and regardless if it's currently focused or not.  
         *      
         *  **Note:** [member CanvasItem.z_index] doesn't affect which Control receives the notification.  
         *  See also [constant NOTIFICATION_MOUSE_ENTER].  
         */
        static readonly NOTIFICATION_MOUSE_ENTER_SELF = 60
        
        /** Sent when the mouse cursor leaves the control's visible area, that is not occluded behind other Controls or Windows, provided its [member mouse_filter] lets the event reach it and regardless if it's currently focused or not.  
         *      
         *  **Note:** [member CanvasItem.z_index] doesn't affect which Control receives the notification.  
         *  See also [constant NOTIFICATION_MOUSE_EXIT].  
         */
        static readonly NOTIFICATION_MOUSE_EXIT_SELF = 61
        
        /** Sent when the node grabs focus. */
        static readonly NOTIFICATION_FOCUS_ENTER = 43
        
        /** Sent when the node loses focus. */
        static readonly NOTIFICATION_FOCUS_EXIT = 44
        
        /** Sent when the node needs to refresh its theme items. This happens in one of the following cases:  
         *  - The [member theme] property is changed on this node or any of its ancestors.  
         *  - The [member theme_type_variation] property is changed on this node.  
         *  - One of the node's theme property overrides is changed.  
         *  - The node enters the scene tree.  
         *      
         *  **Note:** As an optimization, this notification won't be sent from changes that occur while this node is outside of the scene tree. Instead, all of the theme item updates can be applied at once when the node enters the scene tree.  
         */
        static readonly NOTIFICATION_THEME_CHANGED = 45
        
        /** Sent when this node is inside a [ScrollContainer] which has begun being scrolled when dragging the scrollable area  *with a touch event* . This notification is  *not*  sent when scrolling by dragging the scrollbar, scrolling with the mouse wheel or scrolling with keyboard/gamepad events.  
         *      
         *  **Note:** This signal is only emitted on Android or iOS, or on desktop/web platforms when [member ProjectSettings.input_devices/pointing/emulate_touch_from_mouse] is enabled.  
         */
        static readonly NOTIFICATION_SCROLL_BEGIN = 47
        
        /** Sent when this node is inside a [ScrollContainer] which has stopped being scrolled when dragging the scrollable area  *with a touch event* . This notification is  *not*  sent when scrolling by dragging the scrollbar, scrolling with the mouse wheel or scrolling with keyboard/gamepad events.  
         *      
         *  **Note:** This signal is only emitted on Android or iOS, or on desktop/web platforms when [member ProjectSettings.input_devices/pointing/emulate_touch_from_mouse] is enabled.  
         */
        static readonly NOTIFICATION_SCROLL_END = 48
        
        /** Sent when control layout direction is changed. */
        static readonly NOTIFICATION_LAYOUT_DIRECTION_CHANGED = 49
        
        /** Virtual method to be implemented by the user. Returns whether the given [param point] is inside this control.  
         *  If not overridden, default behavior is checking if the point is within control's Rect.  
         *      
         *  **Note:** If you want to check if a point is inside the control, you can use `Rect2(Vector2.ZERO, size).has_point(point)`.  
         */
        /* gdvirtual */ _has_point(point: Vector2): boolean
        
        /** User defined BiDi algorithm override function.  
         *  Returns an [Array] of [Vector3i] text ranges and text base directions, in the left-to-right order. Ranges should cover full source [param text] without overlaps. BiDi algorithm will be used on each range separately.  
         */
        /* gdvirtual */ _structured_text_parser(args: Array, text: string): Array
        
        /** Virtual method to be implemented by the user. Returns the minimum size for this control. Alternative to [member custom_minimum_size] for controlling minimum size via code. The actual minimum size will be the max value of these two (in each axis separately).  
         *  If not overridden, defaults to [constant Vector2.ZERO].  
         *      
         *  **Note:** This method will not be called when the script is attached to a [Control] node that already overrides its minimum size (e.g. [Label], [Button], [PanelContainer] etc.). It can only be used with most basic GUI nodes, like [Control], [Container], [Panel] etc.  
         */
        /* gdvirtual */ _get_minimum_size(): Vector2
        
        /** Virtual method to be implemented by the user. Returns the tooltip text for the position [param at_position] in control's local coordinates, which will typically appear when the cursor is resting over this control. See [method get_tooltip].  
         *      
         *  **Note:** If this method returns an empty [String], no tooltip is displayed.  
         */
        /* gdvirtual */ _get_tooltip(at_position: Vector2): string
        
        /** Godot calls this method to get data that can be dragged and dropped onto controls that expect drop data. Returns `null` if there is no data to drag. Controls that want to receive drop data should implement [method _can_drop_data] and [method _drop_data]. [param at_position] is local to this control. Drag may be forced with [method force_drag].  
         *  A preview that will follow the mouse that should represent the data can be set with [method set_drag_preview]. A good time to set the preview is in this method.  
         *    
         */
        /* gdvirtual */ _get_drag_data(at_position: Vector2): void
        
        /** Godot calls this method to test if [param data] from a control's [method _get_drag_data] can be dropped at [param at_position]. [param at_position] is local to this control.  
         *  This method should only be used to test the data. Process the data in [method _drop_data].  
         *    
         */
        /* gdvirtual */ _can_drop_data(at_position: Vector2, data: any): boolean
        
        /** Godot calls this method to pass you the [param data] from a control's [method _get_drag_data] result. Godot first calls [method _can_drop_data] to test if [param data] is allowed to drop at [param at_position] where [param at_position] is local to this control.  
         *    
         */
        /* gdvirtual */ _drop_data(at_position: Vector2, data: any): void
        
        /** Virtual method to be implemented by the user. Returns a [Control] node that should be used as a tooltip instead of the default one. The [param for_text] includes the contents of the [member tooltip_text] property.  
         *  The returned node must be of type [Control] or Control-derived. It can have child nodes of any type. It is freed when the tooltip disappears, so make sure you always provide a new instance (if you want to use a pre-existing node from your scene tree, you can duplicate it and pass the duplicated instance). When `null` or a non-Control node is returned, the default tooltip will be used instead.  
         *  The returned node will be added as child to a [PopupPanel], so you should only provide the contents of that panel. That [PopupPanel] can be themed using [method Theme.set_stylebox] for the type `"TooltipPanel"` (see [member tooltip_text] for an example).  
         *      
         *  **Note:** The tooltip is shrunk to minimal size. If you want to ensure it's fully visible, you might want to set its [member custom_minimum_size] to some non-zero value.  
         *      
         *  **Note:** The node (and any relevant children) should be [member CanvasItem.visible] when returned, otherwise, the viewport that instantiates it will not be able to calculate its minimum size reliably.  
         *  **Example of usage with a custom-constructed node:**  
         *    
         *  **Example of usage with a custom scene instance:**  
         *    
         */
        /* gdvirtual */ _make_custom_tooltip(for_text: string): Object
        
        /** Virtual method to be implemented by the user. Use this method to process and accept inputs on UI elements. See [method accept_event].  
         *  **Example usage for clicking a control:**  
         *    
         *  The event won't trigger if:  
         *  * clicking outside the control (see [method _has_point]);  
         *  * control has [member mouse_filter] set to [constant MOUSE_FILTER_IGNORE];  
         *  * control is obstructed by another [Control] on top of it, which doesn't have [member mouse_filter] set to [constant MOUSE_FILTER_IGNORE];  
         *  * control's parent has [member mouse_filter] set to [constant MOUSE_FILTER_STOP] or has accepted the event;  
         *  * it happens outside the parent's rectangle and the parent has either [member clip_contents] enabled.  
         *      
         *  **Note:** Event position is relative to the control origin.  
         */
        /* gdvirtual */ _gui_input(event: InputEvent): void
        
        /** Marks an input event as handled. Once you accept an input event, it stops propagating, even to nodes listening to [method Node._unhandled_input] or [method Node._unhandled_key_input].  
         *      
         *  **Note:** This does not affect the methods in [Input], only the way events are propagated.  
         */
        accept_event(): void
        
        /** Returns the minimum size for this control. See [member custom_minimum_size]. */
        get_minimum_size(): Vector2
        
        /** Returns combined minimum size from [member custom_minimum_size] and [method get_minimum_size]. */
        get_combined_minimum_size(): Vector2
        _set_layout_mode(mode: any /*Control.LayoutMode*/): void
        _get_layout_mode(): any /*Control.LayoutMode*/
        _set_anchors_layout_preset(preset: number /*i64*/): void
        _get_anchors_layout_preset(): number /*i64*/
        
        /** Sets the anchors to a [param preset] from [enum Control.LayoutPreset] enum. This is the code equivalent to using the Layout menu in the 2D editor.  
         *  If [param keep_offsets] is `true`, control's position will also be updated.  
         */
        set_anchors_preset(preset: Control.LayoutPreset, keep_offsets: boolean = false): void
        
        /** Sets the offsets to a [param preset] from [enum Control.LayoutPreset] enum. This is the code equivalent to using the Layout menu in the 2D editor.  
         *  Use parameter [param resize_mode] with constants from [enum Control.LayoutPresetMode] to better determine the resulting size of the [Control]. Constant size will be ignored if used with presets that change size, e.g. [constant PRESET_LEFT_WIDE].  
         *  Use parameter [param margin] to determine the gap between the [Control] and the edges.  
         */
        set_offsets_preset(preset: Control.LayoutPreset, resize_mode: Control.LayoutPresetMode = 0, margin: number /*i64*/ = 0): void
        
        /** Sets both anchor preset and offset preset. See [method set_anchors_preset] and [method set_offsets_preset]. */
        set_anchors_and_offsets_preset(preset: Control.LayoutPreset, resize_mode: Control.LayoutPresetMode = 0, margin: number /*i64*/ = 0): void
        _set_anchor(side: Side, anchor: number /*f64*/): void
        
        /** Sets the anchor for the specified [enum Side] to [param anchor]. A setter method for [member anchor_bottom], [member anchor_left], [member anchor_right] and [member anchor_top].  
         *  If [param keep_offset] is `true`, offsets aren't updated after this operation.  
         *  If [param push_opposite_anchor] is `true` and the opposite anchor overlaps this anchor, the opposite one will have its value overridden. For example, when setting left anchor to 1 and the right anchor has value of 0.5, the right anchor will also get value of 1. If [param push_opposite_anchor] was `false`, the left anchor would get value 0.5.  
         */
        set_anchor(side: Side, anchor: number /*f64*/, keep_offset: boolean = false, push_opposite_anchor: boolean = true): void
        
        /** Returns the anchor for the specified [enum Side]. A getter method for [member anchor_bottom], [member anchor_left], [member anchor_right] and [member anchor_top]. */
        get_anchor(side: Side): number /*f64*/
        
        /** Sets the offset for the specified [enum Side] to [param offset]. A setter method for [member offset_bottom], [member offset_left], [member offset_right] and [member offset_top]. */
        set_offset(side: Side, offset: number /*f64*/): void
        
        /** Returns the offset for the specified [enum Side]. A getter method for [member offset_bottom], [member offset_left], [member offset_right] and [member offset_top]. */
        get_offset(offset: Side): number /*f64*/
        
        /** Works the same as [method set_anchor], but instead of `keep_offset` argument and automatic update of offset, it allows to set the offset yourself (see [method set_offset]). */
        set_anchor_and_offset(side: Side, anchor: number /*f64*/, offset: number /*f64*/, push_opposite_anchor: boolean = false): void
        
        /** Sets [member offset_left] and [member offset_top] at the same time. Equivalent of changing [member position]. */
        set_begin(position: Vector2): void
        
        /** Sets [member offset_right] and [member offset_bottom] at the same time. */
        set_end(position: Vector2): void
        
        /** Sets the [member position] to given [param position].  
         *  If [param keep_offsets] is `true`, control's anchors will be updated instead of offsets.  
         */
        set_position(position: Vector2, keep_offsets: boolean = false): void
        _set_position(position: Vector2): void
        
        /** Sets the size (see [member size]).  
         *  If [param keep_offsets] is `true`, control's anchors will be updated instead of offsets.  
         */
        set_size(size: Vector2, keep_offsets: boolean = false): void
        
        /** Resets the size to [method get_combined_minimum_size]. This is equivalent to calling `set_size(Vector2())` (or any size below the minimum). */
        reset_size(): void
        _set_size(size: Vector2): void
        set_custom_minimum_size(size: Vector2): void
        
        /** Sets the [member global_position] to given [param position].  
         *  If [param keep_offsets] is `true`, control's anchors will be updated instead of offsets.  
         */
        set_global_position(position: Vector2, keep_offsets: boolean = false): void
        _set_global_position(position: Vector2): void
        set_rotation(radians: number /*f64*/): void
        set_rotation_degrees(degrees: number /*f64*/): void
        set_scale(scale: Vector2): void
        set_pivot_offset(pivot_offset: Vector2): void
        
        /** Returns [member offset_left] and [member offset_top]. See also [member position]. */
        get_begin(): Vector2
        
        /** Returns [member offset_right] and [member offset_bottom]. */
        get_end(): Vector2
        get_position(): Vector2
        get_size(): Vector2
        get_rotation(): number /*f64*/
        get_rotation_degrees(): number /*f64*/
        get_scale(): Vector2
        get_pivot_offset(): Vector2
        get_custom_minimum_size(): Vector2
        
        /** Returns the width/height occupied in the parent control. */
        get_parent_area_size(): Vector2
        get_global_position(): Vector2
        
        /** Returns the position of this [Control] in global screen coordinates (i.e. taking window position into account). Mostly useful for editor plugins.  
         *  Equals to [member global_position] if the window is embedded (see [member Viewport.gui_embed_subwindows]).  
         *  **Example usage for showing a popup:**  
         *    
         */
        get_screen_position(): Vector2
        
        /** Returns the position and size of the control in the coordinate system of the containing node. See [member position], [member scale] and [member size].  
         *      
         *  **Note:** If [member rotation] is not the default rotation, the resulting size is not meaningful.  
         *      
         *  **Note:** Setting [member Viewport.gui_snap_controls_to_pixels] to `true` can lead to rounding inaccuracies between the displayed control and the returned [Rect2].  
         */
        get_rect(): Rect2
        
        /** Returns the position and size of the control relative to the containing canvas. See [member global_position] and [member size].  
         *      
         *  **Note:** If the node itself or any parent [CanvasItem] between the node and the canvas have a non default rotation or skew, the resulting size is likely not meaningful.  
         *      
         *  **Note:** Setting [member Viewport.gui_snap_controls_to_pixels] to `true` can lead to rounding inaccuracies between the displayed control and the returned [Rect2].  
         */
        get_global_rect(): Rect2
        set_focus_mode(mode: Control.FocusMode): void
        get_focus_mode(): Control.FocusMode
        
        /** Returns `true` if this is the current focused control. See [member focus_mode]. */
        has_focus(): boolean
        
        /** Steal the focus from another control and become the focused control (see [member focus_mode]).  
         *      
         *  **Note:** Using this method together with [method Callable.call_deferred] makes it more reliable, especially when called inside [method Node._ready].  
         */
        grab_focus(): void
        
        /** Give up the focus. No other control will be able to receive input. */
        release_focus(): void
        
        /** Finds the previous (above in the tree) [Control] that can receive the focus. */
        find_prev_valid_focus(): Control
        
        /** Finds the next (below in the tree) [Control] that can receive the focus. */
        find_next_valid_focus(): Control
        
        /** Finds the next [Control] that can receive the focus on the specified [enum Side].  
         *      
         *  **Note:** This is different from [method get_focus_neighbor], which returns the path of a specified focus neighbor.  
         */
        find_valid_focus_neighbor(side: Side): Control
        set_h_size_flags(flags: Control.SizeFlags): void
        get_h_size_flags(): Control.SizeFlags
        set_stretch_ratio(ratio: number /*f64*/): void
        get_stretch_ratio(): number /*f64*/
        set_v_size_flags(flags: Control.SizeFlags): void
        get_v_size_flags(): Control.SizeFlags
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
         *  See also [method get_theme_stylebox].  
         *  **Example of modifying a property in a StyleBox by duplicating it:**  
         *    
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
         *  See also [method get_theme_color].  
         *  **Example of overriding a label's color and resetting it later:**  
         *    
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
         *  See [method get_theme_color] for details.  
         */
        get_theme_icon(name: StringName, theme_type: StringName = ''): Texture2D
        
        /** Returns a [StyleBox] from the first matching [Theme] in the tree if that [Theme] has a stylebox item with the specified [param name] and [param theme_type].  
         *  See [method get_theme_color] for details.  
         */
        get_theme_stylebox(name: StringName, theme_type: StringName = ''): StyleBox
        
        /** Returns a [Font] from the first matching [Theme] in the tree if that [Theme] has a font item with the specified [param name] and [param theme_type].  
         *  See [method get_theme_color] for details.  
         */
        get_theme_font(name: StringName, theme_type: StringName = ''): Font
        
        /** Returns a font size from the first matching [Theme] in the tree if that [Theme] has a font size item with the specified [param name] and [param theme_type].  
         *  See [method get_theme_color] for details.  
         */
        get_theme_font_size(name: StringName, theme_type: StringName = ''): number /*i64*/
        
        /** Returns a [Color] from the first matching [Theme] in the tree if that [Theme] has a color item with the specified [param name] and [param theme_type]. If [param theme_type] is omitted the class name of the current control is used as the type, or [member theme_type_variation] if it is defined. If the type is a class name its parent classes are also checked, in order of inheritance. If the type is a variation its base types are checked, in order of dependency, then the control's class name and its parent classes are checked.  
         *  For the current control its local overrides are considered first (see [method add_theme_color_override]), then its assigned [member theme]. After the current control, each parent control and its assigned [member theme] are considered; controls without a [member theme] assigned are skipped. If no matching [Theme] is found in the tree, the custom project [Theme] (see [member ProjectSettings.gui/theme/custom]) and the default [Theme] are used (see [ThemeDB]).  
         *    
         */
        get_theme_color(name: StringName, theme_type: StringName = ''): Color
        
        /** Returns a constant from the first matching [Theme] in the tree if that [Theme] has a constant item with the specified [param name] and [param theme_type].  
         *  See [method get_theme_color] for details.  
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
         *  See [method get_theme_color] for details.  
         */
        has_theme_icon(name: StringName, theme_type: StringName = ''): boolean
        
        /** Returns `true` if there is a matching [Theme] in the tree that has a stylebox item with the specified [param name] and [param theme_type].  
         *  See [method get_theme_color] for details.  
         */
        has_theme_stylebox(name: StringName, theme_type: StringName = ''): boolean
        
        /** Returns `true` if there is a matching [Theme] in the tree that has a font item with the specified [param name] and [param theme_type].  
         *  See [method get_theme_color] for details.  
         */
        has_theme_font(name: StringName, theme_type: StringName = ''): boolean
        
        /** Returns `true` if there is a matching [Theme] in the tree that has a font size item with the specified [param name] and [param theme_type].  
         *  See [method get_theme_color] for details.  
         */
        has_theme_font_size(name: StringName, theme_type: StringName = ''): boolean
        
        /** Returns `true` if there is a matching [Theme] in the tree that has a color item with the specified [param name] and [param theme_type].  
         *  See [method get_theme_color] for details.  
         */
        has_theme_color(name: StringName, theme_type: StringName = ''): boolean
        
        /** Returns `true` if there is a matching [Theme] in the tree that has a constant item with the specified [param name] and [param theme_type].  
         *  See [method get_theme_color] for details.  
         */
        has_theme_constant(name: StringName, theme_type: StringName = ''): boolean
        
        /** Returns the default base scale value from the first matching [Theme] in the tree if that [Theme] has a valid [member Theme.default_base_scale] value.  
         *  See [method get_theme_color] for details.  
         */
        get_theme_default_base_scale(): number /*f64*/
        
        /** Returns the default font from the first matching [Theme] in the tree if that [Theme] has a valid [member Theme.default_font] value.  
         *  See [method get_theme_color] for details.  
         */
        get_theme_default_font(): Font
        
        /** Returns the default font size value from the first matching [Theme] in the tree if that [Theme] has a valid [member Theme.default_font_size] value.  
         *  See [method get_theme_color] for details.  
         */
        get_theme_default_font_size(): number /*i64*/
        
        /** Returns the parent control node. */
        get_parent_control(): Control
        set_h_grow_direction(direction: Control.GrowDirection): void
        get_h_grow_direction(): Control.GrowDirection
        set_v_grow_direction(direction: Control.GrowDirection): void
        get_v_grow_direction(): Control.GrowDirection
        set_tooltip_text(hint: string): void
        get_tooltip_text(): string
        
        /** Returns the tooltip text for the position [param at_position] in control's local coordinates, which will typically appear when the cursor is resting over this control. By default, it returns [member tooltip_text].  
         *  This method can be overridden to customize its behavior. See [method _get_tooltip].  
         *      
         *  **Note:** If this method returns an empty [String], no tooltip is displayed.  
         */
        get_tooltip(at_position: Vector2 = Vector2.ZERO): string
        set_default_cursor_shape(shape: Control.CursorShape): void
        get_default_cursor_shape(): Control.CursorShape
        
        /** Returns the mouse cursor shape the control displays on mouse hover. See [enum CursorShape]. */
        get_cursor_shape(position: Vector2 = Vector2.ZERO): Control.CursorShape
        
        /** Sets the focus neighbor for the specified [enum Side] to the [Control] at [param neighbor] node path. A setter method for [member focus_neighbor_bottom], [member focus_neighbor_left], [member focus_neighbor_right] and [member focus_neighbor_top]. */
        set_focus_neighbor(side: Side, neighbor: NodePath): void
        
        /** Returns the focus neighbor for the specified [enum Side]. A getter method for [member focus_neighbor_bottom], [member focus_neighbor_left], [member focus_neighbor_right] and [member focus_neighbor_top].  
         *      
         *  **Note:** To find the next [Control] on the specific [enum Side], even if a neighbor is not assigned, use [method find_valid_focus_neighbor].  
         */
        get_focus_neighbor(side: Side): NodePath
        set_focus_next(next: NodePath): void
        get_focus_next(): NodePath
        set_focus_previous(previous: NodePath): void
        get_focus_previous(): NodePath
        
        /** Forces drag and bypasses [method _get_drag_data] and [method set_drag_preview] by passing [param data] and [param preview]. Drag will start even if the mouse is neither over nor pressed on this control.  
         *  The methods [method _can_drop_data] and [method _drop_data] must be implemented on controls that want to receive drop data.  
         */
        force_drag(data: any, preview: Control): void
        set_mouse_filter(filter: Control.MouseFilter): void
        get_mouse_filter(): Control.MouseFilter
        set_force_pass_scroll_events(force_pass_scroll_events: boolean): void
        is_force_pass_scroll_events(): boolean
        set_clip_contents(enable: boolean): void
        is_clipping_contents(): boolean
        
        /** Creates an [InputEventMouseButton] that attempts to click the control. If the event is received, the control acquires focus.  
         *    
         */
        grab_click_focus(): void
        
        /** Forwards the handling of this control's [method _get_drag_data],  [method _can_drop_data] and [method _drop_data] virtual functions to delegate callables.  
         *  For each argument, if not empty, the delegate callable is used, otherwise the local (virtual) function is used.  
         *  The function format for each callable should be exactly the same as the virtual functions described above.  
         */
        set_drag_forwarding(drag_func: Callable, can_drop_func: Callable, drop_func: Callable): void
        
        /** Shows the given control at the mouse pointer. A good time to call this method is in [method _get_drag_data]. The control must not be in the scene tree. You should not free the control, and you should not keep a reference to the control beyond the duration of the drag. It will be deleted automatically after the drag has ended.  
         *    
         */
        set_drag_preview(control: Control): void
        
        /** Returns `true` if a drag operation is successful. Alternative to [method Viewport.gui_is_drag_successful].  
         *  Best used with [constant Node.NOTIFICATION_DRAG_END].  
         */
        is_drag_successful(): boolean
        
        /** Moves the mouse cursor to [param position], relative to [member position] of this [Control].  
         *      
         *  **Note:** [method warp_mouse] is only supported on Windows, macOS and Linux. It has no effect on Android, iOS and Web.  
         */
        warp_mouse(position: Vector2): void
        set_shortcut_context(node: Node): void
        get_shortcut_context(): Node
        
        /** Invalidates the size cache in this node and in parent nodes up to top level. Intended to be used with [method get_minimum_size] when the return value is changed. Setting [member custom_minimum_size] directly calls this method automatically. */
        update_minimum_size(): void
        set_layout_direction(direction: Control.LayoutDirection): void
        get_layout_direction(): Control.LayoutDirection
        
        /** Returns `true` if layout is right-to-left. */
        is_layout_rtl(): boolean
        set_auto_translate(enable: boolean): void
        is_auto_translating(): boolean
        set_localize_numeral_system(enable: boolean): void
        is_localizing_numeral_system(): boolean
        
        /** Enables whether rendering of [CanvasItem] based children should be clipped to this control's rectangle. If `true`, parts of a child which would be visibly outside of this control's rectangle will not be rendered and won't receive input. */
        clip_contents: boolean
        
        /** The minimum size of the node's bounding rectangle. If you set it to a value greater than (0, 0), the node's bounding rectangle will always have at least this size, even if its content is smaller. If it's set to (0, 0), the node sizes automatically to fit its content, be it a texture or child nodes. */
        custom_minimum_size: Vector2
        
        /** Controls layout direction and text writing direction. Right-to-left layouts are necessary for certain languages (e.g. Arabic and Hebrew). */
        layout_direction: number /*i64*/
        layout_mode: number /*i64*/
        anchors_preset: number /*i64*/
        
        /** Controls the direction on the horizontal axis in which the control should grow if its horizontal minimum size is changed to be greater than its current size, as the control always has to be at least the minimum size. */
        grow_horizontal: number /*i64*/
        
        /** Controls the direction on the vertical axis in which the control should grow if its vertical minimum size is changed to be greater than its current size, as the control always has to be at least the minimum size. */
        grow_vertical: number /*i64*/
        
        /** The size of the node's bounding rectangle, in the node's coordinate system. [Container] nodes update this property automatically. */
        size: Vector2
        
        /** The node's position, relative to its containing node. It corresponds to the rectangle's top-left corner. The property is not affected by [member pivot_offset]. */
        position: Vector2
        
        /** The node's global position, relative to the world (usually to the [CanvasLayer]). */
        global_position: Vector2
        
        /** The node's rotation around its pivot, in radians. See [member pivot_offset] to change the pivot's position.  
         *      
         *  **Note:** This property is edited in the inspector in degrees. If you want to use degrees in a script, use [member rotation_degrees].  
         */
        rotation: number /*f64*/
        
        /** Helper property to access [member rotation] in degrees instead of radians. */
        rotation_degrees: number /*f64*/
        
        /** The node's scale, relative to its [member size]. Change this property to scale the node around its [member pivot_offset]. The Control's [member tooltip_text] will also scale according to this value.  
         *      
         *  **Note:** This property is mainly intended to be used for animation purposes. To support multiple resolutions in your project, use an appropriate viewport stretch mode as described in the [url=$DOCS_URL/tutorials/rendering/multiple_resolutions.html]documentation[/url] instead of scaling Controls individually.  
         *      
         *  **Note:** [member FontFile.oversampling] does  *not*  take [Control] [member scale] into account. This means that scaling up/down will cause bitmap fonts and rasterized (non-MSDF) dynamic fonts to appear blurry or pixelated. To ensure text remains crisp regardless of scale, you can enable MSDF font rendering by enabling [member ProjectSettings.gui/theme/default_font_multichannel_signed_distance_field] (applies to the default project font only), or enabling **Multichannel Signed Distance Field** in the import options of a DynamicFont for custom fonts. On system fonts, [member SystemFont.multichannel_signed_distance_field] can be enabled in the inspector.  
         *      
         *  **Note:** If the Control node is a child of a [Container] node, the scale will be reset to `Vector2(1, 1)` when the scene is instantiated. To set the Control's scale when it's instantiated, wait for one frame using `await get_tree().process_frame` then set its [member scale] property.  
         */
        scale: Vector2
        
        /** By default, the node's pivot is its top-left corner. When you change its [member rotation] or [member scale], it will rotate or scale around this pivot. Set this property to [member size] / 2 to pivot around the Control's center. */
        pivot_offset: Vector2
        
        /** Tells the parent [Container] nodes how they should resize and place the node on the X axis. Use a combination of the [enum SizeFlags] constants to change the flags. See the constants to learn what each does. */
        size_flags_horizontal: number /*i64*/
        
        /** Tells the parent [Container] nodes how they should resize and place the node on the Y axis. Use a combination of the [enum SizeFlags] constants to change the flags. See the constants to learn what each does. */
        size_flags_vertical: number /*i64*/
        
        /** If the node and at least one of its neighbors uses the [constant SIZE_EXPAND] size flag, the parent [Container] will let it take more or less space depending on this property. If this node has a stretch ratio of 2 and its neighbor a ratio of 1, this node will take two thirds of the available space. */
        size_flags_stretch_ratio: number /*f64*/
        
        /** Toggles if any text should automatically change to its translated version depending on the current locale.  
         *  Also decides if the node's strings should be parsed for POT generation.  
         */
        auto_translate: boolean
        
        /** If `true`, automatically converts code line numbers, list indices, [SpinBox] and [ProgressBar] values from the Western Arabic (0..9) to the numeral systems used in current locale.  
         *      
         *  **Note:** Numbers within the text are not automatically converted, it can be done manually, using [method TextServer.format_number].  
         */
        localize_numeral_system: boolean
        
        /** The default tooltip text. The tooltip appears when the user's mouse cursor stays idle over this control for a few moments, provided that the [member mouse_filter] property is not [constant MOUSE_FILTER_IGNORE]. The time required for the tooltip to appear can be changed with the [member ProjectSettings.gui/timers/tooltip_delay_sec] option. See also [method get_tooltip].  
         *  The tooltip popup will use either a default implementation, or a custom one that you can provide by overriding [method _make_custom_tooltip]. The default tooltip includes a [PopupPanel] and [Label] whose theme properties can be customized using [Theme] methods with the `"TooltipPanel"` and `"TooltipLabel"` respectively. For example:  
         *    
         */
        tooltip_text: string
        
        /** Tells Godot which node it should give focus to if the user presses [kbd]Tab[/kbd] on a keyboard by default. You can change the key by editing the [member ProjectSettings.input/ui_focus_next] input action.  
         *  If this property is not set, Godot will select a "best guess" based on surrounding nodes in the scene tree.  
         */
        focus_next: NodePath
        
        /** Tells Godot which node it should give focus to if the user presses [kbd]Shift + Tab[/kbd] on a keyboard by default. You can change the key by editing the [member ProjectSettings.input/ui_focus_prev] input action.  
         *  If this property is not set, Godot will select a "best guess" based on surrounding nodes in the scene tree.  
         */
        focus_previous: NodePath
        
        /** The focus access mode for the control (None, Click or All). Only one Control can be focused at the same time, and it will receive keyboard, gamepad, and mouse signals. */
        focus_mode: number /*i64*/
        
        /** Controls whether the control will be able to receive mouse button input events through [method _gui_input] and how these events should be handled. Also controls whether the control can receive the [signal mouse_entered], and [signal mouse_exited] signals. See the constants to learn what each does. */
        mouse_filter: number /*i64*/
        
        /** When enabled, scroll wheel events processed by [method _gui_input] will be passed to the parent control even if [member mouse_filter] is set to [constant MOUSE_FILTER_STOP]. As it defaults to true, this allows nested scrollable containers to work out of the box.  
         *  You should disable it on the root of your UI if you do not want scroll events to go to the [method Node._unhandled_input] processing.  
         */
        mouse_force_pass_scroll_events: boolean
        
        /** The default cursor shape for this control. Useful for Godot plugins and applications or games that use the system's mouse cursors.  
         *      
         *  **Note:** On Linux, shapes may vary depending on the cursor theme of the system.  
         */
        mouse_default_cursor_shape: number /*i64*/
        
        /** The [Node] which must be a parent of the focused [Control] for the shortcut to be activated. If `null`, the shortcut can be activated when any control is focused (a global shortcut). This allows shortcuts to be accepted only when the user has a certain area of the GUI focused. */
        shortcut_context: Object
        
        /** The [Theme] resource this node and all its [Control] and [Window] children use. If a child node has its own [Theme] resource set, theme items are merged with child's definitions having higher priority.  
         *      
         *  **Note:** [Window] styles will have no effect unless the window is embedded.  
         */
        theme: Theme
        
        /** The name of a theme type variation used by this [Control] to look up its own theme items. When empty, the class name of the node is used (e.g. [code skip-lint]Button` for the [Button] control), as well as the class names of all parent classes (in order of inheritance).  
         *  When set, this property gives the highest priority to the type of the specified name. This type can in turn extend another type, forming a dependency chain. See [method Theme.set_type_variation]. If the theme item cannot be found using this type or its base types, lookup falls back on the class names.  
         *      
         *  **Note:** To look up [Control]'s own items use various `get_theme_*` methods without specifying `theme_type`.  
         *      
         *  **Note:** Theme items are looked for in the tree order, from branch to root, where each [Control] node is checked for its [member theme] property. The earliest match against any type/class name is returned. The project-level Theme and the default Theme are checked last.  
         */
        theme_type_variation: string
        
        /** Emitted when the control changes size. */
        readonly resized: Signal //  => void
        
        /** Emitted when the node receives an [InputEvent]. */
        readonly gui_input: Signal // event: InputEvent => void
        
        /** Emitted when the mouse cursor enters the control's (or any child control's) visible area, that is not occluded behind other Controls or Windows, provided its [member mouse_filter] lets the event reach it and regardless if it's currently focused or not.  
         *      
         *  **Note:** [member CanvasItem.z_index] doesn't affect, which Control receives the signal.  
         */
        readonly mouse_entered: Signal //  => void
        
        /** Emitted when the mouse cursor leaves the control's (and all child control's) visible area, that is not occluded behind other Controls or Windows, provided its [member mouse_filter] lets the event reach it and regardless if it's currently focused or not.  
         *      
         *  **Note:** [member CanvasItem.z_index] doesn't affect, which Control receives the signal.  
         *      
         *  **Note:** If you want to check whether the mouse truly left the area, ignoring any top nodes, you can use code like this:  
         *    
         */
        readonly mouse_exited: Signal //  => void
        
        /** Emitted when the node gains focus. */
        readonly focus_entered: Signal //  => void
        
        /** Emitted when the node loses focus. */
        readonly focus_exited: Signal //  => void
        
        /** Emitted when one of the size flags changes. See [member size_flags_horizontal] and [member size_flags_vertical]. */
        readonly size_flags_changed: Signal //  => void
        
        /** Emitted when the node's minimum size changes. */
        readonly minimum_size_changed: Signal //  => void
        
        /** Emitted when the [constant NOTIFICATION_THEME_CHANGED] notification is sent. */
        readonly theme_changed: Signal //  => void
    }
    class ControlEditorPlugin extends EditorPlugin {
    }
    class ControlEditorPopupButton extends Button {
    }
    class ControlEditorPresetPicker extends MarginContainer {
    }
    class ControlEditorToolbar extends HBoxContainer {
    }
    /** A 2D convex polygon shape used for physics collision.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_convexpolygonshape2d.html  
     */
    class ConvexPolygonShape2D extends Shape2D {
        /** Based on the set of points provided, this assigns the [member points] property using the convex hull algorithm, removing all unneeded points. See [method Geometry2D.convex_hull] for details. */
        set_point_cloud(point_cloud: PackedVector2Array): void
        set_points(points: PackedVector2Array): void
        get_points(): PackedVector2Array
        
        /** The polygon's list of vertices that form a convex hull. Can be in either clockwise or counterclockwise order.  
         *  **Warning:** Only set this property to a list of points that actually form a convex hull. Use [method set_point_cloud] to generate the convex hull of an arbitrary set of points.  
         */
        points: PackedVector2Array
    }
    /** A 3D convex polyhedron shape used for physics collision.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_convexpolygonshape3d.html  
     */
    class ConvexPolygonShape3D extends Shape3D {
        set_points(points: PackedVector3Array): void
        get_points(): PackedVector3Array
        
        /** The list of 3D points forming the convex polygon shape. */
        points: Array
    }
    class CreateDialog extends ConfirmationDialog {
        readonly create: Signal //  => void
        readonly favorites_updated: Signal //  => void
    }
    /** Provides access to advanced cryptographic functionalities.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_crypto.html  
     */
    class Crypto extends RefCounted {
        /** Generates a [PackedByteArray] of cryptographically secure random bytes with given [param size]. */
        generate_random_bytes(size: number /*i64*/): PackedByteArray
        
        /** Generates an RSA [CryptoKey] that can be used for creating self-signed certificates and passed to [method StreamPeerTLS.accept_stream]. */
        generate_rsa(size: number /*i64*/): CryptoKey
        
        /** Generates a self-signed [X509Certificate] from the given [CryptoKey] and [param issuer_name]. The certificate validity will be defined by [param not_before] and [param not_after] (first valid date and last valid date). The [param issuer_name] must contain at least "CN=" (common name, i.e. the domain name), "O=" (organization, i.e. your company name), "C=" (country, i.e. 2 lettered ISO-3166 code of the country the organization is based in).  
         *  A small example to generate an RSA key and a X509 self-signed certificate.  
         *    
         */
        generate_self_signed_certificate(key: CryptoKey, issuer_name: string = 'CN=myserver,O=myorganisation,C=IT', not_before: string = '20140101000000', not_after: string = '20340101000000'): X509Certificate
        
        /** Sign a given [param hash] of type [param hash_type] with the provided private [param key]. */
        sign(hash_type: HashingContext.HashType, hash: PackedByteArray, key: CryptoKey): PackedByteArray
        
        /** Verify that a given [param signature] for [param hash] of type [param hash_type] against the provided public [param key]. */
        verify(hash_type: HashingContext.HashType, hash: PackedByteArray, signature: PackedByteArray, key: CryptoKey): boolean
        
        /** Encrypt the given [param plaintext] with the provided public [param key].  
         *      
         *  **Note:** The maximum size of accepted plaintext is limited by the key size.  
         */
        encrypt(key: CryptoKey, plaintext: PackedByteArray): PackedByteArray
        
        /** Decrypt the given [param ciphertext] with the provided private [param key].  
         *      
         *  **Note:** The maximum size of accepted ciphertext is limited by the key size.  
         */
        decrypt(key: CryptoKey, ciphertext: PackedByteArray): PackedByteArray
        
        /** Generates an [url=https://en.wikipedia.org/wiki/HMAC]HMAC[/url] digest of [param msg] using [param key]. The [param hash_type] parameter is the hashing algorithm that is used for the inner and outer hashes.  
         *  Currently, only [constant HashingContext.HASH_SHA256] and [constant HashingContext.HASH_SHA1] are supported.  
         */
        hmac_digest(hash_type: HashingContext.HashType, key: PackedByteArray, msg: PackedByteArray): PackedByteArray
        
        /** Compares two [PackedByteArray]s for equality without leaking timing information in order to prevent timing attacks.  
         *  See [url=https://paragonie.com/blog/2015/11/preventing-timing-attacks-on-string-comparison-with-double-hmac-strategy]this blog post[/url] for more information.  
         */
        constant_time_compare(trusted: PackedByteArray, received: PackedByteArray): boolean
    }
    /** A cryptographic key (RSA).  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_cryptokey.html  
     */
    class CryptoKey extends Resource {
        /** Saves a key to the given [param path]. If [param public_only] is `true`, only the public key will be saved.  
         *      
         *  **Note:** [param path] should be a "*.pub" file if [param public_only] is `true`, a "*.key" file otherwise.  
         */
        save(path: string, public_only: boolean = false): GodotError
        
        /** Loads a key from [param path]. If [param public_only] is `true`, only the public key will be loaded.  
         *      
         *  **Note:** [param path] should be a "*.pub" file if [param public_only] is `true`, a "*.key" file otherwise.  
         */
        load(path: string, public_only: boolean = false): GodotError
        
        /** Returns `true` if this CryptoKey only has the public part, and not the private one. */
        is_public_only(): boolean
        
        /** Returns a string containing the key in PEM format. If [param public_only] is `true`, only the public key will be included. */
        save_to_string(public_only: boolean = false): string
        
        /** Loads a key from the given [param string_key]. If [param public_only] is `true`, only the public key will be loaded. */
        load_from_string(string_key: string, public_only: boolean = false): GodotError
    }
    /** Six square textures representing the faces of a cube. Commonly used as a skybox.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_cubemap.html  
     */
    class Cubemap extends ImageTextureLayered {
        /** Creates a placeholder version of this resource ([PlaceholderCubemap]). */
        create_placeholder(): Resource
    }
    /** An array of [Cubemap]s, stored together and with a single reference.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_cubemaparray.html  
     */
    class CubemapArray extends ImageTextureLayered {
        /** Creates a placeholder version of this resource ([PlaceholderCubemapArray]). */
        create_placeholder(): Resource
    }
    namespace Curve {
        enum TangentMode {
            /** The tangent on this side of the point is user-defined. */
            TANGENT_FREE = 0,
            
            /** The curve calculates the tangent on this side of the point as the slope halfway towards the adjacent point. */
            TANGENT_LINEAR = 1,
            
            /** The total number of available tangent modes. */
            TANGENT_MODE_COUNT = 2,
        }
    }
    /** A mathematical curve.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_curve.html  
     */
    class Curve extends Resource {
        get_point_count(): number /*i64*/
        set_point_count(count: number /*i64*/): void
        
        /** Adds a point to the curve. For each side, if the `*_mode` is [constant TANGENT_LINEAR], the `*_tangent` angle (in degrees) uses the slope of the curve halfway to the adjacent point. Allows custom assignments to the `*_tangent` angle if `*_mode` is set to [constant TANGENT_FREE]. */
        add_point(position: Vector2, left_tangent: number /*f64*/ = 0, right_tangent: number /*f64*/ = 0, left_mode: Curve.TangentMode = 0, right_mode: Curve.TangentMode = 0): number /*i64*/
        
        /** Removes the point at [param index] from the curve. */
        remove_point(index: number /*i64*/): void
        
        /** Removes all points from the curve. */
        clear_points(): void
        
        /** Returns the curve coordinates for the point at [param index]. */
        get_point_position(index: number /*i64*/): Vector2
        
        /** Assigns the vertical position [param y] to the point at [param index]. */
        set_point_value(index: number /*i64*/, y: number /*f64*/): void
        
        /** Sets the offset from `0.5`. */
        set_point_offset(index: number /*i64*/, offset: number /*f64*/): number /*i64*/
        
        /** Returns the Y value for the point that would exist at the X position [param offset] along the curve. */
        sample(offset: number /*f64*/): number /*f64*/
        
        /** Returns the Y value for the point that would exist at the X position [param offset] along the curve using the baked cache. Bakes the curve's points if not already baked. */
        sample_baked(offset: number /*f64*/): number /*f64*/
        
        /** Returns the left tangent angle (in degrees) for the point at [param index]. */
        get_point_left_tangent(index: number /*i64*/): number /*f64*/
        
        /** Returns the right tangent angle (in degrees) for the point at [param index]. */
        get_point_right_tangent(index: number /*i64*/): number /*f64*/
        
        /** Returns the left [enum TangentMode] for the point at [param index]. */
        get_point_left_mode(index: number /*i64*/): Curve.TangentMode
        
        /** Returns the right [enum TangentMode] for the point at [param index]. */
        get_point_right_mode(index: number /*i64*/): Curve.TangentMode
        
        /** Sets the left tangent angle for the point at [param index] to [param tangent]. */
        set_point_left_tangent(index: number /*i64*/, tangent: number /*f64*/): void
        
        /** Sets the right tangent angle for the point at [param index] to [param tangent]. */
        set_point_right_tangent(index: number /*i64*/, tangent: number /*f64*/): void
        
        /** Sets the left [enum TangentMode] for the point at [param index] to [param mode]. */
        set_point_left_mode(index: number /*i64*/, mode: Curve.TangentMode): void
        
        /** Sets the right [enum TangentMode] for the point at [param index] to [param mode]. */
        set_point_right_mode(index: number /*i64*/, mode: Curve.TangentMode): void
        get_min_value(): number /*f64*/
        set_min_value(min: number /*f64*/): void
        get_max_value(): number /*f64*/
        set_max_value(max: number /*f64*/): void
        
        /** Removes duplicate points, i.e. points that are less than 0.00001 units (engine epsilon value) away from their neighbor on the curve. */
        clean_dupes(): void
        
        /** Recomputes the baked cache of points for the curve. */
        bake(): void
        get_bake_resolution(): number /*i64*/
        set_bake_resolution(resolution: number /*i64*/): void
        _get_data(): Array
        _set_data(data: Array): void
        
        /** The minimum value the curve can reach. */
        min_value: number /*f64*/
        
        /** The maximum value the curve can reach. */
        max_value: number /*f64*/
        
        /** The number of points to include in the baked (i.e. cached) curve data. */
        bake_resolution: number /*i64*/
        _data: number /*i64*/
        
        /** The number of points describing the curve. */
        point_count: any /*Points,point_*/
        
        /** Emitted when [member max_value] or [member min_value] is changed. */
        readonly range_changed: Signal //  => void
    }
    /** Describes a Bézier curve in 2D space.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_curve2d.html  
     */
    class Curve2D extends Resource {
        get_point_count(): number /*i64*/
        set_point_count(count: number /*i64*/): void
        
        /** Adds a point with the specified [param position] relative to the curve's own position, with control points [param in] and [param out]. Appends the new point at the end of the point list.  
         *  If [param index] is given, the new point is inserted before the existing point identified by index [param index]. Every existing point starting from [param index] is shifted further down the list of points. The index must be greater than or equal to `0` and must not exceed the number of existing points in the line. See [member point_count].  
         */
        add_point(position: Vector2, in_: Vector2 = Vector2.ZERO, out_: Vector2 = Vector2.ZERO, index: number /*i64*/ = -1): void
        
        /** Sets the position for the vertex [param idx]. If the index is out of bounds, the function sends an error to the console. */
        set_point_position(idx: number /*i64*/, position: Vector2): void
        
        /** Returns the position of the vertex [param idx]. If the index is out of bounds, the function sends an error to the console, and returns `(0, 0)`. */
        get_point_position(idx: number /*i64*/): Vector2
        
        /** Sets the position of the control point leading to the vertex [param idx]. If the index is out of bounds, the function sends an error to the console. The position is relative to the vertex. */
        set_point_in(idx: number /*i64*/, position: Vector2): void
        
        /** Returns the position of the control point leading to the vertex [param idx]. The returned position is relative to the vertex [param idx]. If the index is out of bounds, the function sends an error to the console, and returns `(0, 0)`. */
        get_point_in(idx: number /*i64*/): Vector2
        
        /** Sets the position of the control point leading out of the vertex [param idx]. If the index is out of bounds, the function sends an error to the console. The position is relative to the vertex. */
        set_point_out(idx: number /*i64*/, position: Vector2): void
        
        /** Returns the position of the control point leading out of the vertex [param idx]. The returned position is relative to the vertex [param idx]. If the index is out of bounds, the function sends an error to the console, and returns `(0, 0)`. */
        get_point_out(idx: number /*i64*/): Vector2
        
        /** Deletes the point [param idx] from the curve. Sends an error to the console if [param idx] is out of bounds. */
        remove_point(idx: number /*i64*/): void
        
        /** Removes all points from the curve. */
        clear_points(): void
        
        /** Returns the position between the vertex [param idx] and the vertex `idx + 1`, where [param t] controls if the point is the first vertex (`t = 0.0`), the last vertex (`t = 1.0`), or in between. Values of [param t] outside the range (`0.0 >= t <=1`) give strange, but predictable results.  
         *  If [param idx] is out of bounds it is truncated to the first or last vertex, and [param t] is ignored. If the curve has no points, the function sends an error to the console, and returns `(0, 0)`.  
         */
        sample(idx: number /*i64*/, t: number /*f64*/): Vector2
        
        /** Returns the position at the vertex [param fofs]. It calls [method sample] using the integer part of [param fofs] as `idx`, and its fractional part as `t`. */
        samplef(fofs: number /*f64*/): Vector2
        set_bake_interval(distance: number /*f64*/): void
        get_bake_interval(): number /*f64*/
        
        /** Returns the total length of the curve, based on the cached points. Given enough density (see [member bake_interval]), it should be approximate enough. */
        get_baked_length(): number /*f64*/
        
        /** Returns a point within the curve at position [param offset], where [param offset] is measured as a pixel distance along the curve.  
         *  To do that, it finds the two cached points where the [param offset] lies between, then interpolates the values. This interpolation is cubic if [param cubic] is set to `true`, or linear if set to `false`.  
         *  Cubic interpolation tends to follow the curves better, but linear is faster (and often, precise enough).  
         */
        sample_baked(offset: number /*f64*/ = 0, cubic: boolean = false): Vector2
        
        /** Similar to [method sample_baked], but returns [Transform2D] that includes a rotation along the curve, with [member Transform2D.origin] as the point position, [member Transform2D.x] as the sideways vector, and [member Transform2D.y] as the forward vector. Returns an empty transform if the length of the curve is `0`.  
         *    
         */
        sample_baked_with_rotation(offset: number /*f64*/ = 0, cubic: boolean = false): Transform2D
        
        /** Returns the cache of points as a [PackedVector2Array]. */
        get_baked_points(): PackedVector2Array
        
        /** Returns the closest point on baked segments (in curve's local space) to [param to_point].  
         *  [param to_point] must be in this curve's local space.  
         */
        get_closest_point(to_point: Vector2): Vector2
        
        /** Returns the closest offset to [param to_point]. This offset is meant to be used in [method sample_baked].  
         *  [param to_point] must be in this curve's local space.  
         */
        get_closest_offset(to_point: Vector2): number /*f64*/
        
        /** Returns a list of points along the curve, with a curvature controlled point density. That is, the curvier parts will have more points than the straighter parts.  
         *  This approximation makes straight segments between each point, then subdivides those segments until the resulting shape is similar enough.  
         *  [param max_stages] controls how many subdivisions a curve segment may face before it is considered approximate enough. Each subdivision splits the segment in half, so the default 5 stages may mean up to 32 subdivisions per curve segment. Increase with care!  
         *  [param tolerance_degrees] controls how many degrees the midpoint of a segment may deviate from the real curve, before the segment has to be subdivided.  
         */
        tessellate(max_stages: number /*i64*/ = 5, tolerance_degrees: number /*f64*/ = 4): PackedVector2Array
        
        /** Returns a list of points along the curve, with almost uniform density. [param max_stages] controls how many subdivisions a curve segment may face before it is considered approximate enough. Each subdivision splits the segment in half, so the default 5 stages may mean up to 32 subdivisions per curve segment. Increase with care!  
         *  [param tolerance_length] controls the maximal distance between two neighboring points, before the segment has to be subdivided.  
         */
        tessellate_even_length(max_stages: number /*i64*/ = 5, tolerance_length: number /*f64*/ = 20): PackedVector2Array
        _get_data(): Dictionary
        _set_data(data: Dictionary): void
        
        /** The distance in pixels between two adjacent cached points. Changing it forces the cache to be recomputed the next time the [method get_baked_points] or [method get_baked_length] function is called. The smaller the distance, the more points in the cache and the more memory it will consume, so use with care. */
        bake_interval: number /*f64*/
        _data: number /*i64*/
        
        /** The number of points describing the curve. */
        point_count: any /*Points,point_*/
    }
    /** Describes a Bézier curve in 3D space.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_curve3d.html  
     */
    class Curve3D extends Resource {
        get_point_count(): number /*i64*/
        set_point_count(count: number /*i64*/): void
        
        /** Adds a point with the specified [param position] relative to the curve's own position, with control points [param in] and [param out]. Appends the new point at the end of the point list.  
         *  If [param index] is given, the new point is inserted before the existing point identified by index [param index]. Every existing point starting from [param index] is shifted further down the list of points. The index must be greater than or equal to `0` and must not exceed the number of existing points in the line. See [member point_count].  
         */
        add_point(position: Vector3, in_: Vector3 = new Vector3(0, 0, 0), out_: Vector3 = new Vector3(0, 0, 0), index: number /*i64*/ = -1): void
        
        /** Sets the position for the vertex [param idx]. If the index is out of bounds, the function sends an error to the console. */
        set_point_position(idx: number /*i64*/, position: Vector3): void
        
        /** Returns the position of the vertex [param idx]. If the index is out of bounds, the function sends an error to the console, and returns `(0, 0, 0)`. */
        get_point_position(idx: number /*i64*/): Vector3
        
        /** Sets the tilt angle in radians for the point [param idx]. If the index is out of bounds, the function sends an error to the console.  
         *  The tilt controls the rotation along the look-at axis an object traveling the path would have. In the case of a curve controlling a [PathFollow3D], this tilt is an offset over the natural tilt the [PathFollow3D] calculates.  
         */
        set_point_tilt(idx: number /*i64*/, tilt: number /*f64*/): void
        
        /** Returns the tilt angle in radians for the point [param idx]. If the index is out of bounds, the function sends an error to the console, and returns `0`. */
        get_point_tilt(idx: number /*i64*/): number /*f64*/
        
        /** Sets the position of the control point leading to the vertex [param idx]. If the index is out of bounds, the function sends an error to the console. The position is relative to the vertex. */
        set_point_in(idx: number /*i64*/, position: Vector3): void
        
        /** Returns the position of the control point leading to the vertex [param idx]. The returned position is relative to the vertex [param idx]. If the index is out of bounds, the function sends an error to the console, and returns `(0, 0, 0)`. */
        get_point_in(idx: number /*i64*/): Vector3
        
        /** Sets the position of the control point leading out of the vertex [param idx]. If the index is out of bounds, the function sends an error to the console. The position is relative to the vertex. */
        set_point_out(idx: number /*i64*/, position: Vector3): void
        
        /** Returns the position of the control point leading out of the vertex [param idx]. The returned position is relative to the vertex [param idx]. If the index is out of bounds, the function sends an error to the console, and returns `(0, 0, 0)`. */
        get_point_out(idx: number /*i64*/): Vector3
        
        /** Deletes the point [param idx] from the curve. Sends an error to the console if [param idx] is out of bounds. */
        remove_point(idx: number /*i64*/): void
        
        /** Removes all points from the curve. */
        clear_points(): void
        
        /** Returns the position between the vertex [param idx] and the vertex `idx + 1`, where [param t] controls if the point is the first vertex (`t = 0.0`), the last vertex (`t = 1.0`), or in between. Values of [param t] outside the range (`0.0 >= t <=1`) give strange, but predictable results.  
         *  If [param idx] is out of bounds it is truncated to the first or last vertex, and [param t] is ignored. If the curve has no points, the function sends an error to the console, and returns `(0, 0, 0)`.  
         */
        sample(idx: number /*i64*/, t: number /*f64*/): Vector3
        
        /** Returns the position at the vertex [param fofs]. It calls [method sample] using the integer part of [param fofs] as `idx`, and its fractional part as `t`. */
        samplef(fofs: number /*f64*/): Vector3
        set_bake_interval(distance: number /*f64*/): void
        get_bake_interval(): number /*f64*/
        set_up_vector_enabled(enable: boolean): void
        is_up_vector_enabled(): boolean
        
        /** Returns the total length of the curve, based on the cached points. Given enough density (see [member bake_interval]), it should be approximate enough. */
        get_baked_length(): number /*f64*/
        
        /** Returns a point within the curve at position [param offset], where [param offset] is measured as a distance in 3D units along the curve. To do that, it finds the two cached points where the [param offset] lies between, then interpolates the values. This interpolation is cubic if [param cubic] is set to `true`, or linear if set to `false`.  
         *  Cubic interpolation tends to follow the curves better, but linear is faster (and often, precise enough).  
         */
        sample_baked(offset: number /*f64*/ = 0, cubic: boolean = false): Vector3
        
        /** Returns a [Transform3D] with `origin` as point position, `basis.x` as sideway vector, `basis.y` as up vector, `basis.z` as forward vector. When the curve length is 0, there is no reasonable way to calculate the rotation, all vectors aligned with global space axes. See also [method sample_baked]. */
        sample_baked_with_rotation(offset: number /*f64*/ = 0, cubic: boolean = false, apply_tilt: boolean = false): Transform3D
        
        /** Returns an up vector within the curve at position [param offset], where [param offset] is measured as a distance in 3D units along the curve. To do that, it finds the two cached up vectors where the [param offset] lies between, then interpolates the values. If [param apply_tilt] is `true`, an interpolated tilt is applied to the interpolated up vector.  
         *  If the curve has no up vectors, the function sends an error to the console, and returns `(0, 1, 0)`.  
         */
        sample_baked_up_vector(offset: number /*f64*/, apply_tilt: boolean = false): Vector3
        
        /** Returns the cache of points as a [PackedVector3Array]. */
        get_baked_points(): PackedVector3Array
        
        /** Returns the cache of tilts as a [PackedFloat32Array]. */
        get_baked_tilts(): PackedFloat32Array
        
        /** Returns the cache of up vectors as a [PackedVector3Array].  
         *  If [member up_vector_enabled] is `false`, the cache will be empty.  
         */
        get_baked_up_vectors(): PackedVector3Array
        
        /** Returns the closest point on baked segments (in curve's local space) to [param to_point].  
         *  [param to_point] must be in this curve's local space.  
         */
        get_closest_point(to_point: Vector3): Vector3
        
        /** Returns the closest offset to [param to_point]. This offset is meant to be used in [method sample_baked] or [method sample_baked_up_vector].  
         *  [param to_point] must be in this curve's local space.  
         */
        get_closest_offset(to_point: Vector3): number /*f64*/
        
        /** Returns a list of points along the curve, with a curvature controlled point density. That is, the curvier parts will have more points than the straighter parts.  
         *  This approximation makes straight segments between each point, then subdivides those segments until the resulting shape is similar enough.  
         *  [param max_stages] controls how many subdivisions a curve segment may face before it is considered approximate enough. Each subdivision splits the segment in half, so the default 5 stages may mean up to 32 subdivisions per curve segment. Increase with care!  
         *  [param tolerance_degrees] controls how many degrees the midpoint of a segment may deviate from the real curve, before the segment has to be subdivided.  
         */
        tessellate(max_stages: number /*i64*/ = 5, tolerance_degrees: number /*f64*/ = 4): PackedVector3Array
        
        /** Returns a list of points along the curve, with almost uniform density. [param max_stages] controls how many subdivisions a curve segment may face before it is considered approximate enough. Each subdivision splits the segment in half, so the default 5 stages may mean up to 32 subdivisions per curve segment. Increase with care!  
         *  [param tolerance_length] controls the maximal distance between two neighboring points, before the segment has to be subdivided.  
         */
        tessellate_even_length(max_stages: number /*i64*/ = 5, tolerance_length: number /*f64*/ = 0.2): PackedVector3Array
        _get_data(): Dictionary
        _set_data(data: Dictionary): void
        
        /** The distance in meters between two adjacent cached points. Changing it forces the cache to be recomputed the next time the [method get_baked_points] or [method get_baked_length] function is called. The smaller the distance, the more points in the cache and the more memory it will consume, so use with care. */
        bake_interval: number /*f64*/
        _data: number /*i64*/
        
        /** The number of points describing the curve. */
        point_count: any /*Points,point_*/
        
        /** If `true`, the curve will bake up vectors used for orientation. This is used when [member PathFollow3D.rotation_mode] is set to [constant PathFollow3D.ROTATION_ORIENTED]. Changing it forces the cache to be recomputed. */
        up_vector_enabled: boolean
    }
    class CurveEditorPlugin extends EditorPlugin {
    }
    class CurvePreviewGenerator extends EditorResourcePreviewGenerator {
    }
    namespace CurveTexture {
        enum TextureMode {
            /** Store the curve equally across the red, green and blue channels. This uses more video memory, but is more compatible with shaders that only read the green and blue values. */
            TEXTURE_MODE_RGB = 0,
            
            /** Store the curve only in the red channel. This saves video memory, but some custom shaders may not be able to work with this. */
            TEXTURE_MODE_RED = 1,
        }
    }
    /** A 1D texture where pixel brightness corresponds to points on a curve.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_curvetexture.html  
     */
    class CurveTexture extends Texture2D {
        set_width(width: number /*i64*/): void
        set_curve(curve: Curve): void
        get_curve(): Curve
        set_texture_mode(texture_mode: CurveTexture.TextureMode): void
        get_texture_mode(): CurveTexture.TextureMode
        _update(): void
        
        /** The width of the texture (in pixels). Higher values make it possible to represent high-frequency data better (such as sudden direction changes), at the cost of increased generation time and memory usage. */
        width: number /*i64*/
        
        /** The format the texture should be generated with. When passing a CurveTexture as an input to a [Shader], this may need to be adjusted. */
        texture_mode: number /*i64*/
        
        /** The [Curve] that is rendered onto the texture. */
        curve: Curve
    }
    /** A 1D texture where the red, green, and blue color channels correspond to points on 3 curves.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_curvexyztexture.html  
     */
    class CurveXYZTexture extends Texture2D {
        set_width(width: number /*i64*/): void
        set_curve_x(curve: Curve): void
        get_curve_x(): Curve
        set_curve_y(curve: Curve): void
        get_curve_y(): Curve
        set_curve_z(curve: Curve): void
        get_curve_z(): Curve
        _update(): void
        
        /** The width of the texture (in pixels). Higher values make it possible to represent high-frequency data better (such as sudden direction changes), at the cost of increased generation time and memory usage. */
        width: number /*i64*/
        
        /** The [Curve] that is rendered onto the texture's red channel. */
        curve_x: Curve
        
        /** The [Curve] that is rendered onto the texture's green channel. */
        curve_y: Curve
        
        /** The [Curve] that is rendered onto the texture's blue channel. */
        curve_z: Curve
    }
    /** Class representing a cylindrical [PrimitiveMesh].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_cylindermesh.html  
     */
    class CylinderMesh extends PrimitiveMesh {
        set_top_radius(radius: number /*f64*/): void
        get_top_radius(): number /*f64*/
        set_bottom_radius(radius: number /*f64*/): void
        get_bottom_radius(): number /*f64*/
        set_height(height: number /*f64*/): void
        get_height(): number /*f64*/
        set_radial_segments(segments: number /*i64*/): void
        get_radial_segments(): number /*i64*/
        set_rings(rings: number /*i64*/): void
        get_rings(): number /*i64*/
        set_cap_top(cap_top: boolean): void
        is_cap_top(): boolean
        set_cap_bottom(cap_bottom: boolean): void
        is_cap_bottom(): boolean
        
        /** Top radius of the cylinder. If set to `0.0`, the top faces will not be generated, resulting in a conic shape. See also [member cap_top]. */
        top_radius: number /*f64*/
        
        /** Bottom radius of the cylinder. If set to `0.0`, the bottom faces will not be generated, resulting in a conic shape. See also [member cap_bottom]. */
        bottom_radius: number /*f64*/
        
        /** Full height of the cylinder. */
        height: number /*f64*/
        
        /** Number of radial segments on the cylinder. Higher values result in a more detailed cylinder/cone at the cost of performance. */
        radial_segments: number /*i64*/
        
        /** Number of edge rings along the height of the cylinder. Changing [member rings] does not have any visual impact unless a shader or procedural mesh tool is used to alter the vertex data. Higher values result in more subdivisions, which can be used to create smoother-looking effects with shaders or procedural mesh tools (at the cost of performance). When not altering the vertex data using a shader or procedural mesh tool, [member rings] should be kept to its default value. */
        rings: number /*i64*/
        
        /** If `true`, generates a cap at the top of the cylinder. This can be set to `false` to speed up generation and rendering when the cap is never seen by the camera. See also [member top_radius].  
         *      
         *  **Note:** If [member top_radius] is `0.0`, cap generation is always skipped even if [member cap_top] is `true`.  
         */
        cap_top: boolean
        
        /** If `true`, generates a cap at the bottom of the cylinder. This can be set to `false` to speed up generation and rendering when the cap is never seen by the camera. See also [member bottom_radius].  
         *      
         *  **Note:** If [member bottom_radius] is `0.0`, cap generation is always skipped even if [member cap_bottom] is `true`.  
         */
        cap_bottom: boolean
    }
    /** A 3D cylinder shape used for physics collision.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_cylindershape3d.html  
     */
    class CylinderShape3D extends Shape3D {
        set_radius(radius: number /*f64*/): void
        get_radius(): number /*f64*/
        set_height(height: number /*f64*/): void
        get_height(): number /*f64*/
        
        /** The cylinder's height. */
        height: number /*f64*/
        
        /** The cylinder's radius. */
        radius: number /*f64*/
    }
    /** Helper class to implement a DTLS server.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_dtlsserver.html  
     */
    class DTLSServer extends RefCounted {
        /** Setup the DTLS server to use the given [param server_options]. See [method TLSOptions.server]. */
        setup(server_options: TLSOptions): GodotError
        
        /** Try to initiate the DTLS handshake with the given [param udp_peer] which must be already connected (see [method PacketPeerUDP.connect_to_host]).  
         *      
         *  **Note:** You must check that the state of the return PacketPeerUDP is [constant PacketPeerDTLS.STATUS_HANDSHAKING], as it is normal that 50% of the new connections will be invalid due to cookie exchange.  
         */
        take_connection(udp_peer: PacketPeerUDP): PacketPeerDTLS
    }
    /** A physics joint that connects two 2D physics bodies with a spring-like force.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_dampedspringjoint2d.html  
     */
    class DampedSpringJoint2D extends Joint2D {
        set_length(length: number /*f64*/): void
        get_length(): number /*f64*/
        set_rest_length(rest_length: number /*f64*/): void
        get_rest_length(): number /*f64*/
        set_stiffness(stiffness: number /*f64*/): void
        get_stiffness(): number /*f64*/
        set_damping(damping: number /*f64*/): void
        get_damping(): number /*f64*/
        
        /** The spring joint's maximum length. The two attached bodies cannot stretch it past this value. */
        length: number /*f64*/
        
        /** When the bodies attached to the spring joint move they stretch or squash it. The joint always tries to resize towards this length. */
        rest_length: number /*f64*/
        
        /** The higher the value, the less the bodies attached to the joint will deform it. The joint applies an opposing force to the bodies, the product of the stiffness multiplied by the size difference from its resting length. */
        stiffness: number /*f64*/
        
        /** The spring joint's damping ratio. A value between `0` and `1`. When the two bodies move into different directions the system tries to align them to the spring axis again. A high [member damping] value forces the attached bodies to align faster. */
        damping: number /*f64*/
    }
    class DebugAdapterParser extends Object {
        req_initialize(params: Dictionary): Dictionary
        req_disconnect(params: Dictionary): Dictionary
        req_launch(params: Dictionary): Dictionary
        req_attach(params: Dictionary): Dictionary
        req_restart(params: Dictionary): Dictionary
        req_terminate(params: Dictionary): Dictionary
        req_configurationDone(params: Dictionary): Dictionary
        req_pause(params: Dictionary): Dictionary
        req_continue(params: Dictionary): Dictionary
        req_threads(params: Dictionary): Dictionary
        req_stackTrace(params: Dictionary): Dictionary
        req_setBreakpoints(params: Dictionary): Dictionary
        req_breakpointLocations(params: Dictionary): Dictionary
        req_scopes(params: Dictionary): Dictionary
        req_variables(params: Dictionary): Dictionary
        req_next(params: Dictionary): Dictionary
        req_stepIn(params: Dictionary): Dictionary
        req_evaluate(params: Dictionary): Dictionary
        ["req_godot/put_msg"]: (params: Dictionary) => Dictionary
    }
    class DebugAdapterServer extends EditorPlugin {
    }
    class DebuggerEditorPlugin extends EditorPlugin {
    }
    namespace Decal {
        enum DecalTexture {
            /** [Texture2D] corresponding to [member texture_albedo]. */
            TEXTURE_ALBEDO = 0,
            
            /** [Texture2D] corresponding to [member texture_normal]. */
            TEXTURE_NORMAL = 1,
            
            /** [Texture2D] corresponding to [member texture_orm]. */
            TEXTURE_ORM = 2,
            
            /** [Texture2D] corresponding to [member texture_emission]. */
            TEXTURE_EMISSION = 3,
            
            /** Max size of [enum DecalTexture] enum. */
            TEXTURE_MAX = 4,
        }
    }
    /** Node that projects a texture onto a [MeshInstance3D].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_decal.html  
     */
    class Decal extends VisualInstance3D {
        set_size(size: Vector3): void
        get_size(): Vector3
        
        /** Sets the [Texture2D] associated with the specified [enum DecalTexture]. This is a convenience method, in most cases you should access the texture directly.  
         *  For example, instead of `$Decal.set_texture(Decal.TEXTURE_ALBEDO, albedo_tex)`, use `$Decal.texture_albedo = albedo_tex`.  
         *  One case where this is better than accessing the texture directly is when you want to copy one Decal's textures to another. For example:  
         *    
         */
        set_texture(type: Decal.DecalTexture, texture: Texture2D): void
        
        /** Returns the [Texture2D] associated with the specified [enum DecalTexture]. This is a convenience method, in most cases you should access the texture directly.  
         *  For example, instead of `albedo_tex = $Decal.get_texture(Decal.TEXTURE_ALBEDO)`, use `albedo_tex = $Decal.texture_albedo`.  
         *  One case where this is better than accessing the texture directly is when you want to copy one Decal's textures to another. For example:  
         *    
         */
        get_texture(type: Decal.DecalTexture): Texture2D
        set_emission_energy(energy: number /*f64*/): void
        get_emission_energy(): number /*f64*/
        set_albedo_mix(energy: number /*f64*/): void
        get_albedo_mix(): number /*f64*/
        set_modulate(color: Color): void
        get_modulate(): Color
        set_upper_fade(fade: number /*f64*/): void
        get_upper_fade(): number /*f64*/
        set_lower_fade(fade: number /*f64*/): void
        get_lower_fade(): number /*f64*/
        set_normal_fade(fade: number /*f64*/): void
        get_normal_fade(): number /*f64*/
        set_enable_distance_fade(enable: boolean): void
        is_distance_fade_enabled(): boolean
        set_distance_fade_begin(distance: number /*f64*/): void
        get_distance_fade_begin(): number /*f64*/
        set_distance_fade_length(distance: number /*f64*/): void
        get_distance_fade_length(): number /*f64*/
        set_cull_mask(mask: number /*i64*/): void
        get_cull_mask(): number /*i64*/
        
        /** Sets the size of the [AABB] used by the decal. All dimensions must be set to a value greater than zero (they will be clamped to `0.001` if this is not the case). The AABB goes from `-size/2` to `size/2`.  
         *      
         *  **Note:** To improve culling efficiency of "hard surface" decals, set their [member upper_fade] and [member lower_fade] to `0.0` and set the Y component of the [member size] as low as possible. This will reduce the decals' AABB size without affecting their appearance.  
         */
        size: Vector3
        
        /** Energy multiplier for the emission texture. This will make the decal emit light at a higher or lower intensity, independently of the albedo color. See also [member modulate]. */
        emission_energy: number /*f64*/
        
        /** Changes the [Color] of the Decal by multiplying the albedo and emission colors with this value. The alpha component is only taken into account when multiplying the albedo color, not the emission color. See also [member emission_energy] and [member albedo_mix] to change the emission and albedo intensity independently of each other. */
        modulate: Color
        
        /** Blends the albedo [Color] of the decal with albedo [Color] of the underlying mesh. This can be set to `0.0` to create a decal that only affects normal or ORM. In this case, an albedo texture is still required as its alpha channel will determine where the normal and ORM will be overridden. See also [member modulate]. */
        albedo_mix: number /*f64*/
        
        /** Fades the Decal if the angle between the Decal's [AABB] and the target surface becomes too large. A value of `0` projects the Decal regardless of angle, a value of `1` limits the Decal to surfaces that are nearly perpendicular.  
         *      
         *  **Note:** Setting [member normal_fade] to a value greater than `0.0` has a small performance cost due to the added normal angle computations.  
         */
        normal_fade: number /*f64*/
        
        /** Sets the curve over which the decal will fade as the surface gets further from the center of the [AABB]. Only positive values are valid (negative values will be clamped to `0.0`). See also [member lower_fade]. */
        upper_fade: number /*f64*/
        
        /** Sets the curve over which the decal will fade as the surface gets further from the center of the [AABB]. Only positive values are valid (negative values will be clamped to `0.0`). See also [member upper_fade]. */
        lower_fade: number /*f64*/
        
        /** If `true`, decals will smoothly fade away when far from the active [Camera3D] starting at [member distance_fade_begin]. The Decal will fade out over [member distance_fade_begin] + [member distance_fade_length], after which it will be culled and not sent to the shader at all. Use this to reduce the number of active Decals in a scene and thus improve performance. */
        distance_fade_enabled: boolean
        
        /** The distance from the camera at which the Decal begins to fade away (in 3D units). */
        distance_fade_begin: number /*f64*/
        
        /** The distance over which the Decal fades (in 3D units). The Decal becomes slowly more transparent over this distance and is completely invisible at the end. Higher values result in a smoother fade-out transition, which is more suited when the camera moves fast. */
        distance_fade_length: number /*f64*/
        
        /** Specifies which [member VisualInstance3D.layers] this decal will project on. By default, Decals affect all layers. This is used so you can specify which types of objects receive the Decal and which do not. This is especially useful so you can ensure that dynamic objects don't accidentally receive a Decal intended for the terrain under them. */
        cull_mask: number /*i64*/
    }
    class DecalGizmoPlugin extends EditorNode3DGizmoPlugin {
    }
    class DefaultThemeEditorPreview extends ThemeEditorPreview {
    }
    class DependencyEditor extends AcceptDialog {
    }
    class DependencyEditorOwners extends AcceptDialog {
    }
    class DependencyErrorDialog extends ConfirmationDialog {
    }
    class DependencyRemoveDialog extends ConfirmationDialog {
        readonly resource_removed: Signal // obj: Object => void
        readonly file_removed: Signal // file: string => void
        readonly folder_removed: Signal // folder: string => void
    }
    /** Provides methods for managing directories and their content.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_diraccess.html  
     */
    class DirAccess extends RefCounted {
        /** Creates a new [DirAccess] object and opens an existing directory of the filesystem. The [param path] argument can be within the project tree (`res://folder`), the user directory (`user://folder`) or an absolute path of the user filesystem (e.g. `/tmp/folder` or `C:\tmp\folder`).  
         *  Returns `null` if opening the directory failed. You can use [method get_open_error] to check the error that occurred.  
         */
        static open(path: string): DirAccess
        
        /** Returns the result of the last [method open] call in the current thread. */
        static get_open_error(): GodotError
        
        /** Initializes the stream used to list all files and directories using the [method get_next] function, closing the currently opened stream if needed. Once the stream has been processed, it should typically be closed with [method list_dir_end].  
         *  Affected by [member include_hidden] and [member include_navigational].  
         *      
         *  **Note:** The order of files and directories returned by this method is not deterministic, and can vary between operating systems. If you want a list of all files or folders sorted alphabetically, use [method get_files] or [method get_directories].  
         */
        list_dir_begin(): GodotError
        
        /** Returns the next element (file or directory) in the current directory.  
         *  The name of the file or directory is returned (and not its full path). Once the stream has been fully processed, the method returns an empty [String] and closes the stream automatically (i.e. [method list_dir_end] would not be mandatory in such a case).  
         */
        get_next(): string
        
        /** Returns whether the current item processed with the last [method get_next] call is a directory (`.` and `..` are considered directories). */
        current_is_dir(): boolean
        
        /** Closes the current stream opened with [method list_dir_begin] (whether it has been fully processed with [method get_next] does not matter). */
        list_dir_end(): void
        
        /** Returns a [PackedStringArray] containing filenames of the directory contents, excluding directories. The array is sorted alphabetically.  
         *  Affected by [member include_hidden].  
         *      
         *  **Note:** When used on a `res://` path in an exported project, only the files actually included in the PCK at the given folder level are returned. In practice, this means that since imported resources are stored in a top-level `.godot/` folder, only paths to `*.gd` and `*.import` files are returned (plus a few files such as `project.godot` or `project.binary` and the project icon). In an exported project, the list of returned files will also vary depending on whether [member ProjectSettings.editor/export/convert_text_resources_to_binary] is `true`.  
         */
        get_files(): PackedStringArray
        
        /** Returns a [PackedStringArray] containing filenames of the directory contents, excluding directories, at the given [param path]. The array is sorted alphabetically.  
         *  Use [method get_files] if you want more control of what gets included.  
         */
        static get_files_at(path: string): PackedStringArray
        
        /** Returns a [PackedStringArray] containing filenames of the directory contents, excluding files. The array is sorted alphabetically.  
         *  Affected by [member include_hidden] and [member include_navigational].  
         */
        get_directories(): PackedStringArray
        
        /** Returns a [PackedStringArray] containing filenames of the directory contents, excluding files, at the given [param path]. The array is sorted alphabetically.  
         *  Use [method get_directories] if you want more control of what gets included.  
         */
        static get_directories_at(path: string): PackedStringArray
        
        /** On Windows, returns the number of drives (partitions) mounted on the current filesystem.  
         *  On macOS, returns the number of mounted volumes.  
         *  On Linux, returns the number of mounted volumes and GTK 3 bookmarks.  
         *  On other platforms, the method returns 0.  
         */
        static get_drive_count(): number /*i64*/
        
        /** On Windows, returns the name of the drive (partition) passed as an argument (e.g. `C:`).  
         *  On macOS, returns the path to the mounted volume passed as an argument.  
         *  On Linux, returns the path to the mounted volume or GTK 3 bookmark passed as an argument.  
         *  On other platforms, or if the requested drive does not exist, the method returns an empty String.  
         */
        static get_drive_name(idx: number /*i64*/): string
        
        /** Returns the currently opened directory's drive index. See [method get_drive_name] to convert returned index to the name of the drive. */
        get_current_drive(): number /*i64*/
        
        /** Changes the currently opened directory to the one passed as an argument. The argument can be relative to the current directory (e.g. `newdir` or `../newdir`), or an absolute path (e.g. `/tmp/newdir` or `res://somedir/newdir`).  
         *  Returns one of the [enum Error] code constants ([constant OK] on success).  
         *      
         *  **Note:** The new directory must be within the same scope, e.g. when you had opened a directory inside `res://`, you can't change it to `user://` directory. If you need to open a directory in another access scope, use [method open] to create a new instance instead.  
         */
        change_dir(to_dir: string): GodotError
        
        /** Returns the absolute path to the currently opened directory (e.g. `res://folder` or `C:\tmp\folder`). */
        get_current_dir(include_drive: boolean = true): string
        
        /** Creates a directory. The argument can be relative to the current directory, or an absolute path. The target directory should be placed in an already existing directory (to create the full path recursively, see [method make_dir_recursive]).  
         *  Returns one of the [enum Error] code constants ([constant OK] on success).  
         */
        make_dir(path: string): GodotError
        
        /** Static version of [method make_dir]. Supports only absolute paths. */
        static make_dir_absolute(path: string): GodotError
        
        /** Creates a target directory and all necessary intermediate directories in its path, by calling [method make_dir] recursively. The argument can be relative to the current directory, or an absolute path.  
         *  Returns one of the [enum Error] code constants ([constant OK] on success).  
         */
        make_dir_recursive(path: string): GodotError
        
        /** Static version of [method make_dir_recursive]. Supports only absolute paths. */
        static make_dir_recursive_absolute(path: string): GodotError
        
        /** Returns whether the target file exists. The argument can be relative to the current directory, or an absolute path.  
         *  For a static equivalent, use [method FileAccess.file_exists].  
         */
        file_exists(path: string): boolean
        
        /** Returns whether the target directory exists. The argument can be relative to the current directory, or an absolute path. */
        dir_exists(path: string): boolean
        
        /** Static version of [method dir_exists]. Supports only absolute paths. */
        static dir_exists_absolute(path: string): boolean
        
        /** Returns the available space on the current directory's disk, in bytes. Returns `0` if the platform-specific method to query the available space fails. */
        get_space_left(): number /*i64*/
        
        /** Copies the [param from] file to the [param to] destination. Both arguments should be paths to files, either relative or absolute. If the destination file exists and is not access-protected, it will be overwritten.  
         *  If [param chmod_flags] is different than `-1`, the Unix permissions for the destination path will be set to the provided value, if available on the current operating system.  
         *  Returns one of the [enum Error] code constants ([constant OK] on success).  
         */
        copy(from: string, to: string, chmod_flags: number /*i64*/ = -1): GodotError
        
        /** Static version of [method copy]. Supports only absolute paths. */
        static copy_absolute(from: string, to: string, chmod_flags: number /*i64*/ = -1): GodotError
        
        /** Renames (move) the [param from] file or directory to the [param to] destination. Both arguments should be paths to files or directories, either relative or absolute. If the destination file or directory exists and is not access-protected, it will be overwritten.  
         *  Returns one of the [enum Error] code constants ([constant OK] on success).  
         */
        rename(from: string, to: string): GodotError
        
        /** Static version of [method rename]. Supports only absolute paths. */
        static rename_absolute(from: string, to: string): GodotError
        
        /** Permanently deletes the target file or an empty directory. The argument can be relative to the current directory, or an absolute path. If the target directory is not empty, the operation will fail.  
         *  If you don't want to delete the file/directory permanently, use [method OS.move_to_trash] instead.  
         *  Returns one of the [enum Error] code constants ([constant OK] on success).  
         */
        remove(path: string): GodotError
        
        /** Static version of [method remove]. Supports only absolute paths. */
        static remove_absolute(path: string): GodotError
        set_include_navigational(enable: boolean): void
        get_include_navigational(): boolean
        set_include_hidden(enable: boolean): void
        get_include_hidden(): boolean
        
        /** Returns `true` if the file system or directory use case sensitive file names.  
         *      
         *  **Note:** This method is implemented on macOS, Linux (for EXT4 and F2FS filesystems only) and Windows. On other platforms, it always returns `true`.  
         */
        is_case_sensitive(path: string): boolean
        
        /** If `true`, `.` and `..` are included when navigating the directory.  
         *  Affects [method list_dir_begin] and [method get_directories].  
         */
        include_navigational: boolean
        
        /** If `true`, hidden files are included when navigating the directory.  
         *  Affects [method list_dir_begin], [method get_directories] and [method get_files].  
         */
        include_hidden: boolean
    }
    /** Directional 2D light from a distance.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_directionallight2d.html  
     */
    class DirectionalLight2D extends Light2D {
        set_max_distance(pixels: number /*f64*/): void
        get_max_distance(): number /*f64*/
        
        /** The height of the light. Used with 2D normal mapping. Ranges from 0 (parallel to the plane) to 1 (perpendicular to the plane). */
        height: number /*f64*/
        
        /** The maximum distance from the camera center objects can be before their shadows are culled (in pixels). Decreasing this value can prevent objects located outside the camera from casting shadows (while also improving performance). [member Camera2D.zoom] is not taken into account by [member max_distance], which means that at higher zoom values, shadows will appear to fade out sooner when zooming onto a given point. */
        max_distance: number /*f64*/
    }
    namespace DirectionalLight3D {
        enum ShadowMode {
            /** Renders the entire scene's shadow map from an orthogonal point of view. This is the fastest directional shadow mode. May result in blurrier shadows on close objects. */
            SHADOW_ORTHOGONAL = 0,
            
            /** Splits the view frustum in 2 areas, each with its own shadow map. This shadow mode is a compromise between [constant SHADOW_ORTHOGONAL] and [constant SHADOW_PARALLEL_4_SPLITS] in terms of performance. */
            SHADOW_PARALLEL_2_SPLITS = 1,
            
            /** Splits the view frustum in 4 areas, each with its own shadow map. This is the slowest directional shadow mode. */
            SHADOW_PARALLEL_4_SPLITS = 2,
        }
        enum SkyMode {
            /** Makes the light visible in both scene lighting and sky rendering. */
            SKY_MODE_LIGHT_AND_SKY = 0,
            
            /** Makes the light visible in scene lighting only (including direct lighting and global illumination). When using this mode, the light will not be visible from sky shaders. */
            SKY_MODE_LIGHT_ONLY = 1,
            
            /** Makes the light visible to sky shaders only. When using this mode the light will not cast light into the scene (either through direct lighting or through global illumination), but can be accessed through sky shaders. This can be useful, for example, when you want to control sky effects without illuminating the scene (during a night cycle, for example). */
            SKY_MODE_SKY_ONLY = 2,
        }
    }
    /** Directional light from a distance, as from the Sun.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_directionallight3d.html  
     */
    class DirectionalLight3D extends Light3D {
        set_shadow_mode(mode: DirectionalLight3D.ShadowMode): void
        get_shadow_mode(): DirectionalLight3D.ShadowMode
        set_blend_splits(enabled: boolean): void
        is_blend_splits_enabled(): boolean
        set_sky_mode(mode: DirectionalLight3D.SkyMode): void
        get_sky_mode(): DirectionalLight3D.SkyMode
        
        /** The light's shadow rendering algorithm. See [enum ShadowMode]. */
        directional_shadow_mode: number /*i64*/
        
        /** If `true`, shadow detail is sacrificed in exchange for smoother transitions between splits. Enabling shadow blend splitting also has a moderate performance cost. This is ignored when [member directional_shadow_mode] is [constant SHADOW_ORTHOGONAL]. */
        directional_shadow_blend_splits: boolean
        
        /** Set whether this [DirectionalLight3D] is visible in the sky, in the scene, or both in the sky and in the scene. See [enum SkyMode] for options. */
        sky_mode: number /*i64*/
    }
    class DirectoryCreateDialog extends ConfirmationDialog {
        readonly dir_created: Signal //  => void
    }
    class DynamicFontImportSettings extends ConfirmationDialog {
    }
    class DynamicFontImportSettingsData extends RefCounted {
    }
    namespace ENetConnection {
        enum CompressionMode {
            /** No compression. This uses the most bandwidth, but has the upside of requiring the fewest CPU resources. This option may also be used to make network debugging using tools like Wireshark easier. */
            COMPRESS_NONE = 0,
            
            /** ENet's built-in range encoding. Works well on small packets, but is not the most efficient algorithm on packets larger than 4 KB. */
            COMPRESS_RANGE_CODER = 1,
            
            /** [url=https://fastlz.org/]FastLZ[/url] compression. This option uses less CPU resources compared to [constant COMPRESS_ZLIB], at the expense of using more bandwidth. */
            COMPRESS_FASTLZ = 2,
            
            /** [url=https://www.zlib.net/]Zlib[/url] compression. This option uses less bandwidth compared to [constant COMPRESS_FASTLZ], at the expense of using more CPU resources. */
            COMPRESS_ZLIB = 3,
            
            /** [url=https://facebook.github.io/zstd/]Zstandard[/url] compression. Note that this algorithm is not very efficient on packets smaller than 4 KB. Therefore, it's recommended to use other compression algorithms in most cases. */
            COMPRESS_ZSTD = 4,
        }
        enum EventType {
            /** An error occurred during [method service]. You will likely need to [method destroy] the host and recreate it. */
            EVENT_ERROR = -1,
            
            /** No event occurred within the specified time limit. */
            EVENT_NONE = 0,
            
            /** A connection request initiated by enet_host_connect has completed. The array will contain the peer which successfully connected. */
            EVENT_CONNECT = 1,
            
            /** A peer has disconnected. This event is generated on a successful completion of a disconnect initiated by [method ENetPacketPeer.peer_disconnect], if a peer has timed out, or if a connection request initialized by [method connect_to_host] has timed out. The array will contain the peer which disconnected. The data field contains user supplied data describing the disconnection, or 0, if none is available. */
            EVENT_DISCONNECT = 2,
            
            /** A packet has been received from a peer. The array will contain the peer which sent the packet and the channel number upon which the packet was received. The received packet will be queued to the associated [ENetPacketPeer]. */
            EVENT_RECEIVE = 3,
        }
        enum HostStatistic {
            /** Total data sent. */
            HOST_TOTAL_SENT_DATA = 0,
            
            /** Total UDP packets sent. */
            HOST_TOTAL_SENT_PACKETS = 1,
            
            /** Total data received. */
            HOST_TOTAL_RECEIVED_DATA = 2,
            
            /** Total UDP packets received. */
            HOST_TOTAL_RECEIVED_PACKETS = 3,
        }
    }
    /** A wrapper class for an [url=http://enet.bespin.org/group__host.html]ENetHost[/url].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_enetconnection.html  
     */
    class ENetConnection extends RefCounted {
        /** Create an ENetHost like [method create_host] which is also bound to the given [param bind_address] and [param bind_port]. */
        create_host_bound(bind_address: string, bind_port: number /*i64*/, max_peers: number /*i64*/ = 32, max_channels: number /*i64*/ = 0, in_bandwidth: number /*i64*/ = 0, out_bandwidth: number /*i64*/ = 0): GodotError
        
        /** Create an ENetHost that will allow up to [param max_peers] connected peers, each allocating up to [param max_channels] channels, optionally limiting bandwidth to [param in_bandwidth] and [param out_bandwidth]. */
        create_host(max_peers: number /*i64*/ = 32, max_channels: number /*i64*/ = 0, in_bandwidth: number /*i64*/ = 0, out_bandwidth: number /*i64*/ = 0): GodotError
        
        /** Destroys the host and all resources associated with it. */
        destroy(): void
        
        /** Initiates a connection to a foreign [param address] using the specified [param port] and allocating the requested [param channels]. Optional [param data] can be passed during connection in the form of a 32 bit integer.  
         *      
         *  **Note:** You must call either [method create_host] or [method create_host_bound] before calling this method.  
         */
        connect_to_host(address: string, port: number /*i64*/, channels: number /*i64*/ = 0, data: number /*i64*/ = 0): ENetPacketPeer
        
        /** Waits for events on the host specified and shuttles packets between the host and its peers. The returned [Array] will have 4 elements. An [enum EventType], the [ENetPacketPeer] which generated the event, the event associated data (if any), the event associated channel (if any). If the generated event is [constant EVENT_RECEIVE], the received packet will be queued to the associated [ENetPacketPeer].  
         *  Call this function regularly to handle connections, disconnections, and to receive new packets.  
         */
        service(timeout: number /*i64*/ = 0): Array
        
        /** Sends any queued packets on the host specified to its designated peers. */
        flush(): void
        
        /** Adjusts the bandwidth limits of a host. */
        bandwidth_limit(in_bandwidth: number /*i64*/ = 0, out_bandwidth: number /*i64*/ = 0): void
        
        /** Limits the maximum allowed channels of future incoming connections. */
        channel_limit(limit: number /*i64*/): void
        
        /** Queues a [param packet] to be sent to all peers associated with the host over the specified [param channel]. See [ENetPacketPeer] `FLAG_*` constants for available packet flags. */
        broadcast(channel: number /*i64*/, packet: PackedByteArray, flags: number /*i64*/): void
        
        /** Sets the compression method used for network packets. These have different tradeoffs of compression speed versus bandwidth, you may need to test which one works best for your use case if you use compression at all.  
         *      
         *  **Note:** Most games' network design involve sending many small packets frequently (smaller than 4 KB each). If in doubt, it is recommended to keep the default compression algorithm as it works best on these small packets.  
         *      
         *  **Note:** The compression mode must be set to the same value on both the server and all its clients. Clients will fail to connect if the compression mode set on the client differs from the one set on the server.  
         */
        compress(mode: ENetConnection.CompressionMode): void
        
        /** Configure this ENetHost to use the custom Godot extension allowing DTLS encryption for ENet servers. Call this right after [method create_host_bound] to have ENet expect peers to connect using DTLS. See [method TLSOptions.server]. */
        dtls_server_setup(server_options: TLSOptions): GodotError
        
        /** Configure this ENetHost to use the custom Godot extension allowing DTLS encryption for ENet clients. Call this before [method connect_to_host] to have ENet connect using DTLS validating the server certificate against [param hostname]. You can pass the optional [param client_options] parameter to customize the trusted certification authorities, or disable the common name verification. See [method TLSOptions.client] and [method TLSOptions.client_unsafe]. */
        dtls_client_setup(hostname: string, client_options: TLSOptions = <any> {} /*compound.type from nil*/): GodotError
        
        /** Configures the DTLS server to automatically drop new connections.  
         *      
         *  **Note:** This method is only relevant after calling [method dtls_server_setup].  
         */
        refuse_new_connections(refuse: boolean): void
        
        /** Returns and resets host statistics. See [enum HostStatistic] for more info. */
        pop_statistic(statistic: ENetConnection.HostStatistic): number /*f64*/
        
        /** Returns the maximum number of channels allowed for connected peers. */
        get_max_channels(): number /*i64*/
        
        /** Returns the local port to which this peer is bound. */
        get_local_port(): number /*i64*/
        
        /** Returns the list of peers associated with this host.  
         *      
         *  **Note:** This list might include some peers that are not fully connected or are still being disconnected.  
         */
        get_peers(): Array
        
        /** Sends a [param packet] toward a destination from the address and port currently bound by this ENetConnection instance.   
         *  This is useful as it serves to establish entries in NAT routing tables on all devices between this bound instance and the public facing internet, allowing a prospective client's connection packets to be routed backward through the NAT device(s) between the public internet and this host.  
         *  This requires forward knowledge of a prospective client's address and communication port as seen by the public internet - after any NAT devices have handled their connection request. This information can be obtained by a [url=https://en.wikipedia.org/wiki/STUN]STUN[/url] service, and must be handed off to your host by an entity that is not the prospective client. This will never work for a client behind a Symmetric NAT due to the nature of the Symmetric NAT routing algorithm, as their IP and Port cannot be known beforehand.  
         */
        socket_send(destination_address: string, destination_port: number /*i64*/, packet: PackedByteArray): void
    }
    /** A MultiplayerPeer implementation using the [url=http://enet.bespin.org/index.html]ENet[/url] library.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_enetmultiplayerpeer.html  
     */
    class ENetMultiplayerPeer extends MultiplayerPeer {
        /** Create server that listens to connections via [param port]. The port needs to be an available, unused port between 0 and 65535. Note that ports below 1024 are privileged and may require elevated permissions depending on the platform. To change the interface the server listens on, use [method set_bind_ip]. The default IP is the wildcard `"*"`, which listens on all available interfaces. [param max_clients] is the maximum number of clients that are allowed at once, any number up to 4095 may be used, although the achievable number of simultaneous clients may be far lower and depends on the application. For additional details on the bandwidth parameters, see [method create_client]. Returns [constant OK] if a server was created, [constant ERR_ALREADY_IN_USE] if this ENetMultiplayerPeer instance already has an open connection (in which case you need to call [method MultiplayerPeer.close] first) or [constant ERR_CANT_CREATE] if the server could not be created. */
        create_server(port: number /*i64*/, max_clients: number /*i64*/ = 32, max_channels: number /*i64*/ = 0, in_bandwidth: number /*i64*/ = 0, out_bandwidth: number /*i64*/ = 0): GodotError
        
        /** Create client that connects to a server at [param address] using specified [param port]. The given address needs to be either a fully qualified domain name (e.g. `"www.example.com"`) or an IP address in IPv4 or IPv6 format (e.g. `"192.168.1.1"`). The [param port] is the port the server is listening on. The [param channel_count] parameter can be used to specify the number of ENet channels allocated for the connection. The [param in_bandwidth] and [param out_bandwidth] parameters can be used to limit the incoming and outgoing bandwidth to the given number of bytes per second. The default of 0 means unlimited bandwidth. Note that ENet will strategically drop packets on specific sides of a connection between peers to ensure the peer's bandwidth is not overwhelmed. The bandwidth parameters also determine the window size of a connection which limits the amount of reliable packets that may be in transit at any given time. Returns [constant OK] if a client was created, [constant ERR_ALREADY_IN_USE] if this ENetMultiplayerPeer instance already has an open connection (in which case you need to call [method MultiplayerPeer.close] first) or [constant ERR_CANT_CREATE] if the client could not be created. If [param local_port] is specified, the client will also listen to the given port; this is useful for some NAT traversal techniques. */
        create_client(address: string, port: number /*i64*/, channel_count: number /*i64*/ = 0, in_bandwidth: number /*i64*/ = 0, out_bandwidth: number /*i64*/ = 0, local_port: number /*i64*/ = 0): GodotError
        
        /** Initialize this [MultiplayerPeer] in mesh mode. The provided [param unique_id] will be used as the local peer network unique ID once assigned as the [member MultiplayerAPI.multiplayer_peer]. In the mesh configuration you will need to set up each new peer manually using [ENetConnection] before calling [method add_mesh_peer]. While this technique is more advanced, it allows for better control over the connection process (e.g. when dealing with NAT punch-through) and for better distribution of the network load (which would otherwise be more taxing on the server). */
        create_mesh(unique_id: number /*i64*/): GodotError
        
        /** Add a new remote peer with the given [param peer_id] connected to the given [param host].  
         *      
         *  **Note:** The [param host] must have exactly one peer in the [constant ENetPacketPeer.STATE_CONNECTED] state.  
         */
        add_mesh_peer(peer_id: number /*i64*/, host: ENetConnection): GodotError
        
        /** The IP used when creating a server. This is set to the wildcard `"*"` by default, which binds to all available interfaces. The given IP needs to be in IPv4 or IPv6 address format, for example: `"192.168.1.1"`. */
        set_bind_ip(ip: string): void
        get_host(): ENetConnection
        
        /** Returns the [ENetPacketPeer] associated to the given [param id]. */
        get_peer(id: number /*i64*/): ENetPacketPeer
        
        /** The underlying [ENetConnection] created after [method create_client] and [method create_server]. */
        readonly host: ENetConnection
    }
    namespace ENetPacketPeer {
        enum PeerState {
            /** The peer is disconnected. */
            STATE_DISCONNECTED = 0,
            
            /** The peer is currently attempting to connect. */
            STATE_CONNECTING = 1,
            
            /** The peer has acknowledged the connection request. */
            STATE_ACKNOWLEDGING_CONNECT = 2,
            
            /** The peer is currently connecting. */
            STATE_CONNECTION_PENDING = 3,
            
            /** The peer has successfully connected, but is not ready to communicate with yet ([constant STATE_CONNECTED]). */
            STATE_CONNECTION_SUCCEEDED = 4,
            
            /** The peer is currently connected and ready to communicate with. */
            STATE_CONNECTED = 5,
            
            /** The peer is slated to disconnect after it has no more outgoing packets to send. */
            STATE_DISCONNECT_LATER = 6,
            
            /** The peer is currently disconnecting. */
            STATE_DISCONNECTING = 7,
            
            /** The peer has acknowledged the disconnection request. */
            STATE_ACKNOWLEDGING_DISCONNECT = 8,
            
            /** The peer has lost connection, but is not considered truly disconnected (as the peer didn't acknowledge the disconnection request). */
            STATE_ZOMBIE = 9,
        }
        enum PeerStatistic {
            /** Mean packet loss of reliable packets as a ratio with respect to the [constant PACKET_LOSS_SCALE]. */
            PEER_PACKET_LOSS = 0,
            
            /** Packet loss variance. */
            PEER_PACKET_LOSS_VARIANCE = 1,
            
            /** The time at which packet loss statistics were last updated (in milliseconds since the connection started). The interval for packet loss statistics updates is 10 seconds, and at least one packet must have been sent since the last statistics update. */
            PEER_PACKET_LOSS_EPOCH = 2,
            
            /** Mean packet round trip time for reliable packets. */
            PEER_ROUND_TRIP_TIME = 3,
            
            /** Variance of the mean round trip time. */
            PEER_ROUND_TRIP_TIME_VARIANCE = 4,
            
            /** Last recorded round trip time for a reliable packet. */
            PEER_LAST_ROUND_TRIP_TIME = 5,
            
            /** Variance of the last trip time recorded. */
            PEER_LAST_ROUND_TRIP_TIME_VARIANCE = 6,
            
            /** The peer's current throttle status. */
            PEER_PACKET_THROTTLE = 7,
            
            /** The maximum number of unreliable packets that should not be dropped. This value is always greater than or equal to `1`. The initial value is equal to [constant PACKET_THROTTLE_SCALE]. */
            PEER_PACKET_THROTTLE_LIMIT = 8,
            
            /** Internal value used to increment the packet throttle counter. The value is hardcoded to `7` and cannot be changed. You probably want to look at [constant PEER_PACKET_THROTTLE_ACCELERATION] instead. */
            PEER_PACKET_THROTTLE_COUNTER = 9,
            
            /** The time at which throttle statistics were last updated (in milliseconds since the connection started). The interval for throttle statistics updates is [constant PEER_PACKET_THROTTLE_INTERVAL]. */
            PEER_PACKET_THROTTLE_EPOCH = 10,
            
            /** The throttle's acceleration factor. Higher values will make ENet adapt to fluctuating network conditions faster, causing unrelaible packets to be sent  *more*  often. The default value is `2`. */
            PEER_PACKET_THROTTLE_ACCELERATION = 11,
            
            /** The throttle's deceleration factor. Higher values will make ENet adapt to fluctuating network conditions faster, causing unrelaible packets to be sent  *less*  often. The default value is `2`. */
            PEER_PACKET_THROTTLE_DECELERATION = 12,
            
            /** The interval over which the lowest mean round trip time should be measured for use by the throttle mechanism (in milliseconds). The default value is `5000`. */
            PEER_PACKET_THROTTLE_INTERVAL = 13,
        }
    }
    /** A wrapper class for an [url=http://enet.bespin.org/group__peer.html]ENetPeer[/url].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_enetpacketpeer.html  
     */
    class ENetPacketPeer extends PacketPeer {
        /** The reference scale for packet loss. See [method get_statistic] and [constant PEER_PACKET_LOSS]. */
        static readonly PACKET_LOSS_SCALE = 65536
        
        /** The reference value for throttle configuration. The default value is `32`. See [method throttle_configure]. */
        static readonly PACKET_THROTTLE_SCALE = 32
        
        /** Mark the packet to be sent as reliable. */
        static readonly FLAG_RELIABLE = 1
        
        /** Mark the packet to be sent unsequenced (unreliable). */
        static readonly FLAG_UNSEQUENCED = 2
        
        /** Mark the packet to be sent unreliable even if the packet is too big and needs fragmentation (increasing the chance of it being dropped). */
        static readonly FLAG_UNRELIABLE_FRAGMENT = 8
        
        /** Request a disconnection from a peer. An [constant ENetConnection.EVENT_DISCONNECT] will be generated during [method ENetConnection.service] once the disconnection is complete. */
        peer_disconnect(data: number /*i64*/ = 0): void
        
        /** Request a disconnection from a peer, but only after all queued outgoing packets are sent. An [constant ENetConnection.EVENT_DISCONNECT] will be generated during [method ENetConnection.service] once the disconnection is complete. */
        peer_disconnect_later(data: number /*i64*/ = 0): void
        
        /** Force an immediate disconnection from a peer. No [constant ENetConnection.EVENT_DISCONNECT] will be generated. The foreign peer is not guaranteed to receive the disconnect notification, and is reset immediately upon return from this function. */
        peer_disconnect_now(data: number /*i64*/ = 0): void
        
        /** Sends a ping request to a peer. ENet automatically pings all connected peers at regular intervals, however, this function may be called to ensure more frequent ping requests. */
        ping(): void
        
        /** Sets the [param ping_interval] in milliseconds at which pings will be sent to a peer. Pings are used both to monitor the liveness of the connection and also to dynamically adjust the throttle during periods of low traffic so that the throttle has reasonable responsiveness during traffic spikes. The default ping interval is `500` milliseconds. */
        ping_interval(ping_interval: number /*i64*/): void
        
        /** Forcefully disconnects a peer. The foreign host represented by the peer is not notified of the disconnection and will timeout on its connection to the local host. */
        reset(): void
        
        /** Queues a [param packet] to be sent over the specified [param channel]. See `FLAG_*` constants for available packet flags. */
        send(channel: number /*i64*/, packet: PackedByteArray, flags: number /*i64*/): GodotError
        
        /** Configures throttle parameter for a peer.  
         *  Unreliable packets are dropped by ENet in response to the varying conditions of the Internet connection to the peer. The throttle represents a probability that an unreliable packet should not be dropped and thus sent by ENet to the peer. By measuring fluctuations in round trip times of reliable packets over the specified [param interval], ENet will either increase the probability by the amount specified in the [param acceleration] parameter, or decrease it by the amount specified in the [param deceleration] parameter (both are ratios to [constant PACKET_THROTTLE_SCALE]).  
         *  When the throttle has a value of [constant PACKET_THROTTLE_SCALE], no unreliable packets are dropped by ENet, and so 100% of all unreliable packets will be sent.  
         *  When the throttle has a value of `0`, all unreliable packets are dropped by ENet, and so 0% of all unreliable packets will be sent.  
         *  Intermediate values for the throttle represent intermediate probabilities between 0% and 100% of unreliable packets being sent. The bandwidth limits of the local and foreign hosts are taken into account to determine a sensible limit for the throttle probability above which it should not raise even in the best of conditions.  
         */
        throttle_configure(interval: number /*i64*/, acceleration: number /*i64*/, deceleration: number /*i64*/): void
        
        /** Sets the timeout parameters for a peer. The timeout parameters control how and when a peer will timeout from a failure to acknowledge reliable traffic. Timeout values are expressed in milliseconds.  
         *  The [param timeout] is a factor that, multiplied by a value based on the average round trip time, will determine the timeout limit for a reliable packet. When that limit is reached, the timeout will be doubled, and the peer will be disconnected if that limit has reached [param timeout_min]. The [param timeout_max] parameter, on the other hand, defines a fixed timeout for which any packet must be acknowledged or the peer will be dropped.  
         */
        set_timeout(timeout: number /*i64*/, timeout_min: number /*i64*/, timeout_max: number /*i64*/): void
        
        /** Returns the IP address of this peer. */
        get_remote_address(): string
        
        /** Returns the remote port of this peer. */
        get_remote_port(): number /*i64*/
        
        /** Returns the requested [param statistic] for this peer. See [enum PeerStatistic]. */
        get_statistic(statistic: ENetPacketPeer.PeerStatistic): number /*f64*/
        
        /** Returns the current peer state. See [enum PeerState]. */
        get_state(): ENetPacketPeer.PeerState
        
        /** Returns the number of channels allocated for communication with peer. */
        get_channels(): number /*i64*/
        
        /** Returns `true` if the peer is currently active (i.e. the associated [ENetConnection] is still valid). */
        is_active(): boolean
    }
    class EditorAbout extends AcceptDialog {
        _version_button_pressed(): void
    }
    class EditorAssetLibrary extends PanelContainer {
        readonly install_asset: Signal // zip_path: string, name: string => void
    }
    class EditorAudioBus extends PanelContainer {
        update_bus(): void
        update_send(): void
        readonly duplicate_request: Signal //  => void
        readonly delete_request: Signal //  => void
        readonly vol_reset_request: Signal //  => void
        readonly drop_end_request: Signal //  => void
        readonly dropped: Signal //  => void
    }
    class EditorAudioBuses extends VBoxContainer {
        _update_bus(_unnamed_arg0: number /*i64*/): void
        _update_sends(): void
        _select_layout(): void
    }
    class EditorAudioMeterNotches extends Control {
        add_notch(_unnamed_arg0: number /*f64*/, _unnamed_arg1: number /*f64*/, _unnamed_arg2: boolean): void
        _draw_audio_notches(): void
    }
    class EditorAudioStreamPreviewPlugin extends EditorResourcePreviewGenerator {
    }
    class EditorAutoloadSettings extends VBoxContainer {
        update_autoload(): void
        autoload_add(_unnamed_arg0: string, _unnamed_arg1: string): boolean
        autoload_remove(_unnamed_arg0: string): void
        readonly autoload_changed: Signal //  => void
    }
    class EditorBitmapPreviewPlugin extends EditorResourcePreviewGenerator {
    }
    namespace EditorBuildProfile {
        enum BuildOption {
            BUILD_OPTION_3D = 0,
            BUILD_OPTION_PHYSICS_2D = 1,
            BUILD_OPTION_PHYSICS_3D = 2,
            BUILD_OPTION_NAVIGATION = 3,
            BUILD_OPTION_XR = 4,
            BUILD_OPTION_RENDERING_DEVICE = 5,
            BUILD_OPTION_OPENGL = 6,
            BUILD_OPTION_VULKAN = 7,
            BUILD_OPTION_TEXT_SERVER_FALLBACK = 8,
            BUILD_OPTION_TEXT_SERVER_ADVANCED = 9,
            BUILD_OPTION_DYNAMIC_FONTS = 10,
            BUILD_OPTION_WOFF2_FONTS = 11,
            BUILD_OPTION_GRPAHITE_FONTS = 12,
            BUILD_OPTION_MSDFGEN = 13,
            BUILD_OPTION_MAX = 14,
        }
        enum BuildOptionCategory {
            BUILD_OPTION_CATEGORY_GENERAL = 0,
            BUILD_OPTION_CATEGORY_TEXT_SERVER = 1,
            BUILD_OPTION_CATEGORY_MAX = 2,
        }
    }
    class EditorBuildProfile extends RefCounted {
        set_disable_class(class_name: StringName, disable: boolean): void
        is_class_disabled(class_name: StringName): boolean
        set_disable_build_option(build_option: EditorBuildProfile.BuildOption, disable: boolean): void
        is_build_option_disabled(build_option: EditorBuildProfile.BuildOption): boolean
        get_build_option_name(build_option: EditorBuildProfile.BuildOption): string
        save_to_file(path: string): GodotError
        load_from_file(path: string): GodotError
    }
    class EditorBuildProfileManager extends AcceptDialog {
        _update_selected_profile(): void
    }
    /** Godot editor's command palette.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_editorcommandpalette.html  
     */
    class EditorCommandPalette extends ConfirmationDialog {
        /** Adds a custom command to EditorCommandPalette.  
         *  - [param command_name]: [String] (Name of the **Command**. This is displayed to the user.)  
         *  - [param key_name]: [String] (Name of the key for a particular **Command**. This is used to uniquely identify the **Command**.)  
         *  - [param binded_callable]: [Callable] (Callable of the **Command**. This will be executed when the **Command** is selected.)  
         *  - [param shortcut_text]: [String] (Shortcut text of the **Command** if available.)  
         */
        add_command(command_name: string, key_name: string, binded_callable: Callable, shortcut_text: string = 'None'): void
        
        /** Removes the custom command from EditorCommandPalette.  
         *  - [param key_name]: [String] (Name of the key for a particular **Command**.)  
         */
        remove_command(key_name: string): void
    }
    class EditorDebuggerInspector extends EditorInspector {
        readonly object_selected: Signal // id: number /*i64*/ => void
        readonly object_edited: Signal // id: number /*i64*/, property: string, : any /*value*/ => void
        readonly object_property_updated: Signal // id: number /*i64*/, property: string => void
    }
    class EditorDebuggerNode extends MarginContainer {
        live_debug_create_node(_unnamed_arg0: NodePath, _unnamed_arg1: string, _unnamed_arg2: string): void
        live_debug_instantiate_node(_unnamed_arg0: NodePath, _unnamed_arg1: string, _unnamed_arg2: string): void
        live_debug_remove_node(_unnamed_arg0: NodePath): void
        live_debug_remove_and_keep_node(_unnamed_arg0: NodePath, _unnamed_arg1: number /*i64*/): void
        live_debug_restore_node(_unnamed_arg0: number /*i64*/, _unnamed_arg1: NodePath, _unnamed_arg2: number /*i64*/): void
        live_debug_duplicate_node(_unnamed_arg0: NodePath, _unnamed_arg1: string): void
        live_debug_reparent_node(_unnamed_arg0: NodePath, _unnamed_arg1: NodePath, _unnamed_arg2: string, _unnamed_arg3: number /*i64*/): void
        readonly goto_script_line: Signal //  => void
        readonly set_execution: Signal // : any /*script*/, line: number /*i64*/ => void
        readonly clear_execution: Signal // : any /*script*/ => void
        readonly breaked: Signal // reallydid: boolean, can_debug: boolean => void
        readonly breakpoint_toggled: Signal // path: string, line: number /*i64*/, enabled: boolean => void
        readonly breakpoint_set_in_tree: Signal // : any /*script*/, line: number /*i64*/, enabled: boolean, debugger: number /*i64*/ => void
        readonly breakpoints_cleared_in_tree: Signal // debugger: number /*i64*/ => void
    }
    /** A base class to implement debugger plugins.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_editordebuggerplugin.html  
     */
    class EditorDebuggerPlugin extends RefCounted {
        /** Override this method to be notified whenever a new [EditorDebuggerSession] is created (the session may be inactive during this stage). */
        /* gdvirtual */ _setup_session(session_id: number /*i64*/): void
        
        /** Override this method to enable receiving messages from the debugger. If [param capture] is "my_message" then messages starting with "my_message:" will be passes to the [method _capture] method. */
        /* gdvirtual */ _has_capture(capture: string): boolean
        
        /** Override this method to process incoming messages. The [param session_id] is the ID of the [EditorDebuggerSession] that received the message (which you can retrieve via [method get_session]). */
        /* gdvirtual */ _capture(message: string, data: Array, session_id: number /*i64*/): boolean
        
        /** Returns the [EditorDebuggerSession] with the given [param id]. */
        get_session(id: number /*i64*/): EditorDebuggerSession
        
        /** Returns an array of [EditorDebuggerSession] currently available to this debugger plugin.  
         *      
         *  **Note:** Sessions in the array may be inactive, check their state via [method EditorDebuggerSession.is_active].  
         */
        get_sessions(): Array
    }
    class EditorDebuggerRemoteObject extends Object {
        get_title(): string
        get_variant(_unnamed_arg0: StringName): any
        clear(): void
        get_remote_object_id(): number /*i64*/
        readonly value_edited: Signal // object_id: number /*i64*/, property: string, : any /*value*/ => void
    }
    /** A class to interact with the editor debugger.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_editordebuggersession.html  
     */
    class EditorDebuggerSession extends RefCounted {
        /** Sends the given [param message] to the attached remote instance, optionally passing additionally [param data]. See [EngineDebugger] for how to retrieve those messages. */
        send_message(message: string, data: Array = <any> {} /*compound.type from 28([object Object])*/): void
        
        /** Toggle the given [param profiler] on the attached remote instance, optionally passing additionally [param data]. See [EngineProfiler] for more details. */
        toggle_profiler(profiler: string, enable: boolean, data: Array = <any> {} /*compound.type from 28([object Object])*/): void
        
        /** Returns `true` if the attached remote instance is currently in the debug loop. */
        is_breaked(): boolean
        
        /** Returns `true` if the attached remote instance can be debugged. */
        is_debuggable(): boolean
        
        /** Returns `true` if the debug session is currently attached to a remote instance. */
        is_active(): boolean
        
        /** Adds the given [param control] to the debug session UI in the debugger bottom panel. */
        add_session_tab(control: Control): void
        
        /** Removes the given [param control] from the debug session UI in the debugger bottom panel. */
        remove_session_tab(control: Control): void
        
        /** Emitted when a remote instance is attached to this session (i.e. the session becomes active). */
        readonly started: Signal //  => void
        
        /** Emitted when a remote instance is detached from this session (i.e. the session becomes inactive). */
        readonly stopped: Signal //  => void
        
        /** Emitted when the attached remote instance enters a break state. If [param can_debug] is `true`, the remote instance will enter the debug loop. */
        readonly breaked: Signal // can_debug: boolean => void
        
        /** Emitted when the attached remote instance exits a break state. */
        readonly continued: Signal //  => void
    }
    class EditorDebuggerTree extends Tree {
        readonly object_selected: Signal // object_id: number /*i64*/, debugger: number /*i64*/ => void
        readonly save_node: Signal // object_id: number /*i64*/, filename: string, debugger: number /*i64*/ => void
        readonly open: Signal //  => void
    }
    class EditorDirDialog extends ConfirmationDialog {
        readonly dir_selected: Signal // dir: string => void
    }
    class EditorExport extends Node {
        readonly export_presets_updated: Signal //  => void
    }
    class EditorExportGDScript extends EditorExportPlugin {
    }
    /** Identifies a supported export platform, and internally provides the functionality of exporting to that platform.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_editorexportplatform.html  
     */
    class EditorExportPlatform extends RefCounted {
        /** Returns the name of the export operating system handled by this [EditorExportPlatform] class, as a friendly string. Possible return values are `Windows`, `Linux`, `macOS`, `Android`, `iOS`, and `Web`. */
        get_os_name(): string
    }
    /** Exporter for Android.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_editorexportplatformandroid.html  
     */
    class EditorExportPlatformAndroid extends EditorExportPlatform {
    }
    /** Exporter for iOS.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_editorexportplatformios.html  
     */
    class EditorExportPlatformIOS extends EditorExportPlatform {
    }
    /** Exporter for Linux/BSD.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_editorexportplatformlinuxbsd.html  
     */
    class EditorExportPlatformLinuxBSD extends EditorExportPlatformPC {
    }
    /** Exporter for macOS.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_editorexportplatformmacos.html  
     */
    class EditorExportPlatformMacOS extends EditorExportPlatform {
    }
    /** Base class for the desktop platform exporter (Windows and Linux/BSD).  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_editorexportplatformpc.html  
     */
    class EditorExportPlatformPC extends EditorExportPlatform {
    }
    /** Exporter for the Web.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_editorexportplatformweb.html  
     */
    class EditorExportPlatformWeb extends EditorExportPlatform {
    }
    /** Exporter for Windows.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_editorexportplatformwindows.html  
     */
    class EditorExportPlatformWindows extends EditorExportPlatformPC {
    }
    /** A script that is executed when exporting the project.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_editorexportplugin.html  
     */
    class EditorExportPlugin extends RefCounted {
        /** Virtual method to be overridden by the user. Called for each exported file, providing arguments that can be used to identify the file. [param path] is the path of the file, [param type] is the [Resource] represented by the file (e.g. [PackedScene]) and [param features] is the list of features for the export.  
         *  Calling [method skip] inside this callback will make the file not included in the export.  
         */
        /* gdvirtual */ _export_file(path: string, type: string, features: PackedStringArray): void
        
        /** Virtual method to be overridden by the user. It is called when the export starts and provides all information about the export. [param features] is the list of features for the export, [param is_debug] is `true` for debug builds, [param path] is the target path for the exported project. [param flags] is only used when running a runnable profile, e.g. when using native run on Android. */
        /* gdvirtual */ _export_begin(features: PackedStringArray, is_debug: boolean, path: string, flags: number /*i64*/): void
        
        /** Virtual method to be overridden by the user. Called when the export is finished. */
        /* gdvirtual */ _export_end(): void
        
        /** Return `true` if this plugin will customize resources based on the platform and features used.  
         *  When enabled, [method _get_customization_configuration_hash], [method _customize_resource] and [method _customize_scene] will be called and must be implemented.  
         */
        /* gdvirtual */ _begin_customize_resources(platform: EditorExportPlatform, features: PackedStringArray): boolean
        
        /** Customize a resource. If changes are made to it, return the same or a new resource. Otherwise, return `null`.  
         *  The  *path*  argument is only used when customizing an actual file, otherwise this means that this resource is part of another one and it will be empty.  
         *  Implementing this method is required if [method _begin_customize_resources] returns `true`.  
         */
        /* gdvirtual */ _customize_resource(resource: Resource, path: string): Resource
        
        /** Return true if this plugin will customize scenes based on the platform and features used. */
        /* gdvirtual */ _begin_customize_scenes(platform: EditorExportPlatform, features: PackedStringArray): boolean
        
        /** Customize a scene. If changes are made to it, return the same or a new scene. Otherwise, return `null`. If a new scene is returned, it is up to you to dispose of the old one.  
         *  Implementing this method is required if [method _begin_customize_scenes] returns `true`.  
         */
        /* gdvirtual */ _customize_scene(scene: Node, path: string): Node
        
        /** Return a hash based on the configuration passed (for both scenes and resources). This helps keep separate caches for separate export configurations.  
         *  Implementing this method is required if [method _begin_customize_resources] returns `true`.  
         */
        /* gdvirtual */ _get_customization_configuration_hash(): number /*i64*/
        
        /** This is called when the customization process for scenes ends. */
        /* gdvirtual */ _end_customize_scenes(): void
        
        /** This is called when the customization process for resources ends. */
        /* gdvirtual */ _end_customize_resources(): void
        
        /** Return a list of export options that can be configured for this export plugin.  
         *  Each element in the return value is a [Dictionary] with the following keys:  
         *  - `option`: A dictionary with the structure documented by [method Object.get_property_list], but all keys are optional.  
         *  - `default_value`: The default value for this option.  
         *  - `update_visibility`: An optional boolean value. If set to `true`, the preset will emit [signal Object.property_list_changed] when the option is changed.  
         */
        /* gdvirtual */ _get_export_options(platform: EditorExportPlatform): Array
        
        /** Return `true`, if the result of [method _get_export_options] has changed and the export options of preset corresponding to [param platform] should be updated. */
        /* gdvirtual */ _should_update_export_options(platform: EditorExportPlatform): boolean
        
        /** Check the requirements for the given [param option] and return a non-empty warning string if they are not met.  
         *      
         *  **Note:** Use [method get_option] to check the value of the export options.  
         */
        /* gdvirtual */ _get_export_option_warning(platform: EditorExportPlatform, option: string): string
        
        /** Return a [PackedStringArray] of additional features this preset, for the given [param platform], should have. */
        /* gdvirtual */ _get_export_features(platform: EditorExportPlatform, debug: boolean): PackedStringArray
        
        /** Return the name identifier of this plugin (for future identification by the exporter). The plugins are sorted by name before exporting.  
         *  Implementing this method is required.  
         */
        /* gdvirtual */ _get_name(): string
        
        /** Return `true` if the plugin supports the given [param platform]. */
        /* gdvirtual */ _supports_platform(platform: EditorExportPlatform): boolean
        
        /** Virtual method to be overridden by the user. This is called to retrieve the set of Android dependencies provided by this plugin. Each returned Android dependency should have the format of an Android remote binary dependency: `org.godot.example:my-plugin:0.0.0`  
         *  For more information see [url=https://developer.android.com/build/dependencies?agpversion=4.1#dependency-types]Android documentation on dependencies[/url].  
         *      
         *  **Note:** Only supported on Android and requires [member EditorExportPlatformAndroid.gradle_build/use_gradle_build] to be enabled.  
         */
        /* gdvirtual */ _get_android_dependencies(platform: EditorExportPlatform, debug: boolean): PackedStringArray
        
        /** Virtual method to be overridden by the user. This is called to retrieve the URLs of Maven repositories for the set of Android dependencies provided by this plugin.  
         *  For more information see [url=https://docs.gradle.org/current/userguide/dependency_management.html#sec:maven_repo]Gradle documentation on dependency management[/url].  
         *      
         *  **Note:** Google's Maven repo and the Maven Central repo are already included by default.  
         *      
         *  **Note:** Only supported on Android and requires [member EditorExportPlatformAndroid.gradle_build/use_gradle_build] to be enabled.  
         */
        /* gdvirtual */ _get_android_dependencies_maven_repos(platform: EditorExportPlatform, debug: boolean): PackedStringArray
        
        /** Virtual method to be overridden by the user. This is called to retrieve the local paths of the Android libraries archive (AAR) files provided by this plugin.  
         *      
         *  **Note:** Relative paths **must** be relative to Godot's `res://addons/` directory. For example, an AAR file located under `res://addons/hello_world_plugin/HelloWorld.release.aar` can be returned as an absolute path using `res://addons/hello_world_plugin/HelloWorld.release.aar` or a relative path using `hello_world_plugin/HelloWorld.release.aar`.  
         *      
         *  **Note:** Only supported on Android and requires [member EditorExportPlatformAndroid.gradle_build/use_gradle_build] to be enabled.  
         */
        /* gdvirtual */ _get_android_libraries(platform: EditorExportPlatform, debug: boolean): PackedStringArray
        
        /** Virtual method to be overridden by the user. This is used at export time to update the contents of the `activity` element in the generated Android manifest.  
         *      
         *  **Note:** Only supported on Android and requires [member EditorExportPlatformAndroid.gradle_build/use_gradle_build] to be enabled.  
         */
        /* gdvirtual */ _get_android_manifest_activity_element_contents(platform: EditorExportPlatform, debug: boolean): string
        
        /** Virtual method to be overridden by the user. This is used at export time to update the contents of the `application` element in the generated Android manifest.  
         *      
         *  **Note:** Only supported on Android and requires [member EditorExportPlatformAndroid.gradle_build/use_gradle_build] to be enabled.  
         */
        /* gdvirtual */ _get_android_manifest_application_element_contents(platform: EditorExportPlatform, debug: boolean): string
        
        /** Virtual method to be overridden by the user. This is used at export time to update the contents of the `manifest` element in the generated Android manifest.  
         *      
         *  **Note:** Only supported on Android and requires [member EditorExportPlatformAndroid.gradle_build/use_gradle_build] to be enabled.  
         */
        /* gdvirtual */ _get_android_manifest_element_contents(platform: EditorExportPlatform, debug: boolean): string
        
        /** Adds a shared object or a directory containing only shared objects with the given [param tags] and destination [param path].  
         *      
         *  **Note:** In case of macOS exports, those shared objects will be added to `Frameworks` directory of app bundle.  
         *  In case of a directory code-sign will error if you place non code object in directory.  
         */
        add_shared_object(path: string, tags: PackedStringArray, target: string): void
        
        /** Adds a static lib from the given [param path] to the iOS project. */
        add_ios_project_static_lib(path: string): void
        
        /** Adds a custom file to be exported. [param path] is the virtual path that can be used to load the file, [param file] is the binary data of the file.  
         *  When called inside [method _export_file] and [param remap] is `true`, the current file will not be exported, but instead remapped to this custom file. [param remap] is ignored when called in other places.  
         */
        add_file(path: string, file: PackedByteArray, remap: boolean): void
        
        /** Adds a static library (*.a) or dynamic library (*.dylib, *.framework) to Linking Phase in iOS's Xcode project. */
        add_ios_framework(path: string): void
        
        /** Adds a dynamic library (*.dylib, *.framework) to Linking Phase in iOS's Xcode project and embeds it into resulting binary.  
         *      
         *  **Note:** For static libraries (*.a) works in same way as [method add_ios_framework].  
         *      
         *  **Note:** This method should not be used for System libraries as they are already present on the device.  
         */
        add_ios_embedded_framework(path: string): void
        
        /** Adds content for iOS Property List files. */
        add_ios_plist_content(plist_content: string): void
        
        /** Adds linker flags for the iOS export. */
        add_ios_linker_flags(flags: string): void
        
        /** Adds an iOS bundle file from the given [param path] to the exported project. */
        add_ios_bundle_file(path: string): void
        
        /** Adds a C++ code to the iOS export. The final code is created from the code appended by each active export plugin. */
        add_ios_cpp_code(code: string): void
        
        /** Adds file or directory matching [param path] to `PlugIns` directory of macOS app bundle.  
         *      
         *  **Note:** This is useful only for macOS exports.  
         */
        add_macos_plugin_file(path: string): void
        
        /** To be called inside [method _export_file]. Skips the current file, so it's not included in the export. */
        skip(): void
        
        /** Returns the current value of an export option supplied by [method _get_export_options]. */
        get_option(name: StringName): any
    }
    namespace EditorFeatureProfile {
        enum Feature {
            /** The 3D editor. If this feature is disabled, the 3D editor won't display but 3D nodes will still display in the Create New Node dialog. */
            FEATURE_3D = 0,
            
            /** The Script tab, which contains the script editor and class reference browser. If this feature is disabled, the Script tab won't display. */
            FEATURE_SCRIPT = 1,
            
            /** The AssetLib tab. If this feature is disabled, the AssetLib tab won't display. */
            FEATURE_ASSET_LIB = 2,
            
            /** Scene tree editing. If this feature is disabled, the Scene tree dock will still be visible but will be read-only. */
            FEATURE_SCENE_TREE = 3,
            
            /** The Node dock. If this feature is disabled, signals and groups won't be visible and modifiable from the editor. */
            FEATURE_NODE_DOCK = 4,
            
            /** The FileSystem dock. If this feature is disabled, the FileSystem dock won't be visible. */
            FEATURE_FILESYSTEM_DOCK = 5,
            
            /** The Import dock. If this feature is disabled, the Import dock won't be visible. */
            FEATURE_IMPORT_DOCK = 6,
            
            /** The History dock. If this feature is disabled, the History dock won't be visible. */
            FEATURE_HISTORY_DOCK = 7,
            
            /** Represents the size of the [enum Feature] enum. */
            FEATURE_MAX = 8,
        }
    }
    /** An editor feature profile which can be used to disable specific features.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_editorfeatureprofile.html  
     */
    class EditorFeatureProfile extends RefCounted {
        /** If [param disable] is `true`, disables the class specified by [param class_name]. When disabled, the class won't appear in the Create New Node dialog. */
        set_disable_class(class_name: StringName, disable: boolean): void
        
        /** Returns `true` if the class specified by [param class_name] is disabled. When disabled, the class won't appear in the Create New Node dialog. */
        is_class_disabled(class_name: StringName): boolean
        
        /** If [param disable] is `true`, disables editing for the class specified by [param class_name]. When disabled, the class will still appear in the Create New Node dialog but the Inspector will be read-only when selecting a node that extends the class. */
        set_disable_class_editor(class_name: StringName, disable: boolean): void
        
        /** Returns `true` if editing for the class specified by [param class_name] is disabled. When disabled, the class will still appear in the Create New Node dialog but the Inspector will be read-only when selecting a node that extends the class. */
        is_class_editor_disabled(class_name: StringName): boolean
        
        /** If [param disable] is `true`, disables editing for [param property] in the class specified by [param class_name]. When a property is disabled, it won't appear in the Inspector when selecting a node that extends the class specified by [param class_name]. */
        set_disable_class_property(class_name: StringName, property: StringName, disable: boolean): void
        
        /** Returns `true` if [param property] is disabled in the class specified by [param class_name]. When a property is disabled, it won't appear in the Inspector when selecting a node that extends the class specified by [param class_name]. */
        is_class_property_disabled(class_name: StringName, property: StringName): boolean
        
        /** If [param disable] is `true`, disables the editor feature specified in [param feature]. When a feature is disabled, it will disappear from the editor entirely. */
        set_disable_feature(feature: EditorFeatureProfile.Feature, disable: boolean): void
        
        /** Returns `true` if the [param feature] is disabled. When a feature is disabled, it will disappear from the editor entirely. */
        is_feature_disabled(feature: EditorFeatureProfile.Feature): boolean
        
        /** Returns the specified [param feature]'s human-readable name. */
        get_feature_name(feature: EditorFeatureProfile.Feature): string
        
        /** Saves the editor feature profile to a file in JSON format. It can then be imported using the feature profile manager's **Import** button or the [method load_from_file] method.  
         *      
         *  **Note:** Feature profiles created via the user interface are saved in the `feature_profiles` directory, as a file with the `.profile` extension. The editor configuration folder can be found by using [method EditorPaths.get_config_dir].  
         */
        save_to_file(path: string): GodotError
        
        /** Loads an editor feature profile from a file. The file must follow the JSON format obtained by using the feature profile manager's **Export** button or the [method save_to_file] method.  
         *      
         *  **Note:** Feature profiles created via the user interface are loaded from the `feature_profiles` directory, as a file with the `.profile` extension. The editor configuration folder can be found by using [method EditorPaths.get_config_dir].  
         */
        load_from_file(path: string): GodotError
    }
    class EditorFeatureProfileManager extends AcceptDialog {
        readonly current_feature_profile_changed: Signal //  => void
    }
    namespace EditorFileDialog {
        enum FileMode {
            /** The [EditorFileDialog] can select only one file. Accepting the window will open the file. */
            FILE_MODE_OPEN_FILE = 0,
            
            /** The [EditorFileDialog] can select multiple files. Accepting the window will open all files. */
            FILE_MODE_OPEN_FILES = 1,
            
            /** The [EditorFileDialog] can select only one directory. Accepting the window will open the directory. */
            FILE_MODE_OPEN_DIR = 2,
            
            /** The [EditorFileDialog] can select a file or directory. Accepting the window will open it. */
            FILE_MODE_OPEN_ANY = 3,
            
            /** The [EditorFileDialog] can select only one file. Accepting the window will save the file. */
            FILE_MODE_SAVE_FILE = 4,
        }
        enum Access {
            /** The [EditorFileDialog] can only view `res://` directory contents. */
            ACCESS_RESOURCES = 0,
            
            /** The [EditorFileDialog] can only view `user://` directory contents. */
            ACCESS_USERDATA = 1,
            
            /** The [EditorFileDialog] can view the entire local file system. */
            ACCESS_FILESYSTEM = 2,
        }
        enum DisplayMode {
            /** The [EditorFileDialog] displays resources as thumbnails. */
            DISPLAY_THUMBNAILS = 0,
            
            /** The [EditorFileDialog] displays resources as a list of filenames. */
            DISPLAY_LIST = 1,
        }
    }
    /** A modified version of [FileDialog] used by the editor.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_editorfiledialog.html  
     */
    class EditorFileDialog extends ConfirmationDialog {
        _cancel_pressed(): void
        
        /** Removes all filters except for "All Files (*)". */
        clear_filters(): void
        
        /** Adds a comma-delimited file name [param filter] option to the [EditorFileDialog] with an optional [param description], which restricts what files can be picked.  
         *  A [param filter] should be of the form `"filename.extension"`, where filename and extension can be `*` to match any string. Filters starting with `.` (i.e. empty filenames) are not allowed.  
         *  For example, a [param filter] of `"*.tscn, *.scn"` and a [param description] of `"Scenes"` results in filter text "Scenes (*.tscn, *.scn)".  
         */
        add_filter(filter: string, description: string = ''): void
        set_filters(filters: PackedStringArray): void
        get_filters(): PackedStringArray
        get_current_dir(): string
        get_current_file(): string
        get_current_path(): string
        set_current_dir(dir: string): void
        set_current_file(file: string): void
        set_current_path(path: string): void
        set_file_mode(mode: EditorFileDialog.FileMode): void
        get_file_mode(): EditorFileDialog.FileMode
        
        /** Returns the [VBoxContainer] used to display the file system.  
         *  **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [member CanvasItem.visible] property.  
         */
        get_vbox(): VBoxContainer
        
        /** Returns the LineEdit for the selected file.  
         *  **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [member CanvasItem.visible] property.  
         */
        get_line_edit(): LineEdit
        set_access(access: EditorFileDialog.Access): void
        get_access(): EditorFileDialog.Access
        set_show_hidden_files(show: boolean): void
        is_showing_hidden_files(): boolean
        _thumbnail_done(_unnamed_arg0: string, _unnamed_arg1: Texture2D, _unnamed_arg2: Texture2D, _unnamed_arg3: any): void
        set_display_mode(mode: EditorFileDialog.DisplayMode): void
        get_display_mode(): EditorFileDialog.DisplayMode
        _thumbnail_result(_unnamed_arg0: string, _unnamed_arg1: Texture2D, _unnamed_arg2: Texture2D, _unnamed_arg3: any): void
        set_disable_overwrite_warning(disable: boolean): void
        is_overwrite_warning_disabled(): boolean
        
        /** Adds the given [param menu] to the side of the file dialog with the given [param title] text on top. Only one side menu is allowed. */
        add_side_menu(menu: Control, title: string = ''): void
        
        /** Notify the [EditorFileDialog] that its view of the data is no longer accurate. Updates the view contents on next view update. */
        invalidate(): void
        
        /** The location from which the user may select a file, including `res://`, `user://`, and the local file system. */
        access: number /*i64*/
        
        /** The view format in which the [EditorFileDialog] displays resources to the user. */
        display_mode: number /*i64*/
        
        /** The dialog's open or save mode, which affects the selection behavior. See [enum FileMode]. */
        file_mode: number /*i64*/
        
        /** The currently occupied directory. */
        current_dir: string
        
        /** The currently selected file. */
        current_file: string
        
        /** The file system path in the address bar. */
        current_path: string
        
        /** The available file type filters. For example, this shows only `.png` and `.gd` files: `set_filters(PackedStringArray(["*.png ; PNG Images","*.gd ; GDScript Files"]))`. Multiple file types can also be specified in a single filter. `"*.png, *.jpg, *.jpeg ; Supported Images"` will show both PNG and JPEG files when selected. */
        filters: PackedStringArray
        
        /** If `true`, hidden files and directories will be visible in the [EditorFileDialog]. This property is synchronized with [member EditorSettings.filesystem/file_dialog/show_hidden_files]. */
        show_hidden_files: boolean
        
        /** If `true`, the [EditorFileDialog] will not warn the user before overwriting files. */
        disable_overwrite_warning: boolean
        
        /** Emitted when a file is selected. */
        readonly file_selected: Signal // path: string => void
        
        /** Emitted when multiple files are selected. */
        readonly files_selected: Signal // paths: PackedStringArray => void
        
        /** Emitted when a directory is selected. */
        readonly dir_selected: Signal // dir: string => void
    }
    class EditorFileServer extends Object {
    }
    /** Resource filesystem, as the editor sees it.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_editorfilesystem.html  
     */
    class EditorFileSystem extends Node {
        /** Gets the root directory object. */
        get_filesystem(): EditorFileSystemDirectory
        
        /** Returns `true` if the filesystem is being scanned. */
        is_scanning(): boolean
        
        /** Returns the scan progress for 0 to 1 if the FS is being scanned. */
        get_scanning_progress(): number /*f64*/
        
        /** Scan the filesystem for changes. */
        scan(): void
        
        /** Check if the source of any imported resource changed. */
        scan_sources(): void
        
        /** Add a file in an existing directory, or schedule file information to be updated on editor restart. Can be used to update text files saved by an external program.  
         *  This will not import the file. To reimport, call [method reimport_files] or [method scan] methods.  
         */
        update_file(path: string): void
        
        /** Returns a view into the filesystem at [param path]. */
        get_filesystem_path(path: string): EditorFileSystemDirectory
        
        /** Returns the resource type of the file, given the full path. This returns a string such as `"Resource"` or `"GDScript"`,  *not*  a file extension such as `".gd"`. */
        get_file_type(path: string): string
        
        /** Reimports a set of files. Call this if these files or their `.import` files were directly edited by script or an external program.  
         *  If the file type changed or the file was newly created, use [method update_file] or [method scan].  
         *      
         *  **Note:** This function blocks until the import is finished. However, the main loop iteration, including timers and [method Node._process], will occur during the import process due to progress bar updates. Avoid calls to [method reimport_files] or [method scan] while an import is in progress.  
         */
        reimport_files(files: PackedStringArray): void
        
        /** Emitted if the filesystem changed. */
        readonly filesystem_changed: Signal //  => void
        
        /** Emitted when the list of global script classes gets updated. */
        readonly script_classes_updated: Signal //  => void
        
        /** Emitted if the source of any imported file changed. */
        readonly sources_changed: Signal // exist: boolean => void
        
        /** Emitted if a resource is reimported. */
        readonly resources_reimported: Signal // resources: PackedStringArray => void
        
        /** Emitted if at least one resource is reloaded when the filesystem is scanned. */
        readonly resources_reload: Signal // resources: PackedStringArray => void
    }
    /** A directory for the resource filesystem.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_editorfilesystemdirectory.html  
     */
    class EditorFileSystemDirectory extends Object {
        /** Returns the number of subdirectories in this directory. */
        get_subdir_count(): number /*i64*/
        
        /** Returns the subdirectory at index [param idx]. */
        get_subdir(idx: number /*i64*/): EditorFileSystemDirectory
        
        /** Returns the number of files in this directory. */
        get_file_count(): number /*i64*/
        
        /** Returns the name of the file at index [param idx]. */
        get_file(idx: number /*i64*/): string
        
        /** Returns the path to the file at index [param idx]. */
        get_file_path(idx: number /*i64*/): string
        
        /** Returns the resource type of the file at index [param idx]. This returns a string such as `"Resource"` or `"GDScript"`,  *not*  a file extension such as `".gd"`. */
        get_file_type(idx: number /*i64*/): StringName
        
        /** Returns the name of the script class defined in the file at index [param idx]. If the file doesn't define a script class using the `class_name` syntax, this will return an empty string. */
        get_file_script_class_name(idx: number /*i64*/): string
        
        /** Returns the base class of the script class defined in the file at index [param idx]. If the file doesn't define a script class using the `class_name` syntax, this will return an empty string. */
        get_file_script_class_extends(idx: number /*i64*/): string
        
        /** Returns `true` if the file at index [param idx] imported properly. */
        get_file_import_is_valid(idx: number /*i64*/): boolean
        
        /** Returns the name of this directory. */
        get_name(): string
        
        /** Returns the path to this directory. */
        get_path(): string
        
        /** Returns the parent directory for this directory or `null` if called on a directory at `res://` or `user://`. */
        get_parent(): EditorFileSystemDirectory
        
        /** Returns the index of the file with name [param name] or `-1` if not found. */
        find_file_index(name: string): number /*i64*/
        
        /** Returns the index of the directory with name [param name] or `-1` if not found. */
        find_dir_index(name: string): number /*i64*/
    }
    /** Used to query and configure import format support.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_editorfilesystemimportformatsupportquery.html  
     */
    class EditorFileSystemImportFormatSupportQuery extends RefCounted {
        /** Return whether this importer is active. */
        /* gdvirtual */ _is_active(): boolean
        
        /** Return the file extensions supported. */
        /* gdvirtual */ _get_file_extensions(): PackedStringArray
        
        /** Query support. Return false if import must not continue. */
        /* gdvirtual */ _query(): boolean
    }
    class EditorFileSystemImportFormatSupportQueryFBX extends EditorFileSystemImportFormatSupportQuery {
    }
    class EditorFontPreviewPlugin extends EditorResourcePreviewGenerator {
    }
    class EditorGradientPreviewPlugin extends EditorResourcePreviewGenerator {
    }
    class EditorHelpBit extends MarginContainer {
        set_text(text: string): void
        readonly request_hide: Signal //  => void
    }
    class EditorHelpSearch extends ConfirmationDialog {
        readonly go_to_help: Signal //  => void
    }
    class EditorImagePreviewPlugin extends EditorResourcePreviewGenerator {
    }
    class EditorImportBlendRunner extends Node {
    }
    /** Registers a custom resource importer in the editor. Use the class to parse any file and import it as a new resource type.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_editorimportplugin.html  
     */
    class EditorImportPlugin extends ResourceImporter {
        /** Gets the unique name of the importer. */
        /* gdvirtual */ _get_importer_name(): string
        
        /** Gets the name to display in the import window. You should choose this name as a continuation to "Import as", e.g. "Import as Special Mesh". */
        /* gdvirtual */ _get_visible_name(): string
        
        /** Gets the number of initial presets defined by the plugin. Use [method _get_import_options] to get the default options for the preset and [method _get_preset_name] to get the name of the preset. */
        /* gdvirtual */ _get_preset_count(): number /*i64*/
        
        /** Gets the name of the options preset at this index. */
        /* gdvirtual */ _get_preset_name(preset_index: number /*i64*/): string
        
        /** Gets the list of file extensions to associate with this loader (case-insensitive). e.g. `["obj"]`. */
        /* gdvirtual */ _get_recognized_extensions(): PackedStringArray
        
        /** Gets the options and default values for the preset at this index. Returns an Array of Dictionaries with the following keys: `name`, `default_value`, `property_hint` (optional), `hint_string` (optional), `usage` (optional). */
        /* gdvirtual */ _get_import_options(path: string, preset_index: number /*i64*/): Array
        
        /** Gets the extension used to save this resource in the `.godot/imported` directory (see [member ProjectSettings.application/config/use_hidden_project_data_directory]). */
        /* gdvirtual */ _get_save_extension(): string
        
        /** Gets the Godot resource type associated with this loader. e.g. `"Mesh"` or `"Animation"`. */
        /* gdvirtual */ _get_resource_type(): string
        
        /** Gets the priority of this plugin for the recognized extension. Higher priority plugins will be preferred. The default priority is `1.0`. */
        /* gdvirtual */ _get_priority(): number /*f64*/
        
        /** Gets the order of this importer to be run when importing resources. Importers with  *lower*  import orders will be called first, and higher values will be called later. Use this to ensure the importer runs after the dependencies are already imported. The default import order is `0` unless overridden by a specific importer. See [enum ResourceImporter.ImportOrder] for some predefined values. */
        /* gdvirtual */ _get_import_order(): number /*i64*/
        
        /** This method can be overridden to hide specific import options if conditions are met. This is mainly useful for hiding options that depend on others if one of them is disabled. For example:  
         *    
         *  Returns `true` to make all options always visible.  
         */
        /* gdvirtual */ _get_option_visibility(path: string, option_name: StringName, options: Dictionary): boolean
        
        /** Imports [param source_file] into [param save_path] with the import [param options] specified. The [param platform_variants] and [param gen_files] arrays will be modified by this function.  
         *  This method must be overridden to do the actual importing work. See this class' description for an example of overriding this method.  
         */
        /* gdvirtual */ _import(source_file: string, save_path: string, options: Dictionary, platform_variants: Array, gen_files: Array): GodotError
        
        /** This function can only be called during the [method _import] callback and it allows manually importing resources from it. This is useful when the imported file generates external resources that require importing (as example, images). Custom parameters for the ".import" file can be passed via the [param custom_options]. Additionally, in cases where multiple importers can handle a file, the [param custom_importer] ca be specified to force a specific one. This function performs a resource import and returns immediately with a success or error code. [param generator_parameters] defines optional extra metadata which will be stored as [code skip-lint]generator_parameters` in the `remap` section of the `.import` file, for example to store a md5 hash of the source data. */
        append_import_external_resource(path: string, custom_options: Dictionary = <any> {} /*compound.type from 27([object Object])*/, custom_importer: string = '', generator_parameters: any = <any> {} /*compound.type from nil*/): GodotError
    }
    /** A control used to edit properties of an object.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_editorinspector.html  
     */
    class EditorInspector extends ScrollContainer {
        _edit_request_change(_unnamed_arg0: Object, _unnamed_arg1: string): void
        
        /** Gets the path of the currently selected property. */
        get_selected_path(): string
        
        /** Returns the object currently selected in this inspector. */
        get_edited_object(): Object
        
        /** Emitted when a property is selected in the inspector. */
        readonly property_selected: Signal // property: string => void
        
        /** Emitted when a property is keyed in the inspector. Properties can be keyed by clicking the "key" icon next to a property when the Animation panel is toggled. */
        readonly property_keyed: Signal // property: string, value: any, advance: boolean => void
        
        /** Emitted when a property is removed from the inspector. */
        readonly property_deleted: Signal // property: string => void
        
        /** Emitted when a resource is selected in the inspector. */
        readonly resource_selected: Signal // resource: Resource, path: string => void
        
        /** Emitted when the Edit button of an [Object] has been pressed in the inspector. This is mainly used in the remote scene tree Inspector. */
        readonly object_id_selected: Signal // id: number /*i64*/ => void
        
        /** Emitted when a property is edited in the inspector. */
        readonly property_edited: Signal // property: string => void
        
        /** Emitted when a boolean property is toggled in the inspector.  
         *      
         *  **Note:** This signal is never emitted if the internal `autoclear` property enabled. Since this property is always enabled in the editor inspector, this signal is never emitted by the editor itself.  
         */
        readonly property_toggled: Signal // property: string, checked: boolean => void
        
        /** Emitted when the object being edited by the inspector has changed. */
        readonly edited_object_changed: Signal //  => void
        
        /** Emitted when a property that requires a restart to be applied is edited in the inspector. This is only used in the Project Settings and Editor Settings. */
        readonly restart_requested: Signal //  => void
    }
    class EditorInspectorCategory extends Control {
    }
    class EditorInspectorDefaultPlugin extends EditorInspectorPlugin {
    }
    /** Plugin for adding custom property editors on the inspector.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_editorinspectorplugin.html  
     */
    class EditorInspectorPlugin extends RefCounted {
        /** Returns `true` if this object can be handled by this plugin. */
        /* gdvirtual */ _can_handle(object: Object): boolean
        
        /** Called to allow adding controls at the beginning of the property list for [param object]. */
        /* gdvirtual */ _parse_begin(object: Object): void
        
        /** Called to allow adding controls at the beginning of a category in the property list for [param object]. */
        /* gdvirtual */ _parse_category(object: Object, category: string): void
        
        /** Called to allow adding controls at the beginning of a group or a sub-group in the property list for [param object]. */
        /* gdvirtual */ _parse_group(object: Object, group: string): void
        
        /** Called to allow adding property-specific editors to the property list for [param object]. The added editor control must extend [EditorProperty]. Returning `true` removes the built-in editor for this property, otherwise allows to insert a custom editor before the built-in one. */
        /* gdvirtual */ _parse_property(object: Object, type: Variant.Type, name: string, hint_type: PropertyHint, hint_string: string, usage_flags: PropertyUsageFlags, wide: boolean): boolean
        
        /** Called to allow adding controls at the end of the property list for [param object]. */
        /* gdvirtual */ _parse_end(object: Object): void
        
        /** Adds a custom control, which is not necessarily a property editor. */
        add_custom_control(control: Control): void
        
        /** Adds a property editor for an individual property. The [param editor] control must extend [EditorProperty]. */
        add_property_editor(property: string, editor: Control, add_to_end: boolean = false): void
        
        /** Adds an editor that allows modifying multiple properties. The [param editor] control must extend [EditorProperty]. */
        add_property_editor_for_multiple_properties(label: string, properties: PackedStringArray, editor: Control): void
    }
    class EditorInspectorPlugin3DTexture extends EditorInspectorPlugin {
    }
    class EditorInspectorPluginAnimationTrackKeyEdit extends EditorInspectorPlugin {
    }
    class EditorInspectorPluginAudioStream extends EditorInspectorPlugin {
    }
    class EditorInspectorPluginBitMap extends EditorInspectorPlugin {
    }
    class EditorInspectorPluginBoneMap extends EditorInspectorPlugin {
    }
    class EditorInspectorPluginControl extends EditorInspectorPlugin {
    }
    class EditorInspectorPluginCurve extends EditorInspectorPlugin {
    }
    class EditorInspectorPluginFontPreview extends EditorInspectorPlugin {
    }
    class EditorInspectorPluginFontVariation extends EditorInspectorPlugin {
    }
    class EditorInspectorPluginGradient extends EditorInspectorPlugin {
    }
    class EditorInspectorPluginGradientTexture2D extends EditorInspectorPlugin {
    }
    class EditorInspectorPluginInputEvent extends EditorInspectorPlugin {
    }
    class EditorInspectorPluginLayeredTexture extends EditorInspectorPlugin {
    }
    class EditorInspectorPluginMaterial extends EditorInspectorPlugin {
    }
    class EditorInspectorPluginMesh extends EditorInspectorPlugin {
    }
    class EditorInspectorPluginPackedScene extends EditorInspectorPlugin {
    }
    class EditorInspectorPluginSkeleton extends EditorInspectorPlugin {
    }
    class EditorInspectorPluginStyleBox extends EditorInspectorPlugin {
    }
    class EditorInspectorPluginSubViewportPreview extends EditorInspectorPluginTexture {
    }
    class EditorInspectorPluginSystemFont extends EditorInspectorPlugin {
    }
    class EditorInspectorPluginTexture extends EditorInspectorPlugin {
    }
    class EditorInspectorPluginTextureRegion extends EditorInspectorPlugin {
    }
    class EditorInspectorPluginTileData extends EditorInspectorPlugin {
    }
    class EditorInspectorRootMotionPlugin extends EditorInspectorPlugin {
    }
    class EditorInspectorVisualShaderModePlugin extends EditorInspectorPlugin {
    }
    class EditorJSONSyntaxHighlighter extends EditorSyntaxHighlighter {
    }
    class EditorLayoutsDialog extends ConfirmationDialog {
        readonly name_confirmed: Signal // name: string => void
    }
    class EditorLocaleDialog extends ConfirmationDialog {
        readonly locale_selected: Signal // locale: string => void
    }
    class EditorLog extends HBoxContainer {
    }
    class EditorMaterialPreviewPlugin extends EditorResourcePreviewGenerator {
    }
    class EditorMeshPreviewPlugin extends EditorResourcePreviewGenerator {
    }
    class EditorNativeShaderSourceVisualizer extends AcceptDialog {
        _inspect_shader(_unnamed_arg0: RID): void
    }
    class EditorNetworkProfiler extends VBoxContainer {
        readonly enable_profiling: Signal // enable: boolean => void
        readonly open_request: Signal // path: string => void
    }
    class EditorNode extends Node {
        push_item(object: Object, property: string = '', inspector_only: boolean = false): void
        set_edited_scene(_unnamed_arg0: Node): void
        open_request(_unnamed_arg0: string): void
        edit_foreign_resource(_unnamed_arg0: Resource): void
        is_resource_read_only(_unnamed_arg0: Resource, _unnamed_arg1: boolean): boolean
        stop_child_process(_unnamed_arg0: number /*i64*/): void
        _set_main_scene_state(_unnamed_arg0: Dictionary, _unnamed_arg1: Node): void
        _update_recent_scenes(): void
        readonly request_help_search: Signal //  => void
        readonly script_add_function_request: Signal // obj: Object, function: string, args: PackedStringArray => void
        readonly resource_saved: Signal // obj: Object => void
        readonly scene_saved: Signal // path: string => void
        readonly scene_changed: Signal //  => void
        readonly scene_closed: Signal // path: string => void
    }
    /** Gizmo for editing [Node3D] objects.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_editornode3dgizmo.html  
     */
    class EditorNode3DGizmo extends Node3DGizmo {
        /** Override this method to add all the gizmo elements whenever a gizmo update is requested. It's common to call [method clear] at the beginning of this method and then add visual elements depending on the node's properties. */
        /* gdvirtual */ _redraw(): void
        
        /** Override this method to return the name of an edited handle (handles must have been previously added by [method add_handles]). Handles can be named for reference to the user when editing.  
         *  The [param secondary] argument is `true` when the requested handle is secondary (see [method add_handles] for more information).  
         */
        /* gdvirtual */ _get_handle_name(id: number /*i64*/, secondary: boolean): string
        
        /** Override this method to return `true` whenever the given handle should be highlighted in the editor.  
         *  The [param secondary] argument is `true` when the requested handle is secondary (see [method add_handles] for more information).  
         */
        /* gdvirtual */ _is_handle_highlighted(id: number /*i64*/, secondary: boolean): boolean
        
        /** Override this method to return the current value of a handle. This value will be requested at the start of an edit and used as the `restore` argument in [method _commit_handle].  
         *  The [param secondary] argument is `true` when the requested handle is secondary (see [method add_handles] for more information).  
         */
        /* gdvirtual */ _get_handle_value(id: number /*i64*/, secondary: boolean): void
        /* gdvirtual */ _begin_handle_action(id: number /*i64*/, secondary: boolean): void
        
        /** Override this method to update the node properties when the user drags a gizmo handle (previously added with [method add_handles]). The provided [param point] is the mouse position in screen coordinates and the [param camera] can be used to convert it to raycasts.  
         *  The [param secondary] argument is `true` when the edited handle is secondary (see [method add_handles] for more information).  
         */
        /* gdvirtual */ _set_handle(id: number /*i64*/, secondary: boolean, camera: Camera3D, point: Vector2): void
        
        /** Override this method to commit a handle being edited (handles must have been previously added by [method add_handles]). This usually means creating an [UndoRedo] action for the change, using the current handle value as "do" and the [param restore] argument as "undo".  
         *  If the [param cancel] argument is `true`, the [param restore] value should be directly set, without any [UndoRedo] action.  
         *  The [param secondary] argument is `true` when the committed handle is secondary (see [method add_handles] for more information).  
         */
        /* gdvirtual */ _commit_handle(id: number /*i64*/, secondary: boolean, restore: any, cancel: boolean): void
        
        /** Override this method to allow selecting subgizmos using mouse clicks. Given a [param camera] and a [param point] in screen coordinates, this method should return which subgizmo should be selected. The returned value should be a unique subgizmo identifier, which can have any non-negative value and will be used in other virtual methods like [method _get_subgizmo_transform] or [method _commit_subgizmos]. */
        /* gdvirtual */ _subgizmos_intersect_ray(camera: Camera3D, point: Vector2): number /*i64*/
        
        /** Override this method to allow selecting subgizmos using mouse drag box selection. Given a [param camera] and a [param frustum], this method should return which subgizmos are contained within the frustum. The [param frustum] argument consists of an array with all the [Plane]s that make up the selection frustum. The returned value should contain a list of unique subgizmo identifiers, which can have any non-negative value and will be used in other virtual methods like [method _get_subgizmo_transform] or [method _commit_subgizmos]. */
        /* gdvirtual */ _subgizmos_intersect_frustum(camera: Camera3D, frustum: Array): PackedInt32Array
        
        /** Override this method to update the node properties during subgizmo editing (see [method _subgizmos_intersect_ray] and [method _subgizmos_intersect_frustum]). The [param transform] is given in the [Node3D]'s local coordinate system. */
        /* gdvirtual */ _set_subgizmo_transform(id: number /*i64*/, transform: Transform3D): void
        
        /** Override this method to return the current transform of a subgizmo. This transform will be requested at the start of an edit and used as the `restore` argument in [method _commit_subgizmos]. */
        /* gdvirtual */ _get_subgizmo_transform(id: number /*i64*/): Transform3D
        
        /** Override this method to commit a group of subgizmos being edited (see [method _subgizmos_intersect_ray] and [method _subgizmos_intersect_frustum]). This usually means creating an [UndoRedo] action for the change, using the current transforms as "do" and the [param restores] transforms as "undo".  
         *  If the [param cancel] argument is `true`, the [param restores] transforms should be directly set, without any [UndoRedo] action.  
         */
        /* gdvirtual */ _commit_subgizmos(ids: PackedInt32Array, restores: Array, cancel: boolean): void
        
        /** Adds lines to the gizmo (as sets of 2 points), with a given material. The lines are used for visualizing the gizmo. Call this method during [method _redraw]. */
        add_lines(lines: PackedVector3Array, material: Material, billboard: boolean = false, modulate: Color = new Color(1, 1, 1, 1)): void
        
        /** Adds a mesh to the gizmo with the specified [param material], local [param transform] and [param skeleton]. Call this method during [method _redraw]. */
        add_mesh(mesh: Mesh, material: Material = <any> {} /*compound.type from nil*/, transform: Transform3D = <any> {} /*compound.type from 18([object Object])*/, skeleton: SkinReference = <any> {} /*compound.type from nil*/): void
        
        /** Adds the specified [param segments] to the gizmo's collision shape for picking. Call this method during [method _redraw]. */
        add_collision_segments(segments: PackedVector3Array): void
        
        /** Adds collision triangles to the gizmo for picking. A [TriangleMesh] can be generated from a regular [Mesh] too. Call this method during [method _redraw]. */
        add_collision_triangles(triangles: TriangleMesh): void
        
        /** Adds an unscaled billboard for visualization and selection. Call this method during [method _redraw]. */
        add_unscaled_billboard(material: Material, default_scale: number /*f64*/ = 1, modulate: Color = new Color(1, 1, 1, 1)): void
        
        /** Adds a list of handles (points) which can be used to edit the properties of the gizmo's [Node3D]. The [param ids] argument can be used to specify a custom identifier for each handle, if an empty array is passed, the ids will be assigned automatically from the [param handles] argument order.  
         *  The [param secondary] argument marks the added handles as secondary, meaning they will normally have lower selection priority than regular handles. When the user is holding the shift key secondary handles will switch to have higher priority than regular handles. This change in priority can be used to place multiple handles at the same point while still giving the user control on their selection.  
         *  There are virtual methods which will be called upon editing of these handles. Call this method during [method _redraw].  
         */
        add_handles(handles: PackedVector3Array, material: Material, ids: PackedInt32Array, billboard: boolean = false, secondary: boolean = false): void
        
        /** Sets the reference [Node3D] node for the gizmo. [param node] must inherit from [Node3D]. */
        set_node_3d(node: Node): void
        
        /** Returns the [Node3D] node associated with this gizmo. */
        get_node_3d(): Node3D
        
        /** Returns the [EditorNode3DGizmoPlugin] that owns this gizmo. It's useful to retrieve materials using [method EditorNode3DGizmoPlugin.get_material]. */
        get_plugin(): EditorNode3DGizmoPlugin
        
        /** Removes everything in the gizmo including meshes, collisions and handles. */
        clear(): void
        
        /** Sets the gizmo's hidden state. If `true`, the gizmo will be hidden. If `false`, it will be shown. */
        set_hidden(hidden: boolean): void
        
        /** Returns `true` if the given subgizmo is currently selected. Can be used to highlight selected elements during [method _redraw]. */
        is_subgizmo_selected(id: number /*i64*/): boolean
        
        /** Returns a list of the currently selected subgizmos. Can be used to highlight selected elements during [method _redraw]. */
        get_subgizmo_selection(): PackedInt32Array
    }
    /** A class used by the editor to define Node3D gizmo types.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_editornode3dgizmoplugin.html  
     */
    class EditorNode3DGizmoPlugin extends Resource {
        /** Override this method to define which Node3D nodes have a gizmo from this plugin. Whenever a [Node3D] node is added to a scene this method is called, if it returns `true` the node gets a generic [EditorNode3DGizmo] assigned and is added to this plugin's list of active gizmos. */
        /* gdvirtual */ _has_gizmo(for_node_3d: Node3D): boolean
        
        /** Override this method to return a custom [EditorNode3DGizmo] for the spatial nodes of your choice, return `null` for the rest of nodes. See also [method _has_gizmo]. */
        /* gdvirtual */ _create_gizmo(for_node_3d: Node3D): EditorNode3DGizmo
        
        /** Override this method to provide the name that will appear in the gizmo visibility menu. */
        /* gdvirtual */ _get_gizmo_name(): string
        
        /** Override this method to set the gizmo's priority. Gizmos with higher priority will have precedence when processing inputs like handles or subgizmos selection.  
         *  All built-in editor gizmos return a priority of `-1`. If not overridden, this method will return `0`, which means custom gizmos will automatically get higher priority than built-in gizmos.  
         */
        /* gdvirtual */ _get_priority(): number /*i64*/
        
        /** Override this method to define whether the gizmos handled by this plugin can be hidden or not. Returns `true` if not overridden. */
        /* gdvirtual */ _can_be_hidden(): boolean
        
        /** Override this method to define whether Node3D with this gizmo should be selectable even when the gizmo is hidden. */
        /* gdvirtual */ _is_selectable_when_hidden(): boolean
        
        /** Override this method to add all the gizmo elements whenever a gizmo update is requested. It's common to call [method EditorNode3DGizmo.clear] at the beginning of this method and then add visual elements depending on the node's properties. */
        /* gdvirtual */ _redraw(gizmo: EditorNode3DGizmo): void
        
        /** Override this method to provide gizmo's handle names. The [param secondary] argument is `true` when the requested handle is secondary (see [method EditorNode3DGizmo.add_handles] for more information). Called for this plugin's active gizmos. */
        /* gdvirtual */ _get_handle_name(gizmo: EditorNode3DGizmo, handle_id: number /*i64*/, secondary: boolean): string
        
        /** Override this method to return `true` whenever to given handle should be highlighted in the editor. The [param secondary] argument is `true` when the requested handle is secondary (see [method EditorNode3DGizmo.add_handles] for more information). Called for this plugin's active gizmos. */
        /* gdvirtual */ _is_handle_highlighted(gizmo: EditorNode3DGizmo, handle_id: number /*i64*/, secondary: boolean): boolean
        
        /** Override this method to return the current value of a handle. This value will be requested at the start of an edit and used as the `restore` argument in [method _commit_handle].  
         *  The [param secondary] argument is `true` when the requested handle is secondary (see [method EditorNode3DGizmo.add_handles] for more information).  
         *  Called for this plugin's active gizmos.  
         */
        /* gdvirtual */ _get_handle_value(gizmo: EditorNode3DGizmo, handle_id: number /*i64*/, secondary: boolean): void
        /* gdvirtual */ _begin_handle_action(gizmo: EditorNode3DGizmo, handle_id: number /*i64*/, secondary: boolean): void
        
        /** Override this method to update the node's properties when the user drags a gizmo handle (previously added with [method EditorNode3DGizmo.add_handles]). The provided [param screen_pos] is the mouse position in screen coordinates and the [param camera] can be used to convert it to raycasts.  
         *  The [param secondary] argument is `true` when the edited handle is secondary (see [method EditorNode3DGizmo.add_handles] for more information).  
         *  Called for this plugin's active gizmos.  
         */
        /* gdvirtual */ _set_handle(gizmo: EditorNode3DGizmo, handle_id: number /*i64*/, secondary: boolean, camera: Camera3D, screen_pos: Vector2): void
        
        /** Override this method to commit a handle being edited (handles must have been previously added by [method EditorNode3DGizmo.add_handles] during [method _redraw]). This usually means creating an [UndoRedo] action for the change, using the current handle value as "do" and the [param restore] argument as "undo".  
         *  If the [param cancel] argument is `true`, the [param restore] value should be directly set, without any [UndoRedo] action.  
         *  The [param secondary] argument is `true` when the committed handle is secondary (see [method EditorNode3DGizmo.add_handles] for more information).  
         *  Called for this plugin's active gizmos.  
         */
        /* gdvirtual */ _commit_handle(gizmo: EditorNode3DGizmo, handle_id: number /*i64*/, secondary: boolean, restore: any, cancel: boolean): void
        
        /** Override this method to allow selecting subgizmos using mouse clicks. Given a [param camera] and a [param screen_pos] in screen coordinates, this method should return which subgizmo should be selected. The returned value should be a unique subgizmo identifier, which can have any non-negative value and will be used in other virtual methods like [method _get_subgizmo_transform] or [method _commit_subgizmos]. Called for this plugin's active gizmos. */
        /* gdvirtual */ _subgizmos_intersect_ray(gizmo: EditorNode3DGizmo, camera: Camera3D, screen_pos: Vector2): number /*i64*/
        
        /** Override this method to allow selecting subgizmos using mouse drag box selection. Given a [param camera] and [param frustum_planes], this method should return which subgizmos are contained within the frustums. The [param frustum_planes] argument consists of an array with all the [Plane]s that make up the selection frustum. The returned value should contain a list of unique subgizmo identifiers, these identifiers can have any non-negative value and will be used in other virtual methods like [method _get_subgizmo_transform] or [method _commit_subgizmos]. Called for this plugin's active gizmos. */
        /* gdvirtual */ _subgizmos_intersect_frustum(gizmo: EditorNode3DGizmo, camera: Camera3D, frustum_planes: Array): PackedInt32Array
        
        /** Override this method to return the current transform of a subgizmo. As with all subgizmo methods, the transform should be in local space respect to the gizmo's Node3D. This transform will be requested at the start of an edit and used in the `restore` argument in [method _commit_subgizmos]. Called for this plugin's active gizmos. */
        /* gdvirtual */ _get_subgizmo_transform(gizmo: EditorNode3DGizmo, subgizmo_id: number /*i64*/): Transform3D
        
        /** Override this method to update the node properties during subgizmo editing (see [method _subgizmos_intersect_ray] and [method _subgizmos_intersect_frustum]). The [param transform] is given in the Node3D's local coordinate system. Called for this plugin's active gizmos. */
        /* gdvirtual */ _set_subgizmo_transform(gizmo: EditorNode3DGizmo, subgizmo_id: number /*i64*/, transform: Transform3D): void
        
        /** Override this method to commit a group of subgizmos being edited (see [method _subgizmos_intersect_ray] and [method _subgizmos_intersect_frustum]). This usually means creating an [UndoRedo] action for the change, using the current transforms as "do" and the [param restores] transforms as "undo".  
         *  If the [param cancel] argument is `true`, the [param restores] transforms should be directly set, without any [UndoRedo] action. As with all subgizmo methods, transforms are given in local space respect to the gizmo's Node3D. Called for this plugin's active gizmos.  
         */
        /* gdvirtual */ _commit_subgizmos(gizmo: EditorNode3DGizmo, ids: PackedInt32Array, restores: Array, cancel: boolean): void
        
        /** Creates an unshaded material with its variants (selected and/or editable) and adds them to the internal material list. They can then be accessed with [method get_material] and used in [method EditorNode3DGizmo.add_mesh] and [method EditorNode3DGizmo.add_lines]. Should not be overridden. */
        create_material(name: string, color: Color, billboard: boolean = false, on_top: boolean = false, use_vertex_color: boolean = false): void
        
        /** Creates an icon material with its variants (selected and/or editable) and adds them to the internal material list. They can then be accessed with [method get_material] and used in [method EditorNode3DGizmo.add_unscaled_billboard]. Should not be overridden. */
        create_icon_material(name: string, texture: Texture2D, on_top: boolean = false, color: Color = new Color(1, 1, 1, 1)): void
        
        /** Creates a handle material with its variants (selected and/or editable) and adds them to the internal material list. They can then be accessed with [method get_material] and used in [method EditorNode3DGizmo.add_handles]. Should not be overridden.  
         *  You can optionally provide a texture to use instead of the default icon.  
         */
        create_handle_material(name: string, billboard: boolean = false, texture: Texture2D = <any> {} /*compound.type from nil*/): void
        
        /** Adds a new material to the internal material list for the plugin. It can then be accessed with [method get_material]. Should not be overridden. */
        add_material(name: string, material: StandardMaterial3D): void
        
        /** Gets material from the internal list of materials. If an [EditorNode3DGizmo] is provided, it will try to get the corresponding variant (selected and/or editable). */
        get_material(name: string, gizmo: EditorNode3DGizmo = <any> {} /*compound.type from nil*/): StandardMaterial3D
    }
    class EditorOBJImporter extends EditorSceneFormatImporter {
    }
    class EditorObjectSelector extends Button {
    }
    class EditorPackedScenePreviewPlugin extends EditorResourcePreviewGenerator {
    }
    /** Editor-only singleton that returns paths to various OS-specific data folders and files.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_editorpaths.html  
     */
    class EditorPaths extends Object {
        /** Returns the absolute path to the user's data folder. This folder should be used for  *persistent*  user data files such as installed export templates.  
         *  **Default paths per platform:**  
         *    
         */
        get_data_dir(): string
        
        /** Returns the absolute path to the user's configuration folder. This folder should be used for  *persistent*  user configuration files.  
         *  **Default paths per platform:**  
         *    
         */
        get_config_dir(): string
        
        /** Returns the absolute path to the user's cache folder. This folder should be used for temporary data that can be removed safely whenever the editor is closed (such as generated resource thumbnails).  
         *  **Default paths per platform:**  
         *    
         */
        get_cache_dir(): string
        
        /** Returns `true` if the editor is marked as self-contained, `false` otherwise. When self-contained mode is enabled, user configuration, data and cache files are saved in an `editor_data/` folder next to the editor binary. This makes portable usage easier and ensures the Godot editor minimizes file writes outside its own folder. Self-contained mode is not available for exported projects.  
         *  Self-contained mode can be enabled by creating a file named `._sc_` or `_sc_` in the same folder as the editor binary or macOS .app bundle while the editor is not running. See also [method get_self_contained_file].  
         *      
         *  **Note:** On macOS, quarantine flag should be manually removed before using self-contained mode, see [url=https://docs.godotengine.org/en/stable/tutorials/export/running_on_macos.html]Running on macOS[/url].  
         *      
         *  **Note:** On macOS, placing `_sc_` or any other file inside .app bundle will break digital signature and make it non-portable, consider placing it in the same folder as the .app bundle instead.  
         *      
         *  **Note:** The Steam release of Godot uses self-contained mode by default.  
         */
        is_self_contained(): boolean
        
        /** Returns the absolute path to the self-contained file that makes the current Godot editor instance be considered as self-contained. Returns an empty string if the current Godot editor instance isn't self-contained. See also [method is_self_contained]. */
        get_self_contained_file(): string
        
        /** Returns the project-specific editor settings path. Projects all have a unique subdirectory inside the settings path where project-specific editor settings are saved. */
        get_project_settings_dir(): string
    }
    class EditorPerformanceProfiler extends HSplitContainer {
    }
    class EditorPlainTextSyntaxHighlighter extends EditorSyntaxHighlighter {
    }
    namespace EditorPlugin {
        enum CustomControlContainer {
            /** Main editor toolbar, next to play buttons. */
            CONTAINER_TOOLBAR = 0,
            
            /** The toolbar that appears when 3D editor is active. */
            CONTAINER_SPATIAL_EDITOR_MENU = 1,
            
            /** Left sidebar of the 3D editor. */
            CONTAINER_SPATIAL_EDITOR_SIDE_LEFT = 2,
            
            /** Right sidebar of the 3D editor. */
            CONTAINER_SPATIAL_EDITOR_SIDE_RIGHT = 3,
            
            /** Bottom panel of the 3D editor. */
            CONTAINER_SPATIAL_EDITOR_BOTTOM = 4,
            
            /** The toolbar that appears when 2D editor is active. */
            CONTAINER_CANVAS_EDITOR_MENU = 5,
            
            /** Left sidebar of the 2D editor. */
            CONTAINER_CANVAS_EDITOR_SIDE_LEFT = 6,
            
            /** Right sidebar of the 2D editor. */
            CONTAINER_CANVAS_EDITOR_SIDE_RIGHT = 7,
            
            /** Bottom panel of the 2D editor. */
            CONTAINER_CANVAS_EDITOR_BOTTOM = 8,
            
            /** Bottom section of the inspector. */
            CONTAINER_INSPECTOR_BOTTOM = 9,
            
            /** Tab of Project Settings dialog, to the left of other tabs. */
            CONTAINER_PROJECT_SETTING_TAB_LEFT = 10,
            
            /** Tab of Project Settings dialog, to the right of other tabs. */
            CONTAINER_PROJECT_SETTING_TAB_RIGHT = 11,
        }
        enum DockSlot {
            /** Dock slot, left side, upper-left (empty in default layout). */
            DOCK_SLOT_LEFT_UL = 0,
            
            /** Dock slot, left side, bottom-left (empty in default layout). */
            DOCK_SLOT_LEFT_BL = 1,
            
            /** Dock slot, left side, upper-right (in default layout includes Scene and Import docks). */
            DOCK_SLOT_LEFT_UR = 2,
            
            /** Dock slot, left side, bottom-right (in default layout includes FileSystem dock). */
            DOCK_SLOT_LEFT_BR = 3,
            
            /** Dock slot, right side, upper-left (in default layout includes Inspector, Node, and History docks). */
            DOCK_SLOT_RIGHT_UL = 4,
            
            /** Dock slot, right side, bottom-left (empty in default layout). */
            DOCK_SLOT_RIGHT_BL = 5,
            
            /** Dock slot, right side, upper-right (empty in default layout). */
            DOCK_SLOT_RIGHT_UR = 6,
            
            /** Dock slot, right side, bottom-right (empty in default layout). */
            DOCK_SLOT_RIGHT_BR = 7,
            
            /** Represents the size of the [enum DockSlot] enum. */
            DOCK_SLOT_MAX = 8,
        }
        enum AfterGUIInput {
            /** Forwards the [InputEvent] to other EditorPlugins. */
            AFTER_GUI_INPUT_PASS = 0,
            
            /** Prevents the [InputEvent] from reaching other Editor classes. */
            AFTER_GUI_INPUT_STOP = 1,
            
            /** Pass the [InputEvent] to other editor plugins except the main [Node3D] one. This can be used to prevent node selection changes and work with sub-gizmos instead. */
            AFTER_GUI_INPUT_CUSTOM = 2,
        }
    }
    /** Used by the editor to extend its functionality.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_editorplugin.html  
     */
    class EditorPlugin extends Node {
        /** Called when there is a root node in the current edited scene, [method _handles] is implemented and an [InputEvent] happens in the 2D viewport. Intercepts the [InputEvent], if `return true` [EditorPlugin] consumes the [param event], otherwise forwards [param event] to other Editor classes.  
         *  **Example:**  
         *    
         *  Must `return false` in order to forward the [InputEvent] to other Editor classes.  
         *  **Example:**  
         *    
         */
        /* gdvirtual */ _forward_canvas_gui_input(event: InputEvent): boolean
        
        /** Called by the engine when the 2D editor's viewport is updated. Use the `overlay` [Control] for drawing. You can update the viewport manually by calling [method update_overlays].  
         *    
         */
        /* gdvirtual */ _forward_canvas_draw_over_viewport(viewport_control: Control): void
        
        /** This method is the same as [method _forward_canvas_draw_over_viewport], except it draws on top of everything. Useful when you need an extra layer that shows over anything else.  
         *  You need to enable calling of this method by using [method set_force_draw_over_forwarding_enabled].  
         */
        /* gdvirtual */ _forward_canvas_force_draw_over_viewport(viewport_control: Control): void
        
        /** Called when there is a root node in the current edited scene, [method _handles] is implemented, and an [InputEvent] happens in the 3D viewport. The return value decides whether the [InputEvent] is consumed or forwarded to other [EditorPlugin]s. See [enum AfterGUIInput] for options.  
         *  **Example:**  
         *    
         *  Must `return EditorPlugin.AFTER_GUI_INPUT_PASS` in order to forward the [InputEvent] to other Editor classes.  
         *  **Example:**  
         *    
         */
        /* gdvirtual */ _forward_3d_gui_input(viewport_camera: Camera3D, event: InputEvent): number /*i64*/
        
        /** Called by the engine when the 3D editor's viewport is updated. Use the `overlay` [Control] for drawing. You can update the viewport manually by calling [method update_overlays].  
         *    
         */
        /* gdvirtual */ _forward_3d_draw_over_viewport(viewport_control: Control): void
        
        /** This method is the same as [method _forward_3d_draw_over_viewport], except it draws on top of everything. Useful when you need an extra layer that shows over anything else.  
         *  You need to enable calling of this method by using [method set_force_draw_over_forwarding_enabled].  
         */
        /* gdvirtual */ _forward_3d_force_draw_over_viewport(viewport_control: Control): void
        
        /** Override this method in your plugin to provide the name of the plugin when displayed in the Godot editor.  
         *  For main screen plugins, this appears at the top of the screen, to the right of the "2D", "3D", "Script", and "AssetLib" buttons.  
         */
        /* gdvirtual */ _get_plugin_name(): string
        
        /** Override this method in your plugin to return a [Texture2D] in order to give it an icon.  
         *  For main screen plugins, this appears at the top of the screen, to the right of the "2D", "3D", "Script", and "AssetLib" buttons.  
         *  Ideally, the plugin icon should be white with a transparent background and 16x16 pixels in size.  
         *    
         */
        /* gdvirtual */ _get_plugin_icon(): Texture2D
        
        /** Returns `true` if this is a main screen editor plugin (it goes in the workspace selector together with **2D**, **3D**, **Script** and **AssetLib**).  
         *  When the plugin's workspace is selected, other main screen plugins will be hidden, but your plugin will not appear automatically. It needs to be added as a child of [method EditorInterface.get_base_control] and made visible inside [method _make_visible].  
         *  Use [method _get_plugin_name] and [method _get_plugin_icon] to customize the plugin button's appearance.  
         *    
         */
        /* gdvirtual */ _has_main_screen(): boolean
        
        /** This function will be called when the editor is requested to become visible. It is used for plugins that edit a specific object type.  
         *  Remember that you have to manage the visibility of all your editor controls manually.  
         */
        /* gdvirtual */ _make_visible(visible: boolean): void
        
        /** This function is used for plugins that edit specific object types (nodes or resources). It requests the editor to edit the given object.  
         *  [param object] can be `null` if the plugin was editing an object, but there is no longer any selected object handled by this plugin. It can be used to cleanup editing state.  
         */
        /* gdvirtual */ _edit(object: Object): void
        
        /** Implement this function if your plugin edits a specific type of object (Resource or Node). If you return `true`, then you will get the functions [method _edit] and [method _make_visible] called when the editor requests them. If you have declared the methods [method _forward_canvas_gui_input] and [method _forward_3d_gui_input] these will be called too.  
         *      
         *  **Note:** Each plugin should handle only one type of objects at a time. If a plugin handles more types of objects and they are edited at the same time, it will result in errors.  
         */
        /* gdvirtual */ _handles(object: Object): boolean
        
        /** Override this method to provide a state data you want to be saved, like view position, grid settings, folding, etc. This is used when saving the scene (so state is kept when opening it again) and for switching tabs (so state can be restored when the tab returns). This data is automatically saved for each scene in an `editstate` file in the editor metadata folder. If you want to store global (scene-independent) editor data for your plugin, you can use [method _get_window_layout] instead.  
         *  Use [method _set_state] to restore your saved state.  
         *      
         *  **Note:** This method should not be used to save important settings that should persist with the project.  
         *      
         *  **Note:** You must implement [method _get_plugin_name] for the state to be stored and restored correctly.  
         *    
         */
        /* gdvirtual */ _get_state(): Dictionary
        
        /** Restore the state saved by [method _get_state]. This method is called when the current scene tab is changed in the editor.  
         *      
         *  **Note:** Your plugin must implement [method _get_plugin_name], otherwise it will not be recognized and this method will not be called.  
         *    
         */
        /* gdvirtual */ _set_state(state: Dictionary): void
        
        /** Clear all the state and reset the object being edited to zero. This ensures your plugin does not keep editing a currently existing node, or a node from the wrong scene. */
        /* gdvirtual */ _clear(): void
        
        /** Override this method to provide a custom message that lists unsaved changes. The editor will call this method when exiting or when closing a scene, and display the returned string in a confirmation dialog. Return empty string if the plugin has no unsaved changes.  
         *  When closing a scene, [param for_scene] is the path to the scene being closed. You can use it to handle built-in resources in that scene.  
         *  If the user confirms saving, [method _save_external_data] will be called, before closing the editor.  
         *    
         *  If the plugin has no scene-specific changes, you can ignore the calls when closing scenes:  
         *    
         */
        /* gdvirtual */ _get_unsaved_status(for_scene: string): string
        
        /** This method is called after the editor saves the project or when it's closed. It asks the plugin to save edited external scenes/resources. */
        /* gdvirtual */ _save_external_data(): void
        
        /** This method is called when the editor is about to save the project, switch to another tab, etc. It asks the plugin to apply any pending state changes to ensure consistency.  
         *  This is used, for example, in shader editors to let the plugin know that it must apply the shader code being written by the user to the object.  
         */
        /* gdvirtual */ _apply_changes(): void
        
        /** This is for editors that edit script-based objects. You can return a list of breakpoints in the format (`script:line`), for example: `res://path_to_script.gd:25`. */
        /* gdvirtual */ _get_breakpoints(): PackedStringArray
        
        /** Restore the plugin GUI layout and data saved by [method _get_window_layout]. This method is called for every plugin on editor startup. Use the provided [param configuration] file to read your saved data.  
         *    
         */
        /* gdvirtual */ _set_window_layout(configuration: ConfigFile): void
        
        /** Override this method to provide the GUI layout of the plugin or any other data you want to be stored. This is used to save the project's editor layout when [method queue_save_layout] is called or the editor layout was changed (for example changing the position of a dock). The data is stored in the `editor_layout.cfg` file in the editor metadata directory.  
         *  Use [method _set_window_layout] to restore your saved layout.  
         *    
         */
        /* gdvirtual */ _get_window_layout(configuration: ConfigFile): void
        
        /** This method is called when the editor is about to run the project. The plugin can then perform required operations before the project runs.  
         *  This method must return a boolean. If this method returns `false`, the project will not run. The run is aborted immediately, so this also prevents all other plugins' [method _build] methods from running.  
         */
        /* gdvirtual */ _build(): boolean
        
        /** Called by the engine when the user enables the [EditorPlugin] in the Plugin tab of the project settings window. */
        /* gdvirtual */ _enable_plugin(): void
        
        /** Called by the engine when the user disables the [EditorPlugin] in the Plugin tab of the project settings window. */
        /* gdvirtual */ _disable_plugin(): void
        
        /** Adds a custom control to a container (see [enum CustomControlContainer]). There are many locations where custom controls can be added in the editor UI.  
         *  Please remember that you have to manage the visibility of your custom controls yourself (and likely hide it after adding it).  
         *  When your plugin is deactivated, make sure to remove your custom control with [method remove_control_from_container] and free it with [method Node.queue_free].  
         */
        add_control_to_container(container: EditorPlugin.CustomControlContainer, control: Control): void
        
        /** Adds a control to the bottom panel (together with Output, Debug, Animation, etc). Returns a reference to the button added. It's up to you to hide/show the button when needed. When your plugin is deactivated, make sure to remove your custom control with [method remove_control_from_bottom_panel] and free it with [method Node.queue_free]. */
        add_control_to_bottom_panel(control: Control, title: string): Button
        
        /** Adds the control to a specific dock slot (see [enum DockSlot] for options).  
         *  If the dock is repositioned and as long as the plugin is active, the editor will save the dock position on further sessions.  
         *  When your plugin is deactivated, make sure to remove your custom control with [method remove_control_from_docks] and free it with [method Node.queue_free].  
         */
        add_control_to_dock(slot: EditorPlugin.DockSlot, control: Control): void
        
        /** Removes the control from the dock. You have to manually [method Node.queue_free] the control. */
        remove_control_from_docks(control: Control): void
        
        /** Removes the control from the bottom panel. You have to manually [method Node.queue_free] the control. */
        remove_control_from_bottom_panel(control: Control): void
        
        /** Removes the control from the specified container. You have to manually [method Node.queue_free] the control. */
        remove_control_from_container(container: EditorPlugin.CustomControlContainer, control: Control): void
        
        /** Adds a custom menu item to **Project > Tools** named [param name]. When clicked, the provided [param callable] will be called. */
        add_tool_menu_item(name: string, callable: Callable): void
        
        /** Adds a custom [PopupMenu] submenu under **Project > Tools >** [param name]. Use [method remove_tool_menu_item] on plugin clean up to remove the menu. */
        add_tool_submenu_item(name: string, submenu: PopupMenu): void
        
        /** Removes a menu [param name] from **Project > Tools**. */
        remove_tool_menu_item(name: string): void
        
        /** Returns the [PopupMenu] under **Scene > Export As...**. */
        get_export_as_menu(): PopupMenu
        
        /** Adds a custom type, which will appear in the list of nodes or resources. An icon can be optionally passed.  
         *  When a given node or resource is selected, the base type will be instantiated (e.g. "Node3D", "Control", "Resource"), then the script will be loaded and set to this object.  
         *      
         *  **Note:** The base type is the base engine class which this type's class hierarchy inherits, not any custom type parent classes.  
         *  You can use the virtual method [method _handles] to check if your custom object is being edited by checking the script or using the `is` keyword.  
         *  During run-time, this will be a simple object with a script so this function does not need to be called then.  
         *      
         *  **Note:** Custom types added this way are not true classes. They are just a helper to create a node with specific script.  
         */
        add_custom_type(type: string, base: string, script: Script, icon: Texture2D): void
        
        /** Removes a custom type added by [method add_custom_type]. */
        remove_custom_type(type: string): void
        
        /** Adds a script at [param path] to the Autoload list as [param name]. */
        add_autoload_singleton(name: string, path: string): void
        
        /** Removes an Autoload [param name] from the list. */
        remove_autoload_singleton(name: string): void
        
        /** Updates the overlays of the 2D and 3D editor viewport. Causes methods [method _forward_canvas_draw_over_viewport], [method _forward_canvas_force_draw_over_viewport], [method _forward_3d_draw_over_viewport] and [method _forward_3d_force_draw_over_viewport] to be called. */
        update_overlays(): number /*i64*/
        
        /** Makes a specific item in the bottom panel visible. */
        make_bottom_panel_item_visible(item: Control): void
        
        /** Minimizes the bottom panel. */
        hide_bottom_panel(): void
        
        /** Gets the undo/redo object. Most actions in the editor can be undoable, so use this object to make sure this happens when it's worth it. */
        get_undo_redo(): EditorUndoRedoManager
        
        /** Hooks a callback into the undo/redo action creation when a property is modified in the inspector. This allows, for example, to save other properties that may be lost when a given property is modified.  
         *  The callback should have 4 arguments: [Object] `undo_redo`, [Object] `modified_object`, [String] `property` and [Variant] `new_value`. They are, respectively, the [UndoRedo] object used by the inspector, the currently modified object, the name of the modified property and the new value the property is about to take.  
         */
        add_undo_redo_inspector_hook_callback(callable: Callable): void
        
        /** Removes a callback previously added by [method add_undo_redo_inspector_hook_callback]. */
        remove_undo_redo_inspector_hook_callback(callable: Callable): void
        
        /** Queue save the project's editor layout. */
        queue_save_layout(): void
        
        /** Registers a custom translation parser plugin for extracting translatable strings from custom files. */
        add_translation_parser_plugin(parser: EditorTranslationParserPlugin): void
        
        /** Removes a custom translation parser plugin registered by [method add_translation_parser_plugin]. */
        remove_translation_parser_plugin(parser: EditorTranslationParserPlugin): void
        
        /** Registers a new [EditorImportPlugin]. Import plugins are used to import custom and unsupported assets as a custom [Resource] type.  
         *  If [param first_priority] is `true`, the new import plugin is inserted first in the list and takes precedence over pre-existing plugins.  
         *      
         *  **Note:** If you want to import custom 3D asset formats use [method add_scene_format_importer_plugin] instead.  
         *  See [method add_inspector_plugin] for an example of how to register a plugin.  
         */
        add_import_plugin(importer: EditorImportPlugin, first_priority: boolean = false): void
        
        /** Removes an import plugin registered by [method add_import_plugin]. */
        remove_import_plugin(importer: EditorImportPlugin): void
        
        /** Registers a new [EditorSceneFormatImporter]. Scene importers are used to import custom 3D asset formats as scenes.  
         *  If [param first_priority] is `true`, the new import plugin is inserted first in the list and takes precedence over pre-existing plugins.  
         */
        add_scene_format_importer_plugin(scene_format_importer: EditorSceneFormatImporter, first_priority: boolean = false): void
        
        /** Removes a scene format importer registered by [method add_scene_format_importer_plugin]. */
        remove_scene_format_importer_plugin(scene_format_importer: EditorSceneFormatImporter): void
        
        /** Add a [EditorScenePostImportPlugin]. These plugins allow customizing the import process of 3D assets by adding new options to the import dialogs.  
         *  If [param first_priority] is `true`, the new import plugin is inserted first in the list and takes precedence over pre-existing plugins.  
         */
        add_scene_post_import_plugin(scene_import_plugin: EditorScenePostImportPlugin, first_priority: boolean = false): void
        
        /** Remove the [EditorScenePostImportPlugin], added with [method add_scene_post_import_plugin]. */
        remove_scene_post_import_plugin(scene_import_plugin: EditorScenePostImportPlugin): void
        
        /** Registers a new [EditorExportPlugin]. Export plugins are used to perform tasks when the project is being exported.  
         *  See [method add_inspector_plugin] for an example of how to register a plugin.  
         */
        add_export_plugin(plugin: EditorExportPlugin): void
        
        /** Removes an export plugin registered by [method add_export_plugin]. */
        remove_export_plugin(plugin: EditorExportPlugin): void
        
        /** Registers a new [EditorNode3DGizmoPlugin]. Gizmo plugins are used to add custom gizmos to the 3D preview viewport for a [Node3D].  
         *  See [method add_inspector_plugin] for an example of how to register a plugin.  
         */
        add_node_3d_gizmo_plugin(plugin: EditorNode3DGizmoPlugin): void
        
        /** Removes a gizmo plugin registered by [method add_node_3d_gizmo_plugin]. */
        remove_node_3d_gizmo_plugin(plugin: EditorNode3DGizmoPlugin): void
        
        /** Registers a new [EditorInspectorPlugin]. Inspector plugins are used to extend [EditorInspector] and provide custom configuration tools for your object's properties.  
         *      
         *  **Note:** Always use [method remove_inspector_plugin] to remove the registered [EditorInspectorPlugin] when your [EditorPlugin] is disabled to prevent leaks and an unexpected behavior.  
         *    
         */
        add_inspector_plugin(plugin: EditorInspectorPlugin): void
        
        /** Removes an inspector plugin registered by [method add_import_plugin] */
        remove_inspector_plugin(plugin: EditorInspectorPlugin): void
        
        /** Registers a new [EditorResourceConversionPlugin]. Resource conversion plugins are used to add custom resource converters to the editor inspector.  
         *  See [EditorResourceConversionPlugin] for an example of how to create a resource conversion plugin.  
         */
        add_resource_conversion_plugin(plugin: EditorResourceConversionPlugin): void
        
        /** Removes a resource conversion plugin registered by [method add_resource_conversion_plugin]. */
        remove_resource_conversion_plugin(plugin: EditorResourceConversionPlugin): void
        
        /** Use this method if you always want to receive inputs from 3D view screen inside [method _forward_3d_gui_input]. It might be especially usable if your plugin will want to use raycast in the scene. */
        set_input_event_forwarding_always_enabled(): void
        
        /** Enables calling of [method _forward_canvas_force_draw_over_viewport] for the 2D editor and [method _forward_3d_force_draw_over_viewport] for the 3D editor when their viewports are updated. You need to call this method only once and it will work permanently for this plugin. */
        set_force_draw_over_forwarding_enabled(): void
        
        /** Returns the [EditorInterface] singleton instance.  
         *   *Deprecated.*  [EditorInterface] is a global singleton and can be accessed directly by its name.  
         */
        get_editor_interface(): EditorInterface
        
        /** Gets the Editor's dialog used for making scripts.  
         *      
         *  **Note:** Users can configure it before use.  
         *  **Warning:** Removing and freeing this node will render a part of the editor useless and may cause a crash.  
         */
        get_script_create_dialog(): ScriptCreateDialog
        
        /** Adds a [Script] as debugger plugin to the Debugger. The script must extend [EditorDebuggerPlugin]. */
        add_debugger_plugin(script: EditorDebuggerPlugin): void
        
        /** Removes the debugger plugin with given script from the Debugger. */
        remove_debugger_plugin(script: EditorDebuggerPlugin): void
        
        /** Provide the version of the plugin declared in the `plugin.cfg` config file. */
        get_plugin_version(): string
        
        /** Emitted when the scene is changed in the editor. The argument will return the root node of the scene that has just become active. If this scene is new and empty, the argument will be `null`. */
        readonly scene_changed: Signal // scene_root: Node => void
        
        /** Emitted when user closes a scene. The argument is file path to a closed scene. */
        readonly scene_closed: Signal // filepath: string => void
        
        /** Emitted when user changes the workspace (**2D**, **3D**, **Script**, **AssetLib**). Also works with custom screens defined by plugins. */
        readonly main_screen_changed: Signal // screen_name: string => void
        
        /** Emitted when the given [param resource] was saved on disc. */
        readonly resource_saved: Signal // resource: Resource => void
        
        /** Emitted when any project setting has changed.  
         *   *Deprecated.*  Use [signal ProjectSettings.settings_changed] instead.  
         */
        readonly project_settings_changed: Signal //  => void
    }
    class EditorPluginCSG extends EditorPlugin {
    }
    class EditorPluginSettings extends VBoxContainer {
    }
    class EditorProfiler extends VBoxContainer {
        readonly enable_profiling: Signal // enable: boolean => void
        readonly break_request: Signal //  => void
    }
    /** Custom control for editing properties that can be added to the [EditorInspector].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_editorproperty.html  
     */
    class EditorProperty extends Container {
        /** When this virtual function is called, you must update your editor. */
        /* gdvirtual */ _update_property(): void
        
        /** Called when the read-only status of the property is changed. It may be used to change custom controls into a read-only or modifiable state. */
        /* gdvirtual */ _set_read_only(read_only: boolean): void
        set_label(text: string): void
        get_label(): string
        set_read_only(read_only: boolean): void
        is_read_only(): boolean
        set_checkable(checkable: boolean): void
        is_checkable(): boolean
        set_checked(checked: boolean): void
        is_checked(): boolean
        set_draw_warning(draw_warning: boolean): void
        is_draw_warning(): boolean
        set_keying(keying: boolean): void
        is_keying(): boolean
        set_deletable(deletable: boolean): void
        is_deletable(): boolean
        
        /** Gets the edited property. If your editor is for a single property (added via [method EditorInspectorPlugin._parse_property]), then this will return the property. */
        get_edited_property(): StringName
        
        /** Gets the edited object. */
        get_edited_object(): Object
        
        /** Forces refresh of the property display. */
        update_property(): void
        
        /** If any of the controls added can gain keyboard focus, add it here. This ensures that focus will be restored if the inspector is refreshed. */
        add_focusable(control: Control): void
        
        /** Puts the [param editor] control below the property label. The control must be previously added using [method Node.add_child]. */
        set_bottom_editor(editor: Control): void
        
        /** If one or several properties have changed, this must be called. [param field] is used in case your editor can modify fields separately (as an example, Vector3.x). The [param changing] argument avoids the editor requesting this property to be refreshed (leave as `false` if unsure). */
        emit_changed(property: StringName, value: any, field: StringName = '', changing: boolean = false): void
        _update_editor_property_status(): void
        
        /** Set this property to change the label (if you want to show one). */
        label: string
        
        /** Used by the inspector, set to `true` when the property is read-only. */
        read_only: boolean
        
        /** Used by the inspector, set to `true` when the property is checkable. */
        checkable: boolean
        
        /** Used by the inspector, set to `true` when the property is checked. */
        checked: boolean
        
        /** Used by the inspector, set to `true` when the property is drawn with the editor theme's warning color. This is used for editable children's properties. */
        draw_warning: boolean
        
        /** Used by the inspector, set to `true` when the property can add keys for animation. */
        keying: boolean
        
        /** Used by the inspector, set to `true` when the property can be deleted by the user. */
        deletable: boolean
        
        /** Do not emit this manually, use the [method emit_changed] method instead. */
        readonly property_changed: Signal // property: StringName, value: any, field: StringName, changing: boolean => void
        
        /** Emit it if you want multiple properties modified at the same time. Do not use if added via [method EditorInspectorPlugin._parse_property]. */
        readonly multiple_properties_changed: Signal // properties: PackedStringArray, value: Array => void
        
        /** Emit it if you want to add this value as an animation key (check for keying being enabled first). */
        readonly property_keyed: Signal // property: StringName => void
        
        /** Emitted when a property was deleted. Used internally. */
        readonly property_deleted: Signal // property: StringName => void
        
        /** Emit it if you want to key a property with a single value. */
        readonly property_keyed_with_value: Signal // property: StringName, value: any => void
        
        /** Emitted when a property was checked. Used internally. */
        readonly property_checked: Signal // property: StringName, checked: boolean => void
        
        /** Emit it if you want to mark (or unmark) the value of a property for being saved regardless of being equal to the default value.  
         *  The default value is the one the property will get when the node is just instantiated and can come from an ancestor scene in the inheritance/instantiation chain, a script or a builtin class.  
         */
        readonly property_pinned: Signal // property: StringName, pinned: boolean => void
        
        /** Emitted when the revertability (i.e., whether it has a non-default value and thus is displayed with a revert icon) of a property has changed. */
        readonly property_can_revert_changed: Signal // property: StringName, can_revert: boolean => void
        
        /** If you want a sub-resource to be edited, emit this signal with the resource. */
        readonly resource_selected: Signal // path: string, resource: Resource => void
        
        /** Used by sub-inspectors. Emit it if what was selected was an Object ID. */
        readonly object_id_selected: Signal // property: StringName, id: number /*i64*/ => void
        
        /** Emitted when selected. Used internally. */
        readonly selected: Signal // path: string, focusable_idx: number /*i64*/ => void
    }
    class EditorPropertyCheck extends EditorProperty {
    }
    class EditorPropertyDictionaryObject extends RefCounted {
    }
    class EditorPropertyInteger extends EditorProperty {
    }
    class EditorPropertyLocalizableString extends EditorProperty {
    }
    class EditorPropertyMultilineText extends EditorProperty {
    }
    class EditorPropertyNameProcessor extends Node {
    }
    class EditorPropertyPath extends EditorProperty {
    }
    class EditorPropertyResource extends EditorProperty {
    }
    class EditorPropertyText extends EditorProperty {
    }
    class EditorPropertyVector2i extends EditorPropertyVectorN {
    }
    class EditorPropertyVectorN extends EditorProperty {
    }
    class EditorQuickOpen extends ConfirmationDialog {
        readonly quick_open: Signal //  => void
    }
    /** Plugin for adding custom converters from one resource format to another in the editor resource picker context menu; for example, converting a [StandardMaterial3D] to a [ShaderMaterial].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_editorresourceconversionplugin.html  
     */
    class EditorResourceConversionPlugin extends RefCounted {
        /** Returns the class name of the target type of [Resource] that this plugin converts source resources to. */
        /* gdvirtual */ _converts_to(): string
        
        /** Called to determine whether a particular [Resource] can be converted to the target resource type by this plugin. */
        /* gdvirtual */ _handles(resource: Resource): boolean
        
        /** Takes an input [Resource] and converts it to the type given in [method _converts_to]. The returned [Resource] is the result of the conversion, and the input [Resource] remains unchanged. */
        /* gdvirtual */ _convert(resource: Resource): Resource
    }
    /** Godot editor's control for selecting [Resource] type properties.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_editorresourcepicker.html  
     */
    class EditorResourcePicker extends HBoxContainer {
        /** This virtual method is called when updating the context menu of [EditorResourcePicker]. Implement this method to override the "New ..." items with your own options. [param menu_node] is a reference to the [PopupMenu] node.  
         *      
         *  **Note:** Implement [method _handle_menu_selected] to handle these custom items.  
         */
        /* gdvirtual */ _set_create_options(menu_node: Object): void
        
        /** This virtual method can be implemented to handle context menu items not handled by default. See [method _set_create_options]. */
        /* gdvirtual */ _handle_menu_selected(id: number /*i64*/): boolean
        _update_resource_preview(_unnamed_arg0: string, _unnamed_arg1: Texture2D, _unnamed_arg2: Texture2D, _unnamed_arg3: number /*i64*/): void
        set_base_type(base_type: string): void
        get_base_type(): string
        
        /** Returns a list of all allowed types and subtypes corresponding to the [member base_type]. If the [member base_type] is empty, an empty list is returned. */
        get_allowed_types(): PackedStringArray
        set_edited_resource(resource: Resource): void
        get_edited_resource(): Resource
        set_toggle_mode(enable: boolean): void
        is_toggle_mode(): boolean
        
        /** Sets the toggle mode state for the main button. Works only if [member toggle_mode] is set to `true`. */
        set_toggle_pressed(pressed: boolean): void
        set_editable(enable: boolean): void
        is_editable(): boolean
        
        /** The base type of allowed resource types. Can be a comma-separated list of several options. */
        base_type: string
        
        /** The edited resource value. */
        edited_resource: Resource
        
        /** If `true`, the value can be selected and edited. */
        editable: boolean
        
        /** If `true`, the main button with the resource preview works in the toggle mode. Use [method set_toggle_pressed] to manually set the state. */
        toggle_mode: boolean
        
        /** Emitted when the resource value was set and user clicked to edit it. When [param inspect] is `true`, the signal was caused by the context menu "Edit" or "Inspect" option. */
        readonly resource_selected: Signal // resource: Resource, inspect: boolean => void
        
        /** Emitted when the value of the edited resource was changed. */
        readonly resource_changed: Signal // resource: Resource => void
    }
    /** A node used to generate previews of resources or files.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_editorresourcepreview.html  
     */
    class EditorResourcePreview extends Node {
        /** Queue a resource file located at [param path] for preview. Once the preview is ready, the [param receiver]'s [param receiver_func] will be called. The [param receiver_func] must take the following four arguments: [String] path, [Texture2D] preview, [Texture2D] thumbnail_preview, [Variant] userdata. [param userdata] can be anything, and will be returned when [param receiver_func] is called.  
         *      
         *  **Note:** If it was not possible to create the preview the [param receiver_func] will still be called, but the preview will be null.  
         */
        queue_resource_preview(path: string, receiver: Object, receiver_func: StringName, userdata: any): void
        
        /** Queue the [param resource] being edited for preview. Once the preview is ready, the [param receiver]'s [param receiver_func] will be called. The [param receiver_func] must take the following four arguments: [String] path, [Texture2D] preview, [Texture2D] thumbnail_preview, [Variant] userdata. [param userdata] can be anything, and will be returned when [param receiver_func] is called.  
         *      
         *  **Note:** If it was not possible to create the preview the [param receiver_func] will still be called, but the preview will be null.  
         */
        queue_edited_resource_preview(resource: Resource, receiver: Object, receiver_func: StringName, userdata: any): void
        
        /** Create an own, custom preview generator. */
        add_preview_generator(generator: EditorResourcePreviewGenerator): void
        
        /** Removes a custom preview generator. */
        remove_preview_generator(generator: EditorResourcePreviewGenerator): void
        
        /** Check if the resource changed, if so, it will be invalidated and the corresponding signal emitted. */
        check_for_invalidation(path: string): void
        
        /** Emitted if a preview was invalidated (changed). [param path] corresponds to the path of the preview. */
        readonly preview_invalidated: Signal // path: string => void
    }
    /** Custom generator of previews.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_editorresourcepreviewgenerator.html  
     */
    class EditorResourcePreviewGenerator extends RefCounted {
        /** Returns `true` if your generator supports the resource of type [param type]. */
        /* gdvirtual */ _handles(type: string): boolean
        
        /** Generate a preview from a given resource with the specified size. This must always be implemented.  
         *  Returning an empty texture is an OK way to fail and let another generator take care.  
         *  Care must be taken because this function is always called from a thread (not the main thread).  
         *  [param metadata] dictionary can be modified to store file-specific metadata that can be used in [method EditorResourceTooltipPlugin._make_tooltip_for_path] (like image size, sample length etc.).  
         */
        /* gdvirtual */ _generate(resource: Resource, size: Vector2i, metadata: Dictionary): Texture2D
        
        /** Generate a preview directly from a path with the specified size. Implementing this is optional, as default code will load and call [method _generate].  
         *  Returning an empty texture is an OK way to fail and let another generator take care.  
         *  Care must be taken because this function is always called from a thread (not the main thread).  
         *  [param metadata] dictionary can be modified to store file-specific metadata that can be used in [method EditorResourceTooltipPlugin._make_tooltip_for_path] (like image size, sample length etc.).  
         */
        /* gdvirtual */ _generate_from_path(path: string, size: Vector2i, metadata: Dictionary): Texture2D
        
        /** If this function returns `true`, the generator will automatically generate the small previews from the normal preview texture generated by the methods [method _generate] or [method _generate_from_path].  
         *  By default, it returns `false`.  
         */
        /* gdvirtual */ _generate_small_preview_automatically(): boolean
        
        /** If this function returns `true`, the generator will call [method _generate] or [method _generate_from_path] for small previews as well.  
         *  By default, it returns `false`.  
         */
        /* gdvirtual */ _can_generate_small_preview(): boolean
    }
    /** A plugin that advanced tooltip for its handled resource type.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_editorresourcetooltipplugin.html  
     */
    class EditorResourceTooltipPlugin extends RefCounted {
        /** Return `true` if the plugin is going to handle the given [Resource] [param type]. */
        /* gdvirtual */ _handles(type: string): boolean
        
        /** Create and return a tooltip that will be displayed when the user hovers a resource under the given [param path] in filesystem dock.  
         *  The [param metadata] dictionary is provided by preview generator (see [method EditorResourcePreviewGenerator._generate]).  
         *  [param base] is the base default tooltip, which is a [VBoxContainer] with a file name, type and size labels. If another plugin handled the same file type, [param base] will be output from the previous plugin. For best result, make sure the base tooltip is part of the returned [Control].  
         *      
         *  **Note:** It's unadvised to use [method ResourceLoader.load], especially with heavy resources like models or textures, because it will make the editor unresponsive when creating the tooltip. You can use [method request_thumbnail] if you want to display a preview in your tooltip.  
         *      
         *  **Note:** If you decide to discard the [param base], make sure to call [method Node.queue_free], because it's not freed automatically.  
         *    
         */
        /* gdvirtual */ _make_tooltip_for_path(path: string, metadata: Dictionary, base: Control): Control
        _thumbnail_ready(_unnamed_arg0: string, _unnamed_arg1: Texture2D, _unnamed_arg2: Texture2D, _unnamed_arg3: any): void
        
        /** Requests a thumbnail for the given [TextureRect]. The thumbnail is created asynchronously by [EditorResourcePreview] and automatically set when available. */
        request_thumbnail(path: string, control: TextureRect): void
    }
    class EditorRunBar extends MarginContainer {
        readonly play_pressed: Signal //  => void
        readonly stop_pressed: Signal //  => void
    }
    class EditorRunNative extends HBoxContainer {
        readonly native_run: Signal // preset: any /*EditorExportPreset*/ => void
    }
    /** Imports scenes from third-parties' 3D files.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_editorsceneformatimporter.html  
     */
    class EditorSceneFormatImporter extends RefCounted {
        static readonly IMPORT_SCENE = 1
        static readonly IMPORT_ANIMATION = 2
        static readonly IMPORT_FAIL_ON_MISSING_DEPENDENCIES = 4
        static readonly IMPORT_GENERATE_TANGENT_ARRAYS = 8
        static readonly IMPORT_USE_NAMED_SKIN_BINDS = 16
        static readonly IMPORT_DISCARD_MESHES_AND_MATERIALS = 32
        static readonly IMPORT_FORCE_DISABLE_MESH_COMPRESSION = 64
        /* gdvirtual */ _get_import_flags(): number /*i64*/
        /* gdvirtual */ _get_extensions(): PackedStringArray
        /* gdvirtual */ _import_scene(path: string, flags: number /*i64*/, options: Dictionary): Object
        /* gdvirtual */ _get_import_options(path: string): void
        /* gdvirtual */ _get_option_visibility(path: string, for_animation: boolean, option: string): void
    }
    /** Importer for Blender's `.blend` scene file format.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_editorsceneformatimporterblend.html  
     */
    class EditorSceneFormatImporterBlend extends EditorSceneFormatImporter {
    }
    class EditorSceneFormatImporterCollada extends EditorSceneFormatImporter {
    }
    class EditorSceneFormatImporterESCN extends EditorSceneFormatImporter {
    }
    /** Importer for the `.fbx` scene file format.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_editorsceneformatimporterfbx.html  
     */
    class EditorSceneFormatImporterFBX extends EditorSceneFormatImporter {
    }
    /** @link https://docs.godotengine.org/en/4.2/classes/class_editorsceneformatimportergltf.html */
    class EditorSceneFormatImporterGLTF extends EditorSceneFormatImporter {
    }
    /** Post-processes scenes after import.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_editorscenepostimport.html  
     */
    class EditorScenePostImport extends RefCounted {
        /** Called after the scene was imported. This method must return the modified version of the scene. */
        /* gdvirtual */ _post_import(scene: Node): Object
        
        /** Returns the source file path which got imported (e.g. `res://scene.dae`). */
        get_source_file(): string
    }
    namespace EditorScenePostImportPlugin {
        enum InternalImportCategory {
            INTERNAL_IMPORT_CATEGORY_NODE = 0,
            INTERNAL_IMPORT_CATEGORY_MESH_3D_NODE = 1,
            INTERNAL_IMPORT_CATEGORY_MESH = 2,
            INTERNAL_IMPORT_CATEGORY_MATERIAL = 3,
            INTERNAL_IMPORT_CATEGORY_ANIMATION = 4,
            INTERNAL_IMPORT_CATEGORY_ANIMATION_NODE = 5,
            INTERNAL_IMPORT_CATEGORY_SKELETON_3D_NODE = 6,
            INTERNAL_IMPORT_CATEGORY_MAX = 7,
        }
    }
    /** Plugin to control and modifying the process of importing a scene.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_editorscenepostimportplugin.html  
     */
    class EditorScenePostImportPlugin extends RefCounted {
        /** Override to add internal import options. These will appear in the 3D scene import dialog. Add options via [method add_import_option] and [method add_import_option_advanced]. */
        /* gdvirtual */ _get_internal_import_options(category: number /*i64*/): void
        
        /** Return true or false whether a given option should be visible. Return null to ignore. */
        /* gdvirtual */ _get_internal_option_visibility(category: number /*i64*/, for_animation: boolean, option: string): void
        
        /** Return true whether updating the 3D view of the import dialog needs to be updated if an option has changed. */
        /* gdvirtual */ _get_internal_option_update_view_required(category: number /*i64*/, option: string): void
        
        /** Process a specific node or resource for a given category. */
        /* gdvirtual */ _internal_process(category: number /*i64*/, base_node: Node, node: Node, resource: Resource): void
        
        /** Override to add general import options. These will appear in the main import dock on the editor. Add options via [method add_import_option] and [method add_import_option_advanced]. */
        /* gdvirtual */ _get_import_options(path: string): void
        
        /** Return true or false whether a given option should be visible. Return null to ignore. */
        /* gdvirtual */ _get_option_visibility(path: string, for_animation: boolean, option: string): void
        
        /** Pre Process the scene. This function is called right after the scene format loader loaded the scene and no changes have been made. */
        /* gdvirtual */ _pre_process(scene: Node): void
        
        /** Post process the scene. This function is called after the final scene has been configured. */
        /* gdvirtual */ _post_process(scene: Node): void
        
        /** Query the value of an option. This function can only be called from those querying visibility, or processing. */
        get_option_value(name: StringName): any
        
        /** Add a specific import option (name and default value only). This function can only be called from [method _get_import_options] and [method _get_internal_import_options]. */
        add_import_option(name: string, value: any): void
        
        /** Add a specific import option. This function can only be called from [method _get_import_options] and [method _get_internal_import_options]. */
        add_import_option_advanced(type: Variant.Type, name: string, default_value: any, hint: PropertyHint = 0, hint_string: string = '', usage_flags: number /*i64*/ = 6): void
    }
    class EditorSceneTabs extends MarginContainer {
        _tab_preview_done(_unnamed_arg0: string, _unnamed_arg1: Texture2D, _unnamed_arg2: Texture2D, _unnamed_arg3: any): void
        readonly tab_changed: Signal // tab_index: number /*i64*/ => void
        readonly tab_closed: Signal // tab_index: number /*i64*/ => void
    }
    /** Base script that can be used to add extension functions to the editor.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_editorscript.html  
     */
    class EditorScript extends RefCounted {
        /** This method is executed by the Editor when **File > Run** is used. */
        /* gdvirtual */ _run(): void
        
        /** Adds [param node] as a child of the root node in the editor context.  
         *  **Warning:** The implementation of this method is currently disabled.  
         */
        add_root_node(node: Node): void
        
        /** Returns the Editor's currently active scene. */
        get_scene(): Node
        
        /** Returns the [EditorInterface] singleton instance.  
         *   *Deprecated.*  [EditorInterface] is a global singleton and can be accessed directly by its name.  
         */
        get_editor_interface(): EditorInterface
    }
    /** Godot editor's control for selecting the `script` property of a [Node].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_editorscriptpicker.html  
     */
    class EditorScriptPicker extends EditorResourcePicker {
        set_script_owner(owner_node: Node): void
        get_script_owner(): Node
        
        /** The owner [Node] of the script property that holds the edited resource. */
        script_owner: Node
    }
    class EditorScriptPreviewPlugin extends EditorResourcePreviewGenerator {
    }
    /** Manages the SceneTree selection in the editor.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_editorselection.html  
     */
    class EditorSelection extends Object {
        /** Clear the selection. */
        clear(): void
        
        /** Adds a node to the selection.  
         *      
         *  **Note:** The newly selected node will not be automatically edited in the inspector. If you want to edit a node, use [method EditorInterface.edit_node].  
         */
        add_node(node: Node): void
        
        /** Removes a node from the selection. */
        remove_node(node: Node): void
        
        /** Gets the list of selected nodes. */
        get_selected_nodes(): Array
        
        /** Gets the list of selected nodes, optimized for transform operations (i.e. moving them, rotating, etc). This list avoids situations where a node is selected and also child/grandchild. */
        get_transformable_selected_nodes(): Array
        _emit_change(): void
        
        /** Emitted when the selection changes. */
        readonly selection_changed: Signal //  => void
    }
    /** Object that holds the project-independent editor settings.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_editorsettings.html  
     */
    class EditorSettings extends Resource {
        /** Emitted after any editor setting has changed. It's used by various editor plugins to update their visuals on theme changes or logic on configuration changes. */
        static readonly NOTIFICATION_EDITOR_SETTINGS_CHANGED = 10000
        
        /** Returns `true` if the setting specified by [param name] exists, `false` otherwise. */
        has_setting(name: string): boolean
        
        /** Sets the [param value] of the setting specified by [param name]. This is equivalent to using [method Object.set] on the EditorSettings instance. */
        set_setting(name: string, value: any): void
        
        /** Returns the value of the setting specified by [param name]. This is equivalent to using [method Object.get] on the EditorSettings instance. */
        get_setting(name: string): any
        
        /** Erases the setting whose name is specified by [param property]. */
        erase(property: string): void
        
        /** Sets the initial value of the setting specified by [param name] to [param value]. This is used to provide a value for the Revert button in the Editor Settings. If [param update_current] is true, the current value of the setting will be set to [param value] as well. */
        set_initial_value(name: StringName, value: any, update_current: boolean): void
        
        /** Adds a custom property info to a property. The dictionary must contain:  
         *  - `name`: [String] (the name of the property)  
         *  - `type`: [int] (see [enum Variant.Type])  
         *  - optionally `hint`: [int] (see [enum PropertyHint]) and `hint_string`: [String]  
         *  **Example:**  
         *    
         */
        add_property_info(info: Dictionary): void
        
        /** Sets project-specific metadata with the [param section], [param key] and [param data] specified. This metadata is stored outside the project folder and therefore won't be checked into version control. See also [method get_project_metadata]. */
        set_project_metadata(section: string, key: string, data: any): void
        
        /** Returns project-specific metadata for the [param section] and [param key] specified. If the metadata doesn't exist, [param default] will be returned instead. See also [method set_project_metadata]. */
        get_project_metadata(section: string, key: string, default_: any = <any> {} /*compound.type from nil*/): any
        
        /** Sets the list of favorite files and directories for this project. */
        set_favorites(dirs: PackedStringArray): void
        
        /** Returns the list of favorite files and directories for this project. */
        get_favorites(): PackedStringArray
        
        /** Sets the list of recently visited folders in the file dialog for this project. */
        set_recent_dirs(dirs: PackedStringArray): void
        
        /** Returns the list of recently visited folders in the file dialog for this project. */
        get_recent_dirs(): PackedStringArray
        
        /** Overrides the built-in editor action [param name] with the input actions defined in [param actions_list]. */
        set_builtin_action_override(name: string, actions_list: Array): void
        
        /** Checks if any settings with the prefix [param setting_prefix] exist in the set of changed settings. See also [method get_changed_settings]. */
        check_changed_settings_in_group(setting_prefix: string): boolean
        
        /** Gets an array of the settings which have been changed since the last save. Note that internally `changed_settings` is cleared after a successful save, so generally the most appropriate place to use this method is when processing [constant NOTIFICATION_EDITOR_SETTINGS_CHANGED]. */
        get_changed_settings(): PackedStringArray
        
        /** Marks the passed editor setting as being changed, see [method get_changed_settings]. Only settings which exist (see [method has_setting]) will be accepted. */
        mark_setting_changed(setting: string): void
        
        /** Emitted after any editor setting has changed. */
        readonly settings_changed: Signal //  => void
    }
    class EditorSettingsDialog extends AcceptDialog {
        _update_shortcuts(): void
        _settings_changed(): void
    }
    /** Godot editor's control for editing numeric values.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_editorspinslider.html  
     */
    class EditorSpinSlider extends Range {
        set_label(label: string): void
        get_label(): string
        set_suffix(suffix: string): void
        get_suffix(): string
        set_read_only(read_only: boolean): void
        is_read_only(): boolean
        set_flat(flat: boolean): void
        is_flat(): boolean
        set_hide_slider(hide_slider: boolean): void
        is_hiding_slider(): boolean
        
        /** The text that displays to the left of the value. */
        label: string
        
        /** The suffix to display after the value (in a faded color). This should generally be a plural word. You may have to use an abbreviation if the suffix is too long to be displayed. */
        suffix: string
        
        /** If `true`, the slider can't be interacted with. */
        read_only: boolean
        
        /** If `true`, the slider will not draw background. */
        flat: boolean
        
        /** If `true`, the slider and up/down arrows are hidden. */
        hide_slider: boolean
        
        /** Emitted when the spinner/slider is grabbed. */
        readonly grabbed: Signal //  => void
        
        /** Emitted when the spinner/slider is ungrabbed. */
        readonly ungrabbed: Signal //  => void
        
        /** Emitted when the value form gains focus. */
        readonly value_focus_entered: Signal //  => void
        
        /** Emitted when the value form loses focus. */
        readonly value_focus_exited: Signal //  => void
    }
    class EditorStandardSyntaxHighlighter extends EditorSyntaxHighlighter {
    }
    /** Base class for [SyntaxHighlighter] used by the [ScriptEditor].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_editorsyntaxhighlighter.html  
     */
    class EditorSyntaxHighlighter extends SyntaxHighlighter {
        /** Virtual method which can be overridden to return the syntax highlighter name. */
        /* gdvirtual */ _get_name(): string
        
        /** Virtual method which can be overridden to return the supported language names. */
        /* gdvirtual */ _get_supported_languages(): PackedStringArray
        _get_edited_resource(): RefCounted
    }
    class EditorTexturePreviewPlugin extends EditorResourcePreviewGenerator {
    }
    class EditorTextureTooltipPlugin extends EditorResourceTooltipPlugin {
    }
    class EditorTheme extends Theme {
    }
    class EditorTitleBar extends HBoxContainer {
    }
    class EditorToaster extends HBoxContainer {
        _popup_str(message: string, severity: any /*EditorToaster.Severity*/, tooltip: string): void
    }
    /** Plugin for adding custom parsers to extract strings that are to be translated from custom files (.csv, .json etc.).  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_editortranslationparserplugin.html  
     */
    class EditorTranslationParserPlugin extends RefCounted {
        /** Override this method to define a custom parsing logic to extract the translatable strings. */
        /* gdvirtual */ _parse_file(path: string, msgids: Array, msgids_context_plural: Array): void
        
        /** Gets the list of file extensions to associate with this parser, e.g. `["csv"]`. */
        /* gdvirtual */ _get_recognized_extensions(): PackedStringArray
    }
    namespace EditorUndoRedoManager {
        enum SpecialHistory {
            /** Global history not associated with any scene, but with external resources etc. */
            GLOBAL_HISTORY = 0,
            
            /** History associated with remote inspector. Used when live editing a running project. */
            REMOTE_HISTORY = -9,
            
            /** Invalid "null" history. It's a special value, not associated with any object. */
            INVALID_HISTORY = -99,
        }
    }
    /** Manages undo history of scenes opened in the editor.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_editorundoredomanager.html  
     */
    class EditorUndoRedoManager extends Object {
        /** Create a new action. After this is called, do all your calls to [method add_do_method], [method add_undo_method], [method add_do_property], and [method add_undo_property], then commit the action with [method commit_action].  
         *  The way actions are merged is dictated by the [param merge_mode] argument. See [enum UndoRedo.MergeMode] for details.  
         *  If [param custom_context] object is provided, it will be used for deducing target history (instead of using the first operation).  
         *  The way undo operation are ordered in actions is dictated by [param backward_undo_ops]. When [param backward_undo_ops] is `false` undo option are ordered in the same order they were added. Which means the first operation to be added will be the first to be undone.  
         */
        create_action(name: string, merge_mode: UndoRedo.MergeMode = 0, custom_context: Object = <any> {} /*compound.type from nil*/, backward_undo_ops: boolean = false): void
        
        /** Commit the action. If [param execute] is true (default), all "do" methods/properties are called/set when this function is called. */
        commit_action(execute: boolean = true): void
        
        /** Returns `true` if the [EditorUndoRedoManager] is currently committing the action, i.e. running its "do" method or property change (see [method commit_action]). */
        is_committing_action(): boolean
        
        /** Register a method that will be called when the action is committed (i.e. the "do" action).  
         *  If this is the first operation, the [param object] will be used to deduce target undo history.  
         */
        add_do_method(object: Object, method: StringName, ...vargargs: any[]): void
        
        /** Register a method that will be called when the action is undone (i.e. the "undo" action).  
         *  If this is the first operation, the [param object] will be used to deduce target undo history.  
         */
        add_undo_method(object: Object, method: StringName, ...vargargs: any[]): void
        
        /** Register a property value change for "do".  
         *  If this is the first operation, the [param object] will be used to deduce target undo history.  
         */
        add_do_property(object: Object, property: StringName, value: any): void
        
        /** Register a property value change for "undo".  
         *  If this is the first operation, the [param object] will be used to deduce target undo history.  
         */
        add_undo_property(object: Object, property: StringName, value: any): void
        
        /** Register a reference for "do" that will be erased if the "do" history is lost. This is useful mostly for new nodes created for the "do" call. Do not use for resources. */
        add_do_reference(object: Object): void
        
        /** Register a reference for "undo" that will be erased if the "undo" history is lost. This is useful mostly for nodes removed with the "do" call (not the "undo" call!). */
        add_undo_reference(object: Object): void
        
        /** Returns the history ID deduced from the given [param object]. It can be used with [method get_history_undo_redo]. */
        get_object_history_id(object: Object): number /*i64*/
        
        /** Returns the [UndoRedo] object associated with the given history [param id].  
         *  [param id] above `0` are mapped to the opened scene tabs (but it doesn't match their order). [param id] of `0` or lower have special meaning (see [enum SpecialHistory]).  
         *  Best used with [method get_object_history_id]. This method is only provided in case you need some more advanced methods of [UndoRedo] (but keep in mind that directly operating on the [UndoRedo] object might affect editor's stability).  
         */
        get_history_undo_redo(id: number /*i64*/): UndoRedo
        
        /** Emitted when the list of actions in any history has changed, either when an action is committed or a history is cleared. */
        readonly history_changed: Signal //  => void
        
        /** Emitted when the version of any history has changed as a result of undo or redo call. */
        readonly version_changed: Signal //  => void
    }
    namespace EditorVCSInterface {
        enum ChangeType {
            /** A new file has been added. */
            CHANGE_TYPE_NEW = 0,
            
            /** An earlier added file has been modified. */
            CHANGE_TYPE_MODIFIED = 1,
            
            /** An earlier added file has been renamed. */
            CHANGE_TYPE_RENAMED = 2,
            
            /** An earlier added file has been deleted. */
            CHANGE_TYPE_DELETED = 3,
            
            /** An earlier added file has been typechanged. */
            CHANGE_TYPE_TYPECHANGE = 4,
            
            /** A file is left unmerged. */
            CHANGE_TYPE_UNMERGED = 5,
        }
        enum TreeArea {
            /** A commit is encountered from the commit area. */
            TREE_AREA_COMMIT = 0,
            
            /** A file is encountered from the staged area. */
            TREE_AREA_STAGED = 1,
            
            /** A file is encountered from the unstaged area. */
            TREE_AREA_UNSTAGED = 2,
        }
    }
    /** Version Control System (VCS) interface, which reads and writes to the local VCS in use.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_editorvcsinterface.html  
     */
    class EditorVCSInterface extends Object {
        /** Initializes the VCS plugin when called from the editor. Returns whether or not the plugin was successfully initialized. A VCS project is initialized at [param project_path]. */
        /* gdvirtual */ _initialize(project_path: string): boolean
        
        /** Set user credentials in the underlying VCS. [param username] and [param password] are used only during HTTPS authentication unless not already mentioned in the remote URL. [param ssh_public_key_path], [param ssh_private_key_path], and [param ssh_passphrase] are only used during SSH authentication. */
        /* gdvirtual */ _set_credentials(username: string, password: string, ssh_public_key_path: string, ssh_private_key_path: string, ssh_passphrase: string): void
        
        /** Returns an [Array] of [Dictionary] items (see [method create_status_file]), each containing the status data of every modified file in the project folder. */
        /* gdvirtual */ _get_modified_files_data(): Array
        
        /** Stages the file present at [param file_path] to the staged area. */
        /* gdvirtual */ _stage_file(file_path: string): void
        
        /** Unstages the file present at [param file_path] from the staged area to the unstaged area. */
        /* gdvirtual */ _unstage_file(file_path: string): void
        
        /** Discards the changes made in a file present at [param file_path]. */
        /* gdvirtual */ _discard_file(file_path: string): void
        
        /** Commits the currently staged changes and applies the commit [param msg] to the resulting commit. */
        /* gdvirtual */ _commit(msg: string): void
        
        /** Returns an array of [Dictionary] items (see [method create_diff_file], [method create_diff_hunk], [method create_diff_line], [method add_line_diffs_into_diff_hunk] and [method add_diff_hunks_into_diff_file]), each containing information about a diff. If [param identifier] is a file path, returns a file diff, and if it is a commit identifier, then returns a commit diff. */
        /* gdvirtual */ _get_diff(identifier: string, area: number /*i64*/): Array
        
        /** Shuts down VCS plugin instance. Called when the user either closes the editor or shuts down the VCS plugin through the editor UI. */
        /* gdvirtual */ _shut_down(): boolean
        
        /** Returns the name of the underlying VCS provider. */
        /* gdvirtual */ _get_vcs_name(): string
        
        /** Returns an [Array] of [Dictionary] items (see [method create_commit]), each containing the data for a past commit. */
        /* gdvirtual */ _get_previous_commits(max_commits: number /*i64*/): Array
        
        /** Gets an instance of an [Array] of [String]s containing available branch names in the VCS. */
        /* gdvirtual */ _get_branch_list(): Array
        
        /** Returns an [Array] of [String]s, each containing the name of a remote configured in the VCS. */
        /* gdvirtual */ _get_remotes(): Array
        
        /** Creates a new branch named [param branch_name] in the VCS. */
        /* gdvirtual */ _create_branch(branch_name: string): void
        
        /** Remove a branch from the local VCS. */
        /* gdvirtual */ _remove_branch(branch_name: string): void
        
        /** Creates a new remote destination with name [param remote_name] and points it to [param remote_url]. This can be an HTTPS remote or an SSH remote. */
        /* gdvirtual */ _create_remote(remote_name: string, remote_url: string): void
        
        /** Remove a remote from the local VCS. */
        /* gdvirtual */ _remove_remote(remote_name: string): void
        
        /** Gets the current branch name defined in the VCS. */
        /* gdvirtual */ _get_current_branch_name(): string
        
        /** Checks out a [param branch_name] in the VCS. */
        /* gdvirtual */ _checkout_branch(branch_name: string): boolean
        
        /** Pulls changes from the remote. This can give rise to merge conflicts. */
        /* gdvirtual */ _pull(remote: string): void
        
        /** Pushes changes to the [param remote]. If [param force] is `true`, a force push will override the change history already present on the remote. */
        /* gdvirtual */ _push(remote: string, force: boolean): void
        
        /** Fetches new changes from the [param remote], but doesn't write changes to the current working directory. Equivalent to `git fetch`. */
        /* gdvirtual */ _fetch(remote: string): void
        
        /** Returns an [Array] of [Dictionary] items (see [method create_diff_hunk]), each containing a line diff between a file at [param file_path] and the [param text] which is passed in. */
        /* gdvirtual */ _get_line_diff(file_path: string, text: string): Array
        
        /** Helper function to create a [Dictionary] for storing a line diff. [param new_line_no] is the line number in the new file (can be `-1` if the line is deleted). [param old_line_no] is the line number in the old file (can be `-1` if the line is added). [param content] is the diff text. [param status] is a single character string which stores the line origin. */
        create_diff_line(new_line_no: number /*i64*/, old_line_no: number /*i64*/, content: string, status: string): Dictionary
        
        /** Helper function to create a [Dictionary] for storing diff hunk data. [param old_start] is the starting line number in old file. [param new_start] is the starting line number in new file. [param old_lines] is the number of lines in the old file. [param new_lines] is the number of lines in the new file. */
        create_diff_hunk(old_start: number /*i64*/, new_start: number /*i64*/, old_lines: number /*i64*/, new_lines: number /*i64*/): Dictionary
        
        /** Helper function to create a [Dictionary] for storing old and new diff file paths. */
        create_diff_file(new_file: string, old_file: string): Dictionary
        
        /** Helper function to create a commit [Dictionary] item. [param msg] is the commit message of the commit. [param author] is a single human-readable string containing all the author's details, e.g. the email and name configured in the VCS. [param id] is the identifier of the commit, in whichever format your VCS may provide an identifier to commits. [param unix_timestamp] is the UTC Unix timestamp of when the commit was created. [param offset_minutes] is the timezone offset in minutes, recorded from the system timezone where the commit was created. */
        create_commit(msg: string, author: string, id: string, unix_timestamp: number /*i64*/, offset_minutes: number /*i64*/): Dictionary
        
        /** Helper function to create a [Dictionary] used by editor to read the status of a file. */
        create_status_file(file_path: string, change_type: EditorVCSInterface.ChangeType, area: EditorVCSInterface.TreeArea): Dictionary
        
        /** Helper function to add an array of [param diff_hunks] into a [param diff_file]. */
        add_diff_hunks_into_diff_file(diff_file: Dictionary, diff_hunks: Array): Dictionary
        
        /** Helper function to add an array of [param line_diffs] into a [param diff_hunk]. */
        add_line_diffs_into_diff_hunk(diff_hunk: Dictionary, line_diffs: Array): Dictionary
        
        /** Pops up an error message in the editor which is shown as coming from the underlying VCS. Use this to show VCS specific error messages. */
        popup_error(msg: string): void
    }
    class EditorValidationPanel extends PanelContainer {
    }
    class EditorVisualProfiler extends VBoxContainer {
        readonly enable_profiling: Signal // enable: boolean => void
    }
    class EditorZoomWidget extends HBoxContainer {
        set_zoom(zoom: number /*f64*/): void
        get_zoom(): number /*f64*/
        set_zoom_by_increments(increment: number /*i64*/, integer_only: boolean): void
        zoom: number /*f64*/
        readonly zoom_changed: Signal // zoom: number /*f64*/ => void
    }
    /** Holds a reference to an [Object]'s instance ID.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_encodedobjectasid.html  
     */
    class EncodedObjectAsID extends RefCounted {
        set_object_id(id: number /*i64*/): void
        get_object_id(): number /*i64*/
        
        /** The [Object] identifier stored in this [EncodedObjectAsID] instance. The object instance can be retrieved with [method @GlobalScope.instance_from_id]. */
        object_id: number /*i64*/
    }
    /** Base class for creating custom profilers.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_engineprofiler.html  
     */
    class EngineProfiler extends RefCounted {
        /** Called when the profiler is enabled/disabled, along with a set of [param options]. */
        /* gdvirtual */ _toggle(enable: boolean, options: Array): void
        
        /** Called when data is added to profiler using [method EngineDebugger.profiler_add_frame_data]. */
        /* gdvirtual */ _add_frame(data: Array): void
        
        /** Called once every engine iteration when the profiler is active with information about the current frame. All time values are in seconds. Lower values represent faster processing times and are therefore considered better. */
        /* gdvirtual */ _tick(frame_time: number /*f64*/, process_time: number /*f64*/, physics_time: number /*f64*/, physics_frame_time: number /*f64*/): void
    }
    namespace Environment {
        enum BGMode {
            /** Clears the background using the clear color defined in [member ProjectSettings.rendering/environment/defaults/default_clear_color]. */
            BG_CLEAR_COLOR = 0,
            
            /** Clears the background using a custom clear color. */
            BG_COLOR = 1,
            
            /** Displays a user-defined sky in the background. */
            BG_SKY = 2,
            
            /** Displays a [CanvasLayer] in the background. */
            BG_CANVAS = 3,
            
            /** Keeps on screen every pixel drawn in the background. This is the fastest background mode, but it can only be safely used in fully-interior scenes (no visible sky or sky reflections). If enabled in a scene where the background is visible, "ghost trail" artifacts will be visible when moving the camera. */
            BG_KEEP = 4,
            
            /** Displays a camera feed in the background. */
            BG_CAMERA_FEED = 5,
            
            /** Represents the size of the [enum BGMode] enum. */
            BG_MAX = 6,
        }
        enum AmbientSource {
            /** Gather ambient light from whichever source is specified as the background. */
            AMBIENT_SOURCE_BG = 0,
            
            /** Disable ambient light. This provides a slight performance boost over [constant AMBIENT_SOURCE_SKY]. */
            AMBIENT_SOURCE_DISABLED = 1,
            
            /** Specify a specific [Color] for ambient light. This provides a slight performance boost over [constant AMBIENT_SOURCE_SKY]. */
            AMBIENT_SOURCE_COLOR = 2,
            
            /** Gather ambient light from the [Sky] regardless of what the background is. */
            AMBIENT_SOURCE_SKY = 3,
        }
        enum ReflectionSource {
            /** Use the background for reflections. */
            REFLECTION_SOURCE_BG = 0,
            
            /** Disable reflections. This provides a slight performance boost over other options. */
            REFLECTION_SOURCE_DISABLED = 1,
            
            /** Use the [Sky] for reflections regardless of what the background is. */
            REFLECTION_SOURCE_SKY = 2,
        }
        enum ToneMapper {
            /** Linear tonemapper operator. Reads the linear data and passes it on unmodified. This can cause bright lighting to look blown out, with noticeable clipping in the output colors. */
            TONE_MAPPER_LINEAR = 0,
            
            /** Reinhardt tonemapper operator. Performs a variation on rendered pixels' colors by this formula: `color = color / (1 + color)`. This avoids clipping bright highlights, but the resulting image can look a bit dull. */
            TONE_MAPPER_REINHARDT = 1,
            
            /** Filmic tonemapper operator. This avoids clipping bright highlights, with a resulting image that usually looks more vivid than [constant TONE_MAPPER_REINHARDT]. */
            TONE_MAPPER_FILMIC = 2,
            
            /** Use the Academy Color Encoding System tonemapper. ACES is slightly more expensive than other options, but it handles bright lighting in a more realistic fashion by desaturating it as it becomes brighter. ACES typically has a more contrasted output compared to [constant TONE_MAPPER_REINHARDT] and [constant TONE_MAPPER_FILMIC].  
             *      
             *  **Note:** This tonemapping operator is called "ACES Fitted" in Godot 3.x.  
             */
            TONE_MAPPER_ACES = 3,
        }
        enum GlowBlendMode {
            /** Additive glow blending mode. Mostly used for particles, glows (bloom), lens flare, bright sources. */
            GLOW_BLEND_MODE_ADDITIVE = 0,
            
            /** Screen glow blending mode. Increases brightness, used frequently with bloom. */
            GLOW_BLEND_MODE_SCREEN = 1,
            
            /** Soft light glow blending mode. Modifies contrast, exposes shadows and highlights (vivid bloom). */
            GLOW_BLEND_MODE_SOFTLIGHT = 2,
            
            /** Replace glow blending mode. Replaces all pixels' color by the glow value. This can be used to simulate a full-screen blur effect by tweaking the glow parameters to match the original image's brightness. */
            GLOW_BLEND_MODE_REPLACE = 3,
            
            /** Mixes the glow with the underlying color to avoid increasing brightness as much while still maintaining a glow effect. */
            GLOW_BLEND_MODE_MIX = 4,
        }
        enum SDFGIYScale {
            /** Use 50% scale for SDFGI on the Y (vertical) axis. SDFGI cells will be twice as short as they are wide. This allows providing increased GI detail and reduced light leaking with thin floors and ceilings. This is usually the best choice for scenes that don't feature much verticality. */
            SDFGI_Y_SCALE_50_PERCENT = 0,
            
            /** Use 75% scale for SDFGI on the Y (vertical) axis. This is a balance between the 50% and 100% SDFGI Y scales. */
            SDFGI_Y_SCALE_75_PERCENT = 1,
            
            /** Use 100% scale for SDFGI on the Y (vertical) axis. SDFGI cells will be as tall as they are wide. This is usually the best choice for highly vertical scenes. The downside is that light leaking may become more noticeable with thin floors and ceilings. */
            SDFGI_Y_SCALE_100_PERCENT = 2,
        }
    }
    /** Resource for environment nodes (like [WorldEnvironment]) that define multiple rendering options.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_environment.html  
     */
    class Environment extends Resource {
        set_background(mode: Environment.BGMode): void
        get_background(): Environment.BGMode
        set_sky(sky: Sky): void
        get_sky(): Sky
        set_sky_custom_fov(scale: number /*f64*/): void
        get_sky_custom_fov(): number /*f64*/
        set_sky_rotation(euler_radians: Vector3): void
        get_sky_rotation(): Vector3
        set_bg_color(color: Color): void
        get_bg_color(): Color
        set_bg_energy_multiplier(energy: number /*f64*/): void
        get_bg_energy_multiplier(): number /*f64*/
        set_bg_intensity(energy: number /*f64*/): void
        get_bg_intensity(): number /*f64*/
        set_canvas_max_layer(layer: number /*i64*/): void
        get_canvas_max_layer(): number /*i64*/
        set_camera_feed_id(id: number /*i64*/): void
        get_camera_feed_id(): number /*i64*/
        set_ambient_light_color(color: Color): void
        get_ambient_light_color(): Color
        set_ambient_source(source: Environment.AmbientSource): void
        get_ambient_source(): Environment.AmbientSource
        set_ambient_light_energy(energy: number /*f64*/): void
        get_ambient_light_energy(): number /*f64*/
        set_ambient_light_sky_contribution(ratio: number /*f64*/): void
        get_ambient_light_sky_contribution(): number /*f64*/
        set_reflection_source(source: Environment.ReflectionSource): void
        get_reflection_source(): Environment.ReflectionSource
        set_tonemapper(mode: Environment.ToneMapper): void
        get_tonemapper(): Environment.ToneMapper
        set_tonemap_exposure(exposure: number /*f64*/): void
        get_tonemap_exposure(): number /*f64*/
        set_tonemap_white(white: number /*f64*/): void
        get_tonemap_white(): number /*f64*/
        set_ssr_enabled(enabled: boolean): void
        is_ssr_enabled(): boolean
        set_ssr_max_steps(max_steps: number /*i64*/): void
        get_ssr_max_steps(): number /*i64*/
        set_ssr_fade_in(fade_in: number /*f64*/): void
        get_ssr_fade_in(): number /*f64*/
        set_ssr_fade_out(fade_out: number /*f64*/): void
        get_ssr_fade_out(): number /*f64*/
        set_ssr_depth_tolerance(depth_tolerance: number /*f64*/): void
        get_ssr_depth_tolerance(): number /*f64*/
        set_ssao_enabled(enabled: boolean): void
        is_ssao_enabled(): boolean
        set_ssao_radius(radius: number /*f64*/): void
        get_ssao_radius(): number /*f64*/
        set_ssao_intensity(intensity: number /*f64*/): void
        get_ssao_intensity(): number /*f64*/
        set_ssao_power(power: number /*f64*/): void
        get_ssao_power(): number /*f64*/
        set_ssao_detail(detail: number /*f64*/): void
        get_ssao_detail(): number /*f64*/
        set_ssao_horizon(horizon: number /*f64*/): void
        get_ssao_horizon(): number /*f64*/
        set_ssao_sharpness(sharpness: number /*f64*/): void
        get_ssao_sharpness(): number /*f64*/
        set_ssao_direct_light_affect(amount: number /*f64*/): void
        get_ssao_direct_light_affect(): number /*f64*/
        set_ssao_ao_channel_affect(amount: number /*f64*/): void
        get_ssao_ao_channel_affect(): number /*f64*/
        set_ssil_enabled(enabled: boolean): void
        is_ssil_enabled(): boolean
        set_ssil_radius(radius: number /*f64*/): void
        get_ssil_radius(): number /*f64*/
        set_ssil_intensity(intensity: number /*f64*/): void
        get_ssil_intensity(): number /*f64*/
        set_ssil_sharpness(sharpness: number /*f64*/): void
        get_ssil_sharpness(): number /*f64*/
        set_ssil_normal_rejection(normal_rejection: number /*f64*/): void
        get_ssil_normal_rejection(): number /*f64*/
        set_sdfgi_enabled(enabled: boolean): void
        is_sdfgi_enabled(): boolean
        set_sdfgi_cascades(amount: number /*i64*/): void
        get_sdfgi_cascades(): number /*i64*/
        set_sdfgi_min_cell_size(size: number /*f64*/): void
        get_sdfgi_min_cell_size(): number /*f64*/
        set_sdfgi_max_distance(distance: number /*f64*/): void
        get_sdfgi_max_distance(): number /*f64*/
        set_sdfgi_cascade0_distance(distance: number /*f64*/): void
        get_sdfgi_cascade0_distance(): number /*f64*/
        set_sdfgi_y_scale(scale: Environment.SDFGIYScale): void
        get_sdfgi_y_scale(): Environment.SDFGIYScale
        set_sdfgi_use_occlusion(enable: boolean): void
        is_sdfgi_using_occlusion(): boolean
        set_sdfgi_bounce_feedback(amount: number /*f64*/): void
        get_sdfgi_bounce_feedback(): number /*f64*/
        set_sdfgi_read_sky_light(enable: boolean): void
        is_sdfgi_reading_sky_light(): boolean
        set_sdfgi_energy(amount: number /*f64*/): void
        get_sdfgi_energy(): number /*f64*/
        set_sdfgi_normal_bias(bias: number /*f64*/): void
        get_sdfgi_normal_bias(): number /*f64*/
        set_sdfgi_probe_bias(bias: number /*f64*/): void
        get_sdfgi_probe_bias(): number /*f64*/
        set_glow_enabled(enabled: boolean): void
        is_glow_enabled(): boolean
        
        /** Sets the intensity of the glow level [param idx]. A value above `0.0` enables the level. Each level relies on the previous level. This means that enabling higher glow levels will slow down the glow effect rendering, even if previous levels aren't enabled. */
        set_glow_level(idx: number /*i64*/, intensity: number /*f64*/): void
        
        /** Returns the intensity of the glow level [param idx]. */
        get_glow_level(idx: number /*i64*/): number /*f64*/
        set_glow_normalized(normalize: boolean): void
        is_glow_normalized(): boolean
        set_glow_intensity(intensity: number /*f64*/): void
        get_glow_intensity(): number /*f64*/
        set_glow_strength(strength: number /*f64*/): void
        get_glow_strength(): number /*f64*/
        set_glow_mix(mix: number /*f64*/): void
        get_glow_mix(): number /*f64*/
        set_glow_bloom(amount: number /*f64*/): void
        get_glow_bloom(): number /*f64*/
        set_glow_blend_mode(mode: Environment.GlowBlendMode): void
        get_glow_blend_mode(): Environment.GlowBlendMode
        set_glow_hdr_bleed_threshold(threshold: number /*f64*/): void
        get_glow_hdr_bleed_threshold(): number /*f64*/
        set_glow_hdr_bleed_scale(scale: number /*f64*/): void
        get_glow_hdr_bleed_scale(): number /*f64*/
        set_glow_hdr_luminance_cap(amount: number /*f64*/): void
        get_glow_hdr_luminance_cap(): number /*f64*/
        set_glow_map_strength(strength: number /*f64*/): void
        get_glow_map_strength(): number /*f64*/
        set_glow_map(mode: Texture): void
        get_glow_map(): Texture
        set_fog_enabled(enabled: boolean): void
        is_fog_enabled(): boolean
        set_fog_light_color(light_color: Color): void
        get_fog_light_color(): Color
        set_fog_light_energy(light_energy: number /*f64*/): void
        get_fog_light_energy(): number /*f64*/
        set_fog_sun_scatter(sun_scatter: number /*f64*/): void
        get_fog_sun_scatter(): number /*f64*/
        set_fog_density(density: number /*f64*/): void
        get_fog_density(): number /*f64*/
        set_fog_height(height: number /*f64*/): void
        get_fog_height(): number /*f64*/
        set_fog_height_density(height_density: number /*f64*/): void
        get_fog_height_density(): number /*f64*/
        set_fog_aerial_perspective(aerial_perspective: number /*f64*/): void
        get_fog_aerial_perspective(): number /*f64*/
        set_fog_sky_affect(sky_affect: number /*f64*/): void
        get_fog_sky_affect(): number /*f64*/
        set_volumetric_fog_enabled(enabled: boolean): void
        is_volumetric_fog_enabled(): boolean
        set_volumetric_fog_emission(color: Color): void
        get_volumetric_fog_emission(): Color
        set_volumetric_fog_albedo(color: Color): void
        get_volumetric_fog_albedo(): Color
        set_volumetric_fog_density(density: number /*f64*/): void
        get_volumetric_fog_density(): number /*f64*/
        set_volumetric_fog_emission_energy(begin: number /*f64*/): void
        get_volumetric_fog_emission_energy(): number /*f64*/
        set_volumetric_fog_anisotropy(anisotropy: number /*f64*/): void
        get_volumetric_fog_anisotropy(): number /*f64*/
        set_volumetric_fog_length(length: number /*f64*/): void
        get_volumetric_fog_length(): number /*f64*/
        set_volumetric_fog_detail_spread(detail_spread: number /*f64*/): void
        get_volumetric_fog_detail_spread(): number /*f64*/
        set_volumetric_fog_gi_inject(gi_inject: number /*f64*/): void
        get_volumetric_fog_gi_inject(): number /*f64*/
        set_volumetric_fog_ambient_inject(enabled: number /*f64*/): void
        get_volumetric_fog_ambient_inject(): number /*f64*/
        set_volumetric_fog_sky_affect(sky_affect: number /*f64*/): void
        get_volumetric_fog_sky_affect(): number /*f64*/
        set_volumetric_fog_temporal_reprojection_enabled(enabled: boolean): void
        is_volumetric_fog_temporal_reprojection_enabled(): boolean
        set_volumetric_fog_temporal_reprojection_amount(temporal_reprojection_amount: number /*f64*/): void
        get_volumetric_fog_temporal_reprojection_amount(): number /*f64*/
        set_adjustment_enabled(enabled: boolean): void
        is_adjustment_enabled(): boolean
        set_adjustment_brightness(brightness: number /*f64*/): void
        get_adjustment_brightness(): number /*f64*/
        set_adjustment_contrast(contrast: number /*f64*/): void
        get_adjustment_contrast(): number /*f64*/
        set_adjustment_saturation(saturation: number /*f64*/): void
        get_adjustment_saturation(): number /*f64*/
        set_adjustment_color_correction(color_correction: Texture): void
        get_adjustment_color_correction(): Texture
        
        /** The background mode. See [enum BGMode] for possible values. */
        background_mode: number /*i64*/
        
        /** The [Color] displayed for clear areas of the scene. Only effective when using the [constant BG_COLOR] background mode. */
        background_color: Color
        
        /** Multiplier for background energy. Increase to make background brighter, decrease to make background dimmer. */
        background_energy_multiplier: number /*f64*/
        
        /** Luminance of background measured in nits (candela per square meter). Only used when [member ProjectSettings.rendering/lights_and_shadows/use_physical_light_units] is enabled. The default value is roughly equivalent to the sky at midday. */
        background_intensity: number /*f64*/
        
        /** The maximum layer ID to display. Only effective when using the [constant BG_CANVAS] background mode. */
        background_canvas_max_layer: number /*i64*/
        
        /** The ID of the camera feed to show in the background. */
        background_camera_feed_id: number /*i64*/
        
        /** The [Sky] resource used for this [Environment]. */
        sky: Sky
        
        /** If set to a value greater than `0.0`, overrides the field of view to use for sky rendering. If set to `0.0`, the same FOV as the current [Camera3D] is used for sky rendering. */
        sky_custom_fov: number /*f64*/
        
        /** The rotation to use for sky rendering. */
        sky_rotation: Vector3
        
        /** The ambient light source to use for rendering materials and global illumination. */
        ambient_light_source: number /*i64*/
        
        /** The ambient light's [Color]. Only effective if [member ambient_light_sky_contribution] is lower than `1.0` (exclusive). */
        ambient_light_color: Color
        
        /** Defines the amount of light that the sky brings on the scene. A value of `0.0` means that the sky's light emission has no effect on the scene illumination, thus all ambient illumination is provided by the ambient light. On the contrary, a value of `1.0` means that  *all*  the light that affects the scene is provided by the sky, thus the ambient light parameter has no effect on the scene.  
         *      
         *  **Note:** [member ambient_light_sky_contribution] is internally clamped between `0.0` and `1.0` (inclusive).  
         */
        ambient_light_sky_contribution: number /*f64*/
        
        /** The ambient light's energy. The higher the value, the stronger the light. Only effective if [member ambient_light_sky_contribution] is lower than `1.0` (exclusive). */
        ambient_light_energy: number /*f64*/
        
        /** The reflected (specular) light source. */
        reflected_light_source: number /*i64*/
        
        /** The tonemapping mode to use. Tonemapping is the process that "converts" HDR values to be suitable for rendering on a LDR display. (Godot doesn't support rendering on HDR displays yet.) */
        tonemap_mode: number /*i64*/
        
        /** The default exposure used for tonemapping. Higher values result in a brighter image. See also [member tonemap_white]. */
        tonemap_exposure: number /*f64*/
        
        /** The white reference value for tonemapping (also called "whitepoint"). Higher values can make highlights look less blown out, and will also slightly darken the whole scene as a result. Only effective if the [member tonemap_mode] isn't set to [constant TONE_MAPPER_LINEAR]. See also [member tonemap_exposure]. */
        tonemap_white: number /*f64*/
        
        /** If `true`, screen-space reflections are enabled. Screen-space reflections are more accurate than reflections from [VoxelGI]s or [ReflectionProbe]s, but are slower and can't reflect surfaces occluded by others.  
         *      
         *  **Note:** SSR is only supported in the Forward+ rendering method, not Mobile or Compatibility.  
         */
        ssr_enabled: boolean
        
        /** The maximum number of steps for screen-space reflections. Higher values are slower. */
        ssr_max_steps: number /*i64*/
        
        /** The fade-in distance for screen-space reflections. Affects the area from the reflected material to the screen-space reflection. Only positive values are valid (negative values will be clamped to `0.0`). */
        ssr_fade_in: number /*f64*/
        
        /** The fade-out distance for screen-space reflections. Affects the area from the screen-space reflection to the "global" reflection. Only positive values are valid (negative values will be clamped to `0.0`). */
        ssr_fade_out: number /*f64*/
        
        /** The depth tolerance for screen-space reflections. */
        ssr_depth_tolerance: number /*f64*/
        
        /** If `true`, the screen-space ambient occlusion effect is enabled. This darkens objects' corners and cavities to simulate ambient light not reaching the entire object as in real life. This works well for small, dynamic objects, but baked lighting or ambient occlusion textures will do a better job at displaying ambient occlusion on large static objects. Godot uses a form of SSAO called Adaptive Screen Space Ambient Occlusion which is itself a form of Horizon Based Ambient Occlusion.  
         *      
         *  **Note:** SSAO is only supported in the Forward+ rendering method, not Mobile or Compatibility.  
         */
        ssao_enabled: boolean
        
        /** The distance at which objects can occlude each other when calculating screen-space ambient occlusion. Higher values will result in occlusion over a greater distance at the cost of performance and quality. */
        ssao_radius: number /*f64*/
        
        /** The primary screen-space ambient occlusion intensity. Acts as a multiplier for the screen-space ambient occlusion effect. A higher value results in darker occlusion. */
        ssao_intensity: number /*f64*/
        
        /** The distribution of occlusion. A higher value results in darker occlusion, similar to [member ssao_intensity], but with a sharper falloff. */
        ssao_power: number /*f64*/
        
        /** Sets the strength of the additional level of detail for the screen-space ambient occlusion effect. A high value makes the detail pass more prominent, but it may contribute to aliasing in your final image. */
        ssao_detail: number /*f64*/
        
        /** The threshold for considering whether a given point on a surface is occluded or not represented as an angle from the horizon mapped into the `0.0-1.0` range. A value of `1.0` results in no occlusion. */
        ssao_horizon: number /*f64*/
        
        /** The amount that the screen-space ambient occlusion effect is allowed to blur over the edges of objects. Setting too high will result in aliasing around the edges of objects. Setting too low will make object edges appear blurry. */
        ssao_sharpness: number /*f64*/
        
        /** The screen-space ambient occlusion intensity in direct light. In real life, ambient occlusion only applies to indirect light, which means its effects can't be seen in direct light. Values higher than `0` will make the SSAO effect visible in direct light. */
        ssao_light_affect: number /*f64*/
        
        /** The screen-space ambient occlusion intensity on materials that have an AO texture defined. Values higher than `0` will make the SSAO effect visible in areas darkened by AO textures. */
        ssao_ao_channel_affect: number /*f64*/
        
        /** If `true`, the screen-space indirect lighting effect is enabled. Screen space indirect lighting is a form of indirect lighting that allows diffuse light to bounce between nearby objects. Screen-space indirect lighting works very similarly to screen-space ambient occlusion, in that it only affects a limited range. It is intended to be used along with a form of proper global illumination like SDFGI or [VoxelGI]. Screen-space indirect lighting is not affected by individual light's [member Light3D.light_indirect_energy].  
         *      
         *  **Note:** SSIL is only supported in the Forward+ rendering method, not Mobile or Compatibility.  
         */
        ssil_enabled: boolean
        
        /** The distance that bounced lighting can travel when using the screen space indirect lighting effect. A larger value will result in light bouncing further in a scene, but may result in under-sampling artifacts which look like long spikes surrounding light sources. */
        ssil_radius: number /*f64*/
        
        /** The brightness multiplier for the screen-space indirect lighting effect. A higher value will result in brighter light. */
        ssil_intensity: number /*f64*/
        
        /** The amount that the screen-space indirect lighting effect is allowed to blur over the edges of objects. Setting too high will result in aliasing around the edges of objects. Setting too low will make object edges appear blurry. */
        ssil_sharpness: number /*f64*/
        
        /** Amount of normal rejection used when calculating screen-space indirect lighting. Normal rejection uses the normal of a given sample point to reject samples that are facing away from the current pixel. Normal rejection is necessary to avoid light leaking when only one side of an object is illuminated. However, normal rejection can be disabled if light leaking is desirable, such as when the scene mostly contains emissive objects that emit light from faces that cannot be seen from the camera. */
        ssil_normal_rejection: number /*f64*/
        
        /** If `true`, enables signed distance field global illumination for meshes that have their [member GeometryInstance3D.gi_mode] set to [constant GeometryInstance3D.GI_MODE_STATIC]. SDFGI is a real-time global illumination technique that works well with procedurally generated and user-built levels, including in situations where geometry is created during gameplay. The signed distance field is automatically generated around the camera as it moves. Dynamic lights are supported, but dynamic occluders and emissive surfaces are not.  
         *      
         *  **Note:** SDFGI is only supported in the Forward+ rendering method, not Mobile or Compatibility.  
         *  **Performance:** SDFGI is relatively demanding on the GPU and is not suited to low-end hardware such as integrated graphics (consider [LightmapGI] instead). To improve SDFGI performance, enable [member ProjectSettings.rendering/global_illumination/gi/use_half_resolution] in the Project Settings.  
         *      
         *  **Note:** Meshes should have sufficiently thick walls to avoid light leaks (avoid one-sided walls). For interior levels, enclose your level geometry in a sufficiently large box and bridge the loops to close the mesh.  
         */
        sdfgi_enabled: boolean
        
        /** If `true`, SDFGI uses an occlusion detection approach to reduce light leaking. Occlusion may however introduce dark blotches in certain spots, which may be undesired in mostly outdoor scenes. [member sdfgi_use_occlusion] has a performance impact and should only be enabled when needed. */
        sdfgi_use_occlusion: boolean
        
        /** If `true`, SDFGI takes the environment lighting into account. This should be set to `false` for interior scenes. */
        sdfgi_read_sky_light: boolean
        
        /** The energy multiplier applied to light every time it bounces from a surface when using SDFGI. Values greater than `0.0` will simulate multiple bounces, resulting in a more realistic appearance. Increasing [member sdfgi_bounce_feedback] generally has no performance impact. See also [member sdfgi_energy].  
         *      
         *  **Note:** Values greater than `0.5` can cause infinite feedback loops and should be avoided in scenes with bright materials.  
         *      
         *  **Note:** If [member sdfgi_bounce_feedback] is `0.0`, indirect lighting will not be represented in reflections as light will only bounce one time.  
         */
        sdfgi_bounce_feedback: number /*f64*/
        
        /** The number of cascades to use for SDFGI (between 1 and 8). A higher number of cascades allows displaying SDFGI further away while preserving detail up close, at the cost of performance. When using SDFGI on small-scale levels, [member sdfgi_cascades] can often be decreased between `1` and `4` to improve performance. */
        sdfgi_cascades: number /*i64*/
        
        /** The cell size to use for the closest SDFGI cascade (in 3D units). Lower values allow SDFGI to be more precise up close, at the cost of making SDFGI updates more demanding. This can cause stuttering when the camera moves fast. Higher values allow SDFGI to cover more ground, while also reducing the performance impact of SDFGI updates.  
         *      
         *  **Note:** This property is linked to [member sdfgi_max_distance] and [member sdfgi_cascade0_distance]. Changing its value will automatically change those properties as well.  
         */
        sdfgi_min_cell_size: number /*f64*/
        
        /**     
         *  **Note:** This property is linked to [member sdfgi_min_cell_size] and [member sdfgi_max_distance]. Changing its value will automatically change those properties as well.  
         */
        sdfgi_cascade0_distance: number /*f64*/
        
        /** The maximum distance at which SDFGI is visible. Beyond this distance, environment lighting or other sources of GI such as [ReflectionProbe] will be used as a fallback.  
         *      
         *  **Note:** This property is linked to [member sdfgi_min_cell_size] and [member sdfgi_cascade0_distance]. Changing its value will automatically change those properties as well.  
         */
        sdfgi_max_distance: number /*f64*/
        
        /** The Y scale to use for SDFGI cells. Lower values will result in SDFGI cells being packed together more closely on the Y axis. This is used to balance between quality and covering a lot of vertical ground. [member sdfgi_y_scale] should be set depending on how vertical your scene is (and how fast your camera may move on the Y axis). */
        sdfgi_y_scale: number /*i64*/
        
        /** The energy multiplier to use for SDFGI. Higher values will result in brighter indirect lighting and reflections. See also [member sdfgi_bounce_feedback]. */
        sdfgi_energy: number /*f64*/
        
        /** The normal bias to use for SDFGI probes. Increasing this value can reduce visible streaking artifacts on sloped surfaces, at the cost of increased light leaking. */
        sdfgi_normal_bias: number /*f64*/
        
        /** The constant bias to use for SDFGI probes. Increasing this value can reduce visible streaking artifacts on sloped surfaces, at the cost of increased light leaking. */
        sdfgi_probe_bias: number /*f64*/
        
        /** If `true`, the glow effect is enabled.  
         *      
         *  **Note:** Glow is only supported in the Forward+ and Mobile rendering methods, not Compatibility. When using the Mobile rendering method, glow will look different due to the lower dynamic range available in the Mobile rendering method.  
         */
        glow_enabled: boolean
        
        /** If `true`, glow levels will be normalized so that summed together their intensities equal `1.0`. */
        glow_normalized: boolean
        
        /** The overall brightness multiplier of the glow effect. When using the Mobile rendering method (which only supports a lower dynamic range up to `2.0`), this should be increased to `1.5` to compensate. */
        glow_intensity: number /*f64*/
        
        /** The strength of the glow effect. This applies as the glow is blurred across the screen and increases the distance and intensity of the blur. When using the Mobile rendering method, this should be increased to compensate for the lower dynamic range. */
        glow_strength: number /*f64*/
        
        /** When using the [constant GLOW_BLEND_MODE_MIX] [member glow_blend_mode], this controls how much the source image is blended with the glow layer. A value of `0.0` makes the glow rendering invisible, while a value of `1.0` is equivalent to [constant GLOW_BLEND_MODE_REPLACE]. */
        glow_mix: number /*f64*/
        
        /** The bloom's intensity. If set to a value higher than `0`, this will make glow visible in areas darker than the [member glow_hdr_threshold]. */
        glow_bloom: number /*f64*/
        
        /** The glow blending mode. */
        glow_blend_mode: number /*i64*/
        
        /** The lower threshold of the HDR glow. When using the Mobile rendering method (which only supports a lower dynamic range up to `2.0`), this may need to be below `1.0` for glow to be visible. A value of `0.9` works well in this case. This value also needs to be decreased below `1.0` when using glow in 2D, as 2D rendering is performed in SDR. */
        glow_hdr_threshold: number /*f64*/
        
        /** The bleed scale of the HDR glow. */
        glow_hdr_scale: number /*f64*/
        
        /** The higher threshold of the HDR glow. Areas brighter than this threshold will be clamped for the purposes of the glow effect. */
        glow_hdr_luminance_cap: number /*f64*/
        
        /** How strong of an impact the [member glow_map] should have on the overall glow effect. A strength of `0.0` means the glow map has no effect on the overall glow effect. A strength of `1.0` means the glow has a full effect on the overall glow effect (and can turn off glow entirely in specific areas of the screen if the glow map has black areas). */
        glow_map_strength: number /*f64*/
        
        /** The texture that should be used as a glow map to  *multiply*  the resulting glow color according to [member glow_map_strength]. This can be used to create a "lens dirt" effect. The texture's RGB color channels are used for modulation, but the alpha channel is ignored.  
         *      
         *  **Note:** The texture will be stretched to fit the screen. Therefore, it's recommended to use a texture with an aspect ratio that matches your project's base aspect ratio (typically 16:9).  
         */
        glow_map: Texture2D
        
        /** If `true`, fog effects are enabled. */
        fog_enabled: boolean
        
        /** The fog's color. */
        fog_light_color: Color
        
        /** The fog's brightness. Higher values result in brighter fog. */
        fog_light_energy: number /*f64*/
        
        /** If set above `0.0`, renders the scene's directional light(s) in the fog color depending on the view angle. This can be used to give the impression that the sun is "piercing" through the fog. */
        fog_sun_scatter: number /*f64*/
        
        /** The  *exponential*  fog density to use. Higher values result in a more dense fog. Fog rendering is exponential as in real life. */
        fog_density: number /*f64*/
        
        /** If set above `0.0` (exclusive), blends between the fog's color and the color of the background [Sky]. This has a small performance cost when set above `0.0`. Must have [member background_mode] set to [constant BG_SKY].  
         *  This is useful to simulate [url=https://en.wikipedia.org/wiki/Aerial_perspective]aerial perspective[/url] in large scenes with low density fog. However, it is not very useful for high-density fog, as the sky will shine through. When set to `1.0`, the fog color comes completely from the [Sky]. If set to `0.0`, aerial perspective is disabled.  
         */
        fog_aerial_perspective: number /*f64*/
        
        /** The factor to use when affecting the sky with non-volumetric fog. `1.0` means that fog can fully obscure the sky. Lower values reduce the impact of fog on sky rendering, with `0.0` not affecting sky rendering at all.  
         *      
         *  **Note:** [member fog_sky_affect] has no visual effect if [member fog_aerial_perspective] is `1.0`.  
         */
        fog_sky_affect: number /*f64*/
        
        /** The height at which the height fog effect begins. */
        fog_height: number /*f64*/
        
        /** The density used to increase fog as height decreases. To make fog increase as height increases, use a negative value. */
        fog_height_density: number /*f64*/
        
        /** Enables the volumetric fog effect. Volumetric fog uses a screen-aligned froxel buffer to calculate accurate volumetric scattering in the short to medium range. Volumetric fog interacts with [FogVolume]s and lights to calculate localized and global fog. Volumetric fog uses a PBR single-scattering model based on extinction, scattering, and emission which it exposes to users as density, albedo, and emission.  
         *      
         *  **Note:** Volumetric fog is only supported in the Forward+ rendering method, not Mobile or Compatibility.  
         */
        volumetric_fog_enabled: boolean
        
        /** The base  *exponential*  density of the volumetric fog. Set this to the lowest density you want to have globally. [FogVolume]s can be used to add to or subtract from this density in specific areas. Fog rendering is exponential as in real life.  
         *  A value of `0.0` disables global volumetric fog while allowing [FogVolume]s to display volumetric fog in specific areas.  
         *  To make volumetric fog work as a volumetric  *lighting*  solution, set [member volumetric_fog_density] to the lowest non-zero value (`0.0001`) then increase lights' [member Light3D.light_volumetric_fog_energy] to values between `10000` and `100000` to compensate for the very low density.  
         */
        volumetric_fog_density: number /*f64*/
        
        /** The [Color] of the volumetric fog when interacting with lights. Mist and fog have an albedo close to `Color(1, 1, 1, 1)` while smoke has a darker albedo. */
        volumetric_fog_albedo: Color
        
        /** The emitted light from the volumetric fog. Even with emission, volumetric fog will not cast light onto other surfaces. Emission is useful to establish an ambient color. As the volumetric fog effect uses single-scattering only, fog tends to need a little bit of emission to soften the harsh shadows. */
        volumetric_fog_emission: Color
        
        /** The brightness of the emitted light from the volumetric fog. */
        volumetric_fog_emission_energy: number /*f64*/
        
        /** Scales the strength of Global Illumination used in the volumetric fog's albedo color. A value of `0.0` means that Global Illumination will not impact the volumetric fog. [member volumetric_fog_gi_inject] has a small performance cost when set above `0.0`.  
         *      
         *  **Note:** This has no visible effect if [member volumetric_fog_density] is `0.0` or if [member volumetric_fog_albedo] is a fully black color.  
         *      
         *  **Note:** Only [VoxelGI] and SDFGI ([member Environment.sdfgi_enabled]) are taken into account when using [member volumetric_fog_gi_inject]. Global illumination from [LightmapGI], [ReflectionProbe] and SSIL (see [member ssil_enabled]) will be ignored by volumetric fog.  
         */
        volumetric_fog_gi_inject: number /*f64*/
        
        /** The direction of scattered light as it goes through the volumetric fog. A value close to `1.0` means almost all light is scattered forward. A value close to `0.0` means light is scattered equally in all directions. A value close to `-1.0` means light is scattered mostly backward. Fog and mist scatter light slightly forward, while smoke scatters light equally in all directions. */
        volumetric_fog_anisotropy: number /*f64*/
        
        /** The distance over which the volumetric fog is computed. Increase to compute fog over a greater range, decrease to add more detail when a long range is not needed. For best quality fog, keep this as low as possible. See also [member ProjectSettings.rendering/environment/volumetric_fog/volume_depth]. */
        volumetric_fog_length: number /*f64*/
        
        /** The distribution of size down the length of the froxel buffer. A higher value compresses the froxels closer to the camera and places more detail closer to the camera. */
        volumetric_fog_detail_spread: number /*f64*/
        
        /** Scales the strength of ambient light used in the volumetric fog. A value of `0.0` means that ambient light will not impact the volumetric fog. [member volumetric_fog_ambient_inject] has a small performance cost when set above `0.0`.  
         *      
         *  **Note:** This has no visible effect if [member volumetric_fog_density] is `0.0` or if [member volumetric_fog_albedo] is a fully black color.  
         */
        volumetric_fog_ambient_inject: number /*f64*/
        
        /** The factor to use when affecting the sky with volumetric fog. `1.0` means that volumetric fog can fully obscure the sky. Lower values reduce the impact of volumetric fog on sky rendering, with `0.0` not affecting sky rendering at all.  
         *      
         *  **Note:** [member volumetric_fog_sky_affect] also affects [FogVolume]s, even if [member volumetric_fog_density] is `0.0`. If you notice [FogVolume]s are disappearing when looking towards the sky, set [member volumetric_fog_sky_affect] to `1.0`.  
         */
        volumetric_fog_sky_affect: number /*f64*/
        
        /** Enables temporal reprojection in the volumetric fog. Temporal reprojection blends the current frame's volumetric fog with the last frame's volumetric fog to smooth out jagged edges. The performance cost is minimal; however, it leads to moving [FogVolume]s and [Light3D]s "ghosting" and leaving a trail behind them. When temporal reprojection is enabled, try to avoid moving [FogVolume]s or [Light3D]s too fast. Short-lived dynamic lighting effects should have [member Light3D.light_volumetric_fog_energy] set to `0.0` to avoid ghosting. */
        volumetric_fog_temporal_reprojection_enabled: boolean
        
        /** The amount by which to blend the last frame with the current frame. A higher number results in smoother volumetric fog, but makes "ghosting" much worse. A lower value reduces ghosting but can result in the per-frame temporal jitter becoming visible. */
        volumetric_fog_temporal_reprojection_amount: number /*f64*/
        
        /** If `true`, enables the `adjustment_*` properties provided by this resource. If `false`, modifications to the `adjustment_*` properties will have no effect on the rendered scene.  
         *      
         *  **Note:** Adjustments are only supported in the Forward+ and Mobile rendering methods, not Compatibility.  
         */
        adjustment_enabled: boolean
        
        /** The global brightness value of the rendered scene. Effective only if [member adjustment_enabled] is `true`. */
        adjustment_brightness: number /*f64*/
        
        /** The global contrast value of the rendered scene (default value is 1). Effective only if [member adjustment_enabled] is `true`. */
        adjustment_contrast: number /*f64*/
        
        /** The global color saturation value of the rendered scene (default value is 1). Effective only if [member adjustment_enabled] is `true`. */
        adjustment_saturation: number /*f64*/
        
        /** The [Texture2D] or [Texture3D] lookup table (LUT) to use for the built-in post-process color grading. Can use a [GradientTexture1D] for a 1-dimensional LUT, or a [Texture3D] for a more complex LUT. Effective only if [member adjustment_enabled] is `true`. */
        adjustment_color_correction: Texture2D | Texture3D
    }
    class EventListenerLineEdit extends LineEdit {
        readonly event_changed: Signal // event: InputEvent => void
    }
    class ExportTemplateManager extends AcceptDialog {
    }
    /** A class that stores an expression you can execute.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_expression.html  
     */
    class Expression extends RefCounted {
        /** Parses the expression and returns an [enum Error] code.  
         *  You can optionally specify names of variables that may appear in the expression with [param input_names], so that you can bind them when it gets executed.  
         */
        parse(expression: string, input_names: PackedStringArray = <any> {} /*compound.type from 34([object Object])*/): GodotError
        
        /** Executes the expression that was previously parsed by [method parse] and returns the result. Before you use the returned object, you should check if the method failed by calling [method has_execute_failed].  
         *  If you defined input variables in [method parse], you can specify their values in the inputs array, in the same order.  
         */
        execute(inputs: Array = <any> {} /*compound.type from 28([object Object])*/, base_instance: Object = <any> {} /*compound.type from nil*/, show_error: boolean = true, const_calls_only: boolean = false): any
        
        /** Returns `true` if [method execute] has failed. */
        has_execute_failed(): boolean
        
        /** Returns the error text if [method parse] or [method execute] has failed. */
        get_error_text(): string
    }
    class FBXImporterManager extends ConfirmationDialog {
    }
    namespace FastNoiseLite {
        enum NoiseType {
            /** A lattice of points are assigned random values then interpolated based on neighboring values. */
            TYPE_VALUE = 5,
            
            /** Similar to Value noise, but slower. Has more variance in peaks and valleys.  
             *  Cubic noise can be used to avoid certain artifacts when using value noise to create a bumpmap. In general, you should always use this mode if the value noise is being used for a heightmap or bumpmap.  
             */
            TYPE_VALUE_CUBIC = 4,
            
            /** A lattice of random gradients. Their dot products are interpolated to obtain values in between the lattices. */
            TYPE_PERLIN = 3,
            
            /** Cellular includes both Worley noise and Voronoi diagrams which creates various regions of the same value. */
            TYPE_CELLULAR = 2,
            
            /** As opposed to [constant TYPE_PERLIN], gradients exist in a simplex lattice rather than a grid lattice, avoiding directional artifacts. */
            TYPE_SIMPLEX = 0,
            
            /** Modified, higher quality version of [constant TYPE_SIMPLEX], but slower. */
            TYPE_SIMPLEX_SMOOTH = 1,
        }
        enum FractalType {
            /** No fractal noise. */
            FRACTAL_NONE = 0,
            
            /** Method using Fractional Brownian Motion to combine octaves into a fractal. */
            FRACTAL_FBM = 1,
            
            /** Method of combining octaves into a fractal resulting in a "ridged" look. */
            FRACTAL_RIDGED = 2,
            
            /** Method of combining octaves into a fractal with a ping pong effect. */
            FRACTAL_PING_PONG = 3,
        }
        enum CellularDistanceFunction {
            /** Euclidean distance to the nearest point. */
            DISTANCE_EUCLIDEAN = 0,
            
            /** Squared Euclidean distance to the nearest point. */
            DISTANCE_EUCLIDEAN_SQUARED = 1,
            
            /** Manhattan distance (taxicab metric) to the nearest point. */
            DISTANCE_MANHATTAN = 2,
            
            /** Blend of [constant DISTANCE_EUCLIDEAN] and [constant DISTANCE_MANHATTAN] to give curved cell boundaries */
            DISTANCE_HYBRID = 3,
        }
        enum CellularReturnType {
            /** The cellular distance function will return the same value for all points within a cell. */
            RETURN_CELL_VALUE = 0,
            
            /** The cellular distance function will return a value determined by the distance to the nearest point. */
            RETURN_DISTANCE = 1,
            
            /** The cellular distance function returns the distance to the second-nearest point. */
            RETURN_DISTANCE2 = 2,
            
            /** The distance to the nearest point is added to the distance to the second-nearest point. */
            RETURN_DISTANCE2_ADD = 3,
            
            /** The distance to the nearest point is subtracted from the distance to the second-nearest point. */
            RETURN_DISTANCE2_SUB = 4,
            
            /** The distance to the nearest point is multiplied with the distance to the second-nearest point. */
            RETURN_DISTANCE2_MUL = 5,
            
            /** The distance to the nearest point is divided by the distance to the second-nearest point. */
            RETURN_DISTANCE2_DIV = 6,
        }
        enum DomainWarpType {
            /** The domain is warped using the simplex noise algorithm. */
            DOMAIN_WARP_SIMPLEX = 0,
            
            /** The domain is warped using a simplified version of the simplex noise algorithm. */
            DOMAIN_WARP_SIMPLEX_REDUCED = 1,
            
            /** The domain is warped using a simple noise grid (not as smooth as the other methods, but more performant). */
            DOMAIN_WARP_BASIC_GRID = 2,
        }
        enum DomainWarpFractalType {
            /** No fractal noise for warping the space. */
            DOMAIN_WARP_FRACTAL_NONE = 0,
            
            /** Warping the space progressively, octave for octave, resulting in a more "liquified" distortion. */
            DOMAIN_WARP_FRACTAL_PROGRESSIVE = 1,
            
            /** Warping the space independently for each octave, resulting in a more chaotic distortion. */
            DOMAIN_WARP_FRACTAL_INDEPENDENT = 2,
        }
    }
    /** Generates noise using the FastNoiseLite library.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_fastnoiselite.html  
     */
    class FastNoiseLite extends Noise {
        set_noise_type(type: FastNoiseLite.NoiseType): void
        get_noise_type(): FastNoiseLite.NoiseType
        set_seed(seed: number /*i64*/): void
        get_seed(): number /*i64*/
        set_frequency(freq: number /*f64*/): void
        get_frequency(): number /*f64*/
        set_offset(offset: Vector3): void
        get_offset(): Vector3
        set_fractal_type(type: FastNoiseLite.FractalType): void
        get_fractal_type(): FastNoiseLite.FractalType
        set_fractal_octaves(octave_count: number /*i64*/): void
        get_fractal_octaves(): number /*i64*/
        set_fractal_lacunarity(lacunarity: number /*f64*/): void
        get_fractal_lacunarity(): number /*f64*/
        set_fractal_gain(gain: number /*f64*/): void
        get_fractal_gain(): number /*f64*/
        set_fractal_weighted_strength(weighted_strength: number /*f64*/): void
        get_fractal_weighted_strength(): number /*f64*/
        set_fractal_ping_pong_strength(ping_pong_strength: number /*f64*/): void
        get_fractal_ping_pong_strength(): number /*f64*/
        set_cellular_distance_function(func: FastNoiseLite.CellularDistanceFunction): void
        get_cellular_distance_function(): FastNoiseLite.CellularDistanceFunction
        set_cellular_jitter(jitter: number /*f64*/): void
        get_cellular_jitter(): number /*f64*/
        set_cellular_return_type(ret: FastNoiseLite.CellularReturnType): void
        get_cellular_return_type(): FastNoiseLite.CellularReturnType
        set_domain_warp_enabled(domain_warp_enabled: boolean): void
        is_domain_warp_enabled(): boolean
        set_domain_warp_type(domain_warp_type: FastNoiseLite.DomainWarpType): void
        get_domain_warp_type(): FastNoiseLite.DomainWarpType
        set_domain_warp_amplitude(domain_warp_amplitude: number /*f64*/): void
        get_domain_warp_amplitude(): number /*f64*/
        set_domain_warp_frequency(domain_warp_frequency: number /*f64*/): void
        get_domain_warp_frequency(): number /*f64*/
        set_domain_warp_fractal_type(domain_warp_fractal_type: FastNoiseLite.DomainWarpFractalType): void
        get_domain_warp_fractal_type(): FastNoiseLite.DomainWarpFractalType
        set_domain_warp_fractal_octaves(domain_warp_octave_count: number /*i64*/): void
        get_domain_warp_fractal_octaves(): number /*i64*/
        set_domain_warp_fractal_lacunarity(domain_warp_lacunarity: number /*f64*/): void
        get_domain_warp_fractal_lacunarity(): number /*f64*/
        set_domain_warp_fractal_gain(domain_warp_gain: number /*f64*/): void
        get_domain_warp_fractal_gain(): number /*f64*/
        _changed(): void
        
        /** The noise algorithm used. See [enum NoiseType]. */
        noise_type: number /*i64*/
        
        /** The random number seed for all noise types. */
        seed: number /*i64*/
        
        /** The frequency for all noise types. Low frequency results in smooth noise while high frequency results in rougher, more granular noise. */
        frequency: number /*f64*/
        
        /** Translate the noise input coordinates by the given [Vector3]. */
        offset: Vector3
        
        /** The method for combining octaves into a fractal. See [enum FractalType]. */
        fractal_type: number /*i64*/
        
        /** The number of noise layers that are sampled to get the final value for fractal noise types. */
        fractal_octaves: number /*i64*/
        
        /** Frequency multiplier between subsequent octaves. Increasing this value results in higher octaves producing noise with finer details and a rougher appearance. */
        fractal_lacunarity: number /*f64*/
        
        /** Determines the strength of each subsequent layer of noise in fractal noise.  
         *  A low value places more emphasis on the lower frequency base layers, while a high value puts more emphasis on the higher frequency layers.  
         */
        fractal_gain: number /*f64*/
        
        /** Higher weighting means higher octaves have less impact if lower octaves have a large impact. */
        fractal_weighted_strength: number /*f64*/
        
        /** Sets the strength of the fractal ping pong type. */
        fractal_ping_pong_strength: number /*f64*/
        
        /** Determines how the distance to the nearest/second-nearest point is computed. See [enum CellularDistanceFunction] for options. */
        cellular_distance_function: number /*i64*/
        
        /** Maximum distance a point can move off of its grid position. Set to `0` for an even grid. */
        cellular_jitter: number /*f64*/
        
        /** Return type from cellular noise calculations. See [enum CellularReturnType]. */
        cellular_return_type: number /*i64*/
        
        /** If enabled, another FastNoiseLite instance is used to warp the space, resulting in a distortion of the noise. */
        domain_warp_enabled: boolean
        
        /** Sets the warp algorithm. See [enum DomainWarpType]. */
        domain_warp_type: number /*i64*/
        
        /** Sets the maximum warp distance from the origin. */
        domain_warp_amplitude: number /*f64*/
        
        /** Frequency of the noise which warps the space. Low frequency results in smooth noise while high frequency results in rougher, more granular noise. */
        domain_warp_frequency: number /*f64*/
        
        /** The method for combining octaves into a fractal which is used to warp the space. See [enum DomainWarpFractalType]. */
        domain_warp_fractal_type: number /*i64*/
        
        /** The number of noise layers that are sampled to get the final value for the fractal noise which warps the space. */
        domain_warp_fractal_octaves: number /*i64*/
        
        /** Octave lacunarity of the fractal noise which warps the space. Increasing this value results in higher octaves producing noise with finer details and a rougher appearance. */
        domain_warp_fractal_lacunarity: number /*f64*/
        
        /** Determines the strength of each subsequent layer of the noise which is used to warp the space.  
         *  A low value places more emphasis on the lower frequency base layers, while a high value puts more emphasis on the higher frequency layers.  
         */
        domain_warp_fractal_gain: number /*f64*/
    }
    namespace FileAccess {
        enum ModeFlags {
            /** Opens the file for read operations. The cursor is positioned at the beginning of the file. */
            READ = 1,
            
            /** Opens the file for write operations. The file is created if it does not exist, and truncated if it does.  
             *      
             *  **Note:** When creating a file it must be in an already existing directory. To recursively create directories for a file path, see [method DirAccess.make_dir_recursive]).  
             */
            WRITE = 2,
            
            /** Opens the file for read and write operations. Does not truncate the file. The cursor is positioned at the beginning of the file. */
            READ_WRITE = 3,
            
            /** Opens the file for read and write operations. The file is created if it does not exist, and truncated if it does. The cursor is positioned at the beginning of the file.  
             *      
             *  **Note:** When creating a file it must be in an already existing directory. To recursively create directories for a file path, see [method DirAccess.make_dir_recursive]).  
             */
            WRITE_READ = 7,
        }
        enum CompressionMode {
            /** Uses the [url=https://fastlz.org/]FastLZ[/url] compression method. */
            COMPRESSION_FASTLZ = 0,
            
            /** Uses the [url=https://en.wikipedia.org/wiki/DEFLATE]DEFLATE[/url] compression method. */
            COMPRESSION_DEFLATE = 1,
            
            /** Uses the [url=https://facebook.github.io/zstd/]Zstandard[/url] compression method. */
            COMPRESSION_ZSTD = 2,
            
            /** Uses the [url=https://www.gzip.org/]gzip[/url] compression method. */
            COMPRESSION_GZIP = 3,
            
            /** Uses the [url=https://github.com/google/brotli]brotli[/url] compression method (only decompression is supported). */
            COMPRESSION_BROTLI = 4,
        }
        enum UnixPermissionFlags {
            /** Read for owner bit. */
            UNIX_READ_OWNER = 256,
            
            /** Write for owner bit. */
            UNIX_WRITE_OWNER = 128,
            
            /** Execute for owner bit. */
            UNIX_EXECUTE_OWNER = 64,
            
            /** Read for group bit. */
            UNIX_READ_GROUP = 32,
            
            /** Write for group bit. */
            UNIX_WRITE_GROUP = 16,
            
            /** Execute for group bit. */
            UNIX_EXECUTE_GROUP = 8,
            
            /** Read for other bit. */
            UNIX_READ_OTHER = 4,
            
            /** Write for other bit. */
            UNIX_WRITE_OTHER = 2,
            
            /** Execute for other bit. */
            UNIX_EXECUTE_OTHER = 1,
            
            /** Set user id on execution bit. */
            UNIX_SET_USER_ID = 2048,
            
            /** Set group id on execution bit. */
            UNIX_SET_GROUP_ID = 1024,
            
            /** Restricted deletion (sticky) bit. */
            UNIX_RESTRICTED_DELETE = 512,
        }
    }
    /** Provides methods for file reading and writing operations.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_fileaccess.html  
     */
    class FileAccess extends RefCounted {
        /** Creates a new [FileAccess] object and opens the file for writing or reading, depending on the flags.  
         *  Returns `null` if opening the file failed. You can use [method get_open_error] to check the error that occurred.  
         */
        static open(path: string, flags: FileAccess.ModeFlags): FileAccess
        
        /** Creates a new [FileAccess] object and opens an encrypted file in write or read mode. You need to pass a binary key to encrypt/decrypt it.  
         *      
         *  **Note:** The provided key must be 32 bytes long.  
         *  Returns `null` if opening the file failed. You can use [method get_open_error] to check the error that occurred.  
         */
        static open_encrypted(path: string, mode_flags: FileAccess.ModeFlags, key: PackedByteArray): FileAccess
        
        /** Creates a new [FileAccess] object and opens an encrypted file in write or read mode. You need to pass a password to encrypt/decrypt it.  
         *  Returns `null` if opening the file failed. You can use [method get_open_error] to check the error that occurred.  
         */
        static open_encrypted_with_pass(path: string, mode_flags: FileAccess.ModeFlags, pass: string): FileAccess
        
        /** Creates a new [FileAccess] object and opens a compressed file for reading or writing.  
         *      
         *  **Note:** [method open_compressed] can only read files that were saved by Godot, not third-party compression formats. See [url=https://github.com/godotengine/godot/issues/28999]GitHub issue #28999[/url] for a workaround.  
         *  Returns `null` if opening the file failed. You can use [method get_open_error] to check the error that occurred.  
         */
        static open_compressed(path: string, mode_flags: FileAccess.ModeFlags, compression_mode: FileAccess.CompressionMode = 0): FileAccess
        
        /** Returns the result of the last [method open] call in the current thread. */
        static get_open_error(): GodotError
        
        /** Returns the whole [param path] file contents as a [PackedByteArray] without any decoding.  
         *  Returns an empty [PackedByteArray] if an error occurred while opening the file. You can use [method get_open_error] to check the error that occurred.  
         */
        static get_file_as_bytes(path: string): PackedByteArray
        
        /** Returns the whole [param path] file contents as a [String]. Text is interpreted as being UTF-8 encoded.  
         *  Returns an empty [String] if an error occurred while opening the file. You can use [method get_open_error] to check the error that occurred.  
         */
        static get_file_as_string(path: string): string
        
        /** Writes the file's buffer to disk. Flushing is automatically performed when the file is closed. This means you don't need to call [method flush] manually before closing a file. Still, calling [method flush] can be used to ensure the data is safe even if the project crashes instead of being closed gracefully.  
         *      
         *  **Note:** Only call [method flush] when you actually need it. Otherwise, it will decrease performance due to constant disk writes.  
         */
        flush(): void
        
        /** Returns the path as a [String] for the current open file. */
        get_path(): string
        
        /** Returns the absolute path as a [String] for the current open file. */
        get_path_absolute(): string
        
        /** Returns `true` if the file is currently opened. */
        is_open(): boolean
        
        /** Changes the file reading/writing cursor to the specified position (in bytes from the beginning of the file). */
        seek(position: number /*i64*/): void
        
        /** Changes the file reading/writing cursor to the specified position (in bytes from the end of the file).  
         *      
         *  **Note:** This is an offset, so you should use negative numbers or the cursor will be at the end of the file.  
         */
        seek_end(position: number /*i64*/ = 0): void
        
        /** Returns the file cursor's position. */
        get_position(): number /*i64*/
        
        /** Returns the size of the file in bytes. */
        get_length(): number /*i64*/
        
        /** Returns `true` if the file cursor has already read past the end of the file.  
         *      
         *  **Note:** `eof_reached() == false` cannot be used to check whether there is more data available. To loop while there is more data available, use:  
         *    
         */
        eof_reached(): boolean
        
        /** Returns the next 8 bits from the file as an integer. See [method store_8] for details on what values can be stored and retrieved this way. */
        get_8(): number /*i64*/
        
        /** Returns the next 16 bits from the file as an integer. See [method store_16] for details on what values can be stored and retrieved this way. */
        get_16(): number /*i64*/
        
        /** Returns the next 32 bits from the file as an integer. See [method store_32] for details on what values can be stored and retrieved this way. */
        get_32(): number /*i64*/
        
        /** Returns the next 64 bits from the file as an integer. See [method store_64] for details on what values can be stored and retrieved this way. */
        get_64(): number /*i64*/
        
        /** Returns the next 32 bits from the file as a floating-point number. */
        get_float(): number /*f64*/
        
        /** Returns the next 64 bits from the file as a floating-point number. */
        get_double(): number /*f64*/
        
        /** Returns the next bits from the file as a floating-point number. */
        get_real(): number /*f64*/
        
        /** Returns next [param length] bytes of the file as a [PackedByteArray]. */
        get_buffer(length: number /*i64*/): PackedByteArray
        
        /** Returns the next line of the file as a [String].  
         *  Text is interpreted as being UTF-8 encoded.  
         */
        get_line(): string
        
        /** Returns the next value of the file in CSV (Comma-Separated Values) format. You can pass a different delimiter [param delim] to use other than the default `","` (comma). This delimiter must be one-character long, and cannot be a double quotation mark.  
         *  Text is interpreted as being UTF-8 encoded. Text values must be enclosed in double quotes if they include the delimiter character. Double quotes within a text value can be escaped by doubling their occurrence.  
         *  For example, the following CSV lines are valid and will be properly parsed as two strings each:  
         *    
         *  Note how the second line can omit the enclosing quotes as it does not include the delimiter. However it  *could*  very well use quotes, it was only written without for demonstration purposes. The third line must use `""` for each quotation mark that needs to be interpreted as such instead of the end of a text value.  
         */
        get_csv_line(delim: string = ','): PackedStringArray
        
        /** Returns the whole file as a [String]. Text is interpreted as being UTF-8 encoded.  
         *  If [param skip_cr] is `true`, carriage return characters (`\r`, CR) will be ignored when parsing the UTF-8, so that only line feed characters (`\n`, LF) represent a new line (Unix convention).  
         */
        get_as_text(skip_cr: boolean = false): string
        
        /** Returns an MD5 String representing the file at the given path or an empty [String] on failure. */
        static get_md5(path: string): string
        
        /** Returns a SHA-256 [String] representing the file at the given path or an empty [String] on failure. */
        static get_sha256(path: string): string
        is_big_endian(): boolean
        set_big_endian(big_endian: boolean): void
        
        /** Returns the last error that happened when trying to perform operations. Compare with the `ERR_FILE_*` constants from [enum Error]. */
        get_error(): GodotError
        
        /** Returns the next [Variant] value from the file. If [param allow_objects] is `true`, decoding objects is allowed.  
         *  Internally, this uses the same decoding mechanism as the [method @GlobalScope.bytes_to_var] method.  
         *  **Warning:** Deserialized objects can contain code which gets executed. Do not use this option if the serialized object comes from untrusted sources to avoid potential security threats such as remote code execution.  
         */
        get_var(allow_objects: boolean = false): any
        
        /** Stores an integer as 8 bits in the file.  
         *      
         *  **Note:** The [param value] should lie in the interval `[0, 255]`. Any other value will overflow and wrap around.  
         *  To store a signed integer, use [method store_64], or convert it manually (see [method store_16] for an example).  
         */
        store_8(value: number /*i64*/): void
        
        /** Stores an integer as 16 bits in the file.  
         *      
         *  **Note:** The [param value] should lie in the interval `[0, 2^16 - 1]`. Any other value will overflow and wrap around.  
         *  To store a signed integer, use [method store_64] or store a signed integer from the interval `[-2^15, 2^15 - 1]` (i.e. keeping one bit for the signedness) and compute its sign manually when reading. For example:  
         *    
         */
        store_16(value: number /*i64*/): void
        
        /** Stores an integer as 32 bits in the file.  
         *      
         *  **Note:** The [param value] should lie in the interval `[0, 2^32 - 1]`. Any other value will overflow and wrap around.  
         *  To store a signed integer, use [method store_64], or convert it manually (see [method store_16] for an example).  
         */
        store_32(value: number /*i64*/): void
        
        /** Stores an integer as 64 bits in the file.  
         *      
         *  **Note:** The [param value] must lie in the interval `[-2^63, 2^63 - 1]` (i.e. be a valid [int] value).  
         */
        store_64(value: number /*i64*/): void
        
        /** Stores a floating-point number as 32 bits in the file. */
        store_float(value: number /*f64*/): void
        
        /** Stores a floating-point number as 64 bits in the file. */
        store_double(value: number /*f64*/): void
        
        /** Stores a floating-point number in the file. */
        store_real(value: number /*f64*/): void
        
        /** Stores the given array of bytes in the file. */
        store_buffer(buffer: PackedByteArray): void
        
        /** Appends [param line] to the file followed by a line return character (`\n`), encoding the text as UTF-8. */
        store_line(line: string): void
        
        /** Store the given [PackedStringArray] in the file as a line formatted in the CSV (Comma-Separated Values) format. You can pass a different delimiter [param delim] to use other than the default `","` (comma). This delimiter must be one-character long.  
         *  Text will be encoded as UTF-8.  
         */
        store_csv_line(values: PackedStringArray, delim: string = ','): void
        
        /** Appends [param string] to the file without a line return, encoding the text as UTF-8.  
         *      
         *  **Note:** This method is intended to be used to write text files. The string is stored as a UTF-8 encoded buffer without string length or terminating zero, which means that it can't be loaded back easily. If you want to store a retrievable string in a binary file, consider using [method store_pascal_string] instead. For retrieving strings from a text file, you can use `get_buffer(length).get_string_from_utf8()` (if you know the length) or [method get_as_text].  
         */
        store_string(string_: string): void
        
        /** Stores any Variant value in the file. If [param full_objects] is `true`, encoding objects is allowed (and can potentially include code).  
         *  Internally, this uses the same encoding mechanism as the [method @GlobalScope.var_to_bytes] method.  
         *      
         *  **Note:** Not all properties are included. Only properties that are configured with the [constant PROPERTY_USAGE_STORAGE] flag set will be serialized. You can add a new usage flag to a property by overriding the [method Object._get_property_list] method in your class. You can also check how property usage is configured by calling [method Object._get_property_list]. See [enum PropertyUsageFlags] for the possible usage flags.  
         */
        store_var(value: any, full_objects: boolean = false): void
        
        /** Stores the given [String] as a line in the file in Pascal format (i.e. also store the length of the string).  
         *  Text will be encoded as UTF-8.  
         */
        store_pascal_string(string_: string): void
        
        /** Returns a [String] saved in Pascal format from the file.  
         *  Text is interpreted as being UTF-8 encoded.  
         */
        get_pascal_string(): string
        
        /** Closes the currently opened file and prevents subsequent read/write operations. Use [method flush] to persist the data to disk without closing the file.  
         *      
         *  **Note:** [FileAccess] will automatically close when it's freed, which happens when it goes out of scope or when it gets assigned with `null`. In C# the reference must be disposed after we are done using it, this can be done with the `using` statement or calling the `Dispose` method directly.  
         */
        close(): void
        
        /** Returns `true` if the file exists in the given path.  
         *      
         *  **Note:** Many resources types are imported (e.g. textures or sound files), and their source asset will not be included in the exported game, as only the imported version is used. See [method ResourceLoader.exists] for an alternative approach that takes resource remapping into account.  
         *  For a non-static, relative equivalent, use [method DirAccess.file_exists].  
         */
        static file_exists(path: string): boolean
        
        /** Returns the last time the [param file] was modified in Unix timestamp format, or `0` on error. This Unix timestamp can be converted to another format using the [Time] singleton. */
        static get_modified_time(file: string): number /*i64*/
        
        /** Returns file UNIX permissions.  
         *      
         *  **Note:** This method is implemented on iOS, Linux/BSD, and macOS.  
         */
        static get_unix_permissions(file: string): FileAccess.UnixPermissionFlags
        
        /** Sets file UNIX permissions.  
         *      
         *  **Note:** This method is implemented on iOS, Linux/BSD, and macOS.  
         */
        static set_unix_permissions(file: string, permissions: FileAccess.UnixPermissionFlags): GodotError
        
        /** Returns `true`, if file `hidden` attribute is set.  
         *      
         *  **Note:** This method is implemented on iOS, BSD, macOS, and Windows.  
         */
        static get_hidden_attribute(file: string): boolean
        
        /** Sets file **hidden** attribute.  
         *      
         *  **Note:** This method is implemented on iOS, BSD, macOS, and Windows.  
         */
        static set_hidden_attribute(file: string, hidden: boolean): GodotError
        
        /** Sets file **read only** attribute.  
         *      
         *  **Note:** This method is implemented on iOS, BSD, macOS, and Windows.  
         */
        static set_read_only_attribute(file: string, ro: boolean): GodotError
        
        /** Returns `true`, if file `read only` attribute is set.  
         *      
         *  **Note:** This method is implemented on iOS, BSD, macOS, and Windows.  
         */
        static get_read_only_attribute(file: string): boolean
        
        /** If `true`, the file is read with big-endian [url=https://en.wikipedia.org/wiki/Endianness]endianness[/url]. If `false`, the file is read with little-endian endianness. If in doubt, leave this to `false` as most files are written with little-endian endianness.  
         *      
         *  **Note:** [member big_endian] is only about the file format, not the CPU type. The CPU endianness doesn't affect the default endianness for files written.  
         *      
         *  **Note:** This is always reset to `false` whenever you open the file. Therefore, you must set [member big_endian]  *after*  opening the file, not before.  
         */
        big_endian: boolean
    }
    namespace FileDialog {
        enum FileMode {
            /** The dialog allows selecting one, and only one file. */
            FILE_MODE_OPEN_FILE = 0,
            
            /** The dialog allows selecting multiple files. */
            FILE_MODE_OPEN_FILES = 1,
            
            /** The dialog only allows selecting a directory, disallowing the selection of any file. */
            FILE_MODE_OPEN_DIR = 2,
            
            /** The dialog allows selecting one file or directory. */
            FILE_MODE_OPEN_ANY = 3,
            
            /** The dialog will warn when a file exists. */
            FILE_MODE_SAVE_FILE = 4,
        }
        enum Access {
            /** The dialog only allows accessing files under the [Resource] path (`res://`). */
            ACCESS_RESOURCES = 0,
            
            /** The dialog only allows accessing files under user data path (`user://`). */
            ACCESS_USERDATA = 1,
            
            /** The dialog allows accessing files on the whole file system. */
            ACCESS_FILESYSTEM = 2,
        }
    }
    /** A dialog for selecting files or directories in the filesystem.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_filedialog.html  
     */
    class FileDialog extends ConfirmationDialog {
        _cancel_pressed(): void
        
        /** Clear all the added filters in the dialog. */
        clear_filters(): void
        
        /** Adds a comma-delimited file name [param filter] option to the [FileDialog] with an optional [param description], which restricts what files can be picked.  
         *  A [param filter] should be of the form `"filename.extension"`, where filename and extension can be `*` to match any string. Filters starting with `.` (i.e. empty filenames) are not allowed.  
         *  For example, a [param filter] of `"*.png, *.jpg"` and a [param description] of `"Images"` results in filter text "Images (*.png, *.jpg)".  
         */
        add_filter(filter: string, description: string = ''): void
        set_filters(filters: PackedStringArray): void
        get_filters(): PackedStringArray
        get_current_dir(): string
        get_current_file(): string
        get_current_path(): string
        set_current_dir(dir: string): void
        set_current_file(file: string): void
        set_current_path(path: string): void
        set_mode_overrides_title(override: boolean): void
        is_mode_overriding_title(): boolean
        set_file_mode(mode: FileDialog.FileMode): void
        get_file_mode(): FileDialog.FileMode
        
        /** Returns the vertical box container of the dialog, custom controls can be added to it.  
         *  **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [member CanvasItem.visible] property.  
         */
        get_vbox(): VBoxContainer
        
        /** Returns the LineEdit for the selected file.  
         *  **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [member CanvasItem.visible] property.  
         */
        get_line_edit(): LineEdit
        set_access(access: FileDialog.Access): void
        get_access(): FileDialog.Access
        set_root_subfolder(dir: string): void
        get_root_subfolder(): string
        set_show_hidden_files(show: boolean): void
        is_showing_hidden_files(): boolean
        set_use_native_dialog(native: boolean): void
        get_use_native_dialog(): boolean
        
        /** Clear all currently selected items in the dialog. */
        deselect_all(): void
        
        /** Invalidate and update the current dialog content list. */
        invalidate(): void
        
        /** If `true`, changing the [member file_mode] property will set the window title accordingly (e.g. setting [member file_mode] to [constant FILE_MODE_OPEN_FILE] will change the window title to "Open a File"). */
        mode_overrides_title: boolean
        
        /** The dialog's open or save mode, which affects the selection behavior. See [enum FileMode]. */
        file_mode: number /*i64*/
        
        /** The file system access scope. See [enum Access] constants.  
         *  **Warning:** Currently, in sandboxed environments such as Web builds or sandboxed macOS apps, FileDialog cannot access the host file system. See [url=https://github.com/godotengine/godot-proposals/issues/1123]godot-proposals#1123[/url].  
         */
        access: number /*i64*/
        
        /** If non-empty, the given sub-folder will be "root" of this [FileDialog], i.e. user won't be able to go to its parent directory. */
        root_subfolder: string
        
        /** The available file type filters. For example, this shows only `.png` and `.gd` files: `set_filters(PackedStringArray(["*.png ; PNG Images","*.gd ; GDScript Files"]))`. Multiple file types can also be specified in a single filter. `"*.png, *.jpg, *.jpeg ; Supported Images"` will show both PNG and JPEG files when selected. */
        filters: PackedStringArray
        
        /** If `true`, the dialog will show hidden files. */
        show_hidden_files: boolean
        
        /** If `true`, [member access] is set to [constant ACCESS_FILESYSTEM], and it is supported by the current [DisplayServer], OS native dialog will be used instead of custom one.  
         *      
         *  **Note:** On macOS, sandboxed apps always use native dialogs to access host filesystem.  
         */
        use_native_dialog: boolean
        
        /** The current working directory of the file dialog. */
        current_dir: string
        
        /** The currently selected file of the file dialog. */
        current_file: string
        
        /** The currently selected file path of the file dialog. */
        current_path: string
        
        /** Emitted when the user selects a file by double-clicking it or pressing the **OK** button. */
        readonly file_selected: Signal // path: string => void
        
        /** Emitted when the user selects multiple files. */
        readonly files_selected: Signal // paths: PackedStringArray => void
        
        /** Emitted when the user selects a directory. */
        readonly dir_selected: Signal // dir: string => void
    }
    /** Godot editor's dock for managing files in the project.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_filesystemdock.html  
     */
    class FileSystemDock extends VBoxContainer {
        _update_tree(_unnamed_arg0: PackedStringArray, _unnamed_arg1: boolean, _unnamed_arg2: boolean, _unnamed_arg3: boolean): void
        _file_list_thumbnail_done(_unnamed_arg0: string, _unnamed_arg1: Texture2D, _unnamed_arg2: Texture2D, _unnamed_arg3: any): void
        _tree_thumbnail_done(_unnamed_arg0: string, _unnamed_arg1: Texture2D, _unnamed_arg2: Texture2D, _unnamed_arg3: any): void
        _select_file(_unnamed_arg0: string, _unnamed_arg1: boolean): void
        
        /** Sets the given [param path] as currently selected, ensuring that the selected file/directory is visible. */
        navigate_to_path(path: string): void
        _update_import_dock(): void
        
        /** Registers a new [EditorResourceTooltipPlugin]. */
        add_resource_tooltip_plugin(plugin: EditorResourceTooltipPlugin): void
        
        /** Removes an [EditorResourceTooltipPlugin]. Fails if the plugin wasn't previously added. */
        remove_resource_tooltip_plugin(plugin: EditorResourceTooltipPlugin): void
        
        /** Emitted when a new scene is created that inherits the scene at [param file] path. */
        readonly inherit: Signal // file: string => void
        
        /** Emitted when the given scenes are being instantiated in the editor. */
        readonly instantiate: Signal // files: PackedStringArray => void
        
        /** Emitted when an external [param resource] had its file removed. */
        readonly resource_removed: Signal // resource: Resource => void
        
        /** Emitted when the given [param file] was removed. */
        readonly file_removed: Signal // file: string => void
        
        /** Emitted when the given [param folder] was removed. */
        readonly folder_removed: Signal // folder: string => void
        
        /** Emitted when a file is moved from [param old_file] path to [param new_file] path. */
        readonly files_moved: Signal // old_file: string, new_file: string => void
        
        /** Emitted when a folder is moved from [param old_folder] path to [param new_folder] path. */
        readonly folder_moved: Signal // old_folder: string, new_folder: string => void
        
        /** Emitted when the user switches file display mode or split mode. */
        readonly display_mode_changed: Signal //  => void
    }
    class FileSystemList extends ItemList {
        readonly item_edited: Signal //  => void
    }
    class FindInFiles extends Node {
        readonly result_found: Signal // path: string, line_number: number /*i64*/, begin: number /*i64*/, end: number /*i64*/, text: string => void
        readonly finished: Signal //  => void
    }
    class FindInFilesDialog extends AcceptDialog {
        readonly find_requested: Signal //  => void
        readonly replace_requested: Signal //  => void
    }
    class FindInFilesPanel extends Control {
        _on_result_found(_unnamed_arg0: string, _unnamed_arg1: number /*i64*/, _unnamed_arg2: number /*i64*/, _unnamed_arg3: number /*i64*/, _unnamed_arg4: string): void
        _on_finished(): void
        _draw_result_text(_unnamed_arg0: Object, _unnamed_arg1: Rect2): void
        readonly result_selected: Signal // path: string, line_number: number /*i64*/, begin: number /*i64*/, end: number /*i64*/ => void
        readonly files_modified: Signal // paths: string => void
    }
    class FindReplaceBar extends HBoxContainer {
        _search_current(): boolean
        readonly error: Signal //  => void
    }
    namespace FlowContainer {
        enum AlignmentMode {
            /** The child controls will be arranged at the beginning of the container, i.e. top if orientation is vertical, left if orientation is horizontal (right for RTL layout). */
            ALIGNMENT_BEGIN = 0,
            
            /** The child controls will be centered in the container. */
            ALIGNMENT_CENTER = 1,
            
            /** The child controls will be arranged at the end of the container, i.e. bottom if orientation is vertical, right if orientation is horizontal (left for RTL layout). */
            ALIGNMENT_END = 2,
        }
    }
    /** A container that arranges its child controls horizontally or vertically and wraps them around at the borders.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_flowcontainer.html  
     */
    class FlowContainer extends Container {
        /** Returns the current line count. */
        get_line_count(): number /*i64*/
        set_alignment(alignment: FlowContainer.AlignmentMode): void
        get_alignment(): FlowContainer.AlignmentMode
        set_vertical(vertical: boolean): void
        is_vertical(): boolean
        
        /** The alignment of the container's children (must be one of [constant ALIGNMENT_BEGIN], [constant ALIGNMENT_CENTER], or [constant ALIGNMENT_END]). */
        alignment: number /*i64*/
        
        /** If `true`, the [FlowContainer] will arrange its children vertically, rather than horizontally.  
         *  Can't be changed when using [HFlowContainer] and [VFlowContainer].  
         */
        vertical: boolean
    }
    /** A material that controls how volumetric fog is rendered, to be assigned to a [FogVolume].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_fogmaterial.html  
     */
    class FogMaterial extends Material {
        set_density(density: number /*f64*/): void
        get_density(): number /*f64*/
        set_albedo(albedo: Color): void
        get_albedo(): Color
        set_emission(emission: Color): void
        get_emission(): Color
        set_height_falloff(height_falloff: number /*f64*/): void
        get_height_falloff(): number /*f64*/
        set_edge_fade(edge_fade: number /*f64*/): void
        get_edge_fade(): number /*f64*/
        set_density_texture(density_texture: Texture3D): void
        get_density_texture(): Texture3D
        
        /** The density of the [FogVolume]. Denser objects are more opaque, but may suffer from under-sampling artifacts that look like stripes. Negative values can be used to subtract fog from other [FogVolume]s or global volumetric fog.  
         *      
         *  **Note:** Due to limited precision, [member density] values between `-0.001` and `0.001` (exclusive) act like `0.0`. This does not apply to [member Environment.volumetric_fog_density].  
         */
        density: number /*f64*/
        
        /** The single-scattering [Color] of the [FogVolume]. Internally, [member albedo] is converted into single-scattering, which is additively blended with other [FogVolume]s and the [member Environment.volumetric_fog_albedo]. */
        albedo: Color
        
        /** The [Color] of the light emitted by the [FogVolume]. Emitted light will not cast light or shadows on other objects, but can be useful for modulating the [Color] of the [FogVolume] independently from light sources. */
        emission: Color
        
        /** The rate by which the height-based fog decreases in density as height increases in world space. A high falloff will result in a sharp transition, while a low falloff will result in a smoother transition. A value of `0.0` results in uniform-density fog. The height threshold is determined by the height of the associated [FogVolume]. */
        height_falloff: number /*f64*/
        
        /** The hardness of the edges of the [FogVolume]. A higher value will result in softer edges, while a lower value will result in harder edges. */
        edge_fade: number /*f64*/
        
        /** The 3D texture that is used to scale the [member density] of the [FogVolume]. This can be used to vary fog density within the [FogVolume] with any kind of static pattern. For animated effects, consider using a custom [url=$DOCS_URL/tutorials/shaders/shader_reference/fog_shader.html]fog shader[/url]. */
        density_texture: Texture3D
    }
    class FogMaterialConversionPlugin extends EditorResourceConversionPlugin {
    }
    /** A region that contributes to the default volumetric fog from the world environment.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_fogvolume.html  
     */
    class FogVolume extends VisualInstance3D {
        set_size(size: Vector3): void
        get_size(): Vector3
        set_shape(shape: RenderingServer.FogVolumeShape): void
        get_shape(): RenderingServer.FogVolumeShape
        set_material(material: Material): void
        get_material(): Material
        
        /** The size of the [FogVolume] when [member shape] is [constant RenderingServer.FOG_VOLUME_SHAPE_ELLIPSOID], [constant RenderingServer.FOG_VOLUME_SHAPE_CONE], [constant RenderingServer.FOG_VOLUME_SHAPE_CYLINDER] or [constant RenderingServer.FOG_VOLUME_SHAPE_BOX].  
         *      
         *  **Note:** Thin fog volumes may appear to flicker when the camera moves or rotates. This can be alleviated by increasing [member ProjectSettings.rendering/environment/volumetric_fog/volume_depth] (at a performance cost) or by decreasing [member Environment.volumetric_fog_length] (at no performance cost, but at the cost of lower fog range). Alternatively, the [FogVolume] can be made thicker and use a lower density in the [member material].  
         *      
         *  **Note:** If [member shape] is [constant RenderingServer.FOG_VOLUME_SHAPE_CONE] or [constant RenderingServer.FOG_VOLUME_SHAPE_CYLINDER], the cone/cylinder will be adjusted to fit within the size. Non-uniform scaling of cone/cylinder shapes via the [member size] property is not supported, but you can scale the [FogVolume] node instead.  
         */
        size: Vector3
        
        /** The shape of the [FogVolume]. This can be set to either [constant RenderingServer.FOG_VOLUME_SHAPE_ELLIPSOID], [constant RenderingServer.FOG_VOLUME_SHAPE_CONE], [constant RenderingServer.FOG_VOLUME_SHAPE_CYLINDER], [constant RenderingServer.FOG_VOLUME_SHAPE_BOX] or [constant RenderingServer.FOG_VOLUME_SHAPE_WORLD]. */
        shape: number /*i64*/
        
        /** The [Material] used by the [FogVolume]. Can be either a built-in [FogMaterial] or a custom [ShaderMaterial]. */
        material: FogMaterial | ShaderMaterial
    }
    class FogVolumeGizmoPlugin extends EditorNode3DGizmoPlugin {
    }
    /** Abstract base class for fonts and font variations.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_font.html  
     */
    class Font extends Resource {
        set_fallbacks(fallbacks: Array): void
        get_fallbacks(): Array
        
        /** Returns [TextServer] RID of the font cache for specific variation. */
        find_variation(variation_coordinates: Dictionary, face_index: number /*i64*/ = 0, strength: number /*f64*/ = 0, transform: Transform2D = <any> {} /*compound.type from 11([object Object])*/, spacing_top: number /*i64*/ = 0, spacing_bottom: number /*i64*/ = 0, spacing_space: number /*i64*/ = 0, spacing_glyph: number /*i64*/ = 0): RID
        
        /** Returns [Array] of valid [Font] [RID]s, which can be passed to the [TextServer] methods. */
        get_rids(): Array
        
        /** Returns the total average font height (ascent plus descent) in pixels.  
         *      
         *  **Note:** Real height of the string is context-dependent and can be significantly different from the value returned by this function. Use it only as rough estimate (e.g. as the height of empty line).  
         */
        get_height(font_size: number /*i64*/ = 16): number /*f64*/
        
        /** Returns the average font ascent (number of pixels above the baseline).  
         *      
         *  **Note:** Real ascent of the string is context-dependent and can be significantly different from the value returned by this function. Use it only as rough estimate (e.g. as the ascent of empty line).  
         */
        get_ascent(font_size: number /*i64*/ = 16): number /*f64*/
        
        /** Returns the average font descent (number of pixels below the baseline).  
         *      
         *  **Note:** Real descent of the string is context-dependent and can be significantly different from the value returned by this function. Use it only as rough estimate (e.g. as the descent of empty line).  
         */
        get_descent(font_size: number /*i64*/ = 16): number /*f64*/
        
        /** Returns average pixel offset of the underline below the baseline.  
         *      
         *  **Note:** Real underline position of the string is context-dependent and can be significantly different from the value returned by this function. Use it only as rough estimate.  
         */
        get_underline_position(font_size: number /*i64*/ = 16): number /*f64*/
        
        /** Returns average thickness of the underline.  
         *      
         *  **Note:** Real underline thickness of the string is context-dependent and can be significantly different from the value returned by this function. Use it only as rough estimate.  
         */
        get_underline_thickness(font_size: number /*i64*/ = 16): number /*f64*/
        
        /** Returns font family name. */
        get_font_name(): string
        
        /** Returns font style name. */
        get_font_style_name(): string
        
        /** Returns [Dictionary] with OpenType font name strings (localized font names, version, description, license information, sample text, etc.). */
        get_ot_name_strings(): Dictionary
        
        /** Returns font style flags, see [enum TextServer.FontStyle]. */
        get_font_style(): TextServer.FontStyle
        
        /** Returns weight (boldness) of the font. A value in the `100...999` range, normal font weight is `400`, bold font weight is `700`. */
        get_font_weight(): number /*i64*/
        
        /** Returns font stretch amount, compared to a normal width. A percentage value between `50%` and `200%`. */
        get_font_stretch(): number /*i64*/
        
        /** Returns the spacing for the given `type` (see [enum TextServer.SpacingType]). */
        get_spacing(spacing: TextServer.SpacingType): number /*i64*/
        
        /** Returns a set of OpenType feature tags. More info: [url=https://docs.microsoft.com/en-us/typography/opentype/spec/featuretags]OpenType feature tags[/url]. */
        get_opentype_features(): Dictionary
        
        /** Sets LRU cache capacity for `draw_*` methods. */
        set_cache_capacity(single_line: number /*i64*/, multi_line: number /*i64*/): void
        
        /** Returns the size of a bounding box of a single-line string, taking kerning, advance and subpixel positioning into account. See also [method get_multiline_string_size] and [method draw_string].  
         *  For example, to get the string size as displayed by a single-line Label, use:  
         *    
         *      
         *  **Note:** Since kerning, advance and subpixel positioning are taken into account by [method get_string_size], using separate [method get_string_size] calls on substrings of a string then adding the results together will return a different result compared to using a single [method get_string_size] call on the full string.  
         *      
         *  **Note:** Real height of the string is context-dependent and can be significantly different from the value returned by [method get_height].  
         */
        get_string_size(text: string, alignment: HorizontalAlignment = 0, width: number /*f64*/ = -1, font_size: number /*i64*/ = 16, justification_flags: TextServer.JustificationFlag = 3, direction: TextServer.Direction = 0, orientation: TextServer.Orientation = 0): Vector2
        
        /** Returns the size of a bounding box of a string broken into the lines, taking kerning and advance into account.  
         *  See also [method draw_multiline_string].  
         */
        get_multiline_string_size(text: string, alignment: HorizontalAlignment = 0, width: number /*f64*/ = -1, font_size: number /*i64*/ = 16, max_lines: number /*i64*/ = -1, brk_flags: TextServer.LineBreakFlag = 3, justification_flags: TextServer.JustificationFlag = 3, direction: TextServer.Direction = 0, orientation: TextServer.Orientation = 0): Vector2
        
        /** Draw [param text] into a canvas item using the font, at a given position, with [param modulate] color, optionally clipping the width and aligning horizontally. [param pos] specifies the baseline, not the top. To draw from the top,  *ascent*  must be added to the Y axis.  
         *  See also [method CanvasItem.draw_string].  
         */
        draw_string(canvas_item: RID, pos: Vector2, text: string, alignment: HorizontalAlignment = 0, width: number /*f64*/ = -1, font_size: number /*i64*/ = 16, modulate: Color = new Color(1, 1, 1, 1), justification_flags: TextServer.JustificationFlag = 3, direction: TextServer.Direction = 0, orientation: TextServer.Orientation = 0): void
        
        /** Breaks [param text] into lines using rules specified by [param brk_flags] and draws it into a canvas item using the font, at a given position, with [param modulate] color, optionally clipping the width and aligning horizontally. [param pos] specifies the baseline of the first line, not the top. To draw from the top,  *ascent*  must be added to the Y axis.  
         *  See also [method CanvasItem.draw_multiline_string].  
         */
        draw_multiline_string(canvas_item: RID, pos: Vector2, text: string, alignment: HorizontalAlignment = 0, width: number /*f64*/ = -1, font_size: number /*i64*/ = 16, max_lines: number /*i64*/ = -1, modulate: Color = new Color(1, 1, 1, 1), brk_flags: TextServer.LineBreakFlag = 3, justification_flags: TextServer.JustificationFlag = 3, direction: TextServer.Direction = 0, orientation: TextServer.Orientation = 0): void
        
        /** Draw [param text] outline into a canvas item using the font, at a given position, with [param modulate] color and [param size] outline size, optionally clipping the width and aligning horizontally. [param pos] specifies the baseline, not the top. To draw from the top,  *ascent*  must be added to the Y axis.  
         *  See also [method CanvasItem.draw_string_outline].  
         */
        draw_string_outline(canvas_item: RID, pos: Vector2, text: string, alignment: HorizontalAlignment = 0, width: number /*f64*/ = -1, font_size: number /*i64*/ = 16, size: number /*i64*/ = 1, modulate: Color = new Color(1, 1, 1, 1), justification_flags: TextServer.JustificationFlag = 3, direction: TextServer.Direction = 0, orientation: TextServer.Orientation = 0): void
        
        /** Breaks [param text] to the lines using rules specified by [param brk_flags] and draws text outline into a canvas item using the font, at a given position, with [param modulate] color and [param size] outline size, optionally clipping the width and aligning horizontally. [param pos] specifies the baseline of the first line, not the top. To draw from the top,  *ascent*  must be added to the Y axis.  
         *  See also [method CanvasItem.draw_multiline_string_outline].  
         */
        draw_multiline_string_outline(canvas_item: RID, pos: Vector2, text: string, alignment: HorizontalAlignment = 0, width: number /*f64*/ = -1, font_size: number /*i64*/ = 16, max_lines: number /*i64*/ = -1, size: number /*i64*/ = 1, modulate: Color = new Color(1, 1, 1, 1), brk_flags: TextServer.LineBreakFlag = 3, justification_flags: TextServer.JustificationFlag = 3, direction: TextServer.Direction = 0, orientation: TextServer.Orientation = 0): void
        
        /** Returns the size of a character. Does not take kerning into account.  
         *      
         *  **Note:** Do not use this function to calculate width of the string character by character, use [method get_string_size] or [TextLine] instead. The height returned is the font height (see also [method get_height]) and has no relation to the glyph height.  
         */
        get_char_size(char: number /*i64*/, font_size: number /*i64*/): Vector2
        
        /** Draw a single Unicode character [param char] into a canvas item using the font, at a given position, with [param modulate] color. [param pos] specifies the baseline, not the top. To draw from the top,  *ascent*  must be added to the Y axis.  
         *      
         *  **Note:** Do not use this function to draw strings character by character, use [method draw_string] or [TextLine] instead.  
         */
        draw_char(canvas_item: RID, pos: Vector2, char: number /*i64*/, font_size: number /*i64*/, modulate: Color = new Color(1, 1, 1, 1)): number /*f64*/
        
        /** Draw a single Unicode character [param char] outline into a canvas item using the font, at a given position, with [param modulate] color and [param size] outline size. [param pos] specifies the baseline, not the top. To draw from the top,  *ascent*  must be added to the Y axis.  
         *      
         *  **Note:** Do not use this function to draw strings character by character, use [method draw_string] or [TextLine] instead.  
         */
        draw_char_outline(canvas_item: RID, pos: Vector2, char: number /*i64*/, font_size: number /*i64*/, size: number /*i64*/ = -1, modulate: Color = new Color(1, 1, 1, 1)): number /*f64*/
        
        /** Returns `true` if a Unicode [param char] is available in the font. */
        has_char(char: number /*i64*/): boolean
        
        /** Returns a string containing all the characters available in the font.  
         *  If a given character is included in more than one font data source, it appears only once in the returned string.  
         */
        get_supported_chars(): string
        
        /** Returns `true`, if font supports given language ([url=https://en.wikipedia.org/wiki/ISO_639-1]ISO 639[/url] code). */
        is_language_supported(language: string): boolean
        
        /** Returns `true`, if font supports given script ([url=https://en.wikipedia.org/wiki/ISO_15924]ISO 15924[/url] code). */
        is_script_supported(script: string): boolean
        
        /** Returns list of OpenType features supported by font. */
        get_supported_feature_list(): Dictionary
        
        /** Returns list of supported [url=https://docs.microsoft.com/en-us/typography/opentype/spec/dvaraxisreg]variation coordinates[/url], each coordinate is returned as `tag: Vector3i(min_value,max_value,default_value)`.  
         *  Font variations allow for continuous change of glyph characteristics along some given design axis, such as weight, width or slant.  
         *  To print available variation axes of a variable font:  
         *    
         *      
         *  **Note:** To set and get variation coordinates of a [FontVariation], use [member FontVariation.variation_opentype].  
         */
        get_supported_variation_list(): Dictionary
        
        /** Returns number of faces in the TrueType / OpenType collection. */
        get_face_count(): number /*i64*/
        
        /** Array of fallback [Font]s to use as a substitute if a glyph is not found in this current [Font].  
         *  If this array is empty in a [FontVariation], the [member FontVariation.base_font]'s fallbacks are used instead.  
         */
        fallbacks: Array
    }
    class FontEditorPlugin extends EditorPlugin {
    }
    /** Holds font source data and prerendered glyph cache, imported from a dynamic or a bitmap font.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_fontfile.html  
     */
    class FontFile extends Font {
        /** Loads an AngelCode BMFont (.fnt, .font) bitmap font from file [param path].  
         *  **Warning:** This method should only be used in the editor or in cases when you need to load external fonts at run-time, such as fonts located at the `user://` directory.  
         */
        load_bitmap_font(path: string): GodotError
        
        /** Loads a TrueType (.ttf), OpenType (.otf), WOFF (.woff), WOFF2 (.woff2) or Type 1 (.pfb, .pfm) dynamic font from file [param path].  
         *  **Warning:** This method should only be used in the editor or in cases when you need to load external fonts at run-time, such as fonts located at the `user://` directory.  
         */
        load_dynamic_font(path: string): GodotError
        set_data(data: PackedByteArray): void
        get_data(): PackedByteArray
        set_font_name(name: string): void
        set_font_style_name(name: string): void
        set_font_style(style: TextServer.FontStyle): void
        set_font_weight(weight: number /*i64*/): void
        set_font_stretch(stretch: number /*i64*/): void
        set_antialiasing(antialiasing: TextServer.FontAntialiasing): void
        get_antialiasing(): TextServer.FontAntialiasing
        set_generate_mipmaps(generate_mipmaps: boolean): void
        get_generate_mipmaps(): boolean
        set_multichannel_signed_distance_field(msdf: boolean): void
        is_multichannel_signed_distance_field(): boolean
        set_msdf_pixel_range(msdf_pixel_range: number /*i64*/): void
        get_msdf_pixel_range(): number /*i64*/
        set_msdf_size(msdf_size: number /*i64*/): void
        get_msdf_size(): number /*i64*/
        set_fixed_size(fixed_size: number /*i64*/): void
        get_fixed_size(): number /*i64*/
        set_fixed_size_scale_mode(fixed_size_scale_mode: TextServer.FixedSizeScaleMode): void
        get_fixed_size_scale_mode(): TextServer.FixedSizeScaleMode
        set_allow_system_fallback(allow_system_fallback: boolean): void
        is_allow_system_fallback(): boolean
        set_force_autohinter(force_autohinter: boolean): void
        is_force_autohinter(): boolean
        set_hinting(hinting: TextServer.Hinting): void
        get_hinting(): TextServer.Hinting
        set_subpixel_positioning(subpixel_positioning: TextServer.SubpixelPositioning): void
        get_subpixel_positioning(): TextServer.SubpixelPositioning
        set_oversampling(oversampling: number /*f64*/): void
        get_oversampling(): number /*f64*/
        
        /** Returns number of the font cache entries. */
        get_cache_count(): number /*i64*/
        
        /** Removes all font cache entries. */
        clear_cache(): void
        
        /** Removes specified font cache entry. */
        remove_cache(cache_index: number /*i64*/): void
        
        /** Returns list of the font sizes in the cache. Each size is [Vector2i] with font size and outline size. */
        get_size_cache_list(cache_index: number /*i64*/): Array
        
        /** Removes all font sizes from the cache entry */
        clear_size_cache(cache_index: number /*i64*/): void
        
        /** Removes specified font size from the cache entry. */
        remove_size_cache(cache_index: number /*i64*/, size: Vector2i): void
        
        /** Sets variation coordinates for the specified font cache entry. See [method Font.get_supported_variation_list] for more info. */
        set_variation_coordinates(cache_index: number /*i64*/, variation_coordinates: Dictionary): void
        
        /** Returns variation coordinates for the specified font cache entry. See [method Font.get_supported_variation_list] for more info. */
        get_variation_coordinates(cache_index: number /*i64*/): Dictionary
        
        /** Sets embolden strength, if is not equal to zero, emboldens the font outlines. Negative values reduce the outline thickness. */
        set_embolden(cache_index: number /*i64*/, strength: number /*f64*/): void
        
        /** Returns embolden strength, if is not equal to zero, emboldens the font outlines. Negative values reduce the outline thickness. */
        get_embolden(cache_index: number /*i64*/): number /*f64*/
        
        /** Sets 2D transform, applied to the font outlines, can be used for slanting, flipping and rotating glyphs. */
        set_transform(cache_index: number /*i64*/, transform: Transform2D): void
        
        /** Returns 2D transform, applied to the font outlines, can be used for slanting, flipping and rotating glyphs. */
        get_transform(cache_index: number /*i64*/): Transform2D
        
        /** Sets the spacing for [param spacing] (see [enum TextServer.SpacingType]) to [param value] in pixels (not relative to the font size). */
        set_extra_spacing(cache_index: number /*i64*/, spacing: TextServer.SpacingType, value: number /*i64*/): void
        
        /** Returns spacing for [param spacing] (see [enum TextServer.SpacingType]) in pixels (not relative to the font size). */
        get_extra_spacing(cache_index: number /*i64*/, spacing: TextServer.SpacingType): number /*i64*/
        
        /** Sets an active face index in the TrueType / OpenType collection. */
        set_face_index(cache_index: number /*i64*/, face_index: number /*i64*/): void
        
        /** Returns an active face index in the TrueType / OpenType collection. */
        get_face_index(cache_index: number /*i64*/): number /*i64*/
        
        /** Sets the font ascent (number of pixels above the baseline). */
        set_cache_ascent(cache_index: number /*i64*/, size: number /*i64*/, ascent: number /*f64*/): void
        
        /** Returns the font ascent (number of pixels above the baseline). */
        get_cache_ascent(cache_index: number /*i64*/, size: number /*i64*/): number /*f64*/
        
        /** Sets the font descent (number of pixels below the baseline). */
        set_cache_descent(cache_index: number /*i64*/, size: number /*i64*/, descent: number /*f64*/): void
        
        /** Returns the font descent (number of pixels below the baseline). */
        get_cache_descent(cache_index: number /*i64*/, size: number /*i64*/): number /*f64*/
        
        /** Sets pixel offset of the underline below the baseline. */
        set_cache_underline_position(cache_index: number /*i64*/, size: number /*i64*/, underline_position: number /*f64*/): void
        
        /** Returns pixel offset of the underline below the baseline. */
        get_cache_underline_position(cache_index: number /*i64*/, size: number /*i64*/): number /*f64*/
        
        /** Sets thickness of the underline in pixels. */
        set_cache_underline_thickness(cache_index: number /*i64*/, size: number /*i64*/, underline_thickness: number /*f64*/): void
        
        /** Returns thickness of the underline in pixels. */
        get_cache_underline_thickness(cache_index: number /*i64*/, size: number /*i64*/): number /*f64*/
        
        /** Sets scaling factor of the color bitmap font. */
        set_cache_scale(cache_index: number /*i64*/, size: number /*i64*/, scale: number /*f64*/): void
        
        /** Returns scaling factor of the color bitmap font. */
        get_cache_scale(cache_index: number /*i64*/, size: number /*i64*/): number /*f64*/
        
        /** Returns number of textures used by font cache entry. */
        get_texture_count(cache_index: number /*i64*/, size: Vector2i): number /*i64*/
        
        /** Removes all textures from font cache entry.  
         *      
         *  **Note:** This function will not remove glyphs associated with the texture, use [method remove_glyph] to remove them manually.  
         */
        clear_textures(cache_index: number /*i64*/, size: Vector2i): void
        
        /** Removes specified texture from the cache entry.  
         *      
         *  **Note:** This function will not remove glyphs associated with the texture. Remove them manually using [method remove_glyph].  
         */
        remove_texture(cache_index: number /*i64*/, size: Vector2i, texture_index: number /*i64*/): void
        
        /** Sets font cache texture image. */
        set_texture_image(cache_index: number /*i64*/, size: Vector2i, texture_index: number /*i64*/, image: Image): void
        
        /** Returns a copy of the font cache texture image. */
        get_texture_image(cache_index: number /*i64*/, size: Vector2i, texture_index: number /*i64*/): Image
        
        /** Sets array containing glyph packing data. */
        set_texture_offsets(cache_index: number /*i64*/, size: Vector2i, texture_index: number /*i64*/, offset: PackedInt32Array): void
        
        /** Returns a copy of the array containing glyph packing data. */
        get_texture_offsets(cache_index: number /*i64*/, size: Vector2i, texture_index: number /*i64*/): PackedInt32Array
        
        /** Returns list of rendered glyphs in the cache entry. */
        get_glyph_list(cache_index: number /*i64*/, size: Vector2i): PackedInt32Array
        
        /** Removes all rendered glyphs information from the cache entry.  
         *      
         *  **Note:** This function will not remove textures associated with the glyphs, use [method remove_texture] to remove them manually.  
         */
        clear_glyphs(cache_index: number /*i64*/, size: Vector2i): void
        
        /** Removes specified rendered glyph information from the cache entry.  
         *      
         *  **Note:** This function will not remove textures associated with the glyphs, use [method remove_texture] to remove them manually.  
         */
        remove_glyph(cache_index: number /*i64*/, size: Vector2i, glyph: number /*i64*/): void
        
        /** Sets glyph advance (offset of the next glyph).  
         *      
         *  **Note:** Advance for glyphs outlines is the same as the base glyph advance and is not saved.  
         */
        set_glyph_advance(cache_index: number /*i64*/, size: number /*i64*/, glyph: number /*i64*/, advance: Vector2): void
        
        /** Returns glyph advance (offset of the next glyph).  
         *      
         *  **Note:** Advance for glyphs outlines is the same as the base glyph advance and is not saved.  
         */
        get_glyph_advance(cache_index: number /*i64*/, size: number /*i64*/, glyph: number /*i64*/): Vector2
        
        /** Sets glyph offset from the baseline. */
        set_glyph_offset(cache_index: number /*i64*/, size: Vector2i, glyph: number /*i64*/, offset: Vector2): void
        
        /** Returns glyph offset from the baseline. */
        get_glyph_offset(cache_index: number /*i64*/, size: Vector2i, glyph: number /*i64*/): Vector2
        
        /** Sets glyph size. */
        set_glyph_size(cache_index: number /*i64*/, size: Vector2i, glyph: number /*i64*/, gl_size: Vector2): void
        
        /** Returns glyph size. */
        get_glyph_size(cache_index: number /*i64*/, size: Vector2i, glyph: number /*i64*/): Vector2
        
        /** Sets rectangle in the cache texture containing the glyph. */
        set_glyph_uv_rect(cache_index: number /*i64*/, size: Vector2i, glyph: number /*i64*/, uv_rect: Rect2): void
        
        /** Returns rectangle in the cache texture containing the glyph. */
        get_glyph_uv_rect(cache_index: number /*i64*/, size: Vector2i, glyph: number /*i64*/): Rect2
        
        /** Sets index of the cache texture containing the glyph. */
        set_glyph_texture_idx(cache_index: number /*i64*/, size: Vector2i, glyph: number /*i64*/, texture_idx: number /*i64*/): void
        
        /** Returns index of the cache texture containing the glyph. */
        get_glyph_texture_idx(cache_index: number /*i64*/, size: Vector2i, glyph: number /*i64*/): number /*i64*/
        
        /** Returns list of the kerning overrides. */
        get_kerning_list(cache_index: number /*i64*/, size: number /*i64*/): Array
        
        /** Removes all kerning overrides. */
        clear_kerning_map(cache_index: number /*i64*/, size: number /*i64*/): void
        
        /** Removes kerning override for the pair of glyphs. */
        remove_kerning(cache_index: number /*i64*/, size: number /*i64*/, glyph_pair: Vector2i): void
        
        /** Sets kerning for the pair of glyphs. */
        set_kerning(cache_index: number /*i64*/, size: number /*i64*/, glyph_pair: Vector2i, kerning: Vector2): void
        
        /** Returns kerning for the pair of glyphs. */
        get_kerning(cache_index: number /*i64*/, size: number /*i64*/, glyph_pair: Vector2i): Vector2
        
        /** Renders the range of characters to the font cache texture. */
        render_range(cache_index: number /*i64*/, size: Vector2i, start: number /*i64*/, end: number /*i64*/): void
        
        /** Renders specified glyph to the font cache texture. */
        render_glyph(cache_index: number /*i64*/, size: Vector2i, index: number /*i64*/): void
        
        /** Adds override for [method Font.is_language_supported]. */
        set_language_support_override(language: string, supported: boolean): void
        
        /** Returns `true` if support override is enabled for the [param language]. */
        get_language_support_override(language: string): boolean
        
        /** Remove language support override. */
        remove_language_support_override(language: string): void
        
        /** Returns list of language support overrides. */
        get_language_support_overrides(): PackedStringArray
        
        /** Adds override for [method Font.is_script_supported]. */
        set_script_support_override(script: string, supported: boolean): void
        
        /** Returns `true` if support override is enabled for the [param script]. */
        get_script_support_override(script: string): boolean
        
        /** Removes script support override. */
        remove_script_support_override(script: string): void
        
        /** Returns list of script support overrides. */
        get_script_support_overrides(): PackedStringArray
        set_opentype_feature_overrides(overrides: Dictionary): void
        get_opentype_feature_overrides(): Dictionary
        
        /** Returns the glyph index of a [param char], optionally modified by the [param variation_selector]. */
        get_glyph_index(size: number /*i64*/, char: number /*i64*/, variation_selector: number /*i64*/): number /*i64*/
        
        /** Returns character code associated with [param glyph_index], or `0` if [param glyph_index] is invalid. See [method get_glyph_index]. */
        get_char_from_glyph_index(size: number /*i64*/, glyph_index: number /*i64*/): number /*i64*/
        
        /** Contents of the dynamic font source file. */
        data: PackedByteArray
        
        /** If set to `true`, generate mipmaps for the font textures. */
        generate_mipmaps: boolean
        
        /** Font anti-aliasing mode. */
        antialiasing: number /*i64*/
        
        /** Font family name. */
        font_name: string
        
        /** Font style name. */
        style_name: string
        
        /** Font style flags, see [enum TextServer.FontStyle]. */
        font_style: number /*i64*/
        
        /** Weight (boldness) of the font. A value in the `100...999` range, normal font weight is `400`, bold font weight is `700`. */
        font_weight: number /*i64*/
        
        /** Font stretch amount, compared to a normal width. A percentage value between `50%` and `200%`. */
        font_stretch: number /*i64*/
        
        /** Font glyph subpixel positioning mode. Subpixel positioning provides shaper text and better kerning for smaller font sizes, at the cost of higher memory usage and lower font rasterization speed. Use [constant TextServer.SUBPIXEL_POSITIONING_AUTO] to automatically enable it based on the font size. */
        subpixel_positioning: number /*i64*/
        
        /** If set to `true`, glyphs of all sizes are rendered using single multichannel signed distance field (MSDF) generated from the dynamic font vector data. Since this approach does not rely on rasterizing the font every time its size changes, this allows for resizing the font in real-time without any performance penalty. Text will also not look grainy for [Control]s that are scaled down (or for [Label3D]s viewed from a long distance). As a downside, font hinting is not available with MSDF. The lack of font hinting may result in less crisp and less readable fonts at small sizes.  
         *      
         *  **Note:** If using font outlines, [member msdf_pixel_range] must be set to at least  *twice*  the size of the largest font outline.  
         *      
         *  **Note:** MSDF font rendering does not render glyphs with overlapping shapes correctly. Overlapping shapes are not valid per the OpenType standard, but are still commonly found in many font files, especially those converted by Google Fonts. To avoid issues with overlapping glyphs, consider downloading the font file directly from the type foundry instead of relying on Google Fonts.  
         */
        multichannel_signed_distance_field: boolean
        
        /** The width of the range around the shape between the minimum and maximum representable signed distance. If using font outlines, [member msdf_pixel_range] must be set to at least  *twice*  the size of the largest font outline. The default [member msdf_pixel_range] value of `16` allows outline sizes up to `8` to look correct. */
        msdf_pixel_range: number /*i64*/
        
        /** Source font size used to generate MSDF textures. Higher values allow for more precision, but are slower to render and require more memory. Only increase this value if you notice a visible lack of precision in glyph rendering. */
        msdf_size: number /*i64*/
        
        /** If set to `true`, system fonts can be automatically used as fallbacks. */
        allow_system_fallback: boolean
        
        /** If set to `true`, auto-hinting is supported and preferred over font built-in hinting. Used by dynamic fonts only (MSDF fonts don't support hinting). */
        force_autohinter: boolean
        
        /** Font hinting mode. Used by dynamic fonts only. */
        hinting: number /*i64*/
        
        /** Font oversampling factor. If set to `0.0`, the global oversampling factor is used instead. Used by dynamic fonts only (MSDF fonts ignore oversampling). */
        oversampling: number /*f64*/
        
        /** Font size, used only for the bitmap fonts. */
        fixed_size: number /*i64*/
        
        /** Scaling mode, used only for the bitmap fonts with [member fixed_size] greater than zero. */
        fixed_size_scale_mode: number /*i64*/
        
        /** Font OpenType feature set override. */
        opentype_feature_overrides: Dictionary
    }
    /** A variation of a font with additional settings.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_fontvariation.html  
     */
    class FontVariation extends Font {
        set_base_font(font: Font): void
        get_base_font(): Font
        set_variation_opentype(coords: Dictionary): void
        get_variation_opentype(): Dictionary
        set_variation_embolden(strength: number /*f64*/): void
        get_variation_embolden(): number /*f64*/
        set_variation_face_index(face_index: number /*i64*/): void
        get_variation_face_index(): number /*i64*/
        set_variation_transform(transform: Transform2D): void
        get_variation_transform(): Transform2D
        set_opentype_features(features: Dictionary): void
        
        /** Sets the spacing for [param spacing] (see [enum TextServer.SpacingType]) to [param value] in pixels (not relative to the font size). */
        set_spacing(spacing: TextServer.SpacingType, value: number /*i64*/): void
        
        /** Base font used to create a variation. If not set, default [Theme] font is used. */
        base_font: Font
        
        /** Font OpenType variation coordinates. More info: [url=https://docs.microsoft.com/en-us/typography/opentype/spec/dvaraxisreg]OpenType variation tags[/url].  
         *      
         *  **Note:** This [Dictionary] uses OpenType tags as keys. Variation axes can be identified both by tags ([int], e.g. `0x77678674`) and names ([String], e.g. `wght`). Some axes might be accessible by multiple names. For example, `wght` refers to the same axis as `weight`. Tags on the other hand are unique. To convert between names and tags, use [method TextServer.name_to_tag] and [method TextServer.tag_to_name].  
         *      
         *  **Note:** To get available variation axes of a font, use [method Font.get_supported_variation_list].  
         */
        variation_opentype: Dictionary
        
        /** Active face index in the TrueType / OpenType collection file. */
        variation_face_index: number /*i64*/
        
        /** If is not equal to zero, emboldens the font outlines. Negative values reduce the outline thickness.  
         *      
         *  **Note:** Emboldened fonts might have self-intersecting outlines, which will prevent MSDF fonts and [TextMesh] from working correctly.  
         */
        variation_embolden: number /*f64*/
        
        /** 2D transform, applied to the font outlines, can be used for slanting, flipping and rotating glyphs.  
         *  For example, to simulate italic typeface by slanting, apply the following transform `Transform2D(1.0, slant, 0.0, 1.0, 0.0, 0.0)`.  
         */
        variation_transform: Transform2D
        
        /** A set of OpenType feature tags. More info: [url=https://docs.microsoft.com/en-us/typography/opentype/spec/featuretags]OpenType feature tags[/url]. */
        opentype_features: Dictionary
    }
    class FramebufferCacheRD extends Object {
    }
    namespace GDExtension {
        enum InitializationLevel {
            INITIALIZATION_LEVEL_CORE = 0,
            INITIALIZATION_LEVEL_SERVERS = 1,
            INITIALIZATION_LEVEL_SCENE = 2,
            INITIALIZATION_LEVEL_EDITOR = 3,
        }
    }
    /** @link https://docs.godotengine.org/en/4.2/classes/class_gdextension.html */
    class GDExtension extends Resource {
        open_library(path: string, entry_symbol: string): GodotError
        close_library(): void
        is_library_open(): boolean
        get_minimum_library_initialization_level(): GDExtension.InitializationLevel
        initialize_library(level: GDExtension.InitializationLevel): void
    }
    class GDShaderSyntaxHighlighter extends CodeHighlighter {
    }
    /** @link https://docs.godotengine.org/en/4.2/classes/class_gltfaccessor.html */
    class GLTFAccessor extends Resource {
        get_buffer_view(): number /*i64*/
        set_buffer_view(buffer_view: number /*i64*/): void
        get_byte_offset(): number /*i64*/
        set_byte_offset(byte_offset: number /*i64*/): void
        get_component_type(): number /*i64*/
        set_component_type(component_type: number /*i64*/): void
        get_normalized(): boolean
        set_normalized(normalized: boolean): void
        get_count(): number /*i64*/
        set_count(count: number /*i64*/): void
        get_type(): number /*i64*/
        set_type(type: number /*i64*/): void
        get_min(): PackedFloat64Array
        set_min(min: PackedFloat64Array): void
        get_max(): PackedFloat64Array
        set_max(max: PackedFloat64Array): void
        get_sparse_count(): number /*i64*/
        set_sparse_count(sparse_count: number /*i64*/): void
        get_sparse_indices_buffer_view(): number /*i64*/
        set_sparse_indices_buffer_view(sparse_indices_buffer_view: number /*i64*/): void
        get_sparse_indices_byte_offset(): number /*i64*/
        set_sparse_indices_byte_offset(sparse_indices_byte_offset: number /*i64*/): void
        get_sparse_indices_component_type(): number /*i64*/
        set_sparse_indices_component_type(sparse_indices_component_type: number /*i64*/): void
        get_sparse_values_buffer_view(): number /*i64*/
        set_sparse_values_buffer_view(sparse_values_buffer_view: number /*i64*/): void
        get_sparse_values_byte_offset(): number /*i64*/
        set_sparse_values_byte_offset(sparse_values_byte_offset: number /*i64*/): void
        buffer_view: number /*i64*/
        byte_offset: number /*i64*/
        component_type: number /*i64*/
        normalized: boolean
        count: number /*i64*/
        type: number /*i64*/
        min: PackedFloat64Array
        max: PackedFloat64Array
        sparse_count: number /*i64*/
        sparse_indices_buffer_view: number /*i64*/
        sparse_indices_byte_offset: number /*i64*/
        sparse_indices_component_type: number /*i64*/
        sparse_values_buffer_view: number /*i64*/
        sparse_values_byte_offset: number /*i64*/
    }
    /** @link https://docs.godotengine.org/en/4.2/classes/class_gltfanimation.html */
    class GLTFAnimation extends Resource {
        get_loop(): boolean
        set_loop(loop: boolean): void
        loop: boolean
    }
    /** @link https://docs.godotengine.org/en/4.2/classes/class_gltfbufferview.html */
    class GLTFBufferView extends Resource {
        get_buffer(): number /*i64*/
        set_buffer(buffer: number /*i64*/): void
        get_byte_offset(): number /*i64*/
        set_byte_offset(byte_offset: number /*i64*/): void
        get_byte_length(): number /*i64*/
        set_byte_length(byte_length: number /*i64*/): void
        get_byte_stride(): number /*i64*/
        set_byte_stride(byte_stride: number /*i64*/): void
        get_indices(): boolean
        set_indices(indices: boolean): void
        buffer: number /*i64*/
        byte_offset: number /*i64*/
        byte_length: number /*i64*/
        byte_stride: number /*i64*/
        indices: boolean
    }
    /** Represents a GLTF camera.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_gltfcamera.html  
     */
    class GLTFCamera extends Resource {
        /** Create a new GLTFCamera instance from the given Godot [Camera3D] node. */
        static from_node(camera_node: Camera3D): GLTFCamera
        
        /** Converts this GLTFCamera instance into a Godot [Camera3D] node. */
        to_node(): Camera3D
        
        /** Creates a new GLTFCamera instance by parsing the given [Dictionary]. */
        static from_dictionary(dictionary: Dictionary): GLTFCamera
        
        /** Serializes this GLTFCamera instance into a [Dictionary]. */
        to_dictionary(): Dictionary
        get_perspective(): boolean
        set_perspective(perspective: boolean): void
        get_fov(): number /*f64*/
        set_fov(fov: number /*f64*/): void
        get_size_mag(): number /*f64*/
        set_size_mag(size_mag: number /*f64*/): void
        get_depth_far(): number /*f64*/
        set_depth_far(zdepth_far: number /*f64*/): void
        get_depth_near(): number /*f64*/
        set_depth_near(zdepth_near: number /*f64*/): void
        
        /** Whether or not the camera is in perspective mode. If false, the camera is in orthographic/orthogonal mode. This maps to GLTF's camera `type` property. See [member Camera3D.projection] and the GLTF spec for more information. */
        perspective: boolean
        
        /** The FOV of the camera. This class and GLTF define the camera FOV in radians, while Godot uses degrees. This maps to GLTF's `yfov` property. This value is only used for perspective cameras, when [member perspective] is true. */
        fov: number /*f64*/
        
        /** The size of the camera. This class and GLTF define the camera size magnitude as a radius in meters, while Godot defines it as a diameter in meters. This maps to GLTF's `ymag` property. This value is only used for orthographic/orthogonal cameras, when [member perspective] is false. */
        size_mag: number /*f64*/
        
        /** The distance to the far culling boundary for this camera relative to its local Z axis, in meters. This maps to GLTF's `zfar` property. */
        depth_far: number /*f64*/
        
        /** The distance to the near culling boundary for this camera relative to its local Z axis, in meters. This maps to GLTF's `znear` property. */
        depth_near: number /*f64*/
    }
    namespace GLTFDocument {
        enum RootNodeMode {
            /** Treat the Godot scene's root node as the root node of the glTF file, and mark it as the single root node via the `GODOT_single_root` glTF extension. This will be parsed the same as [constant ROOT_NODE_MODE_KEEP_ROOT] if the implementation does not support `GODOT_single_root`. */
            ROOT_NODE_MODE_SINGLE_ROOT = 0,
            
            /** Treat the Godot scene's root node as the root node of the glTF file, but do not mark it as anything special. An extra root node will be generated when importing into Godot. This uses only vanilla glTF features. This is equivalent to the behavior in Godot 4.1 and earlier. */
            ROOT_NODE_MODE_KEEP_ROOT = 1,
            
            /** Treat the Godot scene's root node as the name of the glTF scene, and add all of its children as root nodes of the glTF file. This uses only vanilla glTF features. This avoids an extra root node, but only the name of the Godot scene's root node will be preserved, as it will not be saved as a node. */
            ROOT_NODE_MODE_MULTI_ROOT = 2,
        }
    }
    /** Class for importing and exporting glTF files in and out of Godot.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_gltfdocument.html  
     */
    class GLTFDocument extends Resource {
        /** Takes a path to a GLTF file and imports the data at that file path to the given [GLTFState] object through the [param state] parameter.  
         *      
         *  **Note:** The [param base_path] tells [method append_from_file] where to find dependencies and can be empty.  
         */
        append_from_file(path: string, state: GLTFState, flags: number /*i64*/ = 0, base_path: string = ''): GodotError
        
        /** Takes a [PackedByteArray] defining a GLTF and imports the data to the given [GLTFState] object through the [param state] parameter.  
         *      
         *  **Note:** The [param base_path] tells [method append_from_buffer] where to find dependencies and can be empty.  
         */
        append_from_buffer(bytes: PackedByteArray, base_path: string, state: GLTFState, flags: number /*i64*/ = 0): GodotError
        
        /** Takes a Godot Engine scene node and exports it and its descendants to the given [GLTFState] object through the [param state] parameter. */
        append_from_scene(node: Node, state: GLTFState, flags: number /*i64*/ = 0): GodotError
        
        /** Takes a [GLTFState] object through the [param state] parameter and returns a Godot Engine scene node. */
        generate_scene(state: GLTFState, bake_fps: number /*f64*/ = 30, trimming: boolean = false, remove_immutable_tracks: boolean = true): Node
        
        /** Takes a [GLTFState] object through the [param state] parameter and returns a GLTF [PackedByteArray]. */
        generate_buffer(state: GLTFState): PackedByteArray
        
        /** Takes a [GLTFState] object through the [param state] parameter and writes a glTF file to the filesystem.  
         *      
         *  **Note:** The extension of the glTF file determines if it is a .glb binary file or a .gltf file.  
         */
        write_to_filesystem(state: GLTFState, path: string): GodotError
        set_image_format(image_format: string): void
        get_image_format(): string
        set_lossy_quality(lossy_quality: number /*f64*/): void
        get_lossy_quality(): number /*f64*/
        set_root_node_mode(root_node_mode: GLTFDocument.RootNodeMode): void
        get_root_node_mode(): GLTFDocument.RootNodeMode
        
        /** Registers the given [GLTFDocumentExtension] instance with GLTFDocument. If [param first_priority] is true, this extension will be run first. Otherwise, it will be run last.  
         *      
         *  **Note:** Like GLTFDocument itself, all GLTFDocumentExtension classes must be stateless in order to function properly. If you need to store data, use the `set_additional_data` and `get_additional_data` methods in [GLTFState] or [GLTFNode].  
         */
        static register_gltf_document_extension(extension: GLTFDocumentExtension, first_priority: boolean = false): void
        
        /** Unregisters the given [GLTFDocumentExtension] instance. */
        static unregister_gltf_document_extension(extension: GLTFDocumentExtension): void
        
        /** The user-friendly name of the export image format. This is used when exporting the GLTF file, including writing to a file and writing to a byte array.  
         *  By default, Godot allows the following options: "None", "PNG", "JPEG", "Lossless WebP", and "Lossy WebP". Support for more image formats can be added in [GLTFDocumentExtension] classes.  
         */
        image_format: string
        
        /** If [member image_format] is a lossy image format, this determines the lossy quality of the image. On a range of `0.0` to `1.0`, where `0.0` is the lowest quality and `1.0` is the highest quality. A lossy quality of `1.0` is not the same as lossless. */
        lossy_quality: number /*f64*/
        
        /** How to process the root node during export. See [enum RootNodeMode] for details. The default and recommended value is [constant ROOT_NODE_MODE_SINGLE_ROOT].  
         *      
         *  **Note:** Regardless of how the glTF file is exported, when importing, the root node type and name can be overridden in the scene import settings tab.  
         */
        root_node_mode: number /*i64*/
    }
    /** [GLTFDocument] extension class.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_gltfdocumentextension.html  
     */
    class GLTFDocumentExtension extends Resource {
        /** Part of the import process. This method is run first, before all other parts of the import process.  
         *  The return value is used to determine if this [GLTFDocumentExtension] instance should be used for importing a given GLTF file. If [constant OK], the import will use this [GLTFDocumentExtension] instance. If not overridden, [constant OK] is returned.  
         */
        /* gdvirtual */ _import_preflight(state: GLTFState, extensions: PackedStringArray): GodotError
        
        /** Part of the import process. This method is run after [method _import_preflight] and before [method _parse_node_extensions].  
         *  Returns an array of the GLTF extensions supported by this GLTFDocumentExtension class. This is used to validate if a GLTF file with required extensions can be loaded.  
         */
        /* gdvirtual */ _get_supported_extensions(): PackedStringArray
        
        /** Part of the import process. This method is run after [method _get_supported_extensions] and before [method _import_post_parse].  
         *  Runs when parsing the node extensions of a GLTFNode. This method can be used to process the extension JSON data into a format that can be used by [method _generate_scene_node]. The return value should be a member of the [enum Error] enum.  
         */
        /* gdvirtual */ _parse_node_extensions(state: GLTFState, gltf_node: GLTFNode, extensions: Dictionary): GodotError
        
        /** Part of the import process. This method is run after [method _parse_node_extensions] and before [method _parse_texture_json].  
         *  Runs when parsing image data from a GLTF file. The data could be sourced from a separate file, a URI, or a buffer, and then is passed as a byte array.  
         */
        /* gdvirtual */ _parse_image_data(state: GLTFState, image_data: PackedByteArray, mime_type: string, ret_image: Image): GodotError
        
        /** Returns the file extension to use for saving image data into, for example, `".png"`. If defined, when this extension is used to handle images, and the images are saved to a separate file, the image bytes will be copied to a file with this extension. If this is set, there should be a [ResourceImporter] class able to import the file. If not defined or empty, Godot will save the image into a PNG file. */
        /* gdvirtual */ _get_image_file_extension(): string
        
        /** Part of the import process. This method is run after [method _parse_image_data] and before [method _generate_scene_node].  
         *  Runs when parsing the texture JSON from the GLTF textures array. This can be used to set the source image index to use as the texture.  
         */
        /* gdvirtual */ _parse_texture_json(state: GLTFState, texture_json: Dictionary, ret_gltf_texture: GLTFTexture): GodotError
        
        /** Part of the import process. This method is run after [method _import_post_parse] and before [method _import_node].  
         *  Runs when generating a Godot scene node from a GLTFNode. The returned node will be added to the scene tree. Multiple nodes can be generated in this step if they are added as a child of the returned node.  
         *      
         *  **Note:** The [param scene_parent] parameter may be null if this is the single root node.  
         */
        /* gdvirtual */ _generate_scene_node(state: GLTFState, gltf_node: GLTFNode, scene_parent: Node): Node3D
        
        /** Part of the import process. This method is run after [method _parse_node_extensions] and before [method _generate_scene_node].  
         *  This method can be used to modify any of the data imported so far, including any scene nodes, before running the final per-node import step.  
         */
        /* gdvirtual */ _import_post_parse(state: GLTFState): GodotError
        
        /** Part of the import process. This method is run after [method _generate_scene_node] and before [method _import_post].  
         *  This method can be used to make modifications to each of the generated Godot scene nodes.  
         */
        /* gdvirtual */ _import_node(state: GLTFState, gltf_node: GLTFNode, json: Dictionary, node: Node): GodotError
        
        /** Part of the import process. This method is run last, after all other parts of the import process.  
         *  This method can be used to modify the final Godot scene generated by the import process.  
         */
        /* gdvirtual */ _import_post(state: GLTFState, root: Node): GodotError
        
        /** Part of the export process. This method is run first, before all other parts of the export process.  
         *  The return value is used to determine if this [GLTFDocumentExtension] instance should be used for exporting a given GLTF file. If [constant OK], the export will use this [GLTFDocumentExtension] instance. If not overridden, [constant OK] is returned.  
         */
        /* gdvirtual */ _export_preflight(state: GLTFState, root: Node): GodotError
        
        /** Part of the export process. This method is run after [method _export_preflight] and before [method _export_preserialize].  
         *  Runs when converting the data from a Godot scene node. This method can be used to process the Godot scene node data into a format that can be used by [method _export_node].  
         */
        /* gdvirtual */ _convert_scene_node(state: GLTFState, gltf_node: GLTFNode, scene_node: Node): void
        
        /** Part of the export process. This method is run after [method _convert_scene_node] and before [method _get_saveable_image_formats].  
         *  This method can be used to alter the state before performing serialization. It runs every time when generating a buffer with [method GLTFDocument.generate_buffer] or writing to the file system with [method GLTFDocument.write_to_filesystem].  
         */
        /* gdvirtual */ _export_preserialize(state: GLTFState): GodotError
        
        /** Part of the export process. This method is run after [method _convert_scene_node] and before [method _export_node].  
         *  Returns an array of the image formats that can be saved/exported by this extension. This extension will only be selected as the image exporter if the [GLTFDocument]'s [member GLTFDocument.image_format] is in this array. If this [GLTFDocumentExtension] is selected as the image exporter, one of the [method _save_image_at_path] or [method _serialize_image_to_bytes] methods will run next, otherwise [method _export_node] will run next. If the format name contains `"Lossy"`, the lossy quality slider will be displayed.  
         */
        /* gdvirtual */ _get_saveable_image_formats(): PackedStringArray
        
        /** Part of the export process. This method is run after [method _get_saveable_image_formats] and before [method _serialize_texture_json].  
         *  This method is run when embedding images in the GLTF file. When images are saved separately, [method _save_image_at_path] runs instead. Note that these methods only run when this [GLTFDocumentExtension] is selected as the image exporter.  
         *  This method must set the image MIME type in the [param image_dict] with the `"mimeType"` key. For example, for a PNG image, it would be set to `"image/png"`. The return value must be a [PackedByteArray] containing the image data.  
         */
        /* gdvirtual */ _serialize_image_to_bytes(state: GLTFState, image: Image, image_dict: Dictionary, image_format: string, lossy_quality: number /*f64*/): PackedByteArray
        
        /** Part of the export process. This method is run after [method _get_saveable_image_formats] and before [method _serialize_texture_json].  
         *  This method is run when saving images separately from the GLTF file. When images are embedded, [method _serialize_image_to_bytes] runs instead. Note that these methods only run when this [GLTFDocumentExtension] is selected as the image exporter.  
         */
        /* gdvirtual */ _save_image_at_path(state: GLTFState, image: Image, file_path: string, image_format: string, lossy_quality: number /*f64*/): GodotError
        
        /** Part of the export process. This method is run after [method _save_image_at_path] or [method _serialize_image_to_bytes], and before [method _export_node]. Note that this method only runs when this [GLTFDocumentExtension] is selected as the image exporter.  
         *  This method can be used to set up the extensions for the texture JSON by editing [param texture_json]. The extension must also be added as used extension with [method GLTFState.add_used_extension], be sure to set `required` to `true` if you are not providing a fallback.  
         */
        /* gdvirtual */ _serialize_texture_json(state: GLTFState, texture_json: Dictionary, gltf_texture: GLTFTexture, image_format: string): GodotError
        
        /** Part of the export process. This method is run after [method _get_saveable_image_formats] and before [method _export_post]. If this [GLTFDocumentExtension] is used for exporting images, this runs after [method _serialize_texture_json].  
         *  This method can be used to modify the final JSON of each node.  
         */
        /* gdvirtual */ _export_node(state: GLTFState, gltf_node: GLTFNode, json: Dictionary, node: Node): GodotError
        
        /** Part of the export process. This method is run last, after all other parts of the export process.  
         *  This method can be used to modify the final JSON of the generated GLTF file.  
         */
        /* gdvirtual */ _export_post(state: GLTFState): GodotError
    }
    /** @link https://docs.godotengine.org/en/4.2/classes/class_gltfdocumentextensionconvertimportermesh.html */
    class GLTFDocumentExtensionConvertImporterMesh extends GLTFDocumentExtension {
    }
    class GLTFDocumentExtensionPhysics extends GLTFDocumentExtension {
    }
    class GLTFDocumentExtensionTextureKTX extends GLTFDocumentExtension {
    }
    class GLTFDocumentExtensionTextureWebP extends GLTFDocumentExtension {
    }
    /** Represents a GLTF light.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_gltflight.html  
     */
    class GLTFLight extends Resource {
        /** Create a new GLTFLight instance from the given Godot [Light3D] node. */
        static from_node(light_node: Light3D): GLTFLight
        
        /** Converts this GLTFLight instance into a Godot [Light3D] node. */
        to_node(): Light3D
        
        /** Creates a new GLTFLight instance by parsing the given [Dictionary]. */
        static from_dictionary(dictionary: Dictionary): GLTFLight
        
        /** Serializes this GLTFLight instance into a [Dictionary]. */
        to_dictionary(): Dictionary
        get_color(): Color
        set_color(color: Color): void
        get_intensity(): number /*f64*/
        set_intensity(intensity: number /*f64*/): void
        get_light_type(): string
        set_light_type(light_type: string): void
        get_range(): number /*f64*/
        set_range(range: number /*f64*/): void
        get_inner_cone_angle(): number /*f64*/
        set_inner_cone_angle(inner_cone_angle: number /*f64*/): void
        get_outer_cone_angle(): number /*f64*/
        set_outer_cone_angle(outer_cone_angle: number /*f64*/): void
        
        /** The [Color] of the light. Defaults to white. A black color causes the light to have no effect. */
        color: Color
        
        /** The intensity of the light. This is expressed in candelas (lumens per steradian) for point and spot lights, and lux (lumens per m²) for directional lights. When creating a Godot light, this value is converted to a unitless multiplier. */
        intensity: number /*f64*/
        
        /** The type of the light. The values accepted by Godot are "point", "spot", and "directional", which correspond to Godot's [OmniLight3D], [SpotLight3D], and [DirectionalLight3D] respectively. */
        light_type: string
        
        /** The range of the light, beyond which the light has no effect. GLTF lights with no range defined behave like physical lights (which have infinite range). When creating a Godot light, the range is clamped to 4096. */
        range: number /*f64*/
        
        /** The inner angle of the cone in a spotlight. Must be less than or equal to the outer cone angle.  
         *  Within this angle, the light is at full brightness. Between the inner and outer cone angles, there is a transition from full brightness to zero brightness. When creating a Godot [SpotLight3D], the ratio between the inner and outer cone angles is used to calculate the attenuation of the light.  
         */
        inner_cone_angle: number /*f64*/
        
        /** The outer angle of the cone in a spotlight. Must be greater than or equal to the inner angle.  
         *  At this angle, the light drops off to zero brightness. Between the inner and outer cone angles, there is a transition from full brightness to zero brightness. If this angle is a half turn, then the spotlight emits in all directions. When creating a Godot [SpotLight3D], the outer cone angle is used as the angle of the spotlight.  
         */
        outer_cone_angle: number /*f64*/
    }
    /** @link https://docs.godotengine.org/en/4.2/classes/class_gltfmesh.html */
    class GLTFMesh extends Resource {
        get_mesh(): ImporterMesh
        set_mesh(mesh: ImporterMesh): void
        get_blend_weights(): PackedFloat32Array
        set_blend_weights(blend_weights: PackedFloat32Array): void
        get_instance_materials(): Array
        set_instance_materials(instance_materials: Array): void
        mesh: Object
        blend_weights: PackedFloat32Array
        instance_materials: Array
    }
    /** GLTF node class.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_gltfnode.html  
     */
    class GLTFNode extends Resource {
        get_parent(): number /*i64*/
        set_parent(parent: number /*i64*/): void
        get_height(): number /*i64*/
        set_height(height: number /*i64*/): void
        get_xform(): Transform3D
        set_xform(xform: Transform3D): void
        get_mesh(): number /*i64*/
        set_mesh(mesh: number /*i64*/): void
        get_camera(): number /*i64*/
        set_camera(camera: number /*i64*/): void
        get_skin(): number /*i64*/
        set_skin(skin: number /*i64*/): void
        get_skeleton(): number /*i64*/
        set_skeleton(skeleton: number /*i64*/): void
        get_position(): Vector3
        set_position(position: Vector3): void
        get_rotation(): Quaternion
        set_rotation(rotation: Quaternion): void
        get_scale(): Vector3
        set_scale(scale: Vector3): void
        get_children(): PackedInt32Array
        set_children(children: PackedInt32Array): void
        get_light(): number /*i64*/
        set_light(light: number /*i64*/): void
        
        /** Gets additional arbitrary data in this [GLTFNode] instance. This can be used to keep per-node state data in [GLTFDocumentExtension] classes, which is important because they are stateless.  
         *  The argument should be the [GLTFDocumentExtension] name (does not have to match the extension name in the GLTF file), and the return value can be anything you set. If nothing was set, the return value is null.  
         */
        get_additional_data(extension_name: StringName): any
        
        /** Sets additional arbitrary data in this [GLTFNode] instance. This can be used to keep per-node state data in [GLTFDocumentExtension] classes, which is important because they are stateless.  
         *  The first argument should be the [GLTFDocumentExtension] name (does not have to match the extension name in the GLTF file), and the second argument can be anything you want.  
         */
        set_additional_data(extension_name: StringName, additional_data: any): void
        
        /** The index of the parent node in the [GLTFState]. If -1, this node is a root node. */
        parent: number /*i64*/
        
        /** How deep into the node hierarchy this node is. A root node will have a height of 0, its children will have a height of 1, and so on. If -1, the height has not been calculated. */
        height: number /*i64*/
        
        /** The transform of the GLTF node relative to its parent. This property is usually unused since the position, rotation, and scale properties are preferred. */
        xform: Transform3D
        
        /** If this GLTF node is a mesh, the index of the [GLTFMesh] in the [GLTFState] that describes the mesh's properties. If -1, this node is not a mesh. */
        mesh: number /*i64*/
        
        /** If this GLTF node is a camera, the index of the [GLTFCamera] in the [GLTFState] that describes the camera's properties. If -1, this node is not a camera. */
        camera: number /*i64*/
        
        /** If this GLTF node has a skin, the index of the [GLTFSkin] in the [GLTFState] that describes the skin's properties. If -1, this node does not have a skin. */
        skin: number /*i64*/
        
        /** If this GLTF node has a skeleton, the index of the [GLTFSkeleton] in the [GLTFState] that describes the skeleton's properties. If -1, this node does not have a skeleton. */
        skeleton: number /*i64*/
        
        /** The position of the GLTF node relative to its parent. */
        position: Vector3
        
        /** The rotation of the GLTF node relative to its parent. */
        rotation: Quaternion
        
        /** The scale of the GLTF node relative to its parent. */
        scale: Vector3
        
        /** The indices of the child nodes in the [GLTFState]. If this GLTF node has no children, this will be an empty array. */
        children: PackedInt32Array
        
        /** If this GLTF node is a light, the index of the [GLTFLight] in the [GLTFState] that describes the light's properties. If -1, this node is not a light. */
        light: number /*i64*/
    }
    /** Represents a GLTF physics body.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_gltfphysicsbody.html  
     */
    class GLTFPhysicsBody extends Resource {
        /** Create a new GLTFPhysicsBody instance from the given Godot [CollisionObject3D] node. */
        static from_node(body_node: CollisionObject3D): GLTFPhysicsBody
        
        /** Converts this GLTFPhysicsBody instance into a Godot [CollisionObject3D] node. */
        to_node(): CollisionObject3D
        
        /** Creates a new GLTFPhysicsBody instance by parsing the given [Dictionary]. */
        static from_dictionary(dictionary: Dictionary): GLTFPhysicsBody
        
        /** Serializes this GLTFPhysicsBody instance into a [Dictionary]. */
        to_dictionary(): Dictionary
        get_body_type(): string
        set_body_type(body_type: string): void
        get_mass(): number /*f64*/
        set_mass(mass: number /*f64*/): void
        get_linear_velocity(): Vector3
        set_linear_velocity(linear_velocity: Vector3): void
        get_angular_velocity(): Vector3
        set_angular_velocity(angular_velocity: Vector3): void
        get_center_of_mass(): Vector3
        set_center_of_mass(center_of_mass: Vector3): void
        get_inertia_tensor(): Basis
        set_inertia_tensor(inertia_tensor: Basis): void
        
        /** The type of the body. When importing, this controls what type of [CollisionObject3D] node Godot should generate. Valid values are "static", "kinematic", "character", "rigid", "vehicle", and "trigger". */
        body_type: string
        
        /** The mass of the physics body, in kilograms. This is only used when the body type is "rigid" or "vehicle". */
        mass: number /*f64*/
        
        /** The linear velocity of the physics body, in meters per second. This is only used when the body type is "rigid" or "vehicle". */
        linear_velocity: Vector3
        
        /** The angular velocity of the physics body, in radians per second. This is only used when the body type is "rigid" or "vehicle". */
        angular_velocity: Vector3
        
        /** The center of mass of the body, in meters. This is in local space relative to the body. By default, the center of the mass is the body's origin. */
        center_of_mass: Vector3
        
        /** The inertia tensor of the physics body, in kilogram meter squared (kg⋅m²). This is only used when the body type is "rigid" or "vehicle".  
         *  When converted to a Godot [RigidBody3D] node, if this value is zero, then the inertia will be calculated automatically.  
         */
        inertia_tensor: Basis
    }
    /** Represents a GLTF physics shape.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_gltfphysicsshape.html  
     */
    class GLTFPhysicsShape extends Resource {
        /** Create a new GLTFPhysicsShape instance from the given Godot [CollisionShape3D] node. */
        static from_node(shape_node: CollisionShape3D): GLTFPhysicsShape
        
        /** Converts this GLTFPhysicsShape instance into a Godot [CollisionShape3D] node. */
        to_node(cache_shapes: boolean = false): CollisionShape3D
        
        /** Creates a new GLTFPhysicsShape instance by parsing the given [Dictionary]. */
        static from_dictionary(dictionary: Dictionary): GLTFPhysicsShape
        
        /** Serializes this GLTFPhysicsShape instance into a [Dictionary]. */
        to_dictionary(): Dictionary
        get_shape_type(): string
        set_shape_type(shape_type: string): void
        get_size(): Vector3
        set_size(size: Vector3): void
        get_radius(): number /*f64*/
        set_radius(radius: number /*f64*/): void
        get_height(): number /*f64*/
        set_height(height: number /*f64*/): void
        get_is_trigger(): boolean
        set_is_trigger(is_trigger: boolean): void
        get_mesh_index(): number /*i64*/
        set_mesh_index(mesh_index: number /*i64*/): void
        get_importer_mesh(): ImporterMesh
        set_importer_mesh(importer_mesh: ImporterMesh): void
        
        /** The type of shape this shape represents. Valid values are "box", "capsule", "cylinder", "sphere", "hull", and "trimesh". */
        shape_type: string
        
        /** The size of the shape, in meters. This is only used when the shape type is "box", and it represents the "diameter" of the box. This value should not be negative. */
        size: Vector3
        
        /** The radius of the shape, in meters. This is only used when the shape type is "capsule", "cylinder", or "sphere". This value should not be negative. */
        radius: number /*f64*/
        
        /** The height of the shape, in meters. This is only used when the shape type is "capsule" or "cylinder". This value should not be negative, and for "capsule" it should be at least twice the radius. */
        height: number /*f64*/
        
        /** If `true`, indicates that this shape is a trigger. For Godot, this means that the shape should be a child of an Area3D node.  
         *  This is the only variable not used in the [method to_node] method, it's intended to be used alongside when deciding where to add the generated node as a child.  
         */
        is_trigger: boolean
        
        /** The index of the shape's mesh in the GLTF file. This is only used when the shape type is "hull" (convex hull) or "trimesh" (concave trimesh). */
        mesh_index: number /*i64*/
        
        /** The [ImporterMesh] resource of the shape. This is only used when the shape type is "hull" (convex hull) or "trimesh" (concave trimesh). */
        importer_mesh: ImporterMesh
    }
    /** @link https://docs.godotengine.org/en/4.2/classes/class_gltfskeleton.html */
    class GLTFSkeleton extends Resource {
        get_joints(): PackedInt32Array
        set_joints(joints: PackedInt32Array): void
        get_roots(): PackedInt32Array
        set_roots(roots: PackedInt32Array): void
        get_godot_skeleton(): Skeleton3D
        get_unique_names(): Array
        set_unique_names(unique_names: Array): void
        
        /** Returns a [Dictionary] that maps skeleton bone indices to the indices of GLTF nodes. This property is unused during import, and only set during export. In a GLTF file, a bone is a node, so Godot converts skeleton bones to GLTF nodes. */
        get_godot_bone_node(): Dictionary
        
        /** Sets a [Dictionary] that maps skeleton bone indices to the indices of GLTF nodes. This property is unused during import, and only set during export. In a GLTF file, a bone is a node, so Godot converts skeleton bones to GLTF nodes. */
        set_godot_bone_node(godot_bone_node: Dictionary): void
        get_bone_attachment_count(): number /*i64*/
        get_bone_attachment(idx: number /*i64*/): BoneAttachment3D
        joints: PackedInt32Array
        roots: PackedInt32Array
        unique_names: Array
        godot_bone_node: Dictionary
    }
    /** @link https://docs.godotengine.org/en/4.2/classes/class_gltfskin.html */
    class GLTFSkin extends Resource {
        get_skin_root(): number /*i64*/
        set_skin_root(skin_root: number /*i64*/): void
        get_joints_original(): PackedInt32Array
        set_joints_original(joints_original: PackedInt32Array): void
        get_inverse_binds(): Array
        set_inverse_binds(inverse_binds: Array): void
        get_joints(): PackedInt32Array
        set_joints(joints: PackedInt32Array): void
        get_non_joints(): PackedInt32Array
        set_non_joints(non_joints: PackedInt32Array): void
        get_roots(): PackedInt32Array
        set_roots(roots: PackedInt32Array): void
        get_skeleton(): number /*i64*/
        set_skeleton(skeleton: number /*i64*/): void
        get_joint_i_to_bone_i(): Dictionary
        set_joint_i_to_bone_i(joint_i_to_bone_i: Dictionary): void
        get_joint_i_to_name(): Dictionary
        set_joint_i_to_name(joint_i_to_name: Dictionary): void
        get_godot_skin(): Skin
        set_godot_skin(godot_skin: Skin): void
        skin_root: number /*i64*/
        joints_original: PackedInt32Array
        inverse_binds: Array
        joints: PackedInt32Array
        non_joints: PackedInt32Array
        roots: PackedInt32Array
        skeleton: number /*i64*/
        joint_i_to_bone_i: Dictionary
        joint_i_to_name: Dictionary
        godot_skin: Skin
    }
    /** Archived GLTF extension for specular/glossy materials.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_gltfspecgloss.html  
     */
    class GLTFSpecGloss extends Resource {
        get_diffuse_img(): Image
        set_diffuse_img(diffuse_img: Image): void
        get_diffuse_factor(): Color
        set_diffuse_factor(diffuse_factor: Color): void
        get_gloss_factor(): number /*f64*/
        set_gloss_factor(gloss_factor: number /*f64*/): void
        get_specular_factor(): Color
        set_specular_factor(specular_factor: Color): void
        get_spec_gloss_img(): Image
        set_spec_gloss_img(spec_gloss_img: Image): void
        
        /** The diffuse texture. */
        diffuse_img: Object
        
        /** The reflected diffuse factor of the material. */
        diffuse_factor: Color
        
        /** The glossiness or smoothness of the material. */
        gloss_factor: number /*f64*/
        
        /** The specular RGB color of the material. The alpha channel is unused. */
        specular_factor: Color
        
        /** The specular-glossiness texture. */
        spec_gloss_img: Object
    }
    /** Represents all data of a GLTF file.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_gltfstate.html  
     */
    class GLTFState extends Resource {
        /** Discards all embedded textures and uses untextured materials. */
        static readonly HANDLE_BINARY_DISCARD_TEXTURES = 0
        
        /** Extracts embedded textures to be reimported and compressed. Editor only. Acts as uncompressed at runtime. */
        static readonly HANDLE_BINARY_EXTRACT_TEXTURES = 1
        
        /** Embeds textures VRAM compressed with Basis Universal into the generated scene. */
        static readonly HANDLE_BINARY_EMBED_AS_BASISU = 2
        
        /** Embeds textures compressed losslessly into the generated scene, matching old behavior. */
        static readonly HANDLE_BINARY_EMBED_AS_UNCOMPRESSED = 3
        
        /** Appends an extension to the list of extensions used by this GLTF file during serialization. If [param required] is true, the extension will also be added to the list of required extensions. Do not run this in [method GLTFDocumentExtension._export_post], as that stage is too late to add extensions. The final list is sorted alphabetically. */
        add_used_extension(extension_name: string, required: boolean): void
        get_json(): Dictionary
        set_json(json: Dictionary): void
        get_major_version(): number /*i64*/
        set_major_version(major_version: number /*i64*/): void
        get_minor_version(): number /*i64*/
        set_minor_version(minor_version: number /*i64*/): void
        get_copyright(): string
        set_copyright(copyright: string): void
        get_glb_data(): PackedByteArray
        set_glb_data(glb_data: PackedByteArray): void
        get_use_named_skin_binds(): boolean
        set_use_named_skin_binds(use_named_skin_binds: boolean): void
        
        /** Returns an array of all [GLTFNode]s in the GLTF file. These are the nodes that [member GLTFNode.children] and [member root_nodes] refer to. This includes nodes that may not be generated in the Godot scene, or nodes that may generate multiple Godot scene nodes. */
        get_nodes(): Array
        
        /** Sets the [GLTFNode]s in the state. These are the nodes that [member GLTFNode.children] and [member root_nodes] refer to. Some of the nodes set here may not be generated in the Godot scene, or may generate multiple Godot scene nodes. */
        set_nodes(nodes: Array): void
        get_buffers(): Array
        set_buffers(buffers: Array): void
        get_buffer_views(): Array
        set_buffer_views(buffer_views: Array): void
        get_accessors(): Array
        set_accessors(accessors: Array): void
        
        /** Returns an array of all [GLTFMesh]es in the GLTF file. These are the meshes that the [member GLTFNode.mesh] index refers to. */
        get_meshes(): Array
        
        /** Sets the [GLTFMesh]es in the state. These are the meshes that the [member GLTFNode.mesh] index refers to. */
        set_meshes(meshes: Array): void
        
        /** Returns the number of [AnimationPlayer] nodes in this [GLTFState]. These nodes are only used during the export process when converting Godot [AnimationPlayer] nodes to GLTF animations. */
        get_animation_players_count(idx: number /*i64*/): number /*i64*/
        
        /** Returns the [AnimationPlayer] node with the given index. These nodes are only used during the export process when converting Godot [AnimationPlayer] nodes to GLTF animations. */
        get_animation_player(idx: number /*i64*/): AnimationPlayer
        get_materials(): Array
        set_materials(materials: Array): void
        get_scene_name(): string
        set_scene_name(scene_name: string): void
        get_base_path(): string
        set_base_path(base_path: string): void
        get_filename(): string
        set_filename(filename: string): void
        get_root_nodes(): PackedInt32Array
        set_root_nodes(root_nodes: PackedInt32Array): void
        get_textures(): Array
        set_textures(textures: Array): void
        
        /** Retrieves the array of texture samplers that are used by the textures contained in the GLTF. */
        get_texture_samplers(): Array
        
        /** Sets the array of texture samplers that are used by the textures contained in the GLTF. */
        set_texture_samplers(texture_samplers: Array): void
        
        /** Gets the images of the GLTF file as an array of [Texture2D]s. These are the images that the [member GLTFTexture.src_image] index refers to. */
        get_images(): Array
        
        /** Sets the images in the state stored as an array of [Texture2D]s. This can be used during export. These are the images that the [member GLTFTexture.src_image] index refers to. */
        set_images(images: Array): void
        
        /** Returns an array of all [GLTFSkin]s in the GLTF file. These are the skins that the [member GLTFNode.skin] index refers to. */
        get_skins(): Array
        
        /** Sets the [GLTFSkin]s in the state. These are the skins that the [member GLTFNode.skin] index refers to. */
        set_skins(skins: Array): void
        
        /** Returns an array of all [GLTFCamera]s in the GLTF file. These are the cameras that the [member GLTFNode.camera] index refers to. */
        get_cameras(): Array
        
        /** Sets the [GLTFCamera]s in the state. These are the cameras that the [member GLTFNode.camera] index refers to. */
        set_cameras(cameras: Array): void
        
        /** Returns an array of all [GLTFLight]s in the GLTF file. These are the lights that the [member GLTFNode.light] index refers to. */
        get_lights(): Array
        
        /** Sets the [GLTFLight]s in the state. These are the lights that the [member GLTFNode.light] index refers to. */
        set_lights(lights: Array): void
        
        /** Returns an array of unique node names. This is used in both the import process and export process. */
        get_unique_names(): Array
        
        /** Sets the unique node names in the state. This is used in both the import process and export process. */
        set_unique_names(unique_names: Array): void
        
        /** Returns an array of unique animation names. This is only used during the import process. */
        get_unique_animation_names(): Array
        
        /** Sets the unique animation names in the state. This is only used during the import process. */
        set_unique_animation_names(unique_animation_names: Array): void
        
        /** Returns an array of all [GLTFSkeleton]s in the GLTF file. These are the skeletons that the [member GLTFNode.skeleton] index refers to. */
        get_skeletons(): Array
        
        /** Sets the [GLTFSkeleton]s in the state. These are the skeletons that the [member GLTFNode.skeleton] index refers to. */
        set_skeletons(skeletons: Array): void
        get_create_animations(): boolean
        set_create_animations(create_animations: boolean): void
        
        /** Returns an array of all [GLTFAnimation]s in the GLTF file. When importing, these will be generated as animations in an [AnimationPlayer] node. When exporting, these will be generated from Godot [AnimationPlayer] nodes. */
        get_animations(): Array
        
        /** Sets the [GLTFAnimation]s in the state. When importing, these will be generated as animations in an [AnimationPlayer] node. When exporting, these will be generated from Godot [AnimationPlayer] nodes. */
        set_animations(animations: Array): void
        
        /** Returns the Godot scene node that corresponds to the same index as the [GLTFNode] it was generated from. This is the inverse of [method get_node_index]. Useful during the import process.  
         *      
         *  **Note:** Not every [GLTFNode] will have a scene node generated, and not every generated scene node will have a corresponding [GLTFNode]. If there is no scene node for this [GLTFNode] index, `null` is returned.  
         */
        get_scene_node(idx: number /*i64*/): Node
        
        /** Returns the index of the [GLTFNode] corresponding to this Godot scene node. This is the inverse of [method get_scene_node]. Useful during the export process.  
         *      
         *  **Note:** Not every Godot scene node will have a corresponding [GLTFNode], and not every [GLTFNode] will have a scene node generated. If there is no [GLTFNode] index for this scene node, `-1` is returned.  
         */
        get_node_index(scene_node: Node): number /*i64*/
        
        /** Gets additional arbitrary data in this [GLTFState] instance. This can be used to keep per-file state data in [GLTFDocumentExtension] classes, which is important because they are stateless.  
         *  The argument should be the [GLTFDocumentExtension] name (does not have to match the extension name in the GLTF file), and the return value can be anything you set. If nothing was set, the return value is null.  
         */
        get_additional_data(extension_name: StringName): any
        
        /** Sets additional arbitrary data in this [GLTFState] instance. This can be used to keep per-file state data in [GLTFDocumentExtension] classes, which is important because they are stateless.  
         *  The first argument should be the [GLTFDocumentExtension] name (does not have to match the extension name in the GLTF file), and the second argument can be anything you want.  
         */
        set_additional_data(extension_name: StringName, additional_data: any): void
        get_handle_binary_image(): number /*i64*/
        set_handle_binary_image(method: number /*i64*/): void
        json: Dictionary
        major_version: number /*i64*/
        minor_version: number /*i64*/
        
        /** The copyright string in the asset header of the GLTF file. This is set during import if present and export if non-empty. See the GLTF asset header documentation for more information. */
        copyright: string
        glb_data: PackedByteArray
        use_named_skin_binds: boolean
        nodes: Array
        buffers: Array
        buffer_views: Array
        accessors: Array
        meshes: Array
        materials: Array
        
        /** The name of the scene. When importing, if not specified, this will be the file name. When exporting, if specified, the scene name will be saved to the GLTF file. */
        scene_name: string
        
        /** The folder path associated with this GLTF data. This is used to find other files the GLTF file references, like images or binary buffers. This will be set during import when appending from a file, and will be set during export when writing to a file. */
        base_path: string
        
        /** The file name associated with this GLTF data. If it ends with `.gltf`, this is text-based GLTF, otherwise this is binary GLB. This will be set during import when appending from a file, and will be set during export when writing to a file. If writing to a buffer, this will be an empty string. */
        filename: string
        
        /** The root nodes of the GLTF file. Typically, a GLTF file will only have one scene, and therefore one root node. However, a GLTF file may have multiple scenes and therefore multiple root nodes, which will be generated as siblings of each other and as children of the root node of the generated Godot scene. */
        root_nodes: PackedInt32Array
        textures: Array
        texture_samplers: Array
        images: Array
        skins: Array
        cameras: Array
        lights: Array
        unique_names: Array
        unique_animation_names: Array
        skeletons: Array
        create_animations: boolean
        animations: Array
        handle_binary_image: number /*i64*/
    }
    /** @link https://docs.godotengine.org/en/4.2/classes/class_gltftexture.html */
    class GLTFTexture extends Resource {
        get_src_image(): number /*i64*/
        set_src_image(src_image: number /*i64*/): void
        get_sampler(): number /*i64*/
        set_sampler(sampler: number /*i64*/): void
        
        /** The index of the image associated with this texture, see [method GLTFState.get_images]. If -1, then this texture does not have an image assigned. */
        src_image: number /*i64*/
        
        /** ID of the texture sampler to use when sampling the image. If -1, then the default texture sampler is used (linear filtering, and repeat wrapping in both axes). */
        sampler: number /*i64*/
    }
    /** Represents a GLTF texture sampler  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_gltftexturesampler.html  
     */
    class GLTFTextureSampler extends Resource {
        get_mag_filter(): number /*i64*/
        set_mag_filter(filter_mode: number /*i64*/): void
        get_min_filter(): number /*i64*/
        set_min_filter(filter_mode: number /*i64*/): void
        get_wrap_s(): number /*i64*/
        set_wrap_s(wrap_mode: number /*i64*/): void
        get_wrap_t(): number /*i64*/
        set_wrap_t(wrap_mode: number /*i64*/): void
        
        /** Texture's magnification filter, used when texture appears larger on screen than the source image. */
        mag_filter: number /*i64*/
        
        /** Texture's minification filter, used when the texture appears smaller on screen than the source image. */
        min_filter: number /*i64*/
        
        /** Wrapping mode to use for S-axis (horizontal) texture coordinates. */
        wrap_s: number /*i64*/
        
        /** Wrapping mode to use for T-axis (vertical) texture coordinates. */
        wrap_t: number /*i64*/
    }
    namespace GPUParticles2D {
        enum DrawOrder {
            /** Particles are drawn in the order emitted. */
            DRAW_ORDER_INDEX = 0,
            
            /** Particles are drawn in order of remaining lifetime. In other words, the particle with the highest lifetime is drawn at the front. */
            DRAW_ORDER_LIFETIME = 1,
            
            /** Particles are drawn in reverse order of remaining lifetime. In other words, the particle with the lowest lifetime is drawn at the front. */
            DRAW_ORDER_REVERSE_LIFETIME = 2,
        }
        enum EmitFlags {
            /** Particle starts at the specified position. */
            EMIT_FLAG_POSITION = 1,
            
            /** Particle starts with specified rotation and scale. */
            EMIT_FLAG_ROTATION_SCALE = 2,
            
            /** Particle starts with the specified velocity vector, which defines the emission direction and speed. */
            EMIT_FLAG_VELOCITY = 4,
            
            /** Particle starts with specified color. */
            EMIT_FLAG_COLOR = 8,
            
            /** Particle starts with specified `CUSTOM` data. */
            EMIT_FLAG_CUSTOM = 16,
        }
    }
    /** A 2D particle emitter.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_gpuparticles2d.html  
     */
    class GPUParticles2D extends Node2D {
        set_emitting(emitting: boolean): void
        set_amount(amount: number /*i64*/): void
        set_lifetime(secs: number /*f64*/): void
        set_one_shot(secs: boolean): void
        set_pre_process_time(secs: number /*f64*/): void
        set_explosiveness_ratio(ratio: number /*f64*/): void
        set_randomness_ratio(ratio: number /*f64*/): void
        set_visibility_rect(visibility_rect: Rect2): void
        set_use_local_coordinates(enable: boolean): void
        set_fixed_fps(fps: number /*i64*/): void
        set_fractional_delta(enable: boolean): void
        set_interpolate(enable: boolean): void
        set_process_material(material: Material): void
        set_speed_scale(scale: number /*f64*/): void
        set_collision_base_size(size: number /*f64*/): void
        set_interp_to_end(interp: number /*f64*/): void
        is_emitting(): boolean
        get_amount(): number /*i64*/
        get_lifetime(): number /*f64*/
        get_one_shot(): boolean
        get_pre_process_time(): number /*f64*/
        get_explosiveness_ratio(): number /*f64*/
        get_randomness_ratio(): number /*f64*/
        get_visibility_rect(): Rect2
        get_use_local_coordinates(): boolean
        get_fixed_fps(): number /*i64*/
        get_fractional_delta(): boolean
        get_interpolate(): boolean
        get_process_material(): Material
        get_speed_scale(): number /*f64*/
        get_collision_base_size(): number /*f64*/
        get_interp_to_end(): number /*f64*/
        set_draw_order(order: GPUParticles2D.DrawOrder): void
        get_draw_order(): GPUParticles2D.DrawOrder
        set_texture(texture: Texture2D): void
        get_texture(): Texture2D
        
        /** Returns a rectangle containing the positions of all existing particles.  
         *      
         *  **Note:** When using threaded rendering this method synchronizes the rendering thread. Calling it often may have a negative impact on performance.  
         */
        capture_rect(): Rect2
        
        /** Restarts all the existing particles. */
        restart(): void
        set_sub_emitter(path: NodePath): void
        get_sub_emitter(): NodePath
        
        /** Emits a single particle. Whether [param xform], [param velocity], [param color] and [param custom] are applied depends on the value of [param flags]. See [enum EmitFlags]. */
        emit_particle(xform: Transform2D, velocity: Vector2, color: Color, custom: Color, flags: number /*i64*/): void
        set_trail_enabled(enabled: boolean): void
        set_trail_lifetime(secs: number /*f64*/): void
        is_trail_enabled(): boolean
        get_trail_lifetime(): number /*f64*/
        set_trail_sections(sections: number /*i64*/): void
        get_trail_sections(): number /*i64*/
        set_trail_section_subdivisions(subdivisions: number /*i64*/): void
        get_trail_section_subdivisions(): number /*i64*/
        
        /** Sets this node's properties to match a given [CPUParticles2D] node. */
        convert_from_particles(particles: Node): void
        set_amount_ratio(ratio: number /*f64*/): void
        get_amount_ratio(): number /*f64*/
        
        /** If `true`, particles are being emitted. [member emitting] can be used to start and stop particles from emitting. However, if [member one_shot] is `true` setting [member emitting] to `true` will not restart the emission cycle until after all active particles finish processing. You can use the [signal finished] signal to be notified once all active particles finish processing. */
        emitting: boolean
        
        /** The number of particles to emit in one emission cycle. The effective emission rate is `(amount * amount_ratio) / lifetime` particles per second. Higher values will increase GPU requirements, even if not all particles are visible at a given time or if [member amount_ratio] is decreased.  
         *      
         *  **Note:** Changing this value will cause the particle system to restart. To avoid this, change [member amount_ratio] instead.  
         */
        amount: number /*i64*/
        
        /** The ratio of particles that should actually be emitted. If set to a value lower than `1.0`, this will set the amount of emitted particles throughout the lifetime to `amount * amount_ratio`. Unlike changing [member amount], changing [member amount_ratio] while emitting does not affect already-emitted particles and doesn't cause the particle system to restart. [member amount_ratio] can be used to create effects that make the number of emitted particles vary over time.  
         *      
         *  **Note:** Reducing the [member amount_ratio] has no performance benefit, since resources need to be allocated and processed for the total [member amount] of particles regardless of the [member amount_ratio]. If you don't intend to change the number of particles emitted while the particles are emitting, make sure [member amount_ratio] is set to `1` and change [member amount] to your liking instead.  
         */
        amount_ratio: number /*f64*/
        
        /** Path to another [GPUParticles2D] node that will be used as a subemitter (see [member ParticleProcessMaterial.sub_emitter_mode]). Subemitters can be used to achieve effects such as fireworks, sparks on collision, bubbles popping into water drops, and more.  
         *      
         *  **Note:** When [member sub_emitter] is set, the target [GPUParticles2D] node will no longer emit particles on its own.  
         */
        sub_emitter: NodePath
        
        /** [Material] for processing particles. Can be a [ParticleProcessMaterial] or a [ShaderMaterial]. */
        process_material: ShaderMaterial | ParticleProcessMaterial
        
        /** Particle texture. If `null`, particles will be squares with a size of 1×1 pixels.  
         *      
         *  **Note:** To use a flipbook texture, assign a new [CanvasItemMaterial] to the [GPUParticles2D]'s [member CanvasItem.material] property, then enable [member CanvasItemMaterial.particles_animation] and set [member CanvasItemMaterial.particles_anim_h_frames], [member CanvasItemMaterial.particles_anim_v_frames], and [member CanvasItemMaterial.particles_anim_loop] to match the flipbook texture.  
         */
        texture: Texture2D
        
        /** The amount of time each particle will exist (in seconds). The effective emission rate is `(amount * amount_ratio) / lifetime` particles per second. */
        lifetime: number /*f64*/
        
        /** If `true`, only one emission cycle occurs. If set `true` during a cycle, emission will stop at the cycle's end. */
        one_shot: boolean
        
        /** Particle system starts as if it had already run for this many seconds. */
        preprocess: number /*f64*/
        
        /** Particle system's running speed scaling ratio. A value of `0` can be used to pause the particles. */
        speed_scale: number /*f64*/
        
        /** How rapidly particles in an emission cycle are emitted. If greater than `0`, there will be a gap in emissions before the next cycle begins. */
        explosiveness: number /*f64*/
        
        /** Emission lifetime randomness ratio. */
        randomness: number /*f64*/
        
        /** The particle system's frame rate is fixed to a value. For example, changing the value to 2 will make the particles render at 2 frames per second. Note this does not slow down the simulation of the particle system itself. */
        fixed_fps: number /*i64*/
        
        /** Enables particle interpolation, which makes the particle movement smoother when their [member fixed_fps] is lower than the screen refresh rate. */
        interpolate: boolean
        
        /** If `true`, results in fractional delta calculation which has a smoother particles display effect. */
        fract_delta: boolean
        
        /** Causes all the particles in this node to interpolate towards the end of their lifetime.  
         *      
         *  **Note:** This only works when used with a [ParticleProcessMaterial]. It needs to be manually implemented for custom process shaders.  
         */
        interp_to_end: number /*f64*/
        
        /** Multiplier for particle's collision radius. `1.0` corresponds to the size of the sprite. If particles appear to sink into the ground when colliding, increase this value. If particles appear to float when colliding, decrease this value. Only effective if [member ParticleProcessMaterial.collision_mode] is [constant ParticleProcessMaterial.COLLISION_RIGID] or [constant ParticleProcessMaterial.COLLISION_HIDE_ON_CONTACT].  
         *      
         *  **Note:** Particles always have a spherical collision shape.  
         */
        collision_base_size: number /*f64*/
        
        /** The [Rect2] that determines the node's region which needs to be visible on screen for the particle system to be active.  
         *  Grow the rect if particles suddenly appear/disappear when the node enters/exits the screen. The [Rect2] can be grown via code or with the **Particles → Generate Visibility Rect** editor tool.  
         */
        visibility_rect: Rect2
        
        /** If `true`, particles use the parent node's coordinate space (known as local coordinates). This will cause particles to move and rotate along the [GPUParticles2D] node (and its parents) when it is moved or rotated. If `false`, particles use global coordinates; they will not move or rotate along the [GPUParticles2D] node (and its parents) when it is moved or rotated. */
        local_coords: boolean
        
        /** Particle draw order. Uses [enum DrawOrder] values. */
        draw_order: number /*i64*/
        
        /** If `true`, enables particle trails using a mesh skinning system.  
         *      
         *  **Note:** Unlike [GPUParticles3D], the number of trail sections and subdivisions is set with the [member trail_sections] and [member trail_section_subdivisions] properties.  
         */
        trail_enabled: boolean
        
        /** The amount of time the particle's trail should represent (in seconds). Only effective if [member trail_enabled] is `true`. */
        trail_lifetime: number /*f64*/
        
        /** The number of sections to use for the particle trail rendering. Higher values can result in smoother trail curves, at the cost of performance due to increased mesh complexity. See also [member trail_section_subdivisions]. Only effective if [member trail_enabled] is `true`. */
        trail_sections: number /*i64*/
        
        /** The number of subdivisions to use for the particle trail rendering. Higher values can result in smoother trail curves, at the cost of performance due to increased mesh complexity. See also [member trail_sections]. Only effective if [member trail_enabled] is `true`. */
        trail_section_subdivisions: number /*i64*/
        
        /** Emitted when all active particles have finished processing. When [member one_shot] is disabled, particles will process continuously, so this is never emitted.  
         *      
         *  **Note:** Due to the particles being computed on the GPU there might be a delay before the signal gets emitted.  
         */
        readonly finished: Signal //  => void
    }
    class GPUParticles2DEditorPlugin extends EditorPlugin {
    }
    namespace GPUParticles3D {
        enum DrawOrder {
            /** Particles are drawn in the order emitted. */
            DRAW_ORDER_INDEX = 0,
            
            /** Particles are drawn in order of remaining lifetime. In other words, the particle with the highest lifetime is drawn at the front. */
            DRAW_ORDER_LIFETIME = 1,
            
            /** Particles are drawn in reverse order of remaining lifetime. In other words, the particle with the lowest lifetime is drawn at the front. */
            DRAW_ORDER_REVERSE_LIFETIME = 2,
            
            /** Particles are drawn in order of depth. */
            DRAW_ORDER_VIEW_DEPTH = 3,
        }
        enum EmitFlags {
            /** Particle starts at the specified position. */
            EMIT_FLAG_POSITION = 1,
            
            /** Particle starts with specified rotation and scale. */
            EMIT_FLAG_ROTATION_SCALE = 2,
            
            /** Particle starts with the specified velocity vector, which defines the emission direction and speed. */
            EMIT_FLAG_VELOCITY = 4,
            
            /** Particle starts with specified color. */
            EMIT_FLAG_COLOR = 8,
            
            /** Particle starts with specified `CUSTOM` data. */
            EMIT_FLAG_CUSTOM = 16,
        }
        enum TransformAlign {
            TRANSFORM_ALIGN_DISABLED = 0,
            TRANSFORM_ALIGN_Z_BILLBOARD = 1,
            TRANSFORM_ALIGN_Y_TO_VELOCITY = 2,
            TRANSFORM_ALIGN_Z_BILLBOARD_Y_TO_VELOCITY = 3,
        }
    }
    /** A 3D particle emitter.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_gpuparticles3d.html  
     */
    class GPUParticles3D extends GeometryInstance3D {
        /** Maximum number of draw passes supported. */
        static readonly MAX_DRAW_PASSES = 4
        set_emitting(emitting: boolean): void
        set_amount(amount: number /*i64*/): void
        set_lifetime(secs: number /*f64*/): void
        set_one_shot(enable: boolean): void
        set_pre_process_time(secs: number /*f64*/): void
        set_explosiveness_ratio(ratio: number /*f64*/): void
        set_randomness_ratio(ratio: number /*f64*/): void
        set_visibility_aabb(aabb: AABB): void
        set_use_local_coordinates(enable: boolean): void
        set_fixed_fps(fps: number /*i64*/): void
        set_fractional_delta(enable: boolean): void
        set_interpolate(enable: boolean): void
        set_process_material(material: Material): void
        set_speed_scale(scale: number /*f64*/): void
        set_collision_base_size(size: number /*f64*/): void
        set_interp_to_end(interp: number /*f64*/): void
        is_emitting(): boolean
        get_amount(): number /*i64*/
        get_lifetime(): number /*f64*/
        get_one_shot(): boolean
        get_pre_process_time(): number /*f64*/
        get_explosiveness_ratio(): number /*f64*/
        get_randomness_ratio(): number /*f64*/
        get_visibility_aabb(): AABB
        get_use_local_coordinates(): boolean
        get_fixed_fps(): number /*i64*/
        get_fractional_delta(): boolean
        get_interpolate(): boolean
        get_process_material(): Material
        get_speed_scale(): number /*f64*/
        get_collision_base_size(): number /*f64*/
        get_interp_to_end(): number /*f64*/
        set_draw_order(order: GPUParticles3D.DrawOrder): void
        get_draw_order(): GPUParticles3D.DrawOrder
        set_draw_passes(passes: number /*i64*/): void
        
        /** Sets the [Mesh] that is drawn at index [param pass]. */
        set_draw_pass_mesh(pass: number /*i64*/, mesh: Mesh): void
        get_draw_passes(): number /*i64*/
        
        /** Returns the [Mesh] that is drawn at index [param pass]. */
        get_draw_pass_mesh(pass: number /*i64*/): Mesh
        set_skin(skin: Skin): void
        get_skin(): Skin
        
        /** Restarts the particle emission, clearing existing particles. */
        restart(): void
        
        /** Returns the axis-aligned bounding box that contains all the particles that are active in the current frame. */
        capture_aabb(): AABB
        set_sub_emitter(path: NodePath): void
        get_sub_emitter(): NodePath
        
        /** Emits a single particle. Whether [param xform], [param velocity], [param color] and [param custom] are applied depends on the value of [param flags]. See [enum EmitFlags]. */
        emit_particle(xform: Transform3D, velocity: Vector3, color: Color, custom: Color, flags: number /*i64*/): void
        set_trail_enabled(enabled: boolean): void
        set_trail_lifetime(secs: number /*f64*/): void
        is_trail_enabled(): boolean
        get_trail_lifetime(): number /*f64*/
        set_transform_align(align: GPUParticles3D.TransformAlign): void
        get_transform_align(): GPUParticles3D.TransformAlign
        
        /** Sets this node's properties to match a given [CPUParticles3D] node. */
        convert_from_particles(particles: Node): void
        set_amount_ratio(ratio: number /*f64*/): void
        get_amount_ratio(): number /*f64*/
        
        /** If `true`, particles are being emitted. [member emitting] can be used to start and stop particles from emitting. However, if [member one_shot] is `true` setting [member emitting] to `true` will not restart the emission cycle until after all active particles finish processing. You can use the [signal finished] signal to be notified once all active particles finish processing. */
        emitting: boolean
        
        /** The number of particles to emit in one emission cycle. The effective emission rate is `(amount * amount_ratio) / lifetime` particles per second. Higher values will increase GPU requirements, even if not all particles are visible at a given time or if [member amount_ratio] is decreased.  
         *      
         *  **Note:** Changing this value will cause the particle system to restart. To avoid this, change [member amount_ratio] instead.  
         */
        amount: number /*i64*/
        
        /** The ratio of particles that should actually be emitted. If set to a value lower than `1.0`, this will set the amount of emitted particles throughout the lifetime to `amount * amount_ratio`. Unlike changing [member amount], changing [member amount_ratio] while emitting does not affect already-emitted particles and doesn't cause the particle system to restart. [member amount_ratio] can be used to create effects that make the number of emitted particles vary over time.  
         *      
         *  **Note:** Reducing the [member amount_ratio] has no performance benefit, since resources need to be allocated and processed for the total [member amount] of particles regardless of the [member amount_ratio]. If you don't intend to change the number of particles emitted while the particles are emitting, make sure [member amount_ratio] is set to `1` and change [member amount] to your liking instead.  
         */
        amount_ratio: number /*f64*/
        
        /** Path to another [GPUParticles3D] node that will be used as a subemitter (see [member ParticleProcessMaterial.sub_emitter_mode]). Subemitters can be used to achieve effects such as fireworks, sparks on collision, bubbles popping into water drops, and more.  
         *      
         *  **Note:** When [member sub_emitter] is set, the target [GPUParticles3D] node will no longer emit particles on its own.  
         */
        sub_emitter: NodePath
        
        /** The amount of time each particle will exist (in seconds). The effective emission rate is `(amount * amount_ratio) / lifetime` particles per second. */
        lifetime: number /*f64*/
        
        /** Causes all the particles in this node to interpolate towards the end of their lifetime.  
         *      
         *  **Note:** This only works when used with a [ParticleProcessMaterial]. It needs to be manually implemented for custom process shaders.  
         */
        interp_to_end: number /*f64*/
        
        /** If `true`, only the number of particles equal to [member amount] will be emitted. */
        one_shot: boolean
        
        /** Amount of time to preprocess the particles before animation starts. Lets you start the animation some time after particles have started emitting. */
        preprocess: number /*f64*/
        
        /** Speed scaling ratio. A value of `0` can be used to pause the particles. */
        speed_scale: number /*f64*/
        
        /** Time ratio between each emission. If `0`, particles are emitted continuously. If `1`, all particles are emitted simultaneously. */
        explosiveness: number /*f64*/
        
        /** Emission randomness ratio. */
        randomness: number /*f64*/
        
        /** The particle system's frame rate is fixed to a value. For example, changing the value to 2 will make the particles render at 2 frames per second. Note this does not slow down the simulation of the particle system itself. */
        fixed_fps: number /*i64*/
        
        /** Enables particle interpolation, which makes the particle movement smoother when their [member fixed_fps] is lower than the screen refresh rate. */
        interpolate: boolean
        
        /** If `true`, results in fractional delta calculation which has a smoother particles display effect. */
        fract_delta: boolean
        
        /** The base diameter for particle collision in meters. If particles appear to sink into the ground when colliding, increase this value. If particles appear to float when colliding, decrease this value. Only effective if [member ParticleProcessMaterial.collision_mode] is [constant ParticleProcessMaterial.COLLISION_RIGID] or [constant ParticleProcessMaterial.COLLISION_HIDE_ON_CONTACT].  
         *      
         *  **Note:** Particles always have a spherical collision shape.  
         */
        collision_base_size: number /*f64*/
        
        /** The [AABB] that determines the node's region which needs to be visible on screen for the particle system to be active. [member GeometryInstance3D.extra_cull_margin] is added on each of the AABB's axes. Particle collisions and attraction will only occur within this area.  
         *  Grow the box if particles suddenly appear/disappear when the node enters/exits the screen. The [AABB] can be grown via code or with the **Particles → Generate AABB** editor tool.  
         *      
         *  **Note:** [member visibility_aabb] is overridden by [member GeometryInstance3D.custom_aabb] if that property is set to a non-default value.  
         */
        visibility_aabb: AABB
        
        /** If `true`, particles use the parent node's coordinate space (known as local coordinates). This will cause particles to move and rotate along the [GPUParticles3D] node (and its parents) when it is moved or rotated. If `false`, particles use global coordinates; they will not move or rotate along the [GPUParticles3D] node (and its parents) when it is moved or rotated. */
        local_coords: boolean
        
        /** Particle draw order. Uses [enum DrawOrder] values.  
         *      
         *  **Note:** [constant DRAW_ORDER_INDEX] is the only option that supports motion vectors for effects like TAA. It is suggested to use this draw order if the particles are opaque to fix ghosting artifacts.  
         */
        draw_order: number /*i64*/
        transform_align: number /*i64*/
        
        /** If `true`, enables particle trails using a mesh skinning system. Designed to work with [RibbonTrailMesh] and [TubeTrailMesh].  
         *      
         *  **Note:** [member BaseMaterial3D.use_particle_trails] must also be enabled on the particle mesh's material. Otherwise, setting [member trail_enabled] to `true` will have no effect.  
         *      
         *  **Note:** Unlike [GPUParticles2D], the number of trail sections and subdivisions is set in the [RibbonTrailMesh] or the [TubeTrailMesh]'s properties.  
         */
        trail_enabled: boolean
        
        /** The amount of time the particle's trail should represent (in seconds). Only effective if [member trail_enabled] is `true`. */
        trail_lifetime: number /*f64*/
        
        /** [Material] for processing particles. Can be a [ParticleProcessMaterial] or a [ShaderMaterial]. */
        process_material: ShaderMaterial | ParticleProcessMaterial
        
        /** The number of draw passes when rendering particles. */
        draw_passes: number /*i64*/
        draw_skin: Skin
        
        /** Emitted when all active particles have finished processing. When [member one_shot] is disabled, particles will process continuously, so this is never emitted.  
         *      
         *  **Note:** Due to the particles being computed on the GPU there might be a delay before the signal gets emitted.  
         */
        readonly finished: Signal //  => void
    }
    class GPUParticles3DEditor extends GPUParticles3DEditorBase {
    }
    class GPUParticles3DEditorBase extends Control {
    }
    class GPUParticles3DEditorPlugin extends EditorPlugin {
    }
    class GPUParticles3DGizmoPlugin extends EditorNode3DGizmoPlugin {
    }
    /** Abstract base class for 3D particle attractors.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_gpuparticlesattractor3d.html  
     */
    class GPUParticlesAttractor3D extends VisualInstance3D {
        set_cull_mask(mask: number /*i64*/): void
        get_cull_mask(): number /*i64*/
        set_strength(strength: number /*f64*/): void
        get_strength(): number /*f64*/
        set_attenuation(attenuation: number /*f64*/): void
        get_attenuation(): number /*f64*/
        set_directionality(amount: number /*f64*/): void
        get_directionality(): number /*f64*/
        
        /** Adjusts the strength of the attractor. If [member strength] is negative, particles will be pushed in the opposite direction. Particles will be pushed  *away*  from the attractor's origin if [member directionality] is `0.0`, or towards local +Z if [member directionality] is greater than `0.0`. */
        strength: number /*f64*/
        
        /** The particle attractor's attenuation. Higher values result in more gradual pushing of particles as they come closer to the attractor's origin. Zero or negative values will cause particles to be pushed very fast as soon as the touch the attractor's edges. */
        attenuation: number /*f64*/
        
        /** Adjusts how directional the attractor is. At `0.0`, the attractor is not directional at all: it will attract particles towards its center. At `1.0`, the attractor is fully directional: particles will always be pushed towards local -Z (or +Z if [member strength] is negative).  
         *      
         *  **Note:** If [member directionality] is greater than `0.0`, the direction in which particles are pushed can be changed by rotating the [GPUParticlesAttractor3D] node.  
         */
        directionality: number /*f64*/
        
        /** The particle rendering layers ([member VisualInstance3D.layers]) that will be affected by the attractor. By default, all particles are affected by an attractor.  
         *  After configuring particle nodes accordingly, specific layers can be unchecked to prevent certain particles from being affected by attractors. For example, this can be used if you're using an attractor as part of a spell effect but don't want the attractor to affect unrelated weather particles at the same position.  
         *  Particle attraction can also be disabled on a per-process material basis by setting [member ParticleProcessMaterial.attractor_interaction_enabled] on the [GPUParticles3D] node.  
         */
        cull_mask: number /*i64*/
    }
    /** A box-shaped attractor that influences particles from [GPUParticles3D] nodes.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_gpuparticlesattractorbox3d.html  
     */
    class GPUParticlesAttractorBox3D extends GPUParticlesAttractor3D {
        set_size(size: Vector3): void
        get_size(): Vector3
        
        /** The attractor box's size in 3D units. */
        size: Vector3
    }
    /** A spheroid-shaped attractor that influences particles from [GPUParticles3D] nodes.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_gpuparticlesattractorsphere3d.html  
     */
    class GPUParticlesAttractorSphere3D extends GPUParticlesAttractor3D {
        set_radius(radius: number /*f64*/): void
        get_radius(): number /*f64*/
        
        /** The attractor sphere's radius in 3D units.  
         *      
         *  **Note:** Stretched ellipses can be obtained by using non-uniform scaling on the [GPUParticlesAttractorSphere3D] node.  
         */
        radius: number /*f64*/
    }
    /** A box-shaped attractor with varying directions and strengths defined in it that influences particles from [GPUParticles3D] nodes.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_gpuparticlesattractorvectorfield3d.html  
     */
    class GPUParticlesAttractorVectorField3D extends GPUParticlesAttractor3D {
        set_size(size: Vector3): void
        get_size(): Vector3
        set_texture(texture: Texture3D): void
        get_texture(): Texture3D
        
        /** The size of the vector field box in 3D units. */
        size: Vector3
        
        /** The 3D texture to be used. Values are linearly interpolated between the texture's pixels.  
         *      
         *  **Note:** To get better performance, the 3D texture's resolution should reflect the [member size] of the attractor. Since particle attraction is usually low-frequency data, the texture can be kept at a low resolution such as 64×64×64.  
         */
        texture: Texture3D
    }
    /** Abstract base class for 3D particle collision shapes affecting [GPUParticles3D] nodes.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_gpuparticlescollision3d.html  
     */
    class GPUParticlesCollision3D extends VisualInstance3D {
        set_cull_mask(mask: number /*i64*/): void
        get_cull_mask(): number /*i64*/
        
        /** The particle rendering layers ([member VisualInstance3D.layers]) that will be affected by the collision shape. By default, all particles that have [member ParticleProcessMaterial.collision_mode] set to [constant ParticleProcessMaterial.COLLISION_RIGID] or [constant ParticleProcessMaterial.COLLISION_HIDE_ON_CONTACT] will be affected by a collision shape.  
         *  After configuring particle nodes accordingly, specific layers can be unchecked to prevent certain particles from being affected by attractors. For example, this can be used if you're using an attractor as part of a spell effect but don't want the attractor to affect unrelated weather particles at the same position.  
         *  Particle attraction can also be disabled on a per-process material basis by setting [member ParticleProcessMaterial.attractor_interaction_enabled] on the [GPUParticles3D] node.  
         */
        cull_mask: number /*i64*/
    }
    class GPUParticlesCollision3DGizmoPlugin extends EditorNode3DGizmoPlugin {
    }
    /** A box-shaped 3D particle collision shape affecting [GPUParticles3D] nodes.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_gpuparticlescollisionbox3d.html  
     */
    class GPUParticlesCollisionBox3D extends GPUParticlesCollision3D {
        set_size(size: Vector3): void
        get_size(): Vector3
        
        /** The collision box's size in 3D units. */
        size: Vector3
    }
    namespace GPUParticlesCollisionHeightField3D {
        enum Resolution {
            /** Generate a 256×256 heightmap. Intended for small-scale scenes, or larger scenes with no distant particles. */
            RESOLUTION_256 = 0,
            
            /** Generate a 512×512 heightmap. Intended for medium-scale scenes, or larger scenes with no distant particles. */
            RESOLUTION_512 = 1,
            
            /** Generate a 1024×1024 heightmap. Intended for large scenes with distant particles. */
            RESOLUTION_1024 = 2,
            
            /** Generate a 2048×2048 heightmap. Intended for very large scenes with distant particles. */
            RESOLUTION_2048 = 3,
            
            /** Generate a 4096×4096 heightmap. Intended for huge scenes with distant particles. */
            RESOLUTION_4096 = 4,
            
            /** Generate a 8192×8192 heightmap. Intended for gigantic scenes with distant particles. */
            RESOLUTION_8192 = 5,
            
            /** Represents the size of the [enum Resolution] enum. */
            RESOLUTION_MAX = 6,
        }
        enum UpdateMode {
            /** Only update the heightmap when the [GPUParticlesCollisionHeightField3D] node is moved, or when the camera moves if [member follow_camera_enabled] is `true`. An update can be forced by slightly moving the [GPUParticlesCollisionHeightField3D] in any direction, or by calling [method RenderingServer.particles_collision_height_field_update]. */
            UPDATE_MODE_WHEN_MOVED = 0,
            
            /** Update the heightmap every frame. This has a significant performance cost. This update should only be used when geometry that particles can collide with changes significantly during gameplay. */
            UPDATE_MODE_ALWAYS = 1,
        }
    }
    /** A real-time heightmap-shaped 3D particle collision shape affecting [GPUParticles3D] nodes.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_gpuparticlescollisionheightfield3d.html  
     */
    class GPUParticlesCollisionHeightField3D extends GPUParticlesCollision3D {
        set_size(size: Vector3): void
        get_size(): Vector3
        set_resolution(resolution: GPUParticlesCollisionHeightField3D.Resolution): void
        get_resolution(): GPUParticlesCollisionHeightField3D.Resolution
        set_update_mode(update_mode: GPUParticlesCollisionHeightField3D.UpdateMode): void
        get_update_mode(): GPUParticlesCollisionHeightField3D.UpdateMode
        set_follow_camera_enabled(enabled: boolean): void
        is_follow_camera_enabled(): boolean
        
        /** The collision heightmap's size in 3D units. To improve heightmap quality, [member size] should be set as small as possible while covering the parts of the scene you need. */
        size: Vector3
        
        /** Higher resolutions can represent small details more accurately in large scenes, at the cost of lower performance. If [member update_mode] is [constant UPDATE_MODE_ALWAYS], consider using the lowest resolution possible. */
        resolution: number /*i64*/
        
        /** The update policy to use for the generated heightmap. */
        update_mode: number /*i64*/
        
        /** If `true`, the [GPUParticlesCollisionHeightField3D] will follow the current camera in global space. The [GPUParticlesCollisionHeightField3D] does not need to be a child of the [Camera3D] node for this to work.  
         *  Following the camera has a performance cost, as it will force the heightmap to update whenever the camera moves. Consider lowering [member resolution] to improve performance if [member follow_camera_enabled] is `true`.  
         */
        follow_camera_enabled: boolean
    }
    namespace GPUParticlesCollisionSDF3D {
        enum Resolution {
            /** Bake a 16×16×16 signed distance field. This is the fastest option, but also the least precise. */
            RESOLUTION_16 = 0,
            
            /** Bake a 32×32×32 signed distance field. */
            RESOLUTION_32 = 1,
            
            /** Bake a 64×64×64 signed distance field. */
            RESOLUTION_64 = 2,
            
            /** Bake a 128×128×128 signed distance field. */
            RESOLUTION_128 = 3,
            
            /** Bake a 256×256×256 signed distance field. */
            RESOLUTION_256 = 4,
            
            /** Bake a 512×512×512 signed distance field. This is the slowest option, but also the most precise. */
            RESOLUTION_512 = 5,
            
            /** Represents the size of the [enum Resolution] enum. */
            RESOLUTION_MAX = 6,
        }
    }
    /** A baked signed distance field 3D particle collision shape affecting [GPUParticles3D] nodes.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_gpuparticlescollisionsdf3d.html  
     */
    class GPUParticlesCollisionSDF3D extends GPUParticlesCollision3D {
        set_size(size: Vector3): void
        get_size(): Vector3
        set_resolution(resolution: GPUParticlesCollisionSDF3D.Resolution): void
        get_resolution(): GPUParticlesCollisionSDF3D.Resolution
        set_texture(texture: Texture3D): void
        get_texture(): Texture3D
        set_thickness(thickness: number /*f64*/): void
        get_thickness(): number /*f64*/
        set_bake_mask(mask: number /*i64*/): void
        get_bake_mask(): number /*i64*/
        
        /** Based on [param value], enables or disables the specified layer in the [member bake_mask], given a [param layer_number] between 1 and 32. */
        set_bake_mask_value(layer_number: number /*i64*/, value: boolean): void
        
        /** Returns whether or not the specified layer of the [member bake_mask] is enabled, given a [param layer_number] between 1 and 32. */
        get_bake_mask_value(layer_number: number /*i64*/): boolean
        
        /** The collision SDF's size in 3D units. To improve SDF quality, the [member size] should be set as small as possible while covering the parts of the scene you need. */
        size: Vector3
        
        /** The bake resolution to use for the signed distance field [member texture]. The texture must be baked again for changes to the [member resolution] property to be effective. Higher resolutions have a greater performance cost and take more time to bake. Higher resolutions also result in larger baked textures, leading to increased VRAM and storage space requirements. To improve performance and reduce bake times, use the lowest resolution possible for the object you're representing the collision of. */
        resolution: number /*i64*/
        
        /** The collision shape's thickness. Unlike other particle colliders, [GPUParticlesCollisionSDF3D] is actually hollow on the inside. [member thickness] can be increased to prevent particles from tunneling through the collision shape at high speeds, or when the [GPUParticlesCollisionSDF3D] is moved. */
        thickness: number /*f64*/
        
        /** The visual layers to account for when baking the particle collision SDF. Only [MeshInstance3D]s whose [member VisualInstance3D.layers] match with this [member bake_mask] will be included in the generated particle collision SDF. By default, all objects are taken into account for the particle collision SDF baking. */
        bake_mask: number /*i64*/
        
        /** The 3D texture representing the signed distance field. */
        texture: Texture3D
    }
    class GPUParticlesCollisionSDF3DEditorPlugin extends EditorPlugin {
    }
    /** A sphere-shaped 3D particle collision shape affecting [GPUParticles3D] nodes.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_gpuparticlescollisionsphere3d.html  
     */
    class GPUParticlesCollisionSphere3D extends GPUParticlesCollision3D {
        set_radius(radius: number /*f64*/): void
        get_radius(): number /*f64*/
        
        /** The collision sphere's radius in 3D units. */
        radius: number /*f64*/
    }
    namespace Generic6DOFJoint3D {
        enum Param {
            /** The minimum difference between the pivot points' axes. */
            PARAM_LINEAR_LOWER_LIMIT = 0,
            
            /** The maximum difference between the pivot points' axes. */
            PARAM_LINEAR_UPPER_LIMIT = 1,
            
            /** A factor applied to the movement across the axes. The lower, the slower the movement. */
            PARAM_LINEAR_LIMIT_SOFTNESS = 2,
            
            /** The amount of restitution on the axes' movement. The lower, the more momentum gets lost. */
            PARAM_LINEAR_RESTITUTION = 3,
            
            /** The amount of damping that happens at the linear motion across the axes. */
            PARAM_LINEAR_DAMPING = 4,
            
            /** The velocity the linear motor will try to reach. */
            PARAM_LINEAR_MOTOR_TARGET_VELOCITY = 5,
            
            /** The maximum force the linear motor will apply while trying to reach the velocity target. */
            PARAM_LINEAR_MOTOR_FORCE_LIMIT = 6,
            PARAM_LINEAR_SPRING_STIFFNESS = 7,
            PARAM_LINEAR_SPRING_DAMPING = 8,
            PARAM_LINEAR_SPRING_EQUILIBRIUM_POINT = 9,
            
            /** The minimum rotation in negative direction to break loose and rotate around the axes. */
            PARAM_ANGULAR_LOWER_LIMIT = 10,
            
            /** The minimum rotation in positive direction to break loose and rotate around the axes. */
            PARAM_ANGULAR_UPPER_LIMIT = 11,
            
            /** The speed of all rotations across the axes. */
            PARAM_ANGULAR_LIMIT_SOFTNESS = 12,
            
            /** The amount of rotational damping across the axes. The lower, the more damping occurs. */
            PARAM_ANGULAR_DAMPING = 13,
            
            /** The amount of rotational restitution across the axes. The lower, the more restitution occurs. */
            PARAM_ANGULAR_RESTITUTION = 14,
            
            /** The maximum amount of force that can occur, when rotating around the axes. */
            PARAM_ANGULAR_FORCE_LIMIT = 15,
            
            /** When rotating across the axes, this error tolerance factor defines how much the correction gets slowed down. The lower, the slower. */
            PARAM_ANGULAR_ERP = 16,
            
            /** Target speed for the motor at the axes. */
            PARAM_ANGULAR_MOTOR_TARGET_VELOCITY = 17,
            
            /** Maximum acceleration for the motor at the axes. */
            PARAM_ANGULAR_MOTOR_FORCE_LIMIT = 18,
            PARAM_ANGULAR_SPRING_STIFFNESS = 19,
            PARAM_ANGULAR_SPRING_DAMPING = 20,
            PARAM_ANGULAR_SPRING_EQUILIBRIUM_POINT = 21,
            
            /** Represents the size of the [enum Param] enum. */
            PARAM_MAX = 22,
        }
        enum Flag {
            /** If enabled, linear motion is possible within the given limits. */
            FLAG_ENABLE_LINEAR_LIMIT = 0,
            
            /** If enabled, rotational motion is possible within the given limits. */
            FLAG_ENABLE_ANGULAR_LIMIT = 1,
            FLAG_ENABLE_LINEAR_SPRING = 3,
            FLAG_ENABLE_ANGULAR_SPRING = 2,
            
            /** If enabled, there is a rotational motor across these axes. */
            FLAG_ENABLE_MOTOR = 4,
            
            /** If enabled, there is a linear motor across these axes. */
            FLAG_ENABLE_LINEAR_MOTOR = 5,
            
            /** Represents the size of the [enum Flag] enum. */
            FLAG_MAX = 6,
        }
    }
    /** A physics joint that allows for complex movement and rotation between two 3D physics bodies.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_generic6dofjoint3d.html  
     */
    class Generic6DOFJoint3D extends Joint3D {
        set_param_x(param: Generic6DOFJoint3D.Param, value: number /*f64*/): void
        get_param_x(param: Generic6DOFJoint3D.Param): number /*f64*/
        set_param_y(param: Generic6DOFJoint3D.Param, value: number /*f64*/): void
        get_param_y(param: Generic6DOFJoint3D.Param): number /*f64*/
        set_param_z(param: Generic6DOFJoint3D.Param, value: number /*f64*/): void
        get_param_z(param: Generic6DOFJoint3D.Param): number /*f64*/
        set_flag_x(flag: Generic6DOFJoint3D.Flag, value: boolean): void
        get_flag_x(flag: Generic6DOFJoint3D.Flag): boolean
        set_flag_y(flag: Generic6DOFJoint3D.Flag, value: boolean): void
        get_flag_y(flag: Generic6DOFJoint3D.Flag): boolean
        set_flag_z(flag: Generic6DOFJoint3D.Flag, value: boolean): void
        get_flag_z(flag: Generic6DOFJoint3D.Flag): boolean
    }
    namespace GeometryInstance3D {
        enum ShadowCastingSetting {
            /** Will not cast any shadows. Use this to improve performance for small geometry that is unlikely to cast noticeable shadows (such as debris). */
            SHADOW_CASTING_SETTING_OFF = 0,
            
            /** Will cast shadows from all visible faces in the GeometryInstance3D.  
             *  Will take culling into account, so faces not being rendered will not be taken into account when shadow casting.  
             */
            SHADOW_CASTING_SETTING_ON = 1,
            
            /** Will cast shadows from all visible faces in the GeometryInstance3D.  
             *  Will not take culling into account, so all faces will be taken into account when shadow casting.  
             */
            SHADOW_CASTING_SETTING_DOUBLE_SIDED = 2,
            
            /** Will only show the shadows casted from this object.  
             *  In other words, the actual mesh will not be visible, only the shadows casted from the mesh will be.  
             */
            SHADOW_CASTING_SETTING_SHADOWS_ONLY = 3,
        }
        enum GIMode {
            /** Disabled global illumination mode. Use for dynamic objects that do not contribute to global illumination (such as characters). When using [VoxelGI] and SDFGI, the geometry will  *receive*  indirect lighting and reflections but the geometry will not be considered in GI baking. */
            GI_MODE_DISABLED = 0,
            
            /** Baked global illumination mode. Use for static objects that contribute to global illumination (such as level geometry). This GI mode is effective when using [VoxelGI], SDFGI and [LightmapGI]. */
            GI_MODE_STATIC = 1,
            
            /** Dynamic global illumination mode. Use for dynamic objects that contribute to global illumination. This GI mode is only effective when using [VoxelGI], but it has a higher performance impact than [constant GI_MODE_STATIC]. When using other GI methods, this will act the same as [constant GI_MODE_DISABLED]. When using [LightmapGI], the object will receive indirect lighting using lightmap probes instead of using the baked lightmap texture. */
            GI_MODE_DYNAMIC = 2,
        }
        enum LightmapScale {
            /** The standard texel density for lightmapping with [LightmapGI]. */
            LIGHTMAP_SCALE_1X = 0,
            
            /** Multiplies texel density by 2× for lightmapping with [LightmapGI]. To ensure consistency in texel density, use this when scaling a mesh by a factor between 1.5 and 3.0. */
            LIGHTMAP_SCALE_2X = 1,
            
            /** Multiplies texel density by 4× for lightmapping with [LightmapGI]. To ensure consistency in texel density, use this when scaling a mesh by a factor between 3.0 and 6.0. */
            LIGHTMAP_SCALE_4X = 2,
            
            /** Multiplies texel density by 8× for lightmapping with [LightmapGI]. To ensure consistency in texel density, use this when scaling a mesh by a factor greater than 6.0. */
            LIGHTMAP_SCALE_8X = 3,
            
            /** Represents the size of the [enum LightmapScale] enum. */
            LIGHTMAP_SCALE_MAX = 4,
        }
        enum VisibilityRangeFadeMode {
            /** Will not fade itself nor its visibility dependencies, hysteresis will be used instead. This is the fastest approach to manual LOD, but it can result in noticeable LOD transitions depending on how the LOD meshes are authored. See [member visibility_range_begin] and [member Node3D.visibility_parent] for more information. */
            VISIBILITY_RANGE_FADE_DISABLED = 0,
            
            /** Will fade-out itself when reaching the limits of its own visibility range. This is slower than [constant VISIBILITY_RANGE_FADE_DISABLED], but it can provide smoother transitions. The fading range is determined by [member visibility_range_begin_margin] and [member visibility_range_end_margin]. */
            VISIBILITY_RANGE_FADE_SELF = 1,
            
            /** Will fade-in its visibility dependencies (see [member Node3D.visibility_parent]) when reaching the limits of its own visibility range. This is slower than [constant VISIBILITY_RANGE_FADE_DISABLED], but it can provide smoother transitions. The fading range is determined by [member visibility_range_begin_margin] and [member visibility_range_end_margin]. */
            VISIBILITY_RANGE_FADE_DEPENDENCIES = 2,
        }
    }
    /** Base node for geometry-based visual instances.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_geometryinstance3d.html  
     */
    class GeometryInstance3D extends VisualInstance3D {
        set_material_override(material: Material): void
        get_material_override(): Material
        set_material_overlay(material: Material): void
        get_material_overlay(): Material
        set_cast_shadows_setting(shadow_casting_setting: GeometryInstance3D.ShadowCastingSetting): void
        get_cast_shadows_setting(): GeometryInstance3D.ShadowCastingSetting
        set_lod_bias(bias: number /*f64*/): void
        get_lod_bias(): number /*f64*/
        set_transparency(transparency: number /*f64*/): void
        get_transparency(): number /*f64*/
        set_visibility_range_end_margin(distance: number /*f64*/): void
        get_visibility_range_end_margin(): number /*f64*/
        set_visibility_range_end(distance: number /*f64*/): void
        get_visibility_range_end(): number /*f64*/
        set_visibility_range_begin_margin(distance: number /*f64*/): void
        get_visibility_range_begin_margin(): number /*f64*/
        set_visibility_range_begin(distance: number /*f64*/): void
        get_visibility_range_begin(): number /*f64*/
        set_visibility_range_fade_mode(mode: GeometryInstance3D.VisibilityRangeFadeMode): void
        get_visibility_range_fade_mode(): GeometryInstance3D.VisibilityRangeFadeMode
        
        /** Set the value of a shader uniform for this instance only ([url=$DOCS_URL/tutorials/shaders/shader_reference/shading_language.html#per-instance-uniforms]per-instance uniform[/url]). See also [method ShaderMaterial.set_shader_parameter] to assign a uniform on all instances using the same [ShaderMaterial].  
         *      
         *  **Note:** For a shader uniform to be assignable on a per-instance basis, it  *must*  be defined with `instance uniform ...` rather than `uniform ...` in the shader code.  
         *      
         *  **Note:** [param name] is case-sensitive and must match the name of the uniform in the code exactly (not the capitalized name in the inspector).  
         *      
         *  **Note:** Per-instance shader uniforms are currently only available in 3D, so there is no 2D equivalent of this method.  
         */
        set_instance_shader_parameter(name: StringName, value: any): void
        
        /** Get the value of a shader parameter as set on this instance. */
        get_instance_shader_parameter(name: StringName): any
        set_extra_cull_margin(margin: number /*f64*/): void
        get_extra_cull_margin(): number /*f64*/
        set_lightmap_scale(scale: GeometryInstance3D.LightmapScale): void
        get_lightmap_scale(): GeometryInstance3D.LightmapScale
        set_gi_mode(mode: GeometryInstance3D.GIMode): void
        get_gi_mode(): GeometryInstance3D.GIMode
        set_ignore_occlusion_culling(ignore_culling: boolean): void
        is_ignoring_occlusion_culling(): boolean
        set_custom_aabb(aabb: AABB): void
        get_custom_aabb(): AABB
        
        /** The material override for the whole geometry.  
         *  If a material is assigned to this property, it will be used instead of any material set in any material slot of the mesh.  
         */
        material_override: BaseMaterial3D | ShaderMaterial
        
        /** The material overlay for the whole geometry.  
         *  If a material is assigned to this property, it will be rendered on top of any other active material for all the surfaces.  
         */
        material_overlay: BaseMaterial3D | ShaderMaterial
        
        /** The transparency applied to the whole geometry (as a multiplier of the materials' existing transparency). `0.0` is fully opaque, while `1.0` is fully transparent. Values greater than `0.0` (exclusive) will force the geometry's materials to go through the transparent pipeline, which is slower to render and can exhibit rendering issues due to incorrect transparency sorting. However, unlike using a transparent material, setting [member transparency] to a value greater than `0.0` (exclusive) will  *not*  disable shadow rendering.  
         *  In spatial shaders, `1.0 - transparency` is set as the default value of the `ALPHA` built-in.  
         *      
         *  **Note:** [member transparency] is clamped between `0.0` and `1.0`, so this property cannot be used to make transparent materials more opaque than they originally are.  
         */
        transparency: number /*f64*/
        
        /** The selected shadow casting flag. See [enum ShadowCastingSetting] for possible values. */
        cast_shadow: number /*i64*/
        
        /** The extra distance added to the GeometryInstance3D's bounding box ([AABB]) to increase its cull box. */
        extra_cull_margin: number /*f64*/
        
        /** Overrides the bounding box of this node with a custom one. This can be used to avoid the expensive [AABB] recalculation that happens when a skeleton is used with a [MeshInstance3D] or to have precise control over the [MeshInstance3D]'s bounding box. To use the default AABB, set value to an [AABB] with all fields set to `0.0`. To avoid frustum culling, set [member custom_aabb] to a very large AABB that covers your entire game world such as `AABB(-10000, -10000, -10000, 20000, 20000, 20000)`. To disable all forms of culling (including occlusion culling), call [method RenderingServer.instance_set_ignore_culling] on the [GeometryInstance3D]'s [RID]. */
        custom_aabb: AABB
        
        /** Changes how quickly the mesh transitions to a lower level of detail. A value of 0 will force the mesh to its lowest level of detail, a value of 1 will use the default settings, and larger values will keep the mesh in a higher level of detail at farther distances.  
         *  Useful for testing level of detail transitions in the editor.  
         */
        lod_bias: number /*f64*/
        
        /** If `true`, disables occlusion culling for this instance. Useful for gizmos that must be rendered even when occlusion culling is in use.  
         *      
         *  **Note:** [member ignore_occlusion_culling] does not affect frustum culling (which is what happens when an object is not visible given the camera's angle). To avoid frustum culling, set [member custom_aabb] to a very large AABB that covers your entire game world such as `AABB(-10000, -10000, -10000, 20000, 20000, 20000)`.  
         */
        ignore_occlusion_culling: boolean
        
        /** The global illumination mode to use for the whole geometry. To avoid inconsistent results, use a mode that matches the purpose of the mesh during gameplay (static/dynamic).  
         *      
         *  **Note:** Lights' bake mode will also affect the global illumination rendering. See [member Light3D.light_bake_mode].  
         */
        gi_mode: number /*i64*/
        
        /** The texel density to use for lightmapping in [LightmapGI]. Greater scale values provide higher resolution in the lightmap, which can result in sharper shadows for lights that have both direct and indirect light baked. However, greater scale values will also increase the space taken by the mesh in the lightmap texture, which increases the memory, storage, and bake time requirements. When using a single mesh at different scales, consider adjusting this value to keep the lightmap texel density consistent across meshes. */
        gi_lightmap_scale: number /*i64*/
        
        /** Starting distance from which the GeometryInstance3D will be visible, taking [member visibility_range_begin_margin] into account as well. The default value of 0 is used to disable the range check. */
        visibility_range_begin: number /*f64*/
        
        /** Margin for the [member visibility_range_begin] threshold. The GeometryInstance3D will only change its visibility state when it goes over or under the [member visibility_range_begin] threshold by this amount.  
         *  If [member visibility_range_fade_mode] is [constant VISIBILITY_RANGE_FADE_DISABLED], this acts as a hysteresis distance. If [member visibility_range_fade_mode] is [constant VISIBILITY_RANGE_FADE_SELF] or [constant VISIBILITY_RANGE_FADE_DEPENDENCIES], this acts as a fade transition distance and must be set to a value greater than `0.0` for the effect to be noticeable.  
         */
        visibility_range_begin_margin: number /*f64*/
        
        /** Distance from which the GeometryInstance3D will be hidden, taking [member visibility_range_end_margin] into account as well. The default value of 0 is used to disable the range check. */
        visibility_range_end: number /*f64*/
        
        /** Margin for the [member visibility_range_end] threshold. The GeometryInstance3D will only change its visibility state when it goes over or under the [member visibility_range_end] threshold by this amount.  
         *  If [member visibility_range_fade_mode] is [constant VISIBILITY_RANGE_FADE_DISABLED], this acts as a hysteresis distance. If [member visibility_range_fade_mode] is [constant VISIBILITY_RANGE_FADE_SELF] or [constant VISIBILITY_RANGE_FADE_DEPENDENCIES], this acts as a fade transition distance and must be set to a value greater than `0.0` for the effect to be noticeable.  
         */
        visibility_range_end_margin: number /*f64*/
        
        /** Controls which instances will be faded when approaching the limits of the visibility range. See [enum VisibilityRangeFadeMode] for possible values. */
        visibility_range_fade_mode: number /*i64*/
    }
    class Gizmo3DHelper extends RefCounted {
    }
    class GodotJSEditorPlugin extends EditorPlugin {
    }
    class GodotJSREPL extends Control {
    }
    class GodotJSScript extends Script {
    }
    class GodotPhysicsDirectSpaceState2D extends PhysicsDirectSpaceState2D {
    }
    class GotoLineDialog extends ConfirmationDialog {
    }
    namespace Gradient {
        enum InterpolationMode {
            /** Linear interpolation. */
            GRADIENT_INTERPOLATE_LINEAR = 0,
            
            /** Constant interpolation, color changes abruptly at each point and stays uniform between. This might cause visible aliasing when used for a gradient texture in some cases. */
            GRADIENT_INTERPOLATE_CONSTANT = 1,
            
            /** Cubic interpolation. */
            GRADIENT_INTERPOLATE_CUBIC = 2,
        }
        enum ColorSpace {
            /** sRGB color space. */
            GRADIENT_COLOR_SPACE_SRGB = 0,
            
            /** Linear sRGB color space. */
            GRADIENT_COLOR_SPACE_LINEAR_SRGB = 1,
            
            /** [url=https://bottosson.github.io/posts/oklab/]Oklab[/url] color space. This color space provides a smooth and uniform-looking transition between colors. */
            GRADIENT_COLOR_SPACE_OKLAB = 2,
        }
    }
    /** A color transition.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_gradient.html  
     */
    class Gradient extends Resource {
        /** Adds the specified color to the gradient, with the specified offset. */
        add_point(offset: number /*f64*/, color: Color): void
        
        /** Removes the color at index [param point]. */
        remove_point(point: number /*i64*/): void
        
        /** Sets the offset for the gradient color at index [param point]. */
        set_offset(point: number /*i64*/, offset: number /*f64*/): void
        
        /** Returns the offset of the gradient color at index [param point]. */
        get_offset(point: number /*i64*/): number /*f64*/
        
        /** Reverses/mirrors the gradient.  
         *      
         *  **Note:** This method mirrors all points around the middle of the gradient, which may produce unexpected results when [member interpolation_mode] is set to [constant GRADIENT_INTERPOLATE_CONSTANT].  
         */
        reverse(): void
        
        /** Sets the color of the gradient color at index [param point]. */
        set_color(point: number /*i64*/, color: Color): void
        
        /** Returns the color of the gradient color at index [param point]. */
        get_color(point: number /*i64*/): Color
        
        /** Returns the interpolated color specified by [param offset]. */
        sample(offset: number /*f64*/): Color
        
        /** Returns the number of colors in the gradient. */
        get_point_count(): number /*i64*/
        set_offsets(offsets: PackedFloat32Array): void
        get_offsets(): PackedFloat32Array
        set_colors(colors: PackedColorArray): void
        get_colors(): PackedColorArray
        set_interpolation_mode(interpolation_mode: Gradient.InterpolationMode): void
        get_interpolation_mode(): Gradient.InterpolationMode
        set_interpolation_color_space(interpolation_color_space: Gradient.ColorSpace): void
        get_interpolation_color_space(): Gradient.ColorSpace
        
        /** The algorithm used to interpolate between points of the gradient. See [enum InterpolationMode] for available modes. */
        interpolation_mode: number /*i64*/
        
        /** The color space used to interpolate between points of the gradient. It does not affect the returned colors, which will always be in sRGB space. See [enum ColorSpace] for available modes.  
         *      
         *  **Note:** This setting has no effect when [member interpolation_mode] is set to [constant GRADIENT_INTERPOLATE_CONSTANT].  
         */
        interpolation_color_space: number /*i64*/
        
        /** Gradient's offsets returned as a [PackedFloat32Array].  
         *      
         *  **Note:** This property returns a copy, modifying the return value does not update the gradient. To update the gradient use [method set_offset] method (for updating offsets individually) or assign to this property directly (for bulk-updating all offsets at once).  
         */
        offsets: PackedFloat32Array
        
        /** Gradient's colors returned as a [PackedColorArray].  
         *      
         *  **Note:** This property returns a copy, modifying the return value does not update the gradient. To update the gradient use [method set_color] method (for updating colors individually) or assign to this property directly (for bulk-updating all colors at once).  
         */
        colors: PackedColorArray
    }
    class GradientEditorPlugin extends EditorPlugin {
    }
    /** A 1D texture that uses colors obtained from a [Gradient].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_gradienttexture1d.html  
     */
    class GradientTexture1D extends Texture2D {
        set_gradient(gradient: Gradient): void
        get_gradient(): Gradient
        set_width(width: number /*i64*/): void
        set_use_hdr(enabled: boolean): void
        is_using_hdr(): boolean
        
        /** The [Gradient] used to fill the texture. */
        gradient: Gradient
        
        /** The number of color samples that will be obtained from the [Gradient]. */
        width: number /*i64*/
        
        /** If `true`, the generated texture will support high dynamic range ([constant Image.FORMAT_RGBAF] format). This allows for glow effects to work if [member Environment.glow_enabled] is `true`. If `false`, the generated texture will use low dynamic range; overbright colors will be clamped ([constant Image.FORMAT_RGBA8] format). */
        use_hdr: boolean
    }
    namespace GradientTexture2D {
        enum Fill {
            /** The colors are linearly interpolated in a straight line. */
            FILL_LINEAR = 0,
            
            /** The colors are linearly interpolated in a circular pattern. */
            FILL_RADIAL = 1,
            
            /** The colors are linearly interpolated in a square pattern. */
            FILL_SQUARE = 2,
        }
        enum Repeat {
            /** The gradient fill is restricted to the range defined by [member fill_from] to [member fill_to] offsets. */
            REPEAT_NONE = 0,
            
            /** The texture is filled starting from [member fill_from] to [member fill_to] offsets, repeating the same pattern in both directions. */
            REPEAT = 1,
            
            /** The texture is filled starting from [member fill_from] to [member fill_to] offsets, mirroring the pattern in both directions. */
            REPEAT_MIRROR = 2,
        }
    }
    /** A 2D texture that creates a pattern with colors obtained from a [Gradient].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_gradienttexture2d.html  
     */
    class GradientTexture2D extends Texture2D {
        set_gradient(gradient: Gradient): void
        get_gradient(): Gradient
        set_width(width: number /*i64*/): void
        set_height(height: number /*i64*/): void
        set_use_hdr(enabled: boolean): void
        is_using_hdr(): boolean
        set_fill(fill: GradientTexture2D.Fill): void
        get_fill(): GradientTexture2D.Fill
        set_fill_from(fill_from: Vector2): void
        get_fill_from(): Vector2
        set_fill_to(fill_to: Vector2): void
        get_fill_to(): Vector2
        set_repeat(repeat: GradientTexture2D.Repeat): void
        get_repeat(): GradientTexture2D.Repeat
        
        /** The [Gradient] used to fill the texture. */
        gradient: Gradient
        
        /** The number of horizontal color samples that will be obtained from the [Gradient], which also represents the texture's width. */
        width: number /*i64*/
        
        /** The number of vertical color samples that will be obtained from the [Gradient], which also represents the texture's height. */
        height: number /*i64*/
        
        /** If `true`, the generated texture will support high dynamic range ([constant Image.FORMAT_RGBAF] format). This allows for glow effects to work if [member Environment.glow_enabled] is `true`. If `false`, the generated texture will use low dynamic range; overbright colors will be clamped ([constant Image.FORMAT_RGBA8] format). */
        use_hdr: boolean
        
        /** The gradient fill type, one of the [enum Fill] values. The texture is filled by interpolating colors starting from [member fill_from] to [member fill_to] offsets. */
        fill: number /*i64*/
        
        /** The initial offset used to fill the texture specified in UV coordinates. */
        fill_from: Vector2
        
        /** The final offset used to fill the texture specified in UV coordinates. */
        fill_to: Vector2
        
        /** The gradient repeat type, one of the [enum Repeat] values. The texture is filled starting from [member fill_from] to [member fill_to] offsets by default, but the gradient fill can be repeated to cover the entire texture. */
        repeat: number /*i64*/
    }
    class GradientTexture2DEditorPlugin extends EditorPlugin {
    }
    namespace GraphEdit {
        enum PanningScheme {
            /** [kbd]Mouse Wheel[/kbd] will zoom, [kbd]Ctrl + Mouse Wheel[/kbd] will move the view. */
            SCROLL_ZOOMS = 0,
            
            /** [kbd]Mouse Wheel[/kbd] will move the view, [kbd]Ctrl + Mouse Wheel[/kbd] will zoom. */
            SCROLL_PANS = 1,
        }
    }
    /** An editor for graph-like structures, using [GraphNode]s.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_graphedit.html  
     */
    class GraphEdit extends Control {
        /** Returns whether the [param mouse_position] is in the input hot zone.  
         *  By default, a hot zone is a [Rect2] positioned such that its center is at [param in_node].[method GraphNode.get_input_port_position]([param in_port]) (For output's case, call [method GraphNode.get_output_port_position] instead). The hot zone's width is twice the Theme Property `port_grab_distance_horizontal`, and its height is twice the `port_grab_distance_vertical`.  
         *  Below is a sample code to help get started:  
         *    
         */
        /* gdvirtual */ _is_in_input_hotzone(in_node: Object, in_port: number /*i64*/, mouse_position: Vector2): boolean
        
        /** Returns whether the [param mouse_position] is in the output hot zone. For more information on hot zones, see [method _is_in_input_hotzone].  
         *  Below is a sample code to help get started:  
         *    
         */
        /* gdvirtual */ _is_in_output_hotzone(in_node: Object, in_port: number /*i64*/, mouse_position: Vector2): boolean
        
        /** Virtual method which can be overridden to customize how connections are drawn. */
        /* gdvirtual */ _get_connection_line(from_position: Vector2, to_position: Vector2): PackedVector2Array
        
        /** This virtual method can be used to insert additional error detection while the user is dragging a connection over a valid port.  
         *  Return `true` if the connection is indeed valid or return `false` if the connection is impossible. If the connection is impossible, no snapping to the port and thus no connection request to that port will happen.  
         *  In this example a connection to same node is suppressed:  
         *    
         */
        /* gdvirtual */ _is_node_hover_valid(from_node: StringName, from_port: number /*i64*/, to_node: StringName, to_port: number /*i64*/): boolean
        
        /** Create a connection between the [param from_port] of the [param from_node] [GraphNode] and the [param to_port] of the [param to_node] [GraphNode]. If the connection already exists, no connection is created. */
        connect_node(from_node: StringName, from_port: number /*i64*/, to_node: StringName, to_port: number /*i64*/): GodotError
        
        /** Returns `true` if the [param from_port] of the [param from_node] [GraphNode] is connected to the [param to_port] of the [param to_node] [GraphNode]. */
        is_node_connected(from_node: StringName, from_port: number /*i64*/, to_node: StringName, to_port: number /*i64*/): boolean
        
        /** Removes the connection between the [param from_port] of the [param from_node] [GraphNode] and the [param to_port] of the [param to_node] [GraphNode]. If the connection does not exist, no connection is removed. */
        disconnect_node(from_node: StringName, from_port: number /*i64*/, to_node: StringName, to_port: number /*i64*/): void
        
        /** Sets the coloration of the connection between [param from_node]'s [param from_port] and [param to_node]'s [param to_port] with the color provided in the [theme_item activity] theme property. The color is linearly interpolated between the connection color and the activity color using [param amount] as weight. */
        set_connection_activity(from_node: StringName, from_port: number /*i64*/, to_node: StringName, to_port: number /*i64*/, amount: number /*f64*/): void
        
        /** Returns an Array containing the list of connections. A connection consists in a structure of the form `{ from_port: 0, from_node: "GraphNode name 0", to_port: 1, to_node: "GraphNode name 1" }`. */
        get_connection_list(): Array
        
        /** Removes all connections between nodes. */
        clear_connections(): void
        
        /** Ends the creation of the current connection. In other words, if you are dragging a connection you can use this method to abort the process and remove the line that followed your cursor.  
         *  This is best used together with [signal connection_drag_started] and [signal connection_drag_ended] to add custom behavior like node addition through shortcuts.  
         *      
         *  **Note:** This method suppresses any other connection request signals apart from [signal connection_drag_ended].  
         */
        force_connection_drag_end(): void
        get_scroll_offset(): Vector2
        set_scroll_offset(offset: Vector2): void
        
        /** Allows to disconnect nodes when dragging from the right port of the [GraphNode]'s slot if it has the specified type. See also [method remove_valid_right_disconnect_type]. */
        add_valid_right_disconnect_type(type: number /*i64*/): void
        
        /** Disallows to disconnect nodes when dragging from the right port of the [GraphNode]'s slot if it has the specified type. Use this to disable disconnection previously allowed with [method add_valid_right_disconnect_type]. */
        remove_valid_right_disconnect_type(type: number /*i64*/): void
        
        /** Allows to disconnect nodes when dragging from the left port of the [GraphNode]'s slot if it has the specified type. See also [method remove_valid_left_disconnect_type]. */
        add_valid_left_disconnect_type(type: number /*i64*/): void
        
        /** Disallows to disconnect nodes when dragging from the left port of the [GraphNode]'s slot if it has the specified type. Use this to disable disconnection previously allowed with [method add_valid_left_disconnect_type]. */
        remove_valid_left_disconnect_type(type: number /*i64*/): void
        
        /** Allows the connection between two different port types. The port type is defined individually for the left and the right port of each slot with the [method GraphNode.set_slot] method.  
         *  See also [method is_valid_connection_type] and [method remove_valid_connection_type].  
         */
        add_valid_connection_type(from_type: number /*i64*/, to_type: number /*i64*/): void
        
        /** Disallows the connection between two different port types previously allowed by [method add_valid_connection_type]. The port type is defined individually for the left and the right port of each slot with the [method GraphNode.set_slot] method.  
         *  See also [method is_valid_connection_type].  
         */
        remove_valid_connection_type(from_type: number /*i64*/, to_type: number /*i64*/): void
        
        /** Returns whether it's possible to make a connection between two different port types. The port type is defined individually for the left and the right port of each slot with the [method GraphNode.set_slot] method.  
         *  See also [method add_valid_connection_type] and [method remove_valid_connection_type].  
         */
        is_valid_connection_type(from_type: number /*i64*/, to_type: number /*i64*/): boolean
        
        /** Returns the points which would make up a connection between [param from_node] and [param to_node]. */
        get_connection_line(from_node: Vector2, to_node: Vector2): PackedVector2Array
        set_panning_scheme(scheme: GraphEdit.PanningScheme): void
        get_panning_scheme(): GraphEdit.PanningScheme
        set_zoom(zoom: number /*f64*/): void
        get_zoom(): number /*f64*/
        set_zoom_min(zoom_min: number /*f64*/): void
        get_zoom_min(): number /*f64*/
        set_zoom_max(zoom_max: number /*f64*/): void
        get_zoom_max(): number /*f64*/
        set_zoom_step(zoom_step: number /*f64*/): void
        get_zoom_step(): number /*f64*/
        set_show_grid(enable: boolean): void
        is_showing_grid(): boolean
        set_snapping_enabled(enable: boolean): void
        is_snapping_enabled(): boolean
        set_snapping_distance(pixels: number /*i64*/): void
        get_snapping_distance(): number /*i64*/
        set_connection_lines_curvature(curvature: number /*f64*/): void
        get_connection_lines_curvature(): number /*f64*/
        set_connection_lines_thickness(pixels: number /*f64*/): void
        get_connection_lines_thickness(): number /*f64*/
        set_connection_lines_antialiased(pixels: boolean): void
        is_connection_lines_antialiased(): boolean
        set_minimap_size(size: Vector2): void
        get_minimap_size(): Vector2
        set_minimap_opacity(opacity: number /*f64*/): void
        get_minimap_opacity(): number /*f64*/
        set_minimap_enabled(enable: boolean): void
        is_minimap_enabled(): boolean
        set_show_menu(hidden: boolean): void
        is_showing_menu(): boolean
        set_show_zoom_label(enable: boolean): void
        is_showing_zoom_label(): boolean
        set_show_grid_buttons(hidden: boolean): void
        is_showing_grid_buttons(): boolean
        set_show_zoom_buttons(hidden: boolean): void
        is_showing_zoom_buttons(): boolean
        set_show_minimap_button(hidden: boolean): void
        is_showing_minimap_button(): boolean
        set_show_arrange_button(hidden: boolean): void
        is_showing_arrange_button(): boolean
        set_right_disconnects(enable: boolean): void
        is_right_disconnects_enabled(): boolean
        
        /** Gets the [HBoxContainer] that contains the zooming and grid snap controls in the top left of the graph. You can use this method to reposition the toolbar or to add your own custom controls to it.  
         *  **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [member CanvasItem.visible] property.  
         */
        get_menu_hbox(): HBoxContainer
        
        /** Rearranges selected nodes in a layout with minimum crossings between connections and uniform horizontal and vertical gap between nodes. */
        arrange_nodes(): void
        
        /** Sets the specified [param node] as the one selected. */
        set_selected(node: Node): void
        
        /** The scroll offset. */
        scroll_offset: Vector2
        
        /** If `true`, the grid is visible. */
        show_grid: boolean
        
        /** If `true`, enables snapping. */
        snapping_enabled: boolean
        
        /** The snapping distance in pixels, also determines the grid line distance. */
        snapping_distance: number /*i64*/
        
        /** Defines the control scheme for panning with mouse wheel. */
        panning_scheme: number /*i64*/
        
        /** If `true`, enables disconnection of existing connections in the GraphEdit by dragging the right end. */
        right_disconnects: boolean
        
        /** The curvature of the lines between the nodes. 0 results in straight lines. */
        connection_lines_curvature: number /*f64*/
        
        /** The thickness of the lines between the nodes. */
        connection_lines_thickness: number /*f64*/
        
        /** If `true`, the lines between nodes will use antialiasing. */
        connection_lines_antialiased: boolean
        
        /** The current zoom value. */
        zoom: number /*f64*/
        
        /** The lower zoom limit. */
        zoom_min: number /*f64*/
        
        /** The upper zoom limit. */
        zoom_max: number /*f64*/
        
        /** The step of each zoom level. */
        zoom_step: number /*f64*/
        
        /** If `true`, the minimap is visible. */
        minimap_enabled: boolean
        
        /** The size of the minimap rectangle. The map itself is based on the size of the grid area and is scaled to fit this rectangle. */
        minimap_size: Vector2
        
        /** The opacity of the minimap rectangle. */
        minimap_opacity: number /*f64*/
        
        /** If `true`, the menu toolbar is visible. */
        show_menu: boolean
        
        /** If `true`, the label with the current zoom level is visible. The zoom level is displayed in percents. */
        show_zoom_label: boolean
        
        /** If `true`, buttons that allow to change and reset the zoom level are visible. */
        show_zoom_buttons: boolean
        
        /** If `true`, buttons that allow to configure grid and snapping options are visible. */
        show_grid_buttons: boolean
        
        /** If `true`, the button to toggle the minimap is visible. */
        show_minimap_button: boolean
        
        /** If `true`, the button to automatically arrange graph nodes is visible. */
        show_arrange_button: boolean
        
        /** Emitted to the GraphEdit when the connection between the [param from_port] of the [param from_node] [GraphNode] and the [param to_port] of the [param to_node] [GraphNode] is attempted to be created. */
        readonly connection_request: Signal // from_node: StringName, from_port: number /*i64*/, to_node: StringName, to_port: number /*i64*/ => void
        
        /** Emitted to the GraphEdit when the connection between [param from_port] of [param from_node] [GraphNode] and [param to_port] of [param to_node] [GraphNode] is attempted to be removed. */
        readonly disconnection_request: Signal // from_node: StringName, from_port: number /*i64*/, to_node: StringName, to_port: number /*i64*/ => void
        
        /** Emitted when user drags a connection from an output port into the empty space of the graph. */
        readonly connection_to_empty: Signal // from_node: StringName, from_port: number /*i64*/, release_position: Vector2 => void
        
        /** Emitted when user drags a connection from an input port into the empty space of the graph. */
        readonly connection_from_empty: Signal // to_node: StringName, to_port: number /*i64*/, release_position: Vector2 => void
        
        /** Emitted at the beginning of a connection drag. */
        readonly connection_drag_started: Signal // from_node: StringName, from_port: number /*i64*/, is_output: boolean => void
        
        /** Emitted at the end of a connection drag. */
        readonly connection_drag_ended: Signal //  => void
        
        /** Emitted when this [GraphEdit] captures a `ui_copy` action ([kbd]Ctrl + C[/kbd] by default). In general, this signal indicates that the selected [GraphElement]s should be copied. */
        readonly copy_nodes_request: Signal //  => void
        
        /** Emitted when this [GraphEdit] captures a `ui_paste` action ([kbd]Ctrl + V[/kbd] by default). In general, this signal indicates that previously copied [GraphElement]s should be pasted. */
        readonly paste_nodes_request: Signal //  => void
        
        /** Emitted when this [GraphEdit] captures a `ui_graph_duplicate` action ([kbd]Ctrl + D[/kbd] by default). In general, this signal indicates that the selected [GraphElement]s should be duplicated. */
        readonly duplicate_nodes_request: Signal //  => void
        
        /** Emitted when this [GraphEdit] captures a `ui_graph_delete` action ([kbd]Delete[/kbd] by default).  
         *  [param nodes] is an array of node names that should be removed. These usually include all selected nodes.  
         */
        readonly delete_nodes_request: Signal // nodes: Array => void
        
        /** Emitted when the given [GraphElement] node is selected. */
        readonly node_selected: Signal // node: Node => void
        
        /** Emitted when the given [GraphElement] node is deselected. */
        readonly node_deselected: Signal // node: Node => void
        
        /** Emitted when a popup is requested. Happens on right-clicking in the GraphEdit. [param position] is the position of the mouse pointer when the signal is sent. */
        readonly popup_request: Signal // position: Vector2 => void
        
        /** Emitted at the beginning of a [GraphElement]'s movement. */
        readonly begin_node_move: Signal //  => void
        
        /** Emitted at the end of a [GraphElement]'s movement. */
        readonly end_node_move: Signal //  => void
        
        /** Emitted when the scroll offset is changed by the user. It will not be emitted when changed in code. */
        readonly scroll_offset_changed: Signal // offset: Vector2 => void
    }
}
