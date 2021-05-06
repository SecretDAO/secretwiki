export default ({
  Vue,
  options,
  router,
  siteData
}) => {
  const { routes } = router.options;

  routes.unshift({
    name: 'google-site-verification',
    path: '/no.html',
  });
}
