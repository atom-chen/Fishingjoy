﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------
module table {
	/**
	 * FILE: 道具表.xlsx SHEET: 道具
	 */
	export class TablePropConfig {
		id: number;
		/**
		 * 使用时间（秒）
		 */
		useTime: number;
		/**
		 * 冷却时间（秒）
		 */
		coolTime: number;
		/**
		 * 炮台要求
		 */
		needBatteryId: number;

		GetType(): string { return 'table.TablePropConfig'; }
	}
}
