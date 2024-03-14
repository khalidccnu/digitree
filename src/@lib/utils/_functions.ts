export class $$ {
  public static isEmpty(value: any): boolean {
    return (
      value === null ||
      value === undefined ||
      value === '' ||
      (Array.isArray(value) && value.length === 0) ||
      value === 'null' ||
      value === 'undefined'
    );
  }

  public static isNotEmpty(value: any): boolean {
    return value !== null && value !== undefined && value !== '' && value.length !== 0;
  }

  public static isValidObject(value: any): boolean {
    return typeof value === 'object' && value !== null;
  }

  public static toSafeObject(value: any): any {
    if (this.isNotEmpty(value)) return value;
    return {};
  }

  public static toCleanObject(obj: { [key: string]: any }): any {
    if (this.isValidObject(obj)) {
      Object.keys(obj).forEach((key) => {
        if (this.isEmpty(obj[key])) delete obj[key];
      });
    }

    return this.toSafeObject(obj);
  }

  public static queryNormalizer = (options: any) => {
    const pureOption = this.toCleanObject(options);

    if (pureOption?.query) return options.query;

    const queries: any = [];
    Object.entries(pureOption).map(([key, value]: any) => {
      const valueType = Array.isArray(value) ? 'array' : typeof value;

      if (key === 'sort') {
        return queries.push(`${key}=${JSON.stringify(value)}`);
      } else if (valueType === 'array' || key === 'filter') {
        return value.map((option: any) => queries.push(`${key}=${option}`));
      } else if (valueType === 'object') {
        return queries.push(`${key}=${JSON.stringify(value)}`);
      } else {
        return queries.push(`${key}=${value}`);
      }
    });

    return queries.join('&');
  };
}
