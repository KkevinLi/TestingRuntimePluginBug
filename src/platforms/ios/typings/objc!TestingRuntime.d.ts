
declare class BrokenClass extends NSObject {

	static Test(): string;

	static alloc(): BrokenClass; // inherited from NSObject

	static new(): BrokenClass; // inherited from NSObject
}

declare var TestingRuntimeVersionNumber: number;

declare var TestingRuntimeVersionString: interop.Reference<number>;
