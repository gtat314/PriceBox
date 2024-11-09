/**
 * 
 * @employSchema
 * @eventListeners
 * @sensibleDefaults
 * @svgSrc
 * @documentation
 * @documentationApi
 * @iconUniformNames
 * @minimizeProperties
 * @objectifyEventListeners
 * @parentElementSelector
 * @distinctEventListeners
 * @propertiesElemUnderscore
 * @propertify
 * @propertyNamingConventions
 * @methodNamingConventions
 */




/**
 * 
 * @param {Object}                  schema
 * @param {CSSRule|HTMLElement}     schema.parent
 * @param {HTMLSourceElement}       schema.title
 * @param {String}                  [schema.form]
 * @param {Number}                  [schema.tabindex]
 * @param {SVGElement}              [schema.iconDefault]
 * @param {SVGElement}              [schema.iconLoading]
 * @param {SVGElement}              [schema.iconSuccess]
 * @param {Boolean}                 [schema.autocomplete]
 * @param {Boolean}                 [schema.autofocus]
 * @param {Boolean}                 [schema.spellcheck]
 * @param {Boolean}                 [schema.enabledecimals]
 * @param {Boolean}                 [schema.selectable]
 * @param {Function}                [schema.onInput]
 * @param {Function}                [schema.onInputDelayed]
 * @param {Function}                [schema.onFocusout]
 * @param {Number}                  [schema.inputDelay=1000]
 * @param {Object[]}                [schema.eventListeners]
 * @param {'input'|'inputDelayed'}  schema.eventListeners[].type
 * @param {Function}                schema.eventListeners[].listener
 * @param {Number}                  [schema.eventListeners[].delay=1000]
 */
function PriceBox( schema ) {

    /**
     * @property
     * @private
     */
    this._schema = schema;

    /**
     * @property
     * @private
     */
    this._enabledecimals = true;

    /**
     * @property
     * @private
     */
    this._selectable = true;

    /**
     * @property
     * @private
     */
    this._parentElem = null;

    /**
     * @property
     * @private
     */
    this._inputElem = null;

    /**
     * @property
     * @private
     */
    this._sampElem = null;

    /**
     * @property
     * @private
     */
    this._iconElem = null;

    /**
     * @property
     * @private
     */
    this._onInputCallback = null;

    /**
     * @property
     * @private
     */
    this._onInputDelayedCallback = null;

    /**
     * 
     * @property
     * @private
     */
    this._onFocusoutCallback = null;

    /**
     * @property
     * @private
     */
    this._inputDelay = null;

    /**
     * @property
     * @private
     */
    this._inputDelayTimer = null;

    /**
     * @property
     * @private
     */
    this._iconDefaultSrc = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M17.7 20.5c-3.5 0-5.6-2.4-6.4-5.5H18l.3-2H11v-2h7.8l.3-2h-7.8c.8-3.1 2.9-5.6 6.2-5.6 1.1 0 2.4.2 3.8.6L22 .8C20.1.3 18.4 0 16.8 0c-6 0-9.6 4.2-10.6 9H4l-.3 2h2.2v2H3.3L3 15h3.1c1 4.8 4.7 9 11.1 9 1.5 0 3-.3 4.5-.8l-.9-3.3c-1 .4-2 .6-3 .6z'/></svg>";

    /**
     * @property
     * @private
     */
    this._iconLoadingSrc = "<svg class='animateRotation' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='m4.26 18.32-1.42 1.42a11.94 11.94 0 0 1 0-15.48l1.42 1.42a9.96 9.96 0 0 0 0 12.64zM22 12c0 2.4-.85 4.6-2.26 6.32l1.42 1.42a11.94 11.94 0 0 0 0-15.48l-1.42 1.42A9.96 9.96 0 0 1 22 12zM5.68 4.26a9.95 9.95 0 0 1 12.64 0l1.42-1.42a11.94 11.94 0 0 0-15.48 0l1.42 1.42zm12.64 15.48a9.95 9.95 0 0 1-12.64 0l-1.42 1.42a11.94 11.94 0 0 0 15.48 0l-1.42-1.42z'/></svg>";

    /**
     * @property
     * @private
     */
    this._iconSuccessSrc = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M20.29 2 9 13.57 3.71 8.56 0 12.27 9 21 24 5.71z'/></svg>";




    var autocomplete;
    var autofocus;
    var spellcheck;

    if ( this._schema.hasOwnProperty( 'enabledecimals' ) ) {

        this._enabledecimals = this._schema.enabledecimals;

    }

    if ( this._schema.hasOwnProperty( 'autocomplete' ) ) {

        autocomplete = this._schema.autocomplete;

    }

    if ( this._schema.hasOwnProperty( 'autofocus' ) ) {

        autofocus = this._schema.autofocus;

    }

    if ( this._schema.hasOwnProperty( 'spellcheck' ) ) {

        spellcheck = this._schema.spellcheck;

    }

    if ( this._schema.hasOwnProperty( 'iconDefault' ) ) {

        this._iconDefaultSrc = this._schema.iconDefault;

    }

    if ( this._schema.hasOwnProperty( 'iconLoading' ) ) {

        this._iconLoadingSrc = this._schema.iconLoading;

    }

    if ( this._schema.hasOwnProperty( 'iconSuccess' ) ) {

        this._iconSuccessSrc = this._schema.iconSuccess;

    }

    if ( this._schema.hasOwnProperty( 'selectable' ) ) {

        this._selectable = this._schema.selectable;

    }

    if ( typeof this._schema.parent === 'object' ) {

        this._parentElem = this._schema.parent;

    } else if ( typeof this._schema.parent === 'string' ) {

        this._parentElem = document.querySelector( this._schema.parent );

    }

    var fragment = document.createDocumentFragment();

    this.titleElem = document.createElement( 'DIV' );
    this.titleElem.classList.add( 'upperRow' );
    fragment.appendChild( this.titleElem );

    this.titleSpanElem = document.createElement( 'SPAN' );
    this.titleSpanElem.classList.add( 'title' );
    this.titleSpanElem.innerHTML = this._schema.title;
    this.titleElem.appendChild( this.titleSpanElem );

    this._sampElem = document.createElement( 'SAMP' );
    this._sampElem.classList.add( 'errorElem' );
    this.titleElem.appendChild( this._sampElem );

    this.bodyElem = document.createElement( 'DIV' );
    this.bodyElem.classList.add( 'body' );
    fragment.appendChild( this.bodyElem );

    this._inputElem = document.createElement( 'INPUT' );
    this._inputElem.classList.add( 'inputElem' );
    this._inputElem.setAttribute( 'type', 'text' );
    this._inputElem.spellcheck = spellcheck;
    this.bodyElem.appendChild( this._inputElem );

    if ( autocomplete === true ) {

        this._inputElem.autocomplete = 'on';

    }

    if ( this._schema.hasOwnProperty( 'form' ) === true ) {

        this._inputElem.setAttribute( 'form', this._schema.form );

    }

    if ( this._schema.hasOwnProperty( 'tabindex' ) === true ) {

        this._inputElem.setAttribute( 'tabindex', this._schema.tabindex );

    }

    if ( this._schema.hasOwnProperty( 'eventListeners' ) ) {

        for ( var i = 0 ; i < this._schema.eventListeners.length ; i++ ) {

            if ( this._schema.eventListeners[ i ].type === 'input' ) {

                this._onInputCallback = this._schema.eventListeners[ i ].listener;

            }

            if ( this._schema.eventListeners[ i ].type === 'inputDelayed' ) {

                this._onInputDelayedCallback = this._schema.eventListeners[ i ].listener;

                if ( this._schema.eventListeners[ i ].hasOwnProperty( 'delay' ) ) {

                    this._inputDelay = this._schema.eventListeners[ i ].delay;

                } else {

                    this._inputDelay = 1000;

                }

            }

        }

    }

    if ( this._schema.hasOwnProperty( 'onInput' ) ) {

        this._onInputCallback = this._schema.onInput;

    }

    if ( this._schema.hasOwnProperty( 'onInputDelayed' ) ) {

        this._onInputDelayedCallback = this._schema.onInputDelayed;

        if ( this._schema.hasOwnProperty( 'inputDelay' ) ) {

            this._inputDelay = this._schema.inputDelay;

        } else {

            this._inputDelay = 1000;

        }

    }

    if ( this._schema.hasOwnProperty( 'onFocusout' ) ) {

        this._onFocusoutCallback = schema.onFocusout;

    }

    this._iconElem = document.createElement( 'SPAN' );
    this._iconElem.classList.add( 'icon' );
    this._iconElem.innerHTML = this._iconDefaultSrc;
    this.bodyElem.appendChild( this._iconElem );

    this._parentElem.addEventListener( 'click', this._evt_click_parentElem.bind( this ) );
    this._inputElem.addEventListener( 'keydown', this._evt_keydown_inputElem.bind( this ) );
    this._inputElem.addEventListener( 'input', this._evt_input_inputElem.bind( this ) );
    this._inputElem.addEventListener( 'change', this._evt_change_inputElem.bind( this ) );
    this._inputElem.addEventListener( 'focusout', this._evt_focusout_inputElem.bind( this ) );

    this._parentElem.appendChild( fragment );

    if ( autofocus === true ) {

        this._inputElem.setAttribute( 'autofocus', true );
        this._inputElem.focus();

    }

};

/**
 * 
 * @param {String} formId
 */
PriceBox.prototype.setForm = function( formId ) {

    this._inputElem.setAttribute( 'form', formId );

};

/**
 * 
 */
PriceBox.prototype.clearForm = function() {

    this._inputElem.removeAttribute( 'form' );

};

/**
 * 
 * @returns {null|Number}
 */
PriceBox.prototype.getValue = function() {

    if ( this._inputElem.value === '' ) {

        return null;

    } else {

        return parseFloat( this._inputElem.value ).toLocaleString("en",{useGrouping: false,minimumFractionDigits: 2,maximumFractionDigits: 2});

    }

};

/**
 * 
 * @param {String|Number|null} value 
 * @returns {Boolean}
 */
PriceBox.prototype.setValue = function( value ) {

    // if ( value === null ) {

    //     return false;

    // }

    this._inputElem.value = value;

    this.clearError();

    if ( this._enabledecimals === true && value !== null ) {

        this._inputElem.value = parseFloat( this._inputElem.value )
            .toLocaleString("en",{useGrouping: false,minimumFractionDigits: 2,maximumFractionDigits: 2});

    }

    if ( this._onInputCallback !== null ) {

        this._onInputCallback( this._inputElem.value );

    }

    return true;

};

/**
 * 
 */
PriceBox.prototype.loading = function() {

    this._iconElem.innerHTML = this._iconLoadingSrc;

};

/**
 * 
 */
PriceBox.prototype.removeLoading = function() {

    this._iconElem.innerHTML = this._iconDefaultSrc;

};

/**
 * 
 */
PriceBox.prototype.success = function() {

    this._parentElem.classList.add( 'success' );
    this._iconElem.innerHTML = this._iconSuccessSrc;

    setTimeout( function(){

        this._parentElem.classList.remove( 'success' );
        this._iconElem.innerHTML = this._iconDefaultSrc;

    }.bind( this ), 3000 );

};

/**
 * 
 * @param {String} errorMessage 
 */
PriceBox.prototype.setError = function( errorMessage ) {

    this._parentElem.classList.add( 'error' );
    this._sampElem.textContent = errorMessage;

};

/**
 * 
 */
PriceBox.prototype.clearError = function() {

    this._parentElem.classList.remove( 'error' );
    this._sampElem.textContent = '';

};

/**
 * 
 * @param {String} title 
 */
PriceBox.prototype.setTitle = function( title ) {

    this.titleSpanElem.innerHTML = title;

    this._schema.title = title;

};




/**
 * 
 * @private
 */
PriceBox.prototype._evt_change_inputElem = function() {

    if ( this._inputElem.value === '' ) {

        return false;

    }

    if ( isNaN( this._inputElem.value ) === true ) {

        this._inputElem.value = '';
        return false;

    }

    if ( this._enabledecimals === true ) {

        this._inputElem.value = parseFloat( this._inputElem.value )
            .toLocaleString("en",{useGrouping: false,minimumFractionDigits: 2,maximumFractionDigits: 2});

    }

};

PriceBox.prototype._evt_focusout_inputElem = function( evt ) {

    if ( this._onFocusoutCallback !== null ) {

        this._onFocusoutCallback( evt );

    }

};

/**
 * 
 * @private
 * @param {Event} evt 
 */
PriceBox.prototype._evt_input_inputElem = function( evt ) {

    if ( this._inputElem.value !== '' ) {

        this.clearError();

    }

    if ( this._onInputCallback !== null ) {

        this._onInputCallback( this._inputElem.value );

    }

    if ( this._onInputDelayedCallback !== null ) {

        clearTimeout( this._inputDelayTimer );

        this._inputDelayTimer = setTimeout( function(){

            this._onInputDelayedCallback( evt );

        }.bind( this ), this._inputDelay );

    }

};

/**
 * 
 * @private
 * @param {Event} evt 
 */
PriceBox.prototype._evt_keydown_inputElem = function( evt ) {

    if ( evt.key === ',' ) {

        evt.preventDefault();

        this._inputElem.value = this._inputElem.value + '.';

        if ( this._onInputCallback !== null ) {

            this._onInputCallback( this._inputElem.value );

        }

    }

};

/**
 * 
 * @private
 */
PriceBox.prototype._evt_click_parentElem = function() {

    if ( this._selectable === true ) {

        this._inputElem.select();

    }

};