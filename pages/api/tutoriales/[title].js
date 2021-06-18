import {tutorialesArray} from './index';

export default (req, res) => {
    const {title} = req.query;
    const result = tutorialesArray.filter((item, index) => {
        return item.title.toLowerCase().indexOf(title.toLowerCase()) > -1;
    });
    res.status(200).json(result);
}