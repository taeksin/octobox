import { Op } from 'sequelize';

const OPERATORS = {
  lt: Op.lt,
  gt: Op.gt,
  lte: Op.lte,
  gte: Op.gte,
  in: Op.in,
  between: Op.between,
  like: Op.like
};

class SequelizeQueryBuilder {
  static buildFilterQuery(validKeyword: any, query: Record<string, any>) {
    const result: Record<string, any> = {};

    if(!query) {
      return null;
    }
    Object.entries(query).forEach(([key, value]) => {
      // Remove not supported key
      if (!value || !validKeyword.includes(key)) {
        return;
      }

      if (typeof value === 'object' && !Array.isArray(value)) {
        result[key] = {};


        Object.entries(value).forEach(([op, val]) => {
          let temp = val as any;
          if(op == 'like') {
            temp = temp.replace(/^%/, ""); // 시작이 %면, 제거
            temp = temp.replace(/%$/, ""); // 마지막이 %면, 제거
            temp = decodeURI(temp);
            temp = "%" + val + "%";
          }
          result[key][Op[op as keyof typeof Op]] = temp;
        });

        return;
      }

      result[key] = value;
    });

    return result;
  }

  static buildSortQuery(query?: string) {
    if (!query) {
      return null;
    }

    const [field, order] = query.startsWith('-') ? [query.slice(1), 'DESC'] : [query, 'ASC'];
    return [[field, order]];
  }
}

export default SequelizeQueryBuilder;
