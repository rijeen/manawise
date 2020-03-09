import React from 'react';

class TemplateIndex extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			items: [],
			i: 0,
			s: 0,
			m: 0,
			label: '',
			inner: false,
			conf_combat_regen: 0,
			class: 'druid'
		}
	}

	addItem() {
		let item = {
			label: this.state.label,
			i: this.state.i,
			s: this.state.s,
			m: this.state.m,
			conf_combat_regen: 0
		}

		let items = this.state.items;
		items = items.concat([item]);

		if (this.state.label.length > 0) {
			this.setState({
				items: items,
				s: 0,
				i: 0,
				m: 0,
				label: ''
			})
		}
	}

	onChangeLabel(e) {
		this.setState({
			label: e.target.value
		})
	}

	onChangeI(e) {
		this.setState({
			i: e.target.value
		})
	}

	onChangeS(e) {
		this.setState({
			s: e.target.value
		})
	}


	onChangeM(e) {
		this.setState({
			m: e.target.value
		})
	}

	onChangeClass(e) {
		this.setState({
			class: e.target.value
		})
	}

	onChangeInner(e) {
		this.setState({
			inner: !this.state.inner
		})
	}

	onChangeCombatRegen(e) {
		this.setState({
			conf_combat_regen: e.target.value
		})
	}

	render() {

		let minutes = [60, 120, 180, 240, 300, 450, 600];

		return <div className="site-content">
			<div className="container">
				<h1>ManaWise</h1>
				<div className="row">
					<div className="col-6">
						<h4>Settings</h4>
						<form>
							<div className="form-row">

								<div className="form-group col">
									<label>Class</label>
									<select value={this.state.class} className="form-control" onChange={this.onChangeClass.bind(this)}>
										<option value="druid">Druid/Shaman/Paladin</option>
										<option value="priest">Priest/Mage</option>
									</select>
								</div>

								<div className="form-group col-3">
									<label>Combat regen %</label>
									<input type="text" className="form-control" value={this.state.conf_combat_regen} onChange={this.onChangeCombatRegen.bind(this)}/>
								</div>

								<div className="form-group col-3">
									<label>Enable innervate</label>
									<input type="checkbox" className="form-control" value="inner" checked={this.state.inner} onChange={this.onChangeInner.bind(this)}/>
								</div>
							</div>
						</form>
					</div>
				</div>
				<div className="row">
					<div className="col-8">
						<h4>Add item/enchant/stats</h4>
						<form>
						<div className="form-row">
							<div className="form-group col-4">
								<label>Label</label>
								<input type="text" className="form-control" value={this.state.label} onChange={this.onChangeLabel.bind(this)}/>
							</div>

							<div className="form-group col-2">
								<label>Int</label>
								<input type="number" className="form-control" value={this.state.i} onChange={this.onChangeI.bind(this)}/>
							</div>

							<div className="form-group col-2">
								<label>Spirit</label>
								<input type="number" className="form-control" value={this.state.s} onChange={this.onChangeS.bind(this)}/>
							</div>

							<div className="form-group col-2">
								<label>Mana per five</label>
								<input type="number" className="form-control" value={this.state.m} onChange={this.onChangeM.bind(this)}/>
							</div>

							<div className="col-2">
								<label>&nbsp;</label>
								<button className="btn btn-primary btn-block" disabled={!this.state.label} onClick={this.addItem.bind(this)}>Add</button>
							</div>

						</div>
						</form>
					</div>
				</div>
				<div className="row">
					<div className="col">
				<table className="table table-bordered">
					<tr>
						<th>Label</th>
						<th>Initial mana</th>
						{this.state.inner &&
						<th>Innervate</th>}
						{minutes.map((mins) => {
							return <th>{mins / 60} min</th>
						})}
					</tr>
					{this.state.items.map((item) => {

						let init = item.i * 15;
						let spiritCoff = (this.state.class == 'druid') ? 5 : 4;
						let itemPerFive = ((item.s / spiritCoff) * 2.5);
						let spi = itemPerFive * (this.state.conf_combat_regen / 100);

						let persec = (parseFloat(item.m) + spi) / 5;
						let innervate = 0;
						if (this.state.inner) {
							innervate = (((itemPerFive / 5) * (5 - this.state.conf_combat_regen / 100))) * 20
						}

						return <tr>
							<td>{item.label}</td>
							<td>{init}</td>
							{this.state.inner &&
							<td>{innervate.toFixed(1)}</td>}
							{minutes.map((mins, i) => {

								let inner = 0;
								if (i > 0) {
									inner = innervate;
								}
								if (i >= 6) {
									inner *= 2;
								}

								let num = init + inner + (mins * persec);
								return <td>{((num / mins) * 5).toFixed(1)} ({num.toFixed(1)})</td>
							})}
						</tr>
					})}
				</table>


					</div>
				</div>

			</div>
		</div>
	}
};

export default TemplateIndex;