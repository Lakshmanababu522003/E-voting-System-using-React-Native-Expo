const Candidate = require('../models/candidate.model');
const User =require('../models/user.model');

const router = require('express').Router();

router.post('/voter', async (req, res) => {
    const _id = req.body._id;
    const studentId = req.body.studentId;

    // try {
    //     const candidate = await Candidate.findById(_id);
    //     if (candidate.studentsId.includes(studentId)) {
    //         return res.status(400).json({ error: 'Student ID already exists in the array' });
    //     }
    //     candidate.studentsId.push(studentId);

    //     // Save the updated candidate document
    //     const updatedCandidate = await candidate.save();


    //     User.findByIdAndUpdate(studentId,{vote:true}).then((response)=>{
    //         const __data={
    //             updatedCandidate:updatedCandidate,
    //             response:response
    //         }
    //         return res.status(200).json({ message: 'You have voted successfully' ,data:__data});
    //     }).catch((err)=>{
    //         return res.status(400).json({ message: 'You have already voted' });
    //     })


    try {
    const existingVote = await Candidate.findOne({ "studentsId": studentId });
    if (existingVote) {
        return res.status(400).json({ error: 'You have already voted' });
    }
    const candidate = await Candidate.findById(_id);
    if (!candidate) {
        return res.status(404).json({ error: 'Candidate not found' });
    }
    if (candidate.studentsId.includes(studentId)) {
        return res.status(400).json({ error: 'Student ID already exists in the array' });
    }
    candidate.studentsId.push(studentId);
    const updatedCandidate = await candidate.save();
    await User.findByIdAndUpdate(studentId, { vote: true });
    const responseData = {
        updatedCandidate: updatedCandidate,
        message: 'You have voted successfully'
    };
    return res.status(200).json({ data: responseData });
} catch (err) {
    return res.status(500).json({ error: 'Internal Server Error' });
}


        // res.json(updatedCandidate);
    // catch (error) {
    //     res.status(400).json({ error: error.message });
    // }
});
router.post('/voterData', async (req, res) => {
    const _id = req.body._id;
    try {
        const candidate = await Candidate.findById(_id);
        let promises = candidate.studentsId.map(i => User.findById(i));

        Promise.all(promises)
            .then(data => {
                res.json(data);
            })
            .catch(error => {
                res.status(400).json({ error: error.message });
            });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
