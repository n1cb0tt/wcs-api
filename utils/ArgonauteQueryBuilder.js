class ArgonauteQueryBuilder {
    static select(query) {
        let where = '';
        // orderBy = '',
        // limit = '',
        // offset = '';
        if (query.names !== undefined) {
            query.names.split(',').forEach((name) => {
                where += where.length > 0 ? ' OR ' : ' WHERE (';
                where += `name LIKE '%${name}%'`;
            });
            where += ')';
        }

                return { where };
    }
}

module.exports = ArgonauteQueryBuilder;