import Spot from '../models/Spot';
import User from '../models/User';

class SessionController {
    async index(req, res) {
        const { tech } = req.query;

        const spots = await Spot.find({
            techs: tech,
        });
        res.json(spots);
    }

    async store(req, res) {
        const { filename } = req.file;
        const { company, techs, price } = req.body;
        const { user_id } = req.headers;

        const user = await User.findById(user_id);
        if (!user) {
            return res.status(400).json({ error: 'User does not exists' });
        }

        let spot = await Spot.findOne({ company });

        if (!spot) {
            spot = await Spot.create({
                user: user_id,
                thumbnail: filename,
                company,
                techs: techs.split(',').map(tech => tech.trim()),
                price,
            });
            return res.json(spot);
        }
        return res.json({ message: 'Spot already created' });
    }
}

export default new SessionController();
