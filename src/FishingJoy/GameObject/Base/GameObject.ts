/**
 * 游戏对象基类
 * @author suo
 */
module gameObject {
	export abstract class GameObject extends egret.DisplayObjectContainer {

		/**
		 * 缓存标识符
		 */
		public sign: GAMEOBJECT_SIGN;
		/**
		 * uid
		 */
		public uID: number = NaN;
		/**
		 * 放置哪个图层
		 */
		public layerType: LAYER;
		/**
		 * 携带参数
		 */
		public varsData: IGameObjectVars = null;
		/**
		 * 是否可以被释放
		 */
		public canDispose: boolean = false;
		/**
		 * 引用计数
		 */
		public refCount: number = 0;

		constructor() {
			super();
		}

		/**
		 * 设置数据
		 */
		public setData(sign: GAMEOBJECT_SIGN, uID: number, varsData: IGameObjectVars, layerType: LAYER = LAYER.Fish): void {
			this.sign = sign;
			this.uID = uID;
			this.varsData = varsData;
			this.layerType = layerType;
		}

		/**
		 * 加载资源
		 */
		public abstract loadAsset(assetData: IGameObjectAsset);

		/**
		 * 只初始化一次（在loadAsset之后调用）
		 */
		public abstract initOnce(initOnce: IReadOnlyData);

		/**
		 * 初始化
		 */
		public abstract initialize();

		/**
		 * 反初始化
		 */
		public abstract uninitialize();

		/**
		 * 释放
		 */
		public dispose(): void {
			this.uID = NaN;
			this.varsData = null;
			this.refCount = 0;
		}
	}
}