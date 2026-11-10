export const coordinates = Object.fromEntries(`
lhr 51.47 -0.454;london 51.507 -0.128;lgw 51.148 -0.19;stn 51.885 0.235;oxford 51.752 -1.258;windsor 51.484 -0.604;bicester 51.891 -1.154;bourton 51.884 -1.757;stone 51.179 -1.826;bath 51.381 -2.36;bristol 51.455 -2.588;southampton 50.897 -1.412;portsmouth 50.819 -1.088;brighton 50.823 -0.137;dover 51.128 1.322;folk 51.095 1.12;canterbury 51.28 1.08;
cambridge 52.205 0.12;stratford 52.192 -1.708;bham 52.486 -1.89;man 53.48 -2.242;manap 53.353 -2.275;liv 53.408 -2.991;york 53.96 -1.081;leeds 53.8 -1.549;windermere 54.379 -2.907;newcastle 54.978 -1.617;durham 54.776 -1.575;carlisle 54.892 -2.933;
edi 55.953 -3.189;ediap 55.95 -3.373;glasgow 55.864 -4.252;stirling 56.116 -3.936;standrews 56.34 -2.796;pitlochry 56.704 -3.729;inverness 57.478 -4.224;lochness 57.302 -4.425;glencoe 56.669 -5.102;fort 56.819 -5.106;skye 57.413 -6.195;cairnryan 54.983 -5.031;
cardiff 51.482 -3.179;swansea 51.621 -3.944;conwy 53.282 -3.829;holyhead 53.312 -4.63;
belfast 54.597 -5.93;bfs 54.657 -6.216;giants 55.24 -6.512;derry 54.997 -7.309;
dublin 53.35 -6.26;dubap 53.426 -6.249;galway 53.27 -9.056;cliffs 52.972 -9.426;sligo 54.27 -8.469;limerick 52.664 -8.624;killarney 52.059 -9.504;blarney 51.929 -8.571;cork 51.898 -8.475;cashel 52.52 -7.89;kilkenny 52.654 -7.252;kildare 53.155 -6.917;
calais 50.968 1.867;coquelles 50.94 1.807;lille 50.63 3.057;paris 48.857 2.352;bruges 51.209 3.225;brussels 50.847 4.352;ghent 51.054 3.721;amsterdam 52.368 4.904;rotterdam 51.924 4.478
`.trim().split(';').map(row=>{
  const [id,lat,lon]=row.trim().split(/\s+/);
  return [id,[+lon,+lat]];
}));
