from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import DocumentoViewSet, CaixaViewSet, dashboard
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

router = DefaultRouter()
router.register(r'documentos', DocumentoViewSet)
router.register(r'caixas', CaixaViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('dashboard/', dashboard, name='dashboard'),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
] 