import React from 'react';

import { Link } from 'react-router-dom';

const classTalents = {
	druid: [
		/*
		{
			id: 'druid_ht',
			name: 'Imp. Healing touch',
			options: [
				{value: 0, label: 'None'},
				{value: 1, label: '1p (0.1s)'},
				{value: 2, label: '2p (0.2s)'},
				{value: 3, label: '3p (0.3s)'},
				{value: 4, label: '4p (0.4s)'},
				{value: 5, label: '5p (0.5s)'}
			],
			default: 5
		},*/
		{
			id: 'druid_mg',
			name: 'Moonglow',
			options: [
				{value: 0, label: 'None'},
				{value: 1, label: '1p (3%)'},
				{value: 2, label: '2p (6%)'},
				{value: 3, label: '3p (9%)'}
			],
			default: 0
		},
		{
			id: 'druid_ts',
			name: 'Tranquil Spirit',
			options: [
				{value: 0, label: 'None'},
				{value: 1, label: '1p (2%)'},
				{value: 2, label: '2p (4%)'},
				{value: 3, label: '3p (6%)'},
				{value: 4, label: '4p (8%)'},
				{value: 5, label: '5p (10%)'}
			],
			default: 0
		},
		{
			id: 'druid_ng',
			name: "Nature's grace",
			options: [
				{value: 'false', label: 'Disabled'},
				{value: 'true', label: 'Enabled'}
			],
			default: false
		},
		{
			id: 'druid_imprg',
			name: 'Imp. Regrowth',
			options: [
				{value: 0, label: 'None'},
				{value: 1, label: '1p (10%)'},
				{value: 2, label: '2p (20%)'},
				{value: 3, label: '3p (30%)'},
				{value: 4, label: '4p (40%)'},
				{value: 5, label: '5p (50%)'}
			],
			default: 0
		},
		{
			id: 'druid_idol',
			name: 'Idol of Health',
			options: [
				{value: 'false', label: 'No'},
				{value: 'true', label: 'Yes'}
			],
			default: false
		}
	],
	shaman: [
		{
			id: 'shaman_hw',
			name: 'Imp. Healing Wave',
			options: [
				{value: 0, label: 'None'},
				{value: 1, label: '1p (0.1s)'},
				{value: 2, label: '2p (0.2s)'},
				{value: 3, label: '3p (0.3s)'},
				{value: 4, label: '4p (0.4s)'},
				{value: 5, label: '5p (0.5s)'}
			],
			default: 5
		},
		{
			id: 'shaman_tf',
			name: 'Tidal focus',
			options: [
				{value: 0, label: 'None'},
				{value: 1, label: '1p (1%)'},
				{value: 2, label: '2p (2%)'},
				{value: 3, label: '3p (3%)'},
				{value: 4, label: '4p (4%)'},
				{value: 5, label: '5p (5%)'}
			],
			default: 0
		},
		{
			id: 'shaman_tm',
			name: 'Tidal mastery',
			options: [
				{value: 0, label: 'None'},
				{value: 1, label: '1p (1%)'},
				{value: 2, label: '2p (2%)'},
				{value: 3, label: '3p (3%)'},
				{value: 4, label: '4p (4%)'},
				{value: 5, label: '5p (5%)'}
			],
			default: 0
		},
		{
			id: 'shaman_tofo',
			name: 'Totemic Focus',
			options: [
				{value: 0, label: 'None'},
				{value: 1, label: '1p (5%)'},
				{value: 2, label: '2p (10%)'},
				{value: 3, label: '3p (15%)'},
				{value: 4, label: '4p (20%)'},
				{value: 5, label: '5p (25%)'}
			],
			default: 0
		},
		/*
		{
			id: 'shaman_p',
			name: 'Purification',
			options: [
				{value: 0, label: 'None'},
				{value: 1, label: '1p (2%)'},
				{value: 2, label: '2p (4%)'},
				{value: 3, label: '3p (6%)'},
				{value: 4, label: '4p (8%)'},
				{value: 5, label: '5p (10%)'}
			],
			default: 0
		}*/
	],
	priest: [
		{
			id: 'priest_df',
			name: 'Divine Fury',
			options: [
				{value: 0, label: 'None'},
				{value: 1, label: '1p (0.1s)'},
				{value: 2, label: '2p (0.2s)'},
				{value: 3, label: '3p (0.3s)'},
				{value: 4, label: '4p (0.4s)'},
				{value: 5, label: '5p (0.5s)'}
			],
			default: 5
		},
		{
			id: 'priest_ih',
			name: 'Imp. Healing',
			options: [
				{value: 0, label: 'None'},
				{value: 1, label: '1p (5%)'},
				{value: 2, label: '2p (10%)'},
				{value: 3, label: '3p (15%)'}
			],
			default: 0
		},
		/*
		{
			id: 'priest_sh',
			name: 'Spiritual healing',
			options: [
				{value: 0, label: 'None'},
				{value: 1, label: '1p (2%)'},
				{value: 2, label: '2p (4%)'},
				{value: 3, label: '3p (6%)'},
				{value: 4, label: '4p (8%)'},
				{value: 5, label: '5p (10%)'}
			],
			default: 0
		},*/
		{
			id: 'priest_ma',
			name: 'Mental agility',
			options: [
				{value: 0, label: 'None'},
				{value: 1, label: '1p (2%)'},
				{value: 2, label: '2p (4%)'},
				{value: 3, label: '3p (6%)'},
				{value: 4, label: '4p (8%)'},
				{value: 5, label: '5p (10%)'}
			],
			default: 0
		},

	]
}

class TemplateLast extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			spells: [],
			mana: 5000,
			s: 100,
			m: 0,
			crit: 5,
			activity: 95,

			//item
			label: '',
			cost: 0,
			time: 0,

			//item
			group: null,
			conf_combat_regen: 0,
			class: 'druid',
			suggestions: [],

			//cons
			cons: {
				inner: false,
				tide: false,
				pots: 0,
				runes: 0,
				flask: false,
				soup: false,
				mageblood: false,
				oil: false,
				spring: 0
			},

			//talents
			talents: {
				druid_mg: 0,
				druid_ts: 0,
				druid_ng: false,
				druid_imprg: 0,
				druid_idol: false,
				shaman_tf: 0,
				shaman_hw: 0,
				shaman_tm: 0,
				shaman_p: 0,
				shaman_tofo: 0,
				priest_sh: 0,
				priest_ih: 0,
				priest_ma: 0,
				priest_df: 0
			}
		}
		this.spell_groups = [
			{
				type: 'druid',
				label: 'Healing Touch (rank 3)',
				desc: 'HT3 spam',
				cost: 110,
				costCallback: () => {
					return this.calculateSpellManaCost('ht', 110)
				},
				time: 2,
				timeCallback: () => {
					return this.calculateSpellCastTime('ht', 2);
				}

			},
			{
				type: 'druid',
				label: 'Healing Touch (rank 4)',
				desc: 'HT4 spam',
				cost: 185,
				costCallback: () => {
					return this.calculateSpellManaCost('ht', 185)
				},
				time: 2.5,
				timeCallback: () => {
					return this.calculateSpellCastTime('ht', 2.5);
				}

			},
			{
				type: 'druid',
				label: 'Regrowth (rank 3)',
				desc: 'Regrowth Raid healing',
				cost: 280,
				costCallback: () => {
					return this.calculateSpellManaCost('rg', 280)
				},
				time: 2,
				timeCallback: () => {
					return this.calculateSpellCastTime('rg', 2);
				}

			},
			{
				type: 'druid',
				label: 'Regrowth R3 + HT3',
				desc: 'Regrowth R3 + HT3 mix (50/50)',
				cost: 280+110,
				costCallback: () => {
					return this.calculateSpellManaCost('rg', 280)+this.calculateSpellManaCost('ht', 110)
				},
				time: 4,
				timeCallback: () => {
					return this.calculateSpellCastTime('rg', 2) + this.calculateSpellCastTime('ht', 2);
				}
			},
			{
				type: 'druid',
				label: 'Tank mix (HT3 + Rejuv)',
				desc: '1x rejuv + 6x HT3',
				cost: 335 + (6 * 110),
				costCallback: () => {
					return this.calculateSpellManaCost('rj', 360)+(6 * this.calculateSpellManaCost('ht', 110))
				},
				time: 13.5,
				timeCallback: () => {
					return 1.5 + (6 * this.calculateSpellCastTime('ht', 2))
				}
			},
			{
				type: 'druid',
				label: 'Tank mix (HT4 + Rejuv)',
				desc: '1x rejuv + 5x HT4',
				cost: 335 + (5 * 170),
				costCallback: () => {
					return this.calculateSpellManaCost('rj', 360)+(5 * this.calculateSpellManaCost('ht', 170))
				},
				time: 14,
				timeCallback: () => {
					return 1.5 + (5 * this.calculateSpellCastTime('ht', 2.5))
				}
			},
			{
				type: 'druid',
				label: 'Tank HoT (HT4 + Rejuv + RG5)',
				desc: '2x rejuv + 8x HT4 + 1x Regrowth (rank 5)',
				cost: 335 + (5 * 170),
				costCallback: () => {
					return (2*this.calculateSpellManaCost('rj', 360))+(8 * this.calculateSpellManaCost('ht', 170))+this.calculateSpellManaCost('rg', 420)
				},
				time: 25,
				timeCallback: () => {
					return 3 + (8 * this.calculateSpellCastTime('ht', 2.5)) + this.calculateSpellCastTime('rg', 2)
				}
			},

			//Shaman
			//48 = 120/2.5
			{
				type: 'shaman',
				label: 'Raid heal & totem refresh',
				desc: 'Chain heal (rank 1) & wf + str totem avg',
				cost: 260+(250+275)/48,
				time: 2.5,
				costCallback: () => {
					return (this.calculateSpellManaCost('totem', 250+275)/48) + this.calculateSpellManaCost('ch', 260);
				},
				timeCallback: () => {
					return this.calculateSpellCastTime('ch', 2.5)
				}
			},
			{
				type: 'shaman',
				label: 'Chain heal (rank 1)',
				cost: 260,
				time: 2.5,
				costCallback: () => {
					return this.calculateSpellManaCost('ch', 260);
				},
				timeCallback: () => {
					return this.calculateSpellCastTime('ch', 2.5)
				}
			},
			{
				type: 'shaman',
				label: 'Chain heal (rank 2)',
				time: 2.5,
				costCallback: () => {
					return this.calculateSpellManaCost('ch', 315);
				},
				timeCallback: () => {
					return this.calculateSpellCastTime('ch', 2.5)
				}
			},
			{
				type: 'shaman',
				label: 'Chain heal (rank 3)',
				time: 2.5,
				costCallback: () => {
					return this.calculateSpellManaCost('ch', 405);
				},
				timeCallback: () => {
					return this.calculateSpellCastTime('ch', 2.5)
				}
			},
			{
				type: 'shaman',
				label: 'Healing Wave (rank 4)',
				cost: 155,
				time: 3,
				costCallback: () => {
					return this.calculateSpellManaCost('hw', 155);
				},
				timeCallback: () => {
					return this.calculateSpellCastTime('hw', 3)
				}
			},
			{
				type: 'shaman',
				label: 'Healing Wave (rank 5)',
				cost: 200,
				time: 3,
				costCallback: () => {
					return this.calculateSpellManaCost('hw', 200);
				},
				timeCallback: () => {
					return this.calculateSpellCastTime('hw', 3)
				}
			},
			{
				type: 'shaman',
				label: 'Healing Wave (rank 6)',
				cost: 265,
				time: 3,
				costCallback: () => {
					return this.calculateSpellManaCost('hw', 265);
				},
				timeCallback: () => {
					return this.calculateSpellCastTime('hw', 3)
				}
			},
			{
				type: 'shaman',
				label: 'Lesser Healing Wave (rank 3)',
				cost: 185,
				time: 1.5,
				costCallback: () => {
					return this.calculateSpellManaCost('lhw', 185);
				},
				timeCallback: () => {
					return this.calculateSpellCastTime('lhw', 1.5)
				}
			},

			//Priest
			{
				type: 'priest',
				label: 'Flash Heal (rank 3)',
				cost: 185,
				time: 1.5,
				costCallback: () => {
					return this.calculateSpellManaCost('fh', 185);
				},
				timeCallback: () => {
					return this.calculateSpellCastTime('fh', 1.5)
				}
			},
			/*
			{
				type: 'priest',
				label: 'Flash Heal (rank 5)',
				cost: 265,
				time: 1.5,
				costCallback: () => {
					return this.calculateSpellManaCost('fh', 265);
				},
				timeCallback: () => {
					return this.calculateSpellCastTime('fh', 1.5)
				}
			},*/
			{
				type: 'priest',
				label: 'Heal (rank 1)',
				cost: 155,
				time: 3,
				costCallback: () => {
					return this.calculateSpellManaCost('h', 155);
				},
				timeCallback: () => {
					return this.calculateSpellCastTime('h', 3)
				}
			},
			{
				type: 'priest',
				label: 'Heal (rank 2)',
				cost: 205,
				time: 3,
				costCallback: () => {
					return this.calculateSpellManaCost('h', 205);
				},
				timeCallback: () => {
					return this.calculateSpellCastTime('h', 3)
				}
			},
			{
				type: 'priest',
				label: 'Heal (rank 3)',
				cost: 255,
				time: 3,
				costCallback: () => {
					return this.calculateSpellManaCost('h', 255);
				},
				timeCallback: () => {
					return this.calculateSpellCastTime('h', 3)
				}
			},
			{
				type: 'priest',
				label: 'Heal (rank 4)',
				cost: 305,
				time: 3,
				costCallback: () => {
					return this.calculateSpellManaCost('h', 305);
				},
				timeCallback: () => {
					return this.calculateSpellCastTime('h', 3)
				}
			},
			{
				type: 'priest',
				label: 'Greater Heal (rank 1)',
				cost: 370,
				time: 3,
				costCallback: () => {
					return this.calculateSpellManaCost('gh', 370);
				},
				timeCallback: () => {
					return this.calculateSpellCastTime('gh', 3)
				}
			},
			/*
			{
				type: 'priest',
				label: 'Greater Heal (rank 2)',
				cost: 455,
				time: 3,
				costCallback: () => {
					return this.calculateSpellManaCost('gh', 455);
				},
				timeCallback: () => {
					return this.calculateSpellCastTime('gh', 3)
				}
			},
			{
				type: 'priest',
				label: 'Greater Heal (rank 3)',
				cost: 545,
				time: 3,
				costCallback: () => {
					return this.calculateSpellManaCost('gh', 545);
				},
				timeCallback: () => {
					return this.calculateSpellCastTime('gh', 3)
				}
			},*/
			{
				type: 'priest',
				label: 'Heal (rank 2) + Renew uptime',
				desc: '1x renew + 6 heal',
				cost: 410+(6*205),
				time: 1.5+(3*6),
				costCallback: () => {
					return this.calculateSpellManaCost('renew', 410) + (6 * this.calculateSpellManaCost('gh', 205));
				},
				timeCallback: () => {
					return 1.5 + (6 * this.calculateSpellCastTime('gh', 3))
				}
			},
		];
	}

	addItem() {
		let item = {
			label: this.state.label,
			desc: null,
			cost: this.state.cost,
			time: this.state.time,
			conf_combat_regen: 0
		}

		let spells = this.state.spells;
		spells = spells.concat([item]);

		if (this.state.label.length > 0) {
			this.setState({
				spells: spells,
				label: '',
				cost: 0,
				time: 0
			})
		}
	}

	onChangeLabel(e) {
		let suggestions = [];

		if (e.target.value.length > 1) {
			//suggestions = this.library_items.filter(item => item.label.toLowerCase().indexOf(this.state.label.toLowerCase()) >= 0);
		}

		this.setState({
			label: e.target.value,
			//suggestions: suggestions
		})
	}

	onChangeTime(e) {
		this.setState({
			time: parseFloat(e.target.value)
		})
	}

	onChangeCost(e) {
		this.setState({
			cost: parseInt(e.target.value)
		})
	}

	onChangeMana(e) {
		this.setState({
			mana: parseInt(e.target.value)
		})
	}

	onChangeCrit(e) {
		this.setState({
			crit: parseInt(e.target.value)
		})
	}

	onChangeActivity(e) {
		this.setState({
			activity: parseInt(e.target.value)
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
			class: e.target.value,
			conf_combat_regen: 0,
			spells: []
		})
	}

	onChangeInput(type, e) {

		let obj = {
			cons: {... this.state.cons },
			talents: {...this.state.talents}
		};

		switch (type) {
			case 'flask':
			case 'soup':
			case 'mageblood':
			case 'oil':
				obj.cons[type]  = e.target.checked;
				break;
			case 'inner':
			case 'tide':

				obj.cons[type]  = e.target.value == 'enabled';
				break;
			case 'pots':
			case 'runes':
			case 'spring':
				obj.cons[type] = e.target.value;
				break;
			case 'druid_ng':
			case 'druid_idol':
				obj.talents[type] = e.target.value == 'true';
				break;
			case 'druid_ts':
			case 'druid_mg':
			case 'druid_imprg':
			case 'shaman_hw':
			case 'shaman_tf':
			case 'shaman_tm':
			case 'shaman_p':
			case 'shaman_tofo':
			case 'priest_df':
			case 'priest_ih':
			case 'priest_sh':
			case 'priest_ma':
				obj.talents[type] = e.target.value;
				break;
		}

		console.log(obj)

		this.setState(obj)
	}

	onChangeCombatRegen(e) {
		this.setState({
			conf_combat_regen: e.target.value
		})
	}

	onRemoveRow(index) {

		let items = this.state.items;

		items = items.slice(0, index).concat(items.slice(index + 1));

		this.setState({
			items: items
		})
	}

	onSuggestionClick(item) {
		this.setState({
			label: item.label,
			i: item.i ? item.i : 0,
			s: item.s ? item.s : 0,
			m: item.m ? item.m : 0,
			suggestions: []
		})
	}

	onChangeGroup(e) {
		this.setState({
			group: e.target.value
		})
	}

	addGroup(e) {
		let spells = this.spell_groups.filter(spell => spell.type == this.state.group).map((spell) => {
			return spell;
		});

		this.setState({
			spells: spells,
			group: null
		})
	}

	calculateSpellManaCost(spell, cost)
	{
		let newCost = cost;

		switch (spell) {
			case 'ht':
				newCost = newCost * (1 - (0.02 * this.state.talents.druid_ts));
				newCost = newCost * (1 - (0.03 * this.state.talents.druid_mg));
				break;
			case 'rg':
			case 'rj':
				newCost = newCost * (1 - (0.03 * this.state.talents.druid_mg));
				break;
			case 'ch':
			case 'hw':
			case 'lhw':
				newCost = newCost * (1 - (0.01 * this.state.talents.shaman_tf));
				break;
			case 'totem':
				newCost = newCost * (1 - (0.05 * this.state.talents.shaman_tofo));
				console.log('totemcost', cost, newCost)
				break;
			case 'h':
			case 'gh':
				newCost = newCost * (1 - (0.05 * this.state.talents.priest_ih));
				break;
			case 'renew':
				newCost = newCost * (1 - (0.02 * this.state.talents.priest_ma));
				break;
		}


		return newCost;
	}

	calculateSpellCastTime(spell, time)
	{
		let newTime = time;

		if (this.state.class == 'druid') {

			if (this.state.talents.druid_idol) {
				switch (spell) {
					case 'ht':
						newTime = time - 0.15;
						break;
				}
			}

			if (this.state.talents.druid_ng) {
				switch (spell) {
					case 'rg':
						let crit = this.state.crit + (this.state.talents.druid_imprg * 10);
						newTime = newTime - (crit / 100 * 0.5)
						break;
					case 'ht':
						newTime = newTime - (this.state.crit / 100 * 0.5)
						break;
				}
			}
		}

		if (this.state.class == 'shaman') {
			switch (spell) {
				case 'hw':
					newTime = time - (0.1 * this.state.talents.shaman_hw);
					break;
			}
		}

		if (this.state.class == 'priest') {
			switch (spell) {
				case 'h':
				case 'gh':
					newTime = time - (0.1 * this.state.talents.priest_df);
					break;
			}
		}

		return newTime;
	}

	render() {


		let base = this.state.mana +(this.state.cons.flask ? 2000 : 0)
		let spiritCoff = (this.state.class == 'druid') ? 5 : 4;
		let spiritBase = (this.state.class == 'druid') ? 15 : 13;
		let spiritPerSec = (spiritBase + (this.state.s / spiritCoff)) / 2;
		let manaSpring = this.state.cons.spring > 0 ? (25 + (this.state.cons.spring > 1 ? 6.25 : 0)) / 5 : 0;
		let consumesMP5 = 0;

		if (this.state.cons.soup) {
			consumesMP5 += 8 / 5;
		}

		if (this.state.cons.mageblood) {
			consumesMP5 += 12 / 5;
		}

		if (this.state.cons.oil) {
			consumesMP5 += 12 / 5;
		}

		let gain = (spiritPerSec * (this.state.conf_combat_regen / 100)) + (this.state.m / 5);
		let crit = this.state.crit + (parseInt(this.state.talents.shaman_tm));


		return <div className="site-content">
			<div className="container">
				<h1>LastWise <span className="badge badge-light">Beta</span></h1>
				<p>A tool to see how long your mana will last in WoW Classic</p>
				<p><small>Wanna compare mp5/spirit on items? <Link to={"/"}>Go to Manawise Item Comparison</Link></small></p>
				<hr className="mb-4 mt-4" />
				<div className="row">
					<div className="col-md-12 mb-4">

						<div className="row">
							<div className="col-md-4">
								<h4>Character settings</h4>
								<div className="form-row">
									<div className="form-group col-6">
										<label>Class</label>
										<select value={this.state.class} className="form-control" onChange={this.onChangeClass.bind(this)}>
											<option value="druid">Druid</option>
											<option value="priest">Priest</option>
											<option value="shaman">Shaman</option>
										</select>
									</div>
									{['priest', 'druid'].indexOf(this.state.class) >= 0 &&
									<div className="form-group col-6">
										<label>Combat regen</label>
										<select className="form-control" defaultValue={this.state.conf_combat_regen} onChange={this.onChangeCombatRegen.bind(this)}>
											<option value={0}>Disabled (0%)</option>
											<option value={15}>Talents (15%)</option>
											<option value={30}>Talents + Tier 2 Set (30%)</option>
										</select>
									</div>}
								</div>
								<div className="form-row">
									<div className="form-group col-4">
										<label>Mana</label>
										<input type="number" className="form-control" min={0} value={this.state.mana} onChange={this.onChangeMana.bind(this)}/>
									</div>
									<div className="form-group col-4">
										<label>Spirit</label>
										<input type="number" className="form-control" min={0} value={this.state.s} onChange={this.onChangeS.bind(this)}/>
									</div>
									<div className="form-group col-4">
										<label>MP5</label>
										<input type="number" className="form-control" min={0} value={this.state.m} onChange={this.onChangeM.bind(this)}/>
									</div>
									<div className="form-group col-4">
										<label>Crit %</label>
										<input type="number" className="form-control" min={0} value={this.state.crit} onChange={this.onChangeCrit.bind(this)}/>
									</div>
									<div className="form-group col-4">
										<label>Activity %</label>
										<input type="number" className="form-control" min={0} max={100} value={this.state.activity} onChange={this.onChangeActivity.bind(this)}/>
									</div>
								</div>

							</div>
							<div className="col-md-4">
								<h4>Talent settings</h4>
								<div className="form-row">
									{classTalents[this.state.class].map((talent) => {
										return <div className="form-group col-6">
											<label>{talent.name}</label>
											<select className="form-control" defaultValue={this.state.talents[talent.id]} onChange={this.onChangeInput.bind(this, talent.id)}>
												{talent.options.map((option) => {
													return <option value={option.value}>{option.label}</option>;
												})}
											</select>
										</div>
									})}
								</div>
							</div>
							<div className="col-md-4">
								<h4>Raid settings</h4>
								<div className="form-row">
									<div className="form-group col-6">
										<label>Innervate</label>
										<select className="form-control" defaultValue={this.state.cons.inner ? 'enabled' : 'disabled'} onChange={this.onChangeInput.bind(this, 'inner')}>
											<option value="disabled">Disabled</option>
											<option value="enabled">Enabled</option>
										</select>
									</div>
									<div className="form-group col-6">
										<label>Mana tide totem</label>
										<select className="form-control" defaultValue={this.state.cons.tide ? 'enabled' : 'disabled'} onChange={this.onChangeInput.bind(this, 'tide')}>
											<option value="disabled">Disabled</option>
											<option value="enabled">Enabled</option>
										</select>
									</div>
									<div className="form-group col-6">
										<label>Mana spring totem</label>
										<select className="form-control" defaultValue={this.state.cons.spring} onChange={this.onChangeInput.bind(this, 'spring')}>
											<option value="0">Disabled</option>
											<option value="1">Yes</option>
											<option value="2">Yes (with talents)</option>
										</select>
									</div>
								</div>
								<h4>Consumables settings</h4>
								<div className="form-row">
									<div className="form-group col-7">
										<label>Buffs & Elixirs</label>
										<div className="form-check small">
											<input className="form-check-input" type="checkbox" value="flask" id="check_flask" defaultChecked={this.state.cons.flask} onChange={this.onChangeInput.bind(this, 'flask')} />
											<label className="form-check-label " htmlFor="check_flask">
												Flask of distilled wisdom
											</label>
										</div>
										<div className="form-check small">
											<input className="form-check-input" type="checkbox" value="cons_nightfin" id="check_soup" defaultChecked={this.state.cons.soup} onChange={this.onChangeInput.bind(this, 'soup')} />
											<label className="form-check-label " htmlFor="check_soup">
												Nightfin Soup
											</label>
										</div>
										<div className="form-check small">
											<input className="form-check-input" type="checkbox" value="cons_mageblood" id="check_mageblood" defaultChecked={this.state.cons.mageblood} onChange={this.onChangeInput.bind(this, 'mageblood')} />
											<label className="form-check-label" htmlFor="check_mageblood">
												Mageblood potion
											</label>
										</div>
										<div className="form-check small">
											<input className="form-check-input" type="checkbox" value="cons_oil" id="check_oil" defaultChecked={this.state.cons.oil} onChange={this.onChangeInput.bind(this, 'oil')} />
											<label className="form-check-label" htmlFor="check_oil">
												Brilliant mana oil
											</label>
										</div>
									</div>
									<div className="form-group col-5">
										<label>Major mana potion</label>
										<select className="form-control" defaultValue={this.state.cons.pots} onChange={this.onChangeInput.bind(this, 'pots')}>
											<option value={0}>None</option>
											<option value={1}>1</option>
											<option value={2}>2</option>
											<option value={3}>3</option>
											<option value={4}>4</option>
											<option value={5}>5</option>

										</select>
										<br />
										<label>Runes</label>
										<select className="form-control" defaultValue={this.state.cons.runes} onChange={this.onChangeInput.bind(this,'runes')}>
											<option value={0}>None</option>
											<option value={1}>1</option>
											<option value={2}>2</option>
											<option value={3}>3</option>
											<option value={4}>4</option>
											<option value={5}>5</option>
										</select>
									</div>
									<div className="form-group col-5">

									</div>
								</div>

							</div>
						</div>

						<div>
							<div className="form-row">

							</div>
						</div>
					</div>
				</div>
				<hr className="mb-5" />
				<div className="row">
					<div className="col-md-4">
						<h4>Add a compare group</h4>

						<div className="form-row">
							<div className="form-group col-6">
								<label>Spells</label>
								<select className="form-control" defaultValue={this.state.group} onChange={this.onChangeGroup.bind(this)}>
									<option value="">...</option>
									{this.state.class == 'druid' && <option value="druid">Druid (most common)</option>}
									{this.state.class == 'priest' && <option value="priest">Priest</option>}
									{this.state.class == 'shaman' && <option value="shaman">Shaman</option>}
								</select>

							</div>
							<div className="col-4">
								<label>&nbsp;</label>
								<button className="btn btn-primary btn-block" disabled={!this.state.group} onClick={this.addGroup.bind(this)}>Add group</button>
							</div>
						</div>
					</div>
					<div className="col-md-6">
						<h4>or Add custom spell</h4>
						<div>
							<div className="form-row">
								<div className="form-group col-4">
									<label>Label</label>
									<input type="text" className="form-control" value={this.state.label} onChange={this.onChangeLabel.bind(this)}/>
									{false && this.state.suggestions.map((item) => {
										return <p onClick={this.onSuggestionClick.bind(this, item)}>{item.label}</p>
									})}
								</div>
								<div className="form-group col-2">
									<label>Mana cost</label>
									<input type="number" className="form-control" min={0} value={this.state.cost} onChange={this.onChangeCost.bind(this)}/>
								</div>
								<div className="form-group col-2">
									<label>Duration</label>
									<input type="number" className="form-control" min={0} value={this.state.time} onChange={this.onChangeTime.bind(this)}/>
								</div>
								<div className="col-2">
									<label>&nbsp;</label>
									<button className="btn btn-primary btn-block" disabled={!this.state.label} onClick={this.addItem.bind(this)}>Add</button>
								</div>

							</div>
							<p><small>(Talents are not used, so add the real mana cost and cast time)</small></p>
						</div>
					</div>
					<div className="col-md-2">
						<h4>Effective stats</h4>
						<small>Mana: {base}<br />MP5: {(gain+manaSpring+consumesMP5)*5}<br />Crit: {crit}%</small>
					</div>

				</div>
				<div className="row">

				</div>
				<div className="row">
					<div className="col">

						<table className="table table-bordered">
							<tr>
								<th></th>
								<th>Mana cost</th>
								<th>Duration</th>
								<th>Mana spent per second</th>
								<th>Will last (self)</th>
								<th>Will last (self + consumables)</th>
							</tr>
							{this.state.spells.map((spell, i) => {

								let cost = spell.cost;
								let duration = spell.time;

								if (spell.costCallback) {
									cost = Math.round(spell.costCallback());
								}

								if (spell.timeCallback) {
									duration = Math.round(spell.timeCallback() * 1000) / 1000;
								}

								let spent = (cost / duration) * (this.state.activity / 100);
								let consumes = 0;

								let minimumLength = 0;

								if (this.state.cons.inner) {
									consumes += (spiritPerSec * 20) * (5 - this.state.conf_combat_regen / 100);
								}

								if (this.state.cons.tide) {
									consumes += (290 * 4);
								}


								let oom = false;
								let lastFull = Math.floor((base + consumes) / (spent - (gain + manaSpring + consumesMP5)));
								if (this.state.cons.pots > 0 || this.state.cons.runes > 0) {

									let pot = 1800;
									let rune = 1200;

									if (this.state.cons.pots > 0) {
										consumes += pot;
										minimumLength = 30 + (120 * (this.state.cons.pots - 1));
									}

									if (this.state.cons.runes > 0) {
										consumes += rune;
										let runeLength = 30 + (120 * (this.state.cons.runes - 1));
										if (runeLength > minimumLength) {
											minimumLength = runeLength;
										}
									}

									lastFull = Math.floor((base + consumes) / (spent - (gain + manaSpring + consumesMP5)));

									let maxConsume = this.state.cons.pots > this.state.cons.runes ? this.state.cons.pots : this.state.cons.runes;
									if (maxConsume > 1) {
										let tempConsume = 0;
										let tempLength = 30 + 120;
										for (let i = 1; i <= maxConsume; i++) {

											lastFull = Math.floor((base + consumes + tempConsume) / (spent - (gain + manaSpring + consumesMP5)));

											oom = minimumLength > lastFull;
											
											if (tempLength > lastFull) {
												break;
											}

											if (i < this.state.cons.pots) {
												tempConsume += pot;
											}

											if (i < this.state.cons.runes) {
												tempConsume += rune;
											}

											tempLength += 120;

										}
									}

								}

								let diff = 0;
								if (spell.timeCallback) {
									diff = Math.round((duration - spell.time) * 1000)/1000;
								}

								return <tr>
									<td>{spell.label}<br />{spell.desc && <small>({spell.desc})</small>}</td>
									<td>{cost}</td>
									<td>{duration} sec {diff !== 0 && <small><br />({diff} sec)</small>}</td>
									<td>{spent.toFixed(1)}</td>
									<td>{Math.floor(base / (spent - gain))} sec</td>
									<td>{lastFull} sec {oom && <span className={"badge badge-danger"}>OOM!</span>}</td>
								</tr>
							})}
						</table>
						<p>
							<small class="font-italic text-sm">* <span className={"badge badge-danger"}>OOM!</span> means that you will run out of mana before you can use the set amount of pots/runes you put in. Example: You run out of mana at 2min, but the next mana pot you can use is at 2min 30s.</small>
						</p>
						<p>
							<small class="font-italic">** Pots and runes are added 30 seconds into the fight, then 2min 30s, then 4min 30s and so on. The idea is that you dont spend enough mana in first 30 sec to benefit the full effect. Innervate and mana tide totem is added once per fight. </small>
						</p>
						<p>
							<small className="font-italic">*** Whats with the odd durations on predefined spells? When there are HoT's involved the duration is extended to not override the current HoT with a new cast. Example: 12 sec rejuvenation + four HT4 will result in a total cast time of 11.5 seconds. Its better to cast another HT4 before reapplying. Making it total duration of 14s.</small>
						</p>
					</div>
				</div>

				<div className="mt-5">
					Author: Teeribull @ Mirage Raceway EU
				</div>
			</div>

		</div>
	}
};

export default TemplateLast;