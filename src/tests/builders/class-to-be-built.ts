export class ClassToBeBuilt {
  public id?: number;
  public name?: string;
  public isActive?: boolean = false;
  public createdAt?: Date = new Date();
  public tags?: string[] = [];
  public counts?: Map<string, number> = new Map();
  public metadata?: Record<string, unknown> = {};
  public status?: 'pending' | 'active' | 'inactive' = 'pending';
  public priority?: number | null = null;
  public items?: Set<string> = new Set();
  public ratio?: number = 1.0;
  public buffer?: Uint8Array;
  public regexp?: RegExp;
  public tuple?: [string, number];
}
