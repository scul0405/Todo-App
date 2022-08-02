class ApiFeatures {
    constructor(query, queryString){
        this.query = query;
        this.queryString = queryString
    }
    filter(){
        const queryObj = {...this.queryString}
        const excludedFields = ['limit', 'sort', 'page', 'fields']
        excludedFields.forEach(el => delete queryObj[el])
        let queryStr = JSON.stringify(queryObj);
        // convert gte -> $gte
        queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`)
        this.query.find(JSON.parse(queryStr));
        return this
    }
    sort(){
        if (this.queryString.sort){
            const sortBy = this.queryString.sort.split(',').join(' ');
            this.query = this.query.sort(sortBy);
        }
        else {
            this.query.sort('-createAt')
        }
        return this
    }
    pagination() {
        const page = this.query.page || 1;
        const limit = this.query.limit ||9;
        const skip = (page-1)*limit;
        this.query = this.query.skip(skip).limit(limit);

        return this
    }
}

module.exports = ApiFeatures