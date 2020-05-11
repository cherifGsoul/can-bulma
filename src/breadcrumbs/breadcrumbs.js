import { StacheElement } from "can";
import classNames from 'classnames/bind';

const MODIFIERS = {
	centered: 'is-centered',
	right: 'is-right',
	arrow: 'has-arrow-separator',
	bullet: 'has-bullet-separator',
	dot: 'has-dot-separator',
	succeeds: 'has-succeeds-separator',
	small: 'is-small',
	medium: 'is-medium',
	large: 'is-large'
};

export default class BulmaBreadcrumbs extends StacheElement {
	static get seal () {
		return true;
	}

	static get props() {
		return {

			/**
			 * 
			 */
			items: [{
				type: {
					label: { type: String, required: true},
					href: { type: String, required: true },
					active: {type: Boolean, default: false }
				}
			}],

			/**
			 * 
			 */
			alignment: {type: String},

			/**
			 * 
			 */
			separator: { type: String },

			/**
			 * 
			 */
			size: { type: String },

			/**
			 * 
			 */
			get classnames() {
				const cx = classNames.bind(MODIFIERS);
				let classes = {
					breadcrumb: true,
				};

				Object.keys(MODIFIERS).forEach(modifier => {
					if (this.alignment === modifier ||
						this.separator === modifier ||
						this.size === modifier
						) {
						classes[modifier] = true;
					}
				});
				return cx(classes);
			}
		}
	}

	activateLast() {
		const items = this.items;
		items[items.length - 1].active = true;
	}

	connected() {
		this.listenTo('items', (ev) => {
			debugger;
		});
		this.activateLast();
		
	}

	static get view() {
		return `
 			<nav class="{{ this.classnames }}" aria-label="breadcrumbs">
				<ul>
					{{# for(item of this.items )}}
						<li class="{{# if(item.active) }}is-active{{/ if }}">
							<a href="{{ item.href }}">{{ item.label }}</a>
						</li>
					{{/ for }}
		  		</ul>
			</nav>
		`
	}
}

customElements.define('can-bulma-breadcrumbs', BulmaBreadcrumbs)