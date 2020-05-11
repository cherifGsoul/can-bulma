import { StacheElement, type } from 'can';
import classNames from 'classnames/bind';

const COLORS = {
	white: 'is-white',
	light: 'is-light',
	dark: 'is-dark',
	black: 'is-black',
	text: 'is-text',
	primary: 'is-primary',
	link: 'is-link',
	info: 'is-info',
	success: 'is-success',
	warning: 'is-warning',
	danger: 'is-danger'
};

const SIZES = {
	small: 'is-small',
	normal: 'is-normal',
	medium: 'is-medium',
	large: 'is-large',
};

const STYLES = {
	outlined: 'is-outlined',
	inverted: 'is-inverted',
	rounded: 'is-rounded',
};

const STATES = {
	hovered: 'is-hovered',
	focused: 'is-focused',
	active: 'is-active',
	loading: 'is-loading',
};

const MODIFIERS = Object.assign({}, COLORS, SIZES, STYLES, STATES);

export default class BulmaButton extends StacheElement {
	static get seal() {
		return true;
	}

	static get props() {
		return {
			
			/**
			 * 
			 */
			el: { type: HTMLElement },

			/**
			 * 
			 */
			label: { type: String, required: true },

			/**
			 * 
			 */
			color: { type: String },

			/**
			 * 
			 */
			light: { type: type.convert(Boolean), default: false },

			/**
			 * 
			 */
			isFullwidth: { type: type.convert(Boolean), default: false },

			/**
			 * 
			 */
			aStyle: { type: String },

			/**
			 * 
			 */
			state: { type: String },

			/**
			 * 
			 */
			disabled: { type: Boolean, default: false},

			/**
			 * 
			 */
			href: { type: String },

			/**
			 * 
			 */
			get classnames() {
				const cx = classNames.bind(MODIFIERS);
				let classes = {
					button: true,
					light: this.light,
					'is-fullwidth': this.isFullwidth
				};
				Object.keys(MODIFIERS).forEach(modifier => {
					if (this.color === modifier ||
						this.size === modifier ||
						this.aStyle === modifier ||
						this.state === modifier
						) {
						classes[modifier] = true;
					}	
				});
				return cx(classes);
			}
		}
	}
	
	/**
	 * 
	 */
	connected() {
		const availableModifiers = Object.keys(MODIFIERS);
		const modifiersProps = ['aStyle', 'color', 'size', 'state'];
		modifiersProps.forEach(prop => {
			if (this[prop]) {
				let found = availableModifiers.some(modifier => modifier === this[prop]);
				if (!found) {
					throw new Error(`${this[prop]} is not a valid ${prop}`);
				}
			}
		});
	}

	/**
	 * 
	 */
	static get view() {
		return `
			{{# if (this.href) }}
				<a href="{{ this.href }}" this:to="this.el"> {{ this.label }} </a>
			{{ else }}
				<button class="{{ this.classnames }}" this:to="this.el" > {{ this.label }}</button>
			{{/ if }}
		`;
	}
}

customElements.define('can-bulma-button', BulmaButton);