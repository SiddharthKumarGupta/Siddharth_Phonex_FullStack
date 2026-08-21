from django.http import JsonResponse


def home(request):
    return JsonResponse({
        "message": "Siddharth Phonex API is running",
        "status": "success"
    })