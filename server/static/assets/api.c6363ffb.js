import{A as e}from"./Api.7190d43f.js";const s={redisList:e.create("/redis","get"),redisInfo:e.create("/redis/{id}/info","get"),saveRedis:e.create("/redis","post"),delRedis:e.create("/redis/{id}","delete"),scan:e.create("/redis/{id}/scan/{cursor}/{count}","get"),getStringValue:e.create("/redis/{id}/string-value","get"),saveStringValue:e.create("/redis/{id}/string-value","post"),getHashValue:e.create("/redis/{id}/hash-value","get"),getSetValue:e.create("/redis/{id}/set-value","get"),saveHashValue:e.create("/redis/{id}/hash-value","post"),del:e.create("/redis/{id}/scan/{cursor}/{count}","delete"),delKey:e.create("/redis/{id}/key","delete")};export{s as r};
