# Damage UI

## Updating the data

Updating is a manual process. Too much effort to figure out how to do it
properly.

1. Saving the damage into Firestore
   1. Remove the firestore auth rules and run `deploy:rules`
   1. Run the modified `damage` python job
   1. Add firestore auth rules back and run `deploy:rules`
1. Updating `data.json`
   1. Use the [Firestore API] (need to paginate to see the latest damage)
   1. Copy the newest data into `data.json`
   1. Remove the `createTime` and `updateTime`
1. Deploying
   1. Commit and push to `master`!

[firestore api]: https://firestore.googleapis.com/v1/projects/damage-c0b99/databases/(default)/documents/purchases?pageSize=300
