import axios from 'axios';
export default function handler(req, res) {
    if (req.method === 'POST') {
        axios.post(`${process.env.API_URL}/Website/SendEnq.php`, { updatekey: process.env.MYKEY, FullName: req.body.FullName, Email: req.body.Email, Mobile: req.body.Mobile, Qualification: req.body.Qualification, assignedTo: req.body.assignedTo})
            .then((rest) =>
                res.status(200).json(rest.data));
    } else {
        // Handle any other HTTP method
    }
}