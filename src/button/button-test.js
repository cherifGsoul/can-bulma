import {
	expect
} from 'chai';
import 'steal-mocha';
import BulmaButton from './button';

describe('Button', () => {

	beforeEach(() => {
		this.btn = new BulmaButton().initialize({
			label: 'Click me'
		});
	});

	
	describe('Defaults', () => {
		it('knows the button element', () => {
			this.btn.render();
			expect(this.btn.el).to.be.instanceOf(HTMLElement);
		});
		it('the wrapped element has .button class by default', () => {
			expect(this.btn.classnames).to.equal('button');
		});

		it('has a label', () => {
			expect(this.btn.label).to.equal('Click me');
		});

		it('renders <a> tag when href proprety is set', () => {
			this.btn.href = '/hello';
			this.btn.render();
			expect(this.btn.el.tagName.toLocaleLowerCase()).to.equal('a');
		});
	});

	describe('Colors', () => {
		[
			'white',
			'dark',
			'black',
			'text',
			'primary',
			'link',
			'info',
			'success',
			'warning',
			'danger',
		].forEach(color => {
			it(`can be ${color}`, () => {
				this.btn.color = color;
				expect(this.btn.classnames).to.equal(`button is-${color}`);
	
			});
		});

		it('throws an error if a color is not available', () => {
			this.btn.color = 'gray';
			const connect = () => {
				this.btn.connect();
			};
			expect(connect).to.throw('gray is not a valid color');
		});
	});

	describe('Sizes', () => {
		[
			'small',
			'normal',
			'medium',
			'large'
		].forEach(size => {
			it(`can be ${size}`, () => {
				this.btn.size = size;
				expect(this.btn.classnames).to.equal(`button is-${size}`);
			});
		});
	});

	describe('Displays', () => {
		it('is not fullwidth by default', () => {
			expect(this.btn.isFullwidth).to.equal(false);
			expect(this.btn.classnames).to.equal('button');
		});

		it('can be fullwidth', () => {
			this.btn.isFullwidth = true;
			expect(this.btn.classnames).to.equal('button is-fullwidth');
		});
	});

	describe('Styles', () => {
		[
			'outlined',
			'inverted',
			'rounded',
			
		].forEach(style => {
			it(`can be ${style}`, () => {
				this.btn.aStyle = style;
				expect(this.btn.classnames).to.equal(`button is-${style}`);
			});
		});
	});

	describe('States', () => {
		[
			'hovered',
			'focused',
			'active',
			'loading',
			
		].forEach(state => {
			it(`can be ${state}`, () => {
				this.btn.state = state;
				expect(this.btn.classnames).to.equal(`button is-${state}`);
			});
		});
	});
});